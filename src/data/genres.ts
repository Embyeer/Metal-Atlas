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
    description: 'Rădăcinile metalului, caracterizat prin riff-uri groase și masive de chitară, distorsiune amplificată și voci melodice puternice.',
    history: 'A apărut la sfârșitul anilor 60 în Marea Britanie și SUA. Cu origini în blues-rock și psihedelic rock, trupe precum Black Sabbath au redefinit sunetul prin utilizarea intervalului de triton ("intervalul diavolului") și a volumului extrem. În anii 80, valul NWOBHM (New Wave of British Heavy Metal) a adus o abordare mai rapidă și mai tehnică.',
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
    description: 'Viteză extremă, agresivitate și complexitate tehnică definită prin riff-uri percutante de tip "palm-muted".',
    history: 'S-a dezvoltat la începutul anilor 80 ca o reacție la curentul glam metal. A fuzionat precizia tehnica a NWOBHM cu agresivitatea și viteza hardcore punk-ului. "The Big Four" (Metallica, Megadeth, Slayer, Anthrax) au stabilit standardele genului în zona Bay Area din California.',
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
    description: 'Voci "growl" de tip gutural, chitări acordate extrem de jos (down-tuned) și structuri ritmice dominate de blast-beats.',
    history: 'Evoluat din thrash metal la mijlocul anilor 80. Pionierat de trupe precum Death (din Florida) și Possessed, genul a explorat teme de mortalitate și structuri muzicale mult mai complexe și brutale decât predecesorii săi.',
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
    description: 'Atmosferă rece și nihilistă, voci ascuțite, tremolo picking și o estetică mistică adesea lo-fi.',
    history: 'A apărut în anii 80 ("primul val") cu trupe ca Venom și Celtic Frost. Al doilea val norvegian din anii 90 a definit sunetul modern prin producție minimalistă, teme anti-religioase și utilizarea machiajului "corpse paint".',
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
    description: 'Imnuri epice, viteză, voci înalte de tip operatic și teme lirice fantastice sau mitologice.',
    history: 'S-a cristalizat în anii 80 în Germania și Scandinavia. Pune accent pe melodie, virtuozitate instrumentală și o atmosferă "larger than life", fiind influențat de muzica clasică și epopeile fantastice.',
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
    description: 'Măsuri de timp compuse, compoziții narative lungi și o fuziune între metal și complexitatea structurală a rock-ului progresiv.',
    history: 'A luat naștere la sfârșitul anilor 80 prin trupe care doreau să depășească limitele convenționale ale metalului. Combină agresivitatea cu experimentalismul, utilizând frecvent poliritmii și modulații complexe.',
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
    description: 'Viteză extremă și energie brută, servind ca punte între heavy metalul tradițional și thrash metal.',
    history: 'A apărut la sfârșitul anilor 70 și începutul anilor 80. Trupe precum Motörhead și Accept au accelerat tempo-ul heavy metalului, punând bazele pentru tot ce a urmat în zona metalului extrem. Se caracterizează prin riff-uri rapide, dar care păstrează o structură armonică tradițională.',
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
    description: 'Tempo-uri foarte lente, acordaj jos și riff-uri grele care evocă o atmosferă de disperare și melancolie.',
    history: 'Direct descendent al sunetului timpuriu Black Sabbath. Genul s-a cristalizat în anii 80 prin trupe care au dus lentoarea și greutatea la un nou nivel, explorând teme de dread, mitologie și introspecție.',
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
    description: 'O fuziune între heavy metal și hard rock, definită prin imagini flamboyante, refrenuri "catchy" și balade de putere.',
    history: 'A dominat scena în anii 80, în special în Los Angeles (Sunset Strip). Deși criticat pentru accentul pus pe imagine, genul a adus heavy metalul în mainstream prin producții strălucitoare și o energie de tip arena rock.',
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
    description: 'Experimentează cu structuri metalice, îmbinând elemente de funk, grunge și rock industrial.',
    history: 'A apărut la sfârșitul anilor 80 ca o reacție la rigiditatea subgenurilor tradiționale. Trupe precum Faith No More au introdus elemente neconvenționale, pavând drumul pentru explozia de diversitate din anii 90.',
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
    description: 'Riff-uri percutante, tempo-uri medii și o concentrare pe ritm și "groove", păstrând în același timp agresivitatea thrash-ului.',
    history: 'A apărut la începutul anilor 90 ca o evoluție a thrash metalului. Pantera a definit genul prin albumul "Cowboys from Hell", punând accent pe forța brută și pe riff-uri care te fac să te miști (groove), în detrimentul vitezei pure a thrash-ului.',
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
    description: 'Atmosferă întunecată, melancolică, combinând greutatea doom metalului cu estetica gotică.',
    history: 'S-a dezvoltat la începutul anilor 90, derivând din death/doom metal. Pionieri precum Paradise Lost au introdus voci feminine și clape, creând un sunet romantic dar tragic. Type O Negative a adus o abordare mai baritonă și satirică.',
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
    description: 'Slap bass, ritmuri sincopate de funk fuzionate cu chitări grele de metal și energie punk.',
    history: 'A explodat la sfârșitul anilor 80. Trupe precum Faith No More și Primus au sfidat barierele prin introducerea elementelor de funk și jazz în contextul metalului, oferind o alternativă distractivă și tehnică la subgenurile extrem de serioase.',
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
    description: 'Voci de tip rap peste riff-uri grele de metal, adesea cu un mesaj politic sau social puternic.',
    history: 'Pionierat prin colaborări precum Anthrax cu Public Enemy, genul a atins maturitatea prin Rage Against the Machine la începutul anilor 90, îmbinând agresivitatea urbană cu puterea metalului.',
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
    description: 'Chitări down-tuned, elemente de hip-hop, industrial și grunge, cu un accent pe starea emoțională și catharsis.',
    history: 'A apărut la mijlocul anilor 90 prin debutul trupei Korn. A devenit cel mai popular subgen de metal la sfârșitul anilor 90, introducendo elemente de platane (turntables) și o estetică vestimentară inspirată de cultura stradală.',
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
    description: 'Metal industrial german caracterizat prin riff-uri repetitive, grele, voci baritone și o estetică marțială.',
    history: 'S-a cristalizat în Germania în anii 90. Rammstein a devenit vârful de lance internațional al genului, combinând elemente de techno, industrial și hard rock într-un format vizual copleșitor.',
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
  }
];
