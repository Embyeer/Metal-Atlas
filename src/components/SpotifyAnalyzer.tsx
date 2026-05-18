import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GENRES } from '../data/genres';
import { bands as BANDS } from '../data/bands';
import { Music, Disc, Users, Percent, Flame, ExternalLink, LogOut, Loader2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface SpotifyStats {
  score: number;
  totalArtistsAnalyzed: number;
  totalMatches: number;
  topGenres: { name: string; count: number }[];
  topBands: { name: string; imageUrl: string; matchType?: string }[];
  topAlbums: { title: string; artist: string; coverUrl?: string; year?: number }[];
  eras: string[];
  diversityScore: number;
}

export const SpotifyAnalyzer: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<SpotifyStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuthStatus();
    
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) return;
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        setIsAuthenticated(true);
        analyzeSpotifyData();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (isAuthenticated === true) {
      analyzeSpotifyData();
    }
  }, [isAuthenticated]);

  const checkAuthStatus = async () => {
    try {
      const res = await fetch('/api/auth/status');
      const data = await res.json();
      setIsAuthenticated(data.isAuthenticated);
    } catch (e) {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async () => {
    setError(null);
    try {
      console.log('Initiating Spotify login...');
      const res = await fetch('/api/auth/spotify/url');
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Unknown server error' }));
        console.error('Spotify Auth URL Fetch Failed:', res.status, errorData);
        setError(errorData.error || `Server returned ${res.status}`);
        return;
      }
      
      const data = await res.json();
      console.log('Opening Spotify Auth window:', data.url);
      window.open(data.url, 'spotify_login', 'width=600,height=800');
    } catch (e) {
      console.error('Network error during Spotify login:', e);
      setError('Unable to reach the authentication server. If you are on Netlify, ensure your backend is running or configured as a function.');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setStats(null);
    } catch (e) {
      setError('Logout failed');
    }
  };

  const analyzeSpotifyData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [artistsRes, tracksRes] = await Promise.all([
        fetch('/api/spotify/top-artists'),
        fetch('/api/spotify/top-tracks')
      ]);

      if (!artistsRes.ok || !tracksRes.ok) throw new Error('Failed to fetch Spotify data');

      const artistsData = await artistsRes.json();
      const tracksData = await tracksRes.json();

      const topArtists = artistsData.items || [];
      const topTracks = tracksData.items || [];

      // 1. Calculate Score
      let weightedArtistScore = 0;
      let weightedTrackScore = 0;
      let trackMetalCount = 0;
      let atlasMatchPoints = 0;
      let totalGeneticMatches = 0;
      
      const erasFound = new Set<string>();
      const genresMatched = new Set<string>();

      const getGenreWeight = (genres: string[]) => {
        if (!genres || genres.length === 0) return 1.0;
        let maxWeight = 1.0;
        genres.forEach(g => {
          const lowerG = g.toLowerCase();
          // Core/Extreme (1.5)
          if (['death metal', 'black metal', 'thrash metal', 'grindcore', 'doom metal', 'speed metal', 'extreme metal'].some(k => lowerG.includes(k))) {
            maxWeight = Math.max(maxWeight, 1.5);
          }
          // Traditional (1.3)
          else if (['heavy metal', 'nwobhm', 'classic metal', 'speed metal'].some(k => lowerG.includes(k))) {
            maxWeight = Math.max(maxWeight, 1.3);
          }
          // Technical/Epic (1.2)
          else if (['progressive metal', 'power metal', 'symphonic metal', 'neoclassical metal', 'gothic metal'].some(k => lowerG.includes(k))) {
            maxWeight = Math.max(maxWeight, 1.2);
          }
        });
        return maxWeight;
      };

      const userGenresMap: Record<string, number> = {};
      const foundBands: any[] = [];
      const foundAlbumsData: any[] = [];

      // Analysis 1: Top Artists
      topArtists.forEach((artist: any) => {
        if (!artist) return;
        let artistIsMetal = false;
        const genres = artist.genres || [];
        const weight = getGenreWeight(genres);
        
        if (genres.some((g: string) => g.toLowerCase().includes('metal'))) {
          artistIsMetal = true;
          totalGeneticMatches++;
          genres.forEach((g: string) => {
            if (g.toLowerCase().includes('metal')) {
              userGenresMap[g] = (userGenresMap[g] || 0) + 1;
              genresMatched.add(g.toLowerCase());
            }
          });
        }

        const localBand = BANDS.find(b => b.name.toLowerCase() === artist.name.toLowerCase());
        if (localBand) {
          if (!artistIsMetal) totalGeneticMatches++;
          artistIsMetal = true;
          atlasMatchPoints += 1.5; // High weight for matches in our curated DB
          
          // Era detection
          const formedYear = parseInt(localBand.formed);
          if (formedYear < 1980) erasFound.add('Roots');
          else if (formedYear < 1990) erasFound.add('Golden Age');
          else if (formedYear < 2000) erasFound.add('Expansion');
          else erasFound.add('Modern');

          if (!foundBands.some(b => b.name === localBand.name)) {
            foundBands.push({
              name: localBand.name,
              imageUrl: artist.images[0]?.url || localBand.imageUrl,
              matchType: 'Encyclopedia Match'
            });
          }
        }

        if (artistIsMetal) {
          weightedArtistScore += weight;
        }
      });

      // Analysis 2: Top Tracks & Albums
      topTracks.forEach((track: any) => {
        if (!track) return;
        const artistName = track.artists[0]?.name;
        const albumName = track.album.name;
        
        const artistInTop = topArtists.find((a: any) => a.name === artistName);
        const weight = artistInTop ? getGenreWeight(artistInTop.genres) : 1.0;

        const isMetalArtist = topArtists.some((a: any) => 
          a.name === artistName && (
            (a.genres || []).some((g: string) => g.toLowerCase().includes('metal')) ||
            BANDS.some(b => b.name.toLowerCase() === artistName.toLowerCase())
          )
        );

        if (isMetalArtist) {
          weightedTrackScore += weight;
          trackMetalCount++;
        }

        const localBandMatch = BANDS.find(b => b.name.toLowerCase() === artistName.toLowerCase());
        if (localBandMatch) {
          const localAlbumMatch = localBandMatch.albums.find(a => 
            albumName.toLowerCase().includes(a.title.toLowerCase()) || 
            a.title.toLowerCase().includes(albumName.toLowerCase())
          );

          if (localAlbumMatch && !foundAlbumsData.some(a => a.title === localAlbumMatch.title)) {
            foundAlbumsData.push({
              title: localAlbumMatch.title,
              artist: localBandMatch.name,
              coverUrl: track.album.images[0]?.url,
              year: localAlbumMatch.year
            });
          }
        }
      });

      // Final Score Calculation
      const artistPotential = (topArtists.length || 1) * 1.5; // Max possible if all core metal
      const trackPotential = (topTracks.length || 1) * 1.5;
      
      const artistBaseScore = (weightedArtistScore / artistPotential) * 100;
      const trackBaseScore = (weightedTrackScore / trackPotential) * 100;
      
      // Bonuses
      const eraBonus = (erasFound.size / 4) * 20; // Up to +20 for hearing all eras
      const depthBonus = Math.min((atlasMatchPoints / 15) * 20, 20); // Up to +20 for encyclopedia depth
      const varietyBonus = Math.min((genresMatched.size / 10) * 10, 10); // Up to +10 for subgenre variety

      const rawScore = (artistBaseScore * 0.3) + (trackBaseScore * 0.3) + eraBonus + depthBonus + varietyBonus;
      const score = Math.min(Math.round(rawScore), 100);

      // Match Genres from Evolutionary Map
      const mapGenreMatches: Record<string, number> = {};
      topArtists.forEach((artist: any) => {
        if (!artist || !artist.genres) return;
        artist.genres.forEach((spotifyGenre: string) => {
          GENRES.forEach(localGenre => {
            if (spotifyGenre.toLowerCase().includes(localGenre.name.toLowerCase()) || 
                localGenre.name.toLowerCase().includes(spotifyGenre.toLowerCase())) {
              mapGenreMatches[localGenre.name] = (mapGenreMatches[localGenre.name] || 0) + 1;
            }
          });
        });
      });

      // Sort and limit results
      const topGenres = Object.entries(mapGenreMatches)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setStats({
        score,
        totalArtistsAnalyzed: topArtists.length,
        totalMatches: totalGeneticMatches,
        topGenres,
        topBands: foundBands.slice(0, 5),
        topAlbums: foundAlbumsData.slice(0, 5),
        eras: Array.from(erasFound),
        diversityScore: Math.round((genresMatched.size / 20) * 100)
      });
    } catch (e: any) {
      setError(e.message);
      if (e.message.includes('401')) setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-orange-500" size={48} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-orange-500/20">
            <Flame className="text-orange-500" size={40} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic-black">How Metal Are You?</h2>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Connect your Spotify account to analyze your listening habits. We'll cross-reference your top artists and tracks with the Metal Atlas database to calculate your brutality score.
          </p>
          <button
            onClick={handleLogin}
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#1DB954] hover:bg-[#1ed760] text-black font-black uppercase tracking-widest text-xs rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#1DB954]/20"
          >
            Connect with Spotify
            <ExternalLink size={16} />
          </button>
          <p className="mt-6 text-[10px] text-zinc-600 uppercase tracking-widest">
            We only read your top listening data. We never save your personal info.
          </p>
        </motion.div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
        <Loader2 className="animate-spin text-orange-500" size={48} />
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold">Scanning DNA Habits...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
        <div className="text-red-500 uppercase font-black text-xl">ERROR_SYSTEM_FAILURE</div>
        <p className="text-zinc-400 text-sm">{error}</p>
        <button onClick={handleLogin} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase font-bold hover:bg-white/10 transition-all">Retry Link</button>
      </div>
    );
  }

  if (!stats) return null;

  const chartData = [
    { name: 'Metal', value: stats.score },
    { name: 'Other', value: 100 - stats.score }
  ];

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic-black leading-none">
                {stats.score}% <span className="text-orange-500">Metal</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold">
                {stats.score > 80 ? 'Brutality Overload' : 
                 stats.score > 50 ? 'Steel in the Veins' :
                 stats.score > 20 ? 'Casual Headbanger' : 'Poser Alert'}
              </p>
              <div className="h-4 w-[1px] bg-white/10" />
              <p className="text-orange-500/60 uppercase tracking-[0.2em] text-[10px] font-bold">
                {stats.totalMatches} Bio-Markers Detected
              </p>
            </div>
            {stats.eras.length > 0 && (
              <div className="flex gap-2 mt-4">
                {stats.eras.map(era => (
                  <span key={era} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] uppercase font-bold text-zinc-500 tracking-widest">
                    Era: {era}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold text-zinc-500 hover:text-white hover:bg-white/10 transition-all"
          >
            <LogOut size={12} /> Disconnect
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-1 bg-zinc-900/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50" />
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <Percent size={14} /> Power Meter
            </h3>
            <div className="h-80 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill="#f97316" />
                    <Cell fill="#18181b" />
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-5xl font-black text-white italic-black">{stats.score}%</span>
                <span className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold mb-1">TRVE_VAL</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-500/40" 
                      style={{ width: `${stats.diversityScore}%` }}
                    />
                  </div>
                  <span className="text-[6px] uppercase tracking-[0.2em] text-zinc-600 font-bold">Diversity</span>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {stats.topGenres.map((genre, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider group-hover:text-white transition-colors">{genre.name}</span>
                  <div className="flex-grow mx-4 h-[1px] bg-white/5" />
                  <span className="text-xs text-orange-500 font-mono">x{genre.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Bands */}
          <div className="lg:col-span-1 bg-zinc-900/50 border border-white/5 rounded-3xl p-8">
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <Users size={14} /> Atlas Cohorts
            </h3>
            <div className="space-y-6">
              {stats.topBands.map((band, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-orange-500 transition-colors flex-shrink-0">
                    <img src={band.imageUrl} alt={band.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="text-xs font-black uppercase tracking-wider group-hover:text-orange-500 transition-colors truncate">{band.name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      <div className="text-[9px] text-zinc-500 uppercase tracking-widest truncate">{band.matchType || 'Verified Artist'}</div>
                    </div>
                  </div>
                  <div className="text-zinc-700 text-sm font-black italic-black">#{i+1}</div>
                </motion.div>
              ))}
              {stats.topBands.length === 0 && (
                <div className="py-12 text-center text-zinc-600 text-xs uppercase tracking-widest italic font-bold border border-dashed border-white/5 rounded-xl">No Match Found in Atlas</div>
              )}
            </div>
          </div>

          {/* Top Albums */}
          <div className="lg:col-span-1 bg-zinc-900/50 border border-white/5 rounded-3xl p-8">
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <Disc size={14} /> Relic Collection
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {stats.topAlbums.map((album, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-orange-500/30 transition-all group hover:bg-white/[0.07]"
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-orange-500/50 transition-colors">
                    <img src={album.coverUrl} alt={album.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <div className="text-[10px] font-black uppercase truncate text-zinc-200 mb-0.5">{album.title}</div>
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest truncate font-bold">{album.artist}</div>
                    {album.year && <div className="text-[8px] text-orange-500/50 font-mono mt-1 tracking-tighter">RELEASE_YEAR: {album.year}</div>}
                  </div>
                </motion.div>
              ))}
              {stats.topAlbums.length === 0 && (
                <div className="py-12 text-center text-zinc-600 text-xs uppercase tracking-widest italic font-bold border border-dashed border-white/5 rounded-xl">No Albums Identified</div>
              )}
            </div>
          </div>
        </div>

        {/* Global Footer in Page */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between text-[8px] text-zinc-600 uppercase tracking-[0.5em] font-bold">
          <span>Data_Sync_Complete @ {new Date().toLocaleTimeString()}</span>
          <span>Atlas_Archive_V.4.2</span>
        </div>
      </div>
    </div>
  );
};
