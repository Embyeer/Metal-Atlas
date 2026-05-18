import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

// In-memory token storage (for simplicity in this demo, use a proper session/DB in prod)
// We'll use encrypted cookies or just return the token to the client if the user is okay with it.
// For the AI Studio environment, we'll proxy requests to Spotify.

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const APP_URL = (process.env.APP_URL || `http://localhost:${PORT}`).replace(/\/$/, '');
const REDIRECT_URI = `${APP_URL}/api/auth/callback`;

console.log('--- Spotify Config ---');
console.log('APP_URL:', APP_URL);
console.log('REDIRECT_URI:', REDIRECT_URI);
console.log('CLIENT_ID EXISTS:', !!SPOTIFY_CLIENT_ID);
console.log('-----------------------');

app.get('/api/auth/spotify/url', (req, res) => {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    return res.status(500).json({ 
      error: 'Spotify credentials not configured. Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in the settings menu.' 
    });
  }

  const scope = 'user-top-read user-read-private user-read-email';
  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: scope,
    show_dialog: 'true'
  });

  res.json({ url: `https://accounts.spotify.com/authorize?${params.toString()}` });
});

app.get('/api/auth/callback', async (req, res) => {
  const code = req.query.code as string;
  const error = req.query.error as string;
  
  if (error) {
    console.error('Spotify Auth Error:', error);
    return res.status(400).send(`Authentication error: ${error}`);
  }

  if (!code) {
    console.warn('No code provided in callback');
    return res.status(400).send('No code provided');
  }

  console.log('Received code, exchanging for token...');

  try {
    const authHeader = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }), 
      {
        headers: {
          'Authorization': `Basic ${authHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const { access_token, refresh_token, expires_in } = response.data;

    // Set cookies with SameSite=None; Secure for iframe compatibility
    res.cookie('spotify_access_token', access_token, {
      maxAge: expires_in * 1000,
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    });

    res.send(`
      <html>
        <body>
          <script>
            if (window.opener) {
              window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS' }, '*');
              window.close();
            } else {
              window.location.href = '/';
            }
          </script>
          <p>Authentication successful. This window should close automatically.</p>
        </body>
      </html>
    `);
  } catch (error: any) {
    console.error('Error exchanging code for token:', error.response?.data || error.message);
    res.status(500).send('Authentication failed');
  }
});

app.get('/api/spotify/top-artists', async (req, res) => {
  const token = req.cookies.spotify_access_token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'Failed to fetch' });
  }
});

app.get('/api/spotify/top-tracks', async (req, res) => {
  const token = req.cookies.spotify_access_token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'Failed to fetch' });
  }
});

app.get('/api/auth/status', (req, res) => {
  const token = req.cookies.spotify_access_token;
  res.json({ isAuthenticated: !!token });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('spotify_access_token', {
    secure: true,
    sameSite: 'none'
  });
  res.json({ success: true });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
