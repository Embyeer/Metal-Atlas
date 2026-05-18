import { Music, Zap, BookOpen, Layers } from 'lucide-react';

export interface Song {
  title: string;
  artist: string;
  albumCover?: string;
}

export interface Genre {
  id: string;
  name: string;
  description: string;
  history: string;
  bands: string[];
  songs: Song[];
  scales: string[];
  influences: string[]; // IDs of other genres
  color: string;
}

export const GENRES: Genre[] = [
  {
    id: 'heavy-metal',
    name: 'Heavy Metal',
    description: 'The roots of metal, characterized by thick, massive guitar riffs, amplified distortion, and powerful melodic vocals.',
    history: 'Emerged in the late 60s in the UK and USA. Rooted in blues-rock and psychedelic rock, bands like Black Sabbath redefined the sound using the tritone interval ("the devil\'s interval") and extreme volume. In the 80s, the NWOBHM (New Wave of British Heavy Metal) wave brought a faster and more technical approach.',
    bands: ['Black Sabbath', 'Iron Maiden', 'Judas Priest', 'Saxon', 'Deep Purple'],
    songs: [
      { 
        title: 'Paranoid', 
        artist: 'Black Sabbath',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg'
      },
      { 
        title: 'The Number of the Beast', 
        artist: 'Iron Maiden',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/3/32/IronMaiden_NumberOfBeast.jpg'
      },
      { 
        title: 'Breaking the Law', 
        artist: 'Judas Priest',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/7/78/Breaking_The_Law.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'
      }
    ],
    scales: ['Minor Pentatonic', 'Aeolian Mode (Natural Minor)'],
    influences: [],
    color: '#ef4444'
  },
  {
    id: 'thrash-metal',
    name: 'Thrash Metal',
    description: 'Extreme speed, aggression, and technical complexity defined by percussive "palm-muted" riffs.',
    history: 'Developed in the early 80s as a reaction to the glam metal trend. It fused the technical precision of NWOBHM with the aggression and speed of hardcore punk. "The Big Four" (Metallica, Megadeth, Slayer, Anthrax) set genre standards in the Bay Area of California.',
    bands: ['Metallica', 'Megadeth', 'Slayer', 'Anthrax', 'Testament', 'Kreator'],
    songs: [
      { 
        title: 'Master of Puppets', 
        artist: 'Metallica',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg'
      },
      { 
        title: 'Raining Blood', 
        artist: 'Slayer',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Reign_in_blood.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'
      },
      { 
        title: 'Holy Wars... The Punishment Due', 
        artist: 'Megadeth',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Megadeth-RustInPeace.jpg'
      }
    ],
    scales: ['Locrian Mode', 'Phrygian Dominant', 'Chromatic'],
    influences: ['heavy-metal', 'speed-metal'],
    color: '#f97316'
  },
  {
    id: 'death-metal',
    name: 'Death Metal',
    description: 'Guttural "growl" vocals, extremely down-tuned guitars, and rhythmic structures dominated by blast-beats.',
    history: 'Evolved from thrash metal in the mid-80s. Pioneered by bands like Death (from Florida) and Possessed, the genre explored themes of mortality and much more complex and brutal musical structures than its predecessors.',
    bands: ['Death', 'Cannibal Corpse', 'Morbid Angel', 'Gojira', 'Deicide', 'Obituary'],
    songs: [
      { 
        title: 'Pull the Plug', 
        artist: 'Death',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/1/14/Leprosy_Album.jpg'
      },
      { 
        title: 'Hammer Smashed Face', 
        artist: 'Cannibal Corpse',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Hammer_smashed_face_album_coverart.jpg'
      },
      { 
        title: 'Flying Whales', 
        artist: 'Gojira',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/f/f6/From_Mars_to_Sirius.jpg'
      }
    ],
    scales: ['Locrian Mode', 'Diminished Scale', 'Minor Pentatonic'],
    influences: ['thrash-metal', 'speed-metal'],
    color: '#7c3aed'
  },
  {
    id: 'black-metal',
    name: 'Black Metal',
    description: 'Cold and nihilistic atmosphere, high-pitched vocals, tremolo picking, and an often lo-fi mystical aesthetic.',
    history: 'Appeared in the 80s ("first wave") with bands like Venom and Celtic Frost. The second Norwegian wave of the 90s defined the modern sound through minimalist production, anti-religious themes, and the use of "corpse paint" makeup.',
    bands: ['Mayhem', 'Burzum', 'Darkthrone', 'Emperor', 'Immortal', 'Enslaved'],
    songs: [
      { 
        title: 'Freezing Moon', 
        artist: 'Mayhem',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Mayhem_demysteriisdomsathanas.jpg'
      },
      { 
        title: 'I Am the Black Wizards', 
        artist: 'Emperor',
        albumCover: 'https://i.scdn.co/image/ab67616d0000b273ac385294e5205f4e46f9f070'
      },
      { 
        title: 'Transilvanian Hunger', 
        artist: 'Darkthrone',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Darkthrone_-_Transilvanian_Hunger.jpg'
      }
    ],
    scales: ['Minor Scales', 'Phrygian Dominant', 'Tritone usage'],
    influences: ['heavy-metal', 'thrash-metal', 'speed-metal'],
    color: '#000000'
  },
  {
    id: 'power-metal',
    name: 'Power Metal',
    description: 'Epic anthems, speed, high operatic vocals, and fantastic or mythological lyrical themes.',
    history: 'Crystallized in the 80s in Germany and Scandinavia. Emphasizes melody, instrumental virtuosity, and a "larger than life" atmosphere, influenced by classical music and fantasy epics.',
    bands: ['Helloween', 'Blind Guardian', 'Sabaton', 'DragonForce', 'Stratovarius', 'Nightwish'],
    songs: [
      { 
        title: 'Keeper of the Seven Keys', 
        artist: 'Helloween',
        albumCover: 'https://th.bing.com/th/id/R.ff3e256f8ed34ca48ea65854abd61bc5?rik=JkkGrrkb3Qqvfg&pid=ImgRaw&r=0'
      },
      { 
        title: 'Through the Fire and Flames', 
        artist: 'DragonForce',
        albumCover: 'https://www.metal-archives.com/images/1/1/0/8/1108335.jpg?1514'
      },
      { 
        title: 'Nightfall', 
        artist: 'Blind Guardian',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/9/99/NFoME.jpg'
      }
    ],
    scales: ['Major Scale', 'Ionian Mode', 'Melodic Minor'],
    influences: ['heavy-metal', 'speed-metal'],
    color: '#eab308'
  },
  {
    id: 'progressive-metal',
    name: 'Progressive Metal',
    description: 'Compound time signatures, long narrative compositions, and a fusion between metal and the structural complexity of progressive rock.',
    history: 'Born in the late 80s through bands that wanted to push the conventional limits of metal. It combines aggression with experimentalism, frequently using polyrhythms and complex modulations.',
    bands: ['Dream Theater', 'Opeth', 'Queensrÿche', 'Tool', 'Mastodon', 'Fates Warning'],
    songs: [
      { 
        title: 'Pull Me Under', 
        artist: 'Dream Theater',
        albumCover: 'https://th.bing.com/th/id/R.61d331dea61cd1edd8796714aafb32a4?rik=nnGpgwkSmgO65A&pid=ImgRaw&r=0'
      },
      { 
        title: 'Schism', 
        artist: 'Tool',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg'
      },
      { 
        title: 'Ghost of Perdition', 
        artist: 'Opeth',
        albumCover: 'https://media.senscritique.com/media/000004850341/source_big/Ghost_Reveries.jpg'
      }
    ],
    scales: ['Mixolydian', 'Dorian', 'Lydian', 'Complex Modal Changes'],
    influences: ['heavy-metal', 'thrash-metal', 'death-metal'],
    color: '#06b6d4'
  },
  {
    id: 'speed-metal',
    name: 'Speed Metal',
    description: 'Extreme speed and raw energy, serving as a bridge between traditional heavy metal and thrash metal.',
    history: 'Appeared in the late 70s and early 80s. Bands like Motörhead and Accept accelerated the tempo of heavy metal, laying the foundation for everything that followed in the extreme metal zone. Characterized by fast riffs that maintain a traditional harmonic structure.',
    bands: ['Motörhead', 'Venom', 'Accept', 'Exciter', 'Anvil'],
    songs: [
      { 
        title: 'Ace of Spades', 
        artist: 'Motörhead',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.qzea3A7Ff50YgOMzWAjqKwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Fast as a Shark', 
        artist: 'Accept',
        albumCover: 'https://tse1.explicit.bing.net/th/id/OIP.mKUSRibvcIBiK473gAo6AQHaHJ?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Black Metal', 
        artist: 'Venom',
        albumCover: 'https://th.bing.com/th/id/R.eeb58ea4763fb430aa2973429f24b6b0?rik=wwsx3XZcplumwQ&riu=http%3a%2f%2fmusicalmind.altervista.org%2fwp-content%2fuploads%2f2022%2f02%2fVenom-Black-Metal.-1982-Cover..jpg&ehk=n%2fSlMoG%2b9xBgOhAPWlh7t1n4zi10FRCsPz5c%2fRIq3Gk%3d&risl=&pid=ImgRaw&r=0'
      }
    ],
    scales: ['Minor Pentatonic', 'Aeolian', 'Mixolydian'],
    influences: ['heavy-metal'],
    color: '#991b1b'
  },
  {
    id: 'doom-metal',
    name: 'Doom Metal',
    description: 'Very slow tempos, low tuning, and heavy riffs that evoke an atmosphere of despair and melancholy.',
    history: 'Direct descendant of the early Black Sabbath sound. The genre crystallized in the 80s through bands that took slowness and weight to a new level, exploring themes of dread, mythology, and introspection.',
    bands: ['Candlemass', 'Saint Vitus', 'Sleep', 'Trouble', 'Cathedral', 'Pentagram'],
    songs: [
      { 
        title: 'Solitude', 
        artist: 'Candlemass',
        albumCover: 'https://tse3.mm.bing.net/th/id/OIP.QPGPdeAYVGxVybQkOC_qdgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Born Too Late', 
        artist: 'Saint Vitus',
        albumCover: 'https://th.bing.com/th/id/R.fc1bccd75ce6cef4b1403fbb4f08c88a?rik=%2bQWDzkYFIP3a1A&pid=ImgRaw&r=0'
      },
      { 
        title: 'Dragonaut', 
        artist: 'Sleep',
        albumCover: 'https://th.bing.com/th/id/R.3581f94132cf153900ebfc72496763ce?rik=8P3MfOaxdReyZg&pid=ImgRaw&r=0'
      }
    ],
    scales: ['Natural Minor', 'Phrygian', 'Dorian'],
    influences: ['heavy-metal'],
    color: '#312e81'
  },
  {
    id: 'glam-metal',
    name: 'Glam Metal',
    description: 'A fusion between heavy metal and hard rock, defined by flamboyant imagery, catchy choruses, and power ballads.',
    history: 'Dominated the scene in the 80s, especially in Los Angeles (Sunset Strip). Although criticized for its emphasis on image, the genre brought heavy metal into the mainstream through shiny productions and arena rock energy.',
    bands: ['Van Halen', 'Mötley Crüe', 'Poison', 'Ratt', 'Twisted Sister', 'Def Leppard'],
    songs: [
      { 
        title: "Ain't Talkin' 'Bout Love", 
        artist: 'Van Halen',
        albumCover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7a/ef/88/7aef88ad-25aa-be91-eb78-8917c3f114f7/603497894130.jpg/1200x1200bf-60.jpg'
      },
      { 
        title: 'Kickstart My Heart', 
        artist: 'Mötley Crüe',
        albumCover: 'https://th.bing.com/th/id/OIP.sK_lwxeJzBpTpfpG5VGdwQHaHe?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Talk Dirty to Me', 
        artist: 'Poison',
        albumCover: 'https://tse2.mm.bing.net/th/id/OIP.6dDL3YQEYGs00IRKJfwkaAHaId?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Round and Round', 
        artist: 'Ratt',
        albumCover: 'https://m.media-amazon.com/images/M/MV5BZWFjMjRlYzAtYjkxZS00MDVkLWJkYjgtODk1NmE5OWI3YTFlXkEyXkFqcGc@._V1_.jpg'
      }
    ],
    scales: ['Major Pentatonic', 'Mixolydian', 'Minor Pentatonic'],
    influences: ['heavy-metal'],
    color: '#db2777'
  },
  {
    id: 'alternative-metal',
    name: 'Alternative Metal',
    description: 'Experiments with metal structures, blending elements of funk, grunge, and industrial rock.',
    history: 'Emerged in the late 80s as a reaction to the rigidity of traditional subgenres. Bands like Faith No More introduced unconventional elements, paving the way for the explosion of diversity in the 90s.',
    bands: ['Faith No More', 'Alice in Chains', 'Soundgarden', 'Rage Against the Machine', ],
    songs: [
      { 
        title: 'Epic', 
        artist: 'Faith No More',
        albumCover: 'https://th.bing.com/th/id/R.1505c764f86d14c90bc06139040e481d?rik=C7LTb6BPcFO5jg&pid=ImgRaw&r=0'
      },
      { 
        title: 'Man in the Box', 
        artist: 'Alice in Chains',
        albumCover: 'https://i.scdn.co/image/ab67616d0000b2739358816f8dcc91b7ede24e91'
      },
      { 
        title: 'Bulls on Parade', 
        artist: 'Rage Against the Machine',
        albumCover: 'https://i.discogs.com/WcWys_eppf15DEKbdrRemVILu_n0sYq8O89j8h2U6Q4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODkw/MjktMTQzMTQ4Mzkx/MS0yMDQ1LmpwZWc.jpeg'
      }
    ],
    scales: ['Dorian', 'Phrygian', 'Chromatic'],
    influences: ['heavy-metal', 'thrash-metal', 'glam-metal'],
    color: '#059669'
  },
  {
    id: 'groove-metal',
    name: 'Groove Metal',
    description: 'Percussive riffs, mid-tempos, and a focus on rhythm and "groove", while maintaining thrash aggression.',
    history: 'Appeared at the beginning of the 90s as an evolution of thrash metal. Pantera defined the genre with the album "Cowboys from Hell", emphasizing raw power and riffs that make you move (groove), over pure thrash speed.',
    bands: ['Pantera', 'Exhorder', 'Machine Head', 'Sepultura', 'Lamb of God'],
    songs: [
      { 
        title: 'Walk', 
        artist: 'Pantera',
        albumCover: 'https://tse3.mm.bing.net/th/id/OIP.ShRJzxC7PLTIqsWmRYnZjwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Davidian', 
        artist: 'Machine Head',
        albumCover: 'hhttps://upload.wikimedia.org/wikipedia/en/5/51/Machine_Head_-_Burn_My_Eyes.jpg'
      }
    ],
    scales: ['Minor Pentatonic', 'Blues Scale', 'Chromatic'],
    influences: ['thrash-metal', 'heavy-metal'],
    color: '#b91c1c'
  },
  {
    id: 'gothic-metal',
    name: 'Gothic Metal',
    description: 'Dark, melancholic atmosphere, combining the weight of doom metal with gothic aesthetics.',
    history: 'Developed in the early 90s, deriving from death/doom metal. Pioneers like Paradise Lost introduced female vocals and keyboards, creating a romantic yet tragic sound. Type O Negative brought a more baritone and satirical approach.',
    bands: ['Type O Negative', 'Paradise Lost', 'My Dying Bride', 'Tiamat', 'Theatre of Tragedy'],
    songs: [
      { 
        title: 'Black No. 1', 
        artist: 'Type O Negative',
        albumCover: 'https://i.discogs.com/d29JF6fMGL6Sw0GTz3ijrUdVnge79KK1DOlvo99zYgU/rs:fit/g:sm/q:90/h:606/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1MjQy/NjMtMTM2NzMzMTA3/OC03OTc4LmpwZWc.jpeg'
      },
      { 
        title: 'Gothic', 
        artist: 'Paradise Lost',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.2DDyGvrAX5LNXI9TGN9PXgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Natural Minor', 'Harmonic Minor', 'Phrygian'],
    influences: ['doom-metal', 'death-metal'],
    color: '#4c1d95'
  },
  {
    id: 'funk-metal',
    name: 'Funk Metal',
    description: 'Slap bass, syncopated funk rhythms fused with heavy metal guitars and punk energy.',
    history: 'Exploded in the late 80s. Bands like Faith No More and Primus defied barriers by introducing elements of funk and jazz in the context of metal, providing a fun and technical alternative to extremely serious subgenres.',
    bands: ['Faith No More', 'Primus', 'Living Colour', 'Infectious Grooves'],
    songs: [
      { 
        title: 'Epic', 
        artist: 'Faith No More',
        albumCover: 'https://th.bing.com/th/id/R.1505c764f86d14c90bc06139040e481d?rik=C7LTb6BPcFO5jg&pid=ImgRaw&r=0' 
      },
      { 
        title: 'Jerry Was a Race Car Driver', 
        artist: 'Primus',
        albumCover: 'https://tse2.mm.bing.net/th/id/OIP.wotJnFlG1z2pBhiU7yqMbAHaHO?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Dorian', 'Mixolydian', 'Blues Scale'],
    influences: ['heavy-metal', 'alternative-metal'],
    color: '#fbbf24'
  },
  {
    id: 'rap-metal',
    name: 'Rap Metal',
    description: 'Rap-style vocals over heavy metal riffs, often with a strong political or social message.',
    history: 'Pioneered by collaborations like Anthrax with Public Enemy, the genre reached maturity through Rage Against the Machine in the early 90s, blending urban aggression with the power of metal.',
    bands: ['Rage Against the Machine', 'Body Count', 'Stuck Mojo', 'Anthrax'],
    songs: [
      { 
        title: 'Killing in the Name', 
        artist: 'Rage Against the Machine',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.ccGOhySMf6simb6qjia1hAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Bulls on Parade', 
        artist: 'Rage Against the Machine',
        albumCover: 'https://i.discogs.com/WcWys_eppf15DEKbdrRemVILu_n0sYq8O89j8h2U6Q4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODkw/MjktMTQzMTQ4Mzkx/MS0yMDQ1LmpwZWc.jpeg'
      }
    ],
    scales: ['Minor Pentatonic', 'Phrygian', 'Chromatic'],
    influences: ['thrash-metal', 'alternative-metal'],
    color: '#f43f5e'
  },
  {
    id: 'nu-metal',
    name: 'Nu Metal',
    description: 'Down-tuned guitars, elements of hip-hop, industrial, and grunge, with an emphasis on emotional state and catharsis.',
    history: 'Emerged in the mid-90s with the debut of the band Korn. It became the most popular subgenre of metal in the late 90s, introducing elements of turntables and a clothing aesthetic inspired by street culture.',
    bands: ['Korn', 'Deftones', 'Linkin Park', 'Slipknot', 'Limp Bizkit'],
    songs: [
      { 
        title: 'Blind', 
        artist: 'Korn',
        albumCover: 'https://th.bing.com/th/id/OIP._q1LuEV2Dhj2xU6btVjJ6QHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'In the End', 
        artist: 'Linkin Park',
        albumCover: 'https://tse2.mm.bing.net/th/id/OIP.KJtA4Trox54EMQQe628D9QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Phrygian', 'Aeolian', 'Locrian', 'Chromatic'],
    influences: ['alternative-metal', 'groove-metal', 'funk-metal', 'rap-metal'],
    color: '#22c55e'
  },
  {
    id: 'ndh',
    name: 'Neue Deutsche Härte',
    description: 'German industrial metal characterized by repetitive, heavy riffs, baritone vocals, and a martial aesthetic.',
    history: 'Crystallized in Germany in the 90s. Rammstein became the international spearhead of the genre, combining elements of techno, industrial, and hard rock in an overwhelming visual format.',
    bands: ['Rammstein', 'Oomph!', 'Eisbrecher', 'Megaherz', 'Die Krupps'],
    songs: [
      { 
        title: 'Du Hast', 
        artist: 'Rammstein',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.-_u-eyISMl47Ofl0T52QRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Augen Auf!', 
        artist: 'Oomph!',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.hyN_EjlIuvPvI6W6r26sXwHaGg?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Minor Scales', 'Chromatic', 'Major (for contrast)'],
    influences: ['alternative-metal', 'groove-metal'],
    color: '#78716c'
  },
  {
    id: 'avant-garde-metal',
    name: 'Avant-garde Metal',
    description: 'Experimental, unconventional, and avant-garde, pushing the limits of traditional metal through the use of jazz, classical, or electronic elements.',
    history: 'Formed in the late 80s through bands like Celtic Frost (the "Into the Pandemonium" period). The genre is characterized by the refusal to respect standard structures, using atypical instruments and experimental vocal techniques.',
    bands: ['Arcturus', 'Mr. Bungle', 'Borgir', 'Unexpect', 'Solefald'],
    songs: [
      { 
        title: 'The Chaos Path', 
        artist: 'Arcturus',
        albumCover: 'https://th.bing.com/th/id/R.947ee0465cd631a80794ccc8c669d1cf?rik=T4Dx2creaD%2bilA&pid=ImgRaw&r=0'
      },
      { 
        title: 'Retrovertigo', 
        artist: 'Mr. Bungle',
        albumCover: 'https://tse3.mm.bing.net/th/id/OIP.770Uq9bZJPOKXD_8dK-NTAHaHT?w=600&h=592&rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Atoll', 'Whole Tone', 'Chromatic', 'Experimental'],
    influences: ['progressive-metal', 'alternative-metal'],
    color: '#34d399'
  },
  {
    id: 'christian-metal',
    name: 'Christian Metal',
    description: 'Characterized by Christian lyrical messages, covering a wide range of styles from heavy to extreme metal.',
    history: 'Pioneered in the 70s by bands like Resurrection Band, the genre exploded in the 80s with Stryper. It proved that metal\'s aggression can be combined with messages of faith, creating a vast and dedicated subculture.',
    bands: ['Stryper', 'The Devil Wears Prada', 'Skillet', 'August Burns Red', 'Mortification'],
    songs: [
      { 
        title: 'To Hell with the Devil', 
        artist: 'Stryper',
        albumCover: 'https://i.discogs.com/ELdwmp7DAOoMxGx8VljxeFXvt8WRldigsBZdPIu9CAI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzU4/NDEtMTMxNDU2MDgx/MS5qcGVn.jpeg'
      },
      { 
        title: 'Comatose', 
        artist: 'Skillet',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.7At4Cgb1MINQmggqHVnPMgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Major Scale', 'Natural Minor'],
    influences: ['heavy-metal', 'thrash-metal'],
    color: '#facc15'
  },
  {
    id: 'crust-punk',
    name: 'Crust Punk',
    description: 'A brutal fusion between hardcore punk and extreme metal (thrash/death), with a dirty aesthetic and radical political messages.',
    history: 'Appeared in the UK in the mid-80s. Bands like Amebix and Antisect took metal weight and combined it with punk speed, creating a dense, distorted, and often apocalyptic sound.',
    bands: ['Amebix', 'Antisect', 'Extreme Noise Terror', 'Discharge', 'Dystopia'],
    songs: [
      { 
        title: 'Arise', 
        artist: 'Amebix',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.WBeI6onuBARRCQcYee-nlgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Deceived', 
        artist: 'Extreme Noise Terror',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.k_G-xNdYLdkFtUf5JWFBdAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Minor Pentatonic', 'Chromatic'],
    influences: ['thrash-metal', 'heavy-metal'],
    color: '#44403c'
  },
  {
    id: 'biker-metal',
    name: 'Biker Metal',
    description: 'Fusion of hard rock, heavy metal, and punk elements, closely linked to biker culture and urban rebellion.',
    history: 'Motörhead is the quintessence of this genre, combining punk speed and attitude with heavy metal power. It developed in the 70s and 80s as a lifestyle, focused on freedom, long roads, and the "dirty" sound of guitars.',
    bands: ['Motörhead', 'Orange Goblin', 'Saxon', 'Girlschool', 'Black Label Society'],
    songs: [
      { 
        title: 'Overkill', 
        artist: 'Motörhead',
        albumCover: 'https://th.bing.com/th/id/R.cb83aeab710b8f41ad1169a6e3dc6fa0?rik=yc%2fq2l342FyEvQ&pid=ImgRaw&r=0'
      },
      { 
        title: 'Stillborn', 
        artist: 'Black Label Society',
        albumCover: 'https://th.bing.com/th/id/R.8fe29b3357c46c21ba5014aa94a8036d?rik=HlNUXyZJkyuHfw&riu=http%3a%2f%2fimages.genius.com%2f3700d70dcae2a6fc21765d46541c0328.640x640x1.jpg&ehk=vBTfP3UT3fK0yknci%2fH9y1KWm2m%2fbJoqwffjVtrKZ3w%3d&risl=&pid=ImgRaw&r=0'
      }
    ],
    scales: ['Blues Scale', 'Minor Pentatonic'],
    influences: ['heavy-metal', 'speed-metal'],
    color: '#7f1d1d'
  },
  {
    id: 'extreme-metal',
    name: 'Extreme Metal',
    description: 'An umbrella term for the most abrasive and intense subgenres: death, black, thrash, and doom metal.',
    history: 'Crystallized in the mid-80s as an underground movement that wanted to push the limits of speed and brutality beyond traditional heavy metal. It led to the formation of global scenes with strict aesthetic and sound codes.',
    bands: ['Possessed', 'Hellhammer', 'Venom', 'Bathory', 'Celtic Frost'],
    songs: [
      { 
        title: 'The Exorcist', 
        artist: 'Possessed',
        albumCover: 'https://i.discogs.com/jd6fZUkHO1nYTkwKmk50Qf0T18IEYqFzNG8R16yjqoM/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMzg4/NjgtMTcwNTY0NTUz/Ny02Mjk5LmpwZWc.jpeg'
      },
      { 
        title: 'Satan My Master', 
        artist: 'Bathory',
        albumCover: 'https://tse2.mm.bing.net/th/id/OIP.SaQxLu0uENr1WwgkFj1dpQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Locrian', 'Phrygian', 'Chromatic'],
    influences: ['thrash-metal', 'black-metal', 'death-metal', 'doom-metal'],
    color: '#0c0a09'
  },
  {
    id: 'folk-metal',
    name: 'Folk Metal',
    description: 'Metal incorporating traditional instruments, folk melodies, and lyrical themes about nature, mythology, and local history.',
    history: 'Emerged in the early 90s, with Skyclad being the pioneers who introduced the violin into metal. Later, bands from Scandinavia combined black metal with Nordic folklore, creating a huge scene that uses flutes, bagpipes, and harps.',
    bands: ['Eluveitie', 'Korpiklaani', 'Ensiferum', 'In Extremo', 'Amorphis'],
    songs: [
      { 
        title: 'Inis Mona', 
        artist: 'Eluveitie',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.eMh_9LvBf_EvJ5o29sZwOwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Vodka', 
        artist: 'Korpiklaani',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.EGTnrJffZJy4v1fU7SEsbwHaGS?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Mixolydian', 'Dorian', 'Minor Pentatonic', 'Traditional Folk Scales'],
    influences: ['heavy-metal', 'black-metal', 'death-metal'],
    color: '#166534'
  },
  {
    id: 'grindcore',
    name: 'Grindcore',
    description: 'The most extreme fusion between death metal and hardcore punk, characterized by very short songs, hallucinating speeds, and constant blast-beats.',
    history: 'Born in the UK in the mid-80s. Napalm Death defined the genre through the album "Scum", reducing songs to the essence of brutality, often lasting only a few seconds.',
    bands: ['Napalm Death', 'Carcass', 'Pig Destroyer', 'Repulsion', 'Nasum'],
    songs: [
      { 
        title: 'You Suffer', 
        artist: 'Napalm Death',
        albumCover: 'https://f4.bcbits.com/img/a1976444951_10.jpg'
      },
      { 
        title: 'Prowler in the Yard', 
        artist: 'Pig Destroyer',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.oFNNaXiDwLlz2XI87xu96QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Chromatic', 'None (Noise-focused)'],
    influences: ['death-metal', 'thrash-metal'],
    color: '#991b1b'
  },
  {
    id: 'kawaii-metal',
    name: 'Kawaii Metal',
    description: 'A fusion between Japanese idol pop and heavy metal, resulting in a contrasting but extremely energetic style.',
    history: 'Created by the band Babymetal in the early 2010s. Combines pop choreography, "cute" (kawaii) melodic vocals over an instrumental foundation of highly technical power, thrash, or death metal.',
    bands: ['Babymetal', 'Ladybaby', 'PassCode', 'Hanabie.'],
    songs: [
      { 
        title: 'Gimme Chocolate!!', 
        artist: 'Babymetal',
        albumCover: 'https://tse3.mm.bing.net/th/id/OIP.2JzM_QJF6qQP-hHa-ACHAQHaHW?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Nippon Manju', 
        artist: 'Ladybaby',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.SahXR0ts73e48cIYmeE6uQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Major Scale', 'Mixolydian', 'Minor Pentatonic'],
    influences: ['power-metal', 'thrash-metal', 'alternative-metal'],
    color: '#f472b6'
  },
  {
    id: 'latin-metal',
    name: 'Latin Metal',
    description: 'Metal incorporating Latin American rhythms, instrumentation, and languages.',
    history: 'Achieved global recognition through Sepultura (the "Roots" period) and Puya. It combines tribal percussion and salsa/merengue influences with metal rigor, frequently exploring themes of cultural identity and resistance.',
    bands: ['Sepultura', 'Puya', 'Ill Niño', 'Soulfly', 'A.N.I.M.A.L.'],
    songs: [
      { 
        title: 'Roots Bloody Roots', 
        artist: 'Sepultura',
        albumCover: 'https://images.genius.com/31915631b54546f09263e140eca041a0.1000x1000x1.png'
      },
      { 
        title: 'Oasis', 
        artist: 'Puya',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.1U9V4vOaA5C_76eQGZWvugAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Phrygian', 'Dorian', 'Harmonic Minor', 'Latin Rhythms'],
    influences: ['alternative-metal', 'thrash-metal', 'groove-metal'],
    color: '#ea580c'
  },
  {
    id: 'metalcore',
    name: 'Metalcore',
    description: 'A fusion between extreme metal and hardcore punk, characterized by the use of "breakdowns" and alternating between clean and screaming vocals.',
    history: 'Evolved from the 90s hardcore scene (Earth Crisis) and exploded in the 2000s through bands like Killswitch Engage, which incorporated more Gothenburg-style death metal melodies.',
    bands: ['Killswitch Engage', 'As I Lay Dying', 'Avenged Sevenfold', 'Architects', 'Bring Me The Horizon'],
    songs: [
      { 
        title: 'My Curse', 
        artist: 'Killswitch Engage',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.ATgsQKbNWqSNL5oEi8vxbgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Unholy Confessions', 
        artist: 'Avenged Sevenfold',
        albumCover: 'https://images.genius.com/0737991205be311521d3b588efd8df65.1000x1000x1.jpg'
      }
    ],
    scales: ['Minor Pentatonic', 'Aeolian', 'Phrygian'],
    influences: ['thrash-metal', 'death-metal', 'alternative-metal'],
    color: '#2563eb'
  },
  {
    id: 'neoclassical-metal',
    name: 'Neoclassical Metal',
    description: 'Metal characterized by extreme virtuosity and direct use of classical music forms and melodies.',
    history: 'Popularized by Yngwie Malmsteen in the 80s. Places immense emphasis on technique, using fast arpeggios and scales taken from composers like Bach, Paganini, or Vivaldi in a heavy metal context.',
    bands: ['Yngwie Malmsteen', 'Symphony X', 'Stratovarius', 'Jason Becker', 'Cacophony'],
    songs: [
      { 
        title: 'Black Star', 
        artist: 'Yngwie Malmsteen',
        albumCover: 'https://th.bing.com/th/id/OIP.cEdSojeEnVdpWxNakY1OHQHaHW?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Far Beyond the Sun', 
        artist: 'Yngwie Malmsteen',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.RnGz04j9wtwh62tskq7a1QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Harmonic Minor', 'Phrygian Dominant', 'Diminished arpeggios'],
    influences: ['heavy-metal', 'power-metal', 'progressive-metal'],
    color: '#8b5cf6'
  },
  {
    id: 'post-metal',
    name: 'Post-metal',
    description: 'An expansive form of metal blending post-rock with sludge or doom metal, focused on atmosphere, texture, and dynamic crescendos.',
    history: 'Born in the early 2000s through bands like Neurosis and Isis. Moves away from verse-chorus structures, preferring long, instrumental, or sparse vocal pieces that build an immersive mood.',
    bands: ['Neurosis', 'Isis', 'Cult of Luna', 'Russian Circles', 'Pelican'],
    songs: [
      { 
        title: 'The Eye of Every Storm', 
        artist: 'Neurosis',
        albumCover: 'https://tse1.explicit.bing.net/th/id/OIP.N1ag9UM6rAp60yVmR-Uo3wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      },
      { 
        title: 'Panopticon', 
        artist: 'Isis',
        albumCover: 'https://is1-ssl.mzstatic.com/image/thumb/Music7/v4/56/03/e4/5603e49c-ab33-05f9-9c54-606381901cd6/886445137057.jpg/1200x1200bf-60.jpg'
      }
    ],
    scales: ['Dorian', 'Aeolian', 'Experimental tunings'],
    influences: ['doom-metal', 'progressive-metal', 'alternative-metal'],
    color: '#0f172a'
  },
  {
    id: 'symphonic-metal',
    name: 'Symphonic Metal',
    description: 'Metal incorporating orchestral elements, choirs, and operatic vocals (often female).',
    history: 'Appeared in the late 90s, with bands like Nightwish or Within Temptation fusing heavy metal power with the grandeur of film scores and opera. Characterized by rich arrangements and an epic atmosphere.',
    bands: ['Nightwish', 'Within Temptation', 'Epica', 'Therion', 'Haggard'],
    songs: [
      { 
        title: 'Ghost Love Score', 
        artist: 'Nightwish',
        albumCover: 'https://th.bing.com/th/id/R.7937e1a9960a339cd29fe8a47cab6d63?rik=cYZGC7N6o4z74A&pid=ImgRaw&r=0'
      },
      { 
        title: 'Mother Earth', 
        artist: 'Within Temptation',
        albumCover: 'https://tse3.mm.bing.net/th/id/OIP.J2Xc1LiZbDdKUCY44KoQ9QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
      }
    ],
    scales: ['Aeolian', 'Harmonic Minor', 'Classical Modes'],
    influences: ['power-metal', 'gothic-metal', 'heavy-metal'],
    color: '#4338ca'
  }
];
