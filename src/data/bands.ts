export interface Band {
  id: string;
  name: string;
  genre: string;
  description: string;
  formed: string;
  origin: string;
  members: string[];
  mostKnownSongs: string[];
  albums: {
    title: string;
    year: number;
    coverUrl?: string;
  }[];
  imageUrl: string;
}

export const bands: Band[] = [
  {
    id: 'metallica',
    name: 'Metallica',
    genre: 'Thrash Metal',
    formed: '1981',
    origin: 'Los Angeles, California, USA',
    description: 'One of the "Big Four" of thrash metal, Metallica is one of the most influential and commercially successful metal bands of all time. Their early work pioneered fast tempos and complex arrangements, while their later work brought heavy metal to a mainstream audience.',
    members: ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Robert Trujillo'],
    mostKnownSongs: ['Enter Sandman', 'Master of Puppets', 'Nothing Else Matters', 'One', 'Seek & Destroy'],
    albums: [
      { title: 'Kill \'Em All', year: 1983 },
      { title: 'Ride the Lightning', year: 1984 },
      { title: 'Master of Puppets', year: 1986 },
      { title: '...And Justice for All', year: 1988 },
      { title: 'Metallica (The Black Album)', year: 1991 },
      { title: '72 Seasons', year: 2023 }
    ],
    imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2023/03/metallica-72-seasons.jpg?w=1581&h=1054&crop=1'
  },
  {
    id: 'iron-maiden',
    name: 'Iron Maiden',
    genre: 'NWOBHM',
    formed: '1975',
    origin: 'London, England',
    description: 'Pioneers of the New Wave of British Heavy Metal, Iron Maiden is famous for their melodic twin-guitar harmonies, Steve Harris\'s "galloping" bass lines, and the operatic vocals of Bruce Dickinson. Their mascot Eddie is an icon of metal culture.',
    members: ['Bruce Dickinson', 'Steve Harris', 'Dave Murray', 'Adrian Smith', 'Janick Gers', 'Nicko McBrain'],
    mostKnownSongs: ['The Number of the Beast', 'Run to the Hills', 'Fear of the Dark', 'Hallowed Be Thy Name', 'The Trooper'],
    albums: [
      { title: 'The Number of the Beast', year: 1982 },
      { title: 'Powerslave', year: 1984 },
      { title: 'Seventh Son of a Seventh Son', year: 1988 },
      { title: 'Brave New World', year: 2000 },
      { title: 'Senjutsu', year: 2021 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.f21cec79b388dbfa8c11e954bb3d3b1c?rik=ugcx4jtSf6ap%2bw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fl9xIViU.jpg&ehk=3hnjIUiBJjXBTtHwdIYxtffRPAmg5LdvTKfrk9doFhY%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'black-sabbath',
    name: 'Black Sabbath',
    genre: 'Heavy Metal',
    formed: '1968',
    origin: 'Birmingham, England',
    description: 'Widely considered the founders of heavy metal. Tony Iommi\'s heavy, downtuned riffs combined with dark, occult-themed lyrics and Ozzy Osbourne\'s haunting vocals defined the blueprint for the entire genre.',
    members: ['Ozzy Osbourne (Classic)', 'Tony Iommi', 'Geezer Butler', 'Bill Ward'],
    mostKnownSongs: ['Paranoid', 'Iron Man', 'War Pigs', 'Black Sabbath', 'Children of the Grave'],
    albums: [
      { title: 'Black Sabbath', year: 1970 },
      { title: 'Paranoid', year: 1970 },
      { title: 'Master of Reality', year: 1971 },
      { title: 'Heaven and Hell', year: 1980 },
      { title: '13', year: 2013 }
    ],
    imageUrl: 'https://images.kerrangcdn.com/images/Black-Sabbath-Ozzy-Osbourne-1970s-era-promo-high-res.jpg?auto=compress&fit=max&w=1920'
  },
  {
    id: 'judas-priest',
    name: 'Judas Priest',
    genre: 'Heavy Metal',
    formed: '1969',
    origin: 'Birmingham, England',
    description: 'The "Metal Gods" themselves. Known for Rob Halford\'s incredible vocal range and the band\'s iconic leather-and-studs look, which became the standard for metal fashion. They pioneered the twin-lead guitar attack.',
    members: ['Rob Halford', 'Glenn Tipton', 'Richie Faulkner', 'Ian Hill', 'Scott Travis'],
    mostKnownSongs: ['Breaking the Law', 'Painkiller', 'Living After Midnight', 'You\'ve Got Another Thing Comin\'', 'Electric Eye'],
    albums: [
      { title: 'British Steel', year: 1980 },
      { title: 'Screaming for Vengeance', year: 1982 },
      { title: 'Painkiller', year: 1990 },
      { title: 'Firepower', year: 2018 }
    ],
    imageUrl: 'https://images8.alphacoders.com/404/thumb-1920-404474.jpg'
  },
  {
    id: 'slayer',
    name: 'Slayer',
    genre: 'Thrash Metal',
    formed: '1981',
    origin: 'Huntington Park, California, USA',
    description: 'The most extreme of the "Big Four," Slayer is known for their fast-paced musical style and lyrics involving death, war, and Satanism. Their album Reign in Blood is considered a masterpiece of the genre.',
    members: ['Tom Araya', 'Kerry King', 'Gary Holt', 'Paul Bostaph'],
    mostKnownSongs: ['Raining Blood', 'Angel of Death', 'South of Heaven', 'Seasons in the Abyss', 'War Ensemble'],
    albums: [
      { title: 'Reign in Blood', year: 1986 },
      { title: 'South of Heaven', year: 1988 },
      { title: 'Seasons in the Abyss', year: 1990 },
      { title: 'Repentless', year: 2015 }
    ],
    imageUrl: 'https://wallpapers.com/images/high/slayer-members-in-red-room-5ie4bg51rjyjhh74.webp'
  },
  {
    id: 'megadeth',
    name: 'Megadeth',
    genre: 'Thrash Metal',
    formed: '1983',
    origin: 'Los Angeles, California, USA',
    description: 'Founded by Dave Mustaine after his departure from Metallica, Megadeth is known for its technical proficiency and complex arrangements. They are a cornerstone of the thrash metal genre.',
    members: ['Dave Mustaine', 'James LoMenzo', 'Dirk Verbeuren', 'Teemu Mäntysaari'],
    mostKnownSongs: ['Holy Wars... The Punishment Due', 'Symphony of Destruction', 'Tornado of Souls', 'Hangar 18', 'Peace Sells'],
    albums: [
      { title: 'Peace Sells... but Who\'s Buying?', year: 1986 },
      { title: 'Rust in Peace', year: 1990 },
      { title: 'Countdown to Extinction', year: 1992 },
      { title: 'The Sick, the Dying... and the Dead!', year: 2022 }
    ],
    imageUrl: 'https://images3.alphacoders.com/179/thumb-1920-179847.jpg'
  },
  {
    id: 'death',
    name: 'Death',
    genre: 'Death Metal',
    formed: '1983',
    origin: 'Orlando, Florida, USA',
    description: 'Founded by the legendary Chuck Schuldiner, Death is recognized as one of the most influential bands in heavy metal history and a pioneering force in death metal. Their later albums pushed the boundaries of technical and progressive metal.',
    members: ['Chuck Schuldiner (Late Founder)', 'Gene Hoglan', 'Steve Di Giorgio'],
    mostKnownSongs: ['Pull the Plug', 'Crystal Mountain', 'The Philosopher', 'Spirit Crusher', 'Zombie Ritual'],
    albums: [
      { title: 'Scream Bloody Gore', year: 1987 },
      { title: 'Leprosy', year: 1988 },
      { title: 'Human', year: 1991 },
      { title: 'Symbolic', year: 1995 },
      { title: 'The Sound of Perseverance', year: 1998 }
    ],
    imageUrl: 'https://www.ultimate-guitar.com/static/article/news/4/141164_0_wide_ver1667568210.jpg@1200'
  },
  {
    id: 'cannibal-corpse',
    name: 'Cannibal Corpse',
    genre: 'Death Metal',
    formed: '1988',
    origin: 'Buffalo, New York, USA',
    description: 'Known for their extremely violent and gore-themed lyrics and album art. They are one of the best-selling death metal bands of all time, maintaining a consistent brand of brutality for decades.',
    members: ['George "Corpsegrinder" Fisher', 'Alex Webster', 'Paul Mazurkiewicz', 'Rob Barrett', 'Erik Rutan'],
    mostKnownSongs: ['Hammer Smashed Face', 'I Will Kill You', 'Evisceration Plague', 'Code of the Slashers'],
    albums: [
      { title: 'Eaten Back to Life', year: 1990 },
      { title: 'Butchered at Birth', year: 1991 },
      { title: 'Tomb of the Mutilated', year: 1992 },
      { title: 'Chaos Horrific', year: 2023 }
    ],
    imageUrl: 'https://images6.alphacoders.com/647/thumb-1920-647835.jpg'
  },
  {
    id: 'mayhem',
    name: 'Mayhem',
    genre: 'Black Metal',
    formed: '1984',
    origin: 'Oslo, Norway',
    description: 'The most infamous band in Norwegian black metal history. Known for their extreme live performances and the tragic events surrounding the inner circle of the Norwegian scene in the early 90s.',
    members: ['Necrobutcher', 'Hellhammer', 'Attila Csihar', 'Teloch', 'Ghul'],
    mostKnownSongs: ['Freezing Moon', 'Pure Fucking Armageddon', 'Deathcrush', 'Pagan Fears'],
    albums: [
      { title: 'Deathcrush (EP)', year: 1987 },
      { title: 'De Mysteriis Dom Sathanas', year: 1994 },
      { title: 'Ordo Ad Chao', year: 2007 },
      { title: 'Daemon', year: 2019 }
    ],
    imageUrl: 'https://i.pinimg.com/736x/4b/68/0e/4b680edf71dafd67f09bba72b949b348.jpg'
  },
  {
    id: 'helloween',
    name: 'Helloween',
    genre: 'Power Metal',
    formed: '1984',
    origin: 'Hamburg, Germany',
    description: 'Considered the godfathers of European power metal. Their "Keeper of the Seven Keys" albums defined the genre\'s sound: melodic, fast, and operatic.',
    members: ['Kai Hansen', 'Michael Kiske', 'Andi Deris', 'Michael Weikath', 'Markus Grosskopf'],
    mostKnownSongs: ['I Want Out', 'Keeper of the Seven Keys', 'Eagle Fly Free', 'Future World', 'Halloween'],
    albums: [
      { title: 'Keeper of the Seven Keys Part I', year: 1987 },
      { title: 'Keeper of the Seven Keys Part II', year: 1988 },
      { title: 'The Time of the Oath', year: 1996 },
      { title: 'Helloween', year: 2021 }
    ],
    imageUrl: 'https://images6.alphacoders.com/782/thumb-1920-782728.jpg'
  },
  {
    id: 'dream-theater',
    name: 'Dream Theater',
    genre: 'Progressive Metal',
    formed: '1985',
    origin: 'Boston, Massachusetts, USA',
    description: 'The ultimate progressive metal band, known for the extreme technical virtuosity of all its members and complex, epic compositions.',
    members: ['James LaBrie', 'John Petrucci', 'John Myung', 'Jordan Rudess', 'Mike Portnoy'],
    mostKnownSongs: ['Pull Me Under', 'Panic Attack', 'Metropolis Pt. 1', 'Octavarium', 'The Spirit Carries On'],
    albums: [
      { title: 'Images and Words', year: 1992 },
      { title: 'Metropolis Pt. 2: Scenes from a Memory', year: 1999 },
      { title: 'A Dramatic Turn of Events', year: 2011 },
      { title: 'A View from the Top of the World', year: 2021 }
    ],
    imageUrl: 'https://i0.wp.com/www.sonicperspectives.com/wp-content/uploads/2020/09/dream-theater-featured.jpg?fit=1920%2C1280&ssl=1'
  },
  {
    id: 'motorhead',
    name: 'Motörhead',
    genre: 'Speed Metal',
    formed: '1975',
    origin: 'London, England',
    description: 'Lemmy Kilmister\'s legendary band that fused punk energy with heavy metal power. They were the loudest band on earth and defined the "biker metal" aesthetic.',
    members: ['Lemmy Kilmister', 'Phil Campbell', 'Mikkey Dee'],
    mostKnownSongs: ['Ace of Spades', 'Overkill', 'Iron Fist', 'The Game', 'Going to Brazil'],
    albums: [
      { title: 'Overkill', year: 1979 },
      { title: 'Bomber', year: 1979 },
      { title: 'Ace of Spades', year: 1980 },
      { title: 'Bad Magic', year: 2015 }
    ],
    imageUrl: 'https://imotorhead.com/mh/wp-content/themes/imotorhead/images/homepage-header.jpg'
  },
  {
    id: 'pantera',
    name: 'Pantera',
    genre: 'Groove Metal',
    formed: '1981',
    origin: 'Arlington, Texas, USA',
    description: 'Defining the groove metal sound in the 90s, Pantera combined southern rock influences with extreme metal aggression and Dimebag Darrell\'s legendary guitar work.',
    members: ['Philip Anselmo', 'Dimebag Darrell', 'Vinnie Paul', 'Rex Brown'],
    mostKnownSongs: ['Walk', 'Cowboys from Hell', 'Cemetery Gates', 'Domination', 'I\'m Broken'],
    albums: [
      { title: 'Cowboys from Hell', year: 1990 },
      { title: 'Vulgar Display of Power', year: 1992 },
      { title: 'Far Beyond Driven', year: 1994 },
      { title: 'The Great Southern Trendkill', year: 1996 }
    ],
    imageUrl: 'https://wallpapercave.com/wp/wp2995543.jpg'
  },
  {
    id: 'rammstein',
    name: 'Rammstein',
    genre: 'Neue Deutsche Härte',
    formed: '1994',
    origin: 'Berlin, Germany',
    description: 'The kings of Industrial Metal/NDH. Known for their massive pyrotechnics, dark provocative lyrics, and Till Lindemann\'s baritone vocals.',
    members: ['Till Lindemann', 'Richard Z. Kruspe', 'Paul Landers', 'Oliver Riedel', 'Christoph Schneider', 'Christian "Flake" Lorenz'],
    mostKnownSongs: ['Du Hast', 'Sonne', 'Deutschland', 'Ich Will', 'Engel'],
    albums: [
      { title: 'Herzeleid', year: 1995 },
      { title: 'Mutter', year: 2001 },
      { title: 'Reise, Reise', year: 2004 },
      { title: 'Zeit', year: 2022 }
    ],
    imageUrl: 'https://eskipaper.com/images/rammstein-1.jpg'
  },
  {
    id: 'korn',
    name: 'Korn',
    genre: 'Nu Metal',
    formed: '1993',
    origin: 'Bakersfield, California, USA',
    description: 'The pioneers of Nu Metal. Jonathan Davis\'s raw, emotional lyrics and the band\'s signature 7-string down-tuned guitars changed the face of metal in the 90s.',
    members: ['Jonathan Davis', 'James "Munky" Shaffer', 'Brian "Head" Welch', 'Reginald "Fieldy" Arvizu', 'Ray Luzier'],
    mostKnownSongs: ['Blind', 'Freak on a Leash', 'Falling Away from Me', 'Got the Life'],
    albums: [
      { title: 'Korn', year: 1994 },
      { title: 'Life Is Peachy', year: 1996 },
      { title: 'Follow the Leader', year: 1998 },
      { title: 'Requiem', year: 2022 }
    ],
    imageUrl: 'https://images2.alphacoders.com/437/thumb-1920-437560.jpg'
  },
  {
    id: 'gojira',
    name: 'Gojira',
    genre: 'Death Metal / Progressive Metal',
    formed: '1996',
    origin: 'Ondres, France',
    description: 'One of the most important modern metal bands. Gojira combines technical death metal with progressive structures and lyrics focused on environmental issues.',
    members: ['Joe Duplantier', 'Mario Duplantier', 'Christian Andreu', 'Jean-Michel Labadie'],
    mostKnownSongs: ['Flying Whales', 'Stranded', 'L\'enfant sauvage', 'Silvera', 'Amazonia'],
    albums: [
      { title: 'From Mars to Sirius', year: 2005 },
      { title: 'The Way of All Flesh', year: 2008 },
      { title: 'Magma', year: 2016 },
      { title: 'Fortitude', year: 2021 }
    ],
    imageUrl: 'https://metalmusics.com/wp-content/uploads/2024/12/gojira-band-promo-2017-logo.jpg'
  },
  {
    id: 'slipknot',
    name: 'Slipknot',
    genre: 'Nu Metal',
    formed: '1995',
    origin: 'Des Moines, Iowa, USA',
    description: 'The 9-piece masked phenomenon. Known for their chaotic live shows, aggressive sound, and the unique combination of multiple percussionists and a DJ in a metal context.',
    members: ['Corey Taylor', 'Mick Thomson', 'Sid Wilson', 'Jim Root', 'Shawn "Clown" Crahan'],
    mostKnownSongs: ['Duality', 'Psychosocial', 'Wait and Bleed', 'Before I Forget', 'The Devil in I'],
    albums: [
      { title: 'Slipknot', year: 1999 },
      { title: 'Iowa', year: 2001 },
      { title: 'Vol. 3: (The Subliminal Verses)', year: 2004 },
      { title: 'The End, So Far', year: 2022 }
    ],
    imageUrl: 'https://wallpaperaccess.com/full/4290737.jpg'
  },
  {
    id: 'babymetal',
    name: 'Babymetal',
    genre: 'Kawaii Metal',
    formed: '2010',
    origin: 'Tokyo, Japan',
    description: 'The originators of Kawaii Metal. Babymetal successfully fused J-pop idol aesthetics with world-class heavy metal musicianship from their backing band.',
    members: ['SU-METAL', 'MOAMETAL', 'MOMOMETAL'],
    mostKnownSongs: ['Gimme Chocolate!!', 'Megitsune', 'PAPAYA!!', 'Road of Resistance', 'KARATE'],
    albums: [
      { title: 'Babymetal', year: 2014 },
      { title: 'Metal Resistance', year: 2016 },
      { title: 'Metal Galaxy', year: 2019 },
      { title: 'The Other One', year: 2023 }
    ],
    imageUrl: 'https://images.alphacoders.com/760/thumb-1920-760618.jpg'
  },
  {
    id: 'napalm-death',
    name: 'Napalm Death',
    genre: 'Grindcore',
    formed: '1981',
    origin: 'Meriden, England',
    description: 'The godfathers of grindcore. They pushed metal to its absolute limit of speed and noise while maintaining a strong political and social conscience.',
    members: ['Barney Greenway', 'Shane Embury', 'Danny Herrera', 'Mitch Harris'],
    mostKnownSongs: ['You Suffer', 'Suffer the Children', 'Scum', 'When All Is Said and Done'],
    albums: [
      { title: 'Scum', year: 1987 },
      { title: 'From Enslavement to Obliteration', year: 1988 },
      { title: 'Throes of Joy in the Jaws of Defeatism', year: 2020 }
    ],
    imageUrl: 'https://distortedsoundmag.com/wp-content/uploads/2018/02/Band-Photo-Napalm-Death.jpg'
  },
  {
    id: 'killswitch-engage',
    name: 'Killswitch Engage',
    genre: 'Metalcore',
    formed: '1999',
    origin: 'Westfield, Massachusetts, USA',
    description: 'One of the leading bands of the metalcore movement, Killswitch Engage perfectly balances aggressive riffs and harsh vocals with soaring, melodic choruses.',
    members: ['Jesse Leach', 'Adam Dutkiewicz', 'Joel Stroetzel', 'Mike D\'Antonio', 'Justin Foley'],
    mostKnownSongs: ['My Last Serenade', 'The End of Heartache', 'My Curse', 'Holy Diver (Cover)'],
    albums: [
      { title: 'Alive or Just Breathing', year: 2002 },
      { title: 'The End of Heartache', year: 2004 },
      { title: 'As Daylight Dies', year: 2006 },
      { title: 'Atonement', year: 2019 }
    ],
    imageUrl: 'https://i0.wp.com/www.sonicperspectives.com/wp-content/uploads/2024/11/Killswitch-Engage.jpg?fit=2000%2C1334&ssl=1'
  },
  {
    id: 'yngwie-malmsteen',
    name: 'Yngwie Malmsteen',
    genre: 'Neoclassical Metal',
    formed: '1970s',
    origin: 'Stockholm, Sweden',
    description: 'The master of neoclassical shred. Yngwie Malmsteen brought the influence of Bach and Paganini to the electric guitar, creating a new standard for technical speed and precision.',
    members: ['Yngwie Malmsteen'],
    mostKnownSongs: ['Black Star', 'Far Beyond the Sun', 'Rising Force', 'I\'ll See the Light Tonight'],
    albums: [
      { title: 'Rising Force', year: 1984 },
      { title: 'Marching Out', year: 1985 },
      { title: 'Trilogy', year: 1986 },
      { title: 'Parabellum', year: 2021 }
    ],
    imageUrl: 'https://facts.net/wp-content/uploads/2023/10/11-extraordinary-facts-about-yngwie-malmsteen-1697558723.jpg'
  },
  {
    id: 'tool',
    name: 'Tool',
    genre: 'Progressive Metal / Alternative Metal',
    formed: '1990',
    origin: 'Los Angeles, California, USA',
    description: 'Known for their complex time signatures, philosophical lyrics, and stunning visual art. Tool is a thinking person\'s metal band, blending art rock with heavy intensity.',
    members: ['Maynard James Keenan', 'Adam Jones', 'Danny Carey', 'Justin Chancellor'],
    mostKnownSongs: ['Schism', 'Sober', 'Forty Six & 2', 'The Pot', 'Pneuma'],
    albums: [
      { title: 'Ænima', year: 1996 },
      { title: 'Lateralus', year: 2001 },
      { title: '10,000 Days', year: 2006 },
      { title: 'Fear Inoculum', year: 2019 }
    ],
    imageUrl: 'https://bunny-wp-pullzone-cfq8jqyfsb.b-cdn.net/wp-content/uploads/2023/10/tool-band-2024-tour-dates-1-1536x864.jpeg'
  },
  {
    id: 'anthrax',
    name: 'Anthrax',
    genre: 'Thrash Metal',
    formed: '1981',
    origin: 'New York City, New York, USA',
    description: 'The East Coast representative of the "Big Four." Anthrax brought a unique sense of humor and crossover energy to thrash, famously collaborating with Public Enemy.',
    members: ['Joey Belladonna', 'Scott Ian', 'Charlie Benante', 'Frank Bello', 'Jonathan Donais'],
    mostKnownSongs: ['Madhouse', 'Caught in a Mosh', 'Indians', "Bring the Noise"],
    albums: [
      { title: 'Among the Living', year: 1987 },
      { title: 'Persistance of Time', year: 1990 },
      { title: 'Sound of White Noise', year: 1993 }
    ],
    imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2020/02/Anthrax-GettyImages-85847260a.jpg'
  },
  {
    id: 'sepultura',
    name: 'Sepultura',
    genre: 'Groove Metal / Latin Metal',
    formed: '1984',
    origin: 'Belo Horizonte, Brazil',
    description: 'Brazil\'s greatest musical export. Sepultura evolved from raw death/thrash into a groove-driven machine that incorporated tribal rhythms, defining the "Roots" of modern heavy music.',
    members: ['Andreas Kisser', 'Paulo Jr.', 'Derrick Green', 'Eloy Casagrande'],
    mostKnownSongs: ['Roots Bloody Roots', 'Refuse/Resist', 'Territory', 'Arise'],
    albums: [
      { title: 'Beneath the Remains', year: 1989 },
      { title: 'Arise', year: 1991 },
      { title: 'Chaos A.D.', year: 1993 },
      { title: 'Roots', year: 1996 }
    ],
    imageUrl: 'https://d12xfkzf9kx8ij.cloudfront.net/a0KQw000002zF10MAE_original.jpeg'
  },
  {
    id: 'opeth',
    name: 'Opeth',
    genre: 'Progressive Metal',
    formed: '1989',
    origin: 'Stockholm, Sweden',
    description: 'Mikael Åkerfeldt\'s masterpiece. Opeth is known for blending beautiful acoustic passages and melancholic melodies with brutal death metal and complex progressive structures.',
    members: ['Mikael Åkerfeldt', 'Martín Méndez', 'Martin Axenrot', 'Fredrik Åkesson'],
    mostKnownSongs: ['Ghost of Perdition', 'Blackwater Park', 'Deliverance', 'The Drapery Falls'],
    albums: [
      { title: 'Blackwater Park', year: 2001 },
      { title: 'Deliverance', year: 2002 },
      { title: 'Damnation', year: 2003 },
      { title: 'Ghost Reveries', year: 2005 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.bfcdc441c26f8e381a03ae563c023e80?rik=p1x%2fopKlpoyTJg&riu=http%3a%2f%2fwww.opeth.com%2fimages%2f2024%2f03%2f07%2fopeth_band.jpg&ehk=x2d%2fFeIhevtKVTM8rXDf97M%2f6vU5%2fWMIV37jyOSMhBc%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'nightwish',
    name: 'Nightwish',
    genre: 'Symphonic Metal',
    formed: '1996',
    origin: 'Kitee, Finland',
    description: 'The definitive symphonic metal band. Combining cinematic orchestrations with heavy metal power and operatic vocals, Nightwish created a fantasy world in musical form.',
    members: ['Tuomas Holopainen', 'Floor Jansen', 'Emppu Vuorinen', 'Troy Donockley'],
    mostKnownSongs: ['Ghost Love Score', 'Wish I Had an Angel', 'Nemo', 'Sleeping Sun'],
    albums: [
      { title: 'Oceanborn', year: 1998 },
      { title: 'Wishmaster', year: 2000 },
      { title: 'Once', year: 2004 },
      { title: 'Human. :II: Nature.', year: 2020 }
    ],
    imageUrl: 'https://images2.alphacoders.com/570/thumb-1920-570241.jpg'
  },
  {
    id: 'deftones',
    name: 'Deftones',
    genre: 'Alternative Metal / Nu Metal',
    formed: '1988',
    origin: 'Sacramento, California, USA',
    description: 'Often called the "Radiohead of Metal," Deftones blend massive, heavy riffs with ethereal, shoegaze-inspired atmospheres and Chino Moreno\'s dynamic vocal range.',
    members: ['Chino Moreno', 'Stephen Carpenter', 'Abe Cunningham', 'Frank Delgado'],
    mostKnownSongs: ['Change (In the House of Flies)', 'My Own Summer (Shove It)', 'Digital Bath', 'Be Quiet and Drive'],
    albums: [
      { title: 'Around the Fur', year: 1997 },
      { title: 'White Pony', year: 2000 },
      { title: 'Diamond Eyes', year: 2010 },
      { title: 'Ohms', year: 2020 }
    ],
    imageUrl: 'https://wallpapers.com/images/high/deftones-band-group-photo-3dxhihn6sfmrgmdk.webp'
  },
  {
    id: 'linkin-park',
    name: 'Linkin Park',
    genre: 'Nu Metal',
    formed: '1996',
    origin: 'Agoura Hills, California, USA',
    description: 'One of the best-selling bands of the 21st century. Linkin Park perfectly fused metal, hip-hop, and electronic music, led by the incomparable Chester Bennington.',
    members: ['Chester Bennington (Late)', 'Mike Shinoda', 'Joe Hahn', 'Brad Delson', 'Dave Farrell'],
    mostKnownSongs: ['In the End', 'Numb', 'Crawling', 'One Step Closer', 'What I\'ve Done'],
    albums: [
      { title: 'Hybrid Theory', year: 2000 },
      { title: 'Meteora', year: 2003 },
      { title: 'Minutes to Midnight', year: 2007 },
      { title: 'The Hunting Party', year: 2014 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.7b07fc4688b4717b393c2f4f604db230?rik=mi5erA6e1c7xPw&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f2560x1600%2f2012%2fMusic_Linkin_Park_2012_034659_.jpg&ehk=CZBXojdmdyb0eQLBGi9g1m4Pk9TeClWWC0H%2fhUYH9oE%3d&risl=1&pid=ImgRaw&r=0'
  },
  {
    id: 'alice-in-chains',
    name: 'Alice in Chains',
    genre: 'Alternative Metal / Grunge',
    formed: '1987',
    origin: 'Seattle, Washington, USA',
    description: 'The heaviest of the Seattle "Big Four" grunge bands. Known for Layne Staley\'s haunting vocals and Jerry Cantrell\'s sludge-inflected riffs and vocal harmonies.',
    members: ['Jerry Cantrell', 'Sean Kinney', 'Mike Inez', 'William DuVall'],
    mostKnownSongs: ['Man in the Box', 'Rooster', 'Would?', 'Nutshell', 'The Them Bones'],
    albums: [
      { title: 'Facelift', year: 1990 },
      { title: 'Dirt', year: 1992 },
      { title: 'Jar of Flies', year: 1994 },
      { title: 'Rainier Fog', year: 2018 }
    ],
    imageUrl: 'https://townsquare.media/site/366/files/2021/04/Alice-in-Chains-Top-10s.jpg'
  },
  {
    id: 'lamb-of-god',
    name: 'Lamb of God',
    genre: 'Groove Metal',
    formed: '1994',
    origin: 'Richmond, Virginia, USA',
    description: 'A leading force in the New Wave of American Heavy Metal. Known for their intricate, groove-oriented riffs and Randy Blythe\'s powerful, distinctive vocals.',
    members: ['Randy Blythe', 'Mark Morton', 'Willie Adler', 'John Campbell', 'Art Cruz'],
    mostKnownSongs: ['Redneck', 'Laid to Rest', 'Walk with Me in Hell', '512'],
    albums: [
      { title: 'Ashes of the Wake', year: 2004 },
      { title: 'Sacrament', year: 2006 },
      { title: 'Wrath', year: 2009 },
      { title: 'Omens', year: 2022 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.0fd867d43dd8445b2b3da14d31bc5223?rik=IqDrSRB26W6g4A&riu=http%3a%2f%2fwww.laut.de%2fLamb-Of-God%2flamb-of-god-162986.jpg&ehk=gM2hN6Vh5e3XIA1oftAqprx0A0VbQY3nJINTpHGfnP8%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'rage-against-the-machine',
    name: 'Rage Against the Machine',
    genre: 'Rap Metal / Alternative Metal',
    formed: '1991',
    origin: 'Los Angeles, California, USA',
    description: 'A explosive mix of hard rock, punk, and hip-hop. RATM is legendary for their political activism and Tom Morello\'s sonic-pioneering guitar work.',
    members: ['Zack de la Rocha', 'Tom Morello', 'Tim Commerford', 'Brad Wilk'],
    mostKnownSongs: ['Killing in the Name', 'Bulls on Parade', 'Guerrilla Radio', 'Sleep Now in the Fire'],
    albums: [
      { title: 'Rage Against the Machine', year: 1992 },
      { title: 'Evil Empire', year: 1996 },
      { title: 'The Battle of Los Angeles', year: 1999 }
    ],
    imageUrl: 'https://guitar.com/wp-content/uploads/2021/06/Rage-Against-The-Machine-Credit-Gie-Knaeps-Getty-Images@2560x1625-696x442.jpg'
  },
  {
    id: 'type-o-negative',
    name: 'Type O Negative',
    genre: 'Gothic Metal',
    formed: '1989',
    origin: 'Brooklyn, New York, USA',
    description: 'The "Drab Four." Led by the towering Peter Steele, Type O Negative created a unique brand of self-deprecating gothic metal that was both crushingly heavy and darkly romantic.',
    members: ['Peter Steele (Late)', 'Kenny Hickey', 'Josh Silver', 'Johnny Kelly'],
    mostKnownSongs: ['Black No. 1', 'Christian Woman', 'Love You to Death', 'My Girlfriend\'s Girlfriend'],
    albums: [
      { title: 'Bloody Kisses', year: 1993 },
      { title: 'October Rust', year: 1996 },
      { title: 'World Coming Down', year: 1999 },
      { title: 'Dead Again', year: 2007 }
    ],
    imageUrl: 'https://www.metalzone.fr/wp-content/uploads/2020/10/type-o-negative-1200x666.jpg.webp'
  },
  {
    id: 'emperor',
    name: 'Emperor',
    genre: 'Black Metal',
    formed: '1991',
    origin: 'Notodden, Norway',
    description: 'The masters of symphonic black metal. Emperor elevated the genre with sophisticated compositions, atmospheric clapes, and Ihsahn\'s visionary songwriting.',
    members: ['Ihsahn', 'Samoth', 'Faust', 'Trym Torson'],
    mostKnownSongs: ['I Am the Black Wizards', 'Inno a Satana', 'Thus Spake the Nightspirit'],
    albums: [
      { title: 'In the Nightside Eclipse', year: 1994 },
      { title: 'Anthems to the Welkin at Dusk', year: 1997 },
      { title: 'Prometheus: The Discipline of Fire & Demise', year: 2001 }
    ],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgW-02Xp4iH5mq20CLi0iARBPdFhGXj4jGfueDYwdqyYhaK5Me-0iMTCM6XlDkU-EJtJVt7R_JgxAd53vGoZzEJbWOFzOOFO91tTSa8wq56OcNPiVTqYkTSismzef8EFDlkip2rhwz7GNRL/s1600/Emperor-band-logo.jpg'
  },
  {
    id: 'deep-purple',
    name: 'Deep Purple',
    genre: 'Heavy Metal / Hard Rock',
    formed: '1968',
    origin: 'Hertford, England',
    description: 'Part of the "Unholy Trinity" of British hard rock and heavy metal along with Led Zeppelin and Black Sabbath. Their virtuosic musicianship and heavy sound influenced countless bands.',
    members: ['Ian Gillan', 'Ritchie Blackmore', 'Jon Lord', 'Roger Glover', 'Ian Paice'],
    mostKnownSongs: ['Smoke on the Water', 'Highway Star', 'Burn', 'Child in Time'],
    albums: [
      { title: 'Deep Purple in Rock', year: 1970 },
      { title: 'Machine Head', year: 1972 },
      { title: 'Burn', year: 1974 }
    ],
    imageUrl: 'https://images8.alphacoders.com/402/thumb-1920-402937.jpg'
  },
  {
    id: 'sabaton',
    name: 'Sabaton',
    genre: 'Power Metal',
    formed: '1999',
    origin: 'Falun, Sweden',
    description: 'The storytellers of metal. Sabaton is famous for their anthemic power metal and lyrics exclusively focused on historical wars and acts of heroism.',
    members: ['Joakim Brodén', 'Pär Sundström', 'Chris Rörland', 'Hannes Van Dahl', 'Tommy Johansson'],
    mostKnownSongs: ['Primo Victoria', 'The Last Stand', 'Ghost Division', 'Bismarck'],
    albums: [
      { title: 'Primo Victoria', year: 2005 },
      { title: 'The Art of War', year: 2008 },
      { title: 'Carolus Rex', year: 2012 },
      { title: 'The War to End All Wars', year: 2022 }
    ],
    imageUrl: 'https://www.breathemein.net/wp-content/uploads/2013/03/Sabaton.jpg'
  },
  {
    id: 'avenged-sevenfold',
    name: 'Avenged Sevenfold',
    genre: 'Metalcore / Heavy Metal',
    formed: '1999',
    origin: 'Huntington Beach, California, USA',
    description: 'Evolving from metalcore into a global heavy metal powerhouse, A7X is known for their technical proficiency, dual guitar harmonies, and the legacy of The Rev.',
    members: ['M. Shadows', 'Synyster Gates', 'Zacky Vengeance', 'Johnny Christ', 'Brooks Wackerman'],
    mostKnownSongs: ['Bat Country', 'Nightmare', 'Hail to the King', 'Unholy Confessions', 'The Stage'],
    albums: [
      { title: 'City of Evil', year: 2005 },
      { title: 'Avenged Sevenfold', year: 2007 },
      { title: 'Nightmare', year: 2010 },
      { title: 'Life Is But a Dream...', year: 2023 }
    ],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgA9EML3ZFEzw3d3WBlDaEJ-BoYMjFoNWtD_uC9i_3F8gBFvf2X5crVVg2Ux7zuPaLeESOH5ITTrUCvFFcwcJp4FmkgYvVm3LKmyDMqOWIZVVr6FXjSZewrPCfPv0evxo82hl9FyH8Njs/s1600/avanged+sevenfold+%287%29.jpg'
  },
  {
    id: 'faith-no-more',
    name: 'Faith No More',
    genre: 'Alternative Metal / Funk Metal',
    formed: '1979',
    origin: 'San Francisco, California, USA',
    description: 'True chameleons of rock and metal. Faith No More blended funk, hip-hop, soul, and heavy metal, led by the multi-talented Mike Patton.',
    members: ['Mike Patton', 'Billy Gould', 'Mike Bordin', 'Roddy Bottum', 'Jon Hudson'],
    mostKnownSongs: ['Epic', 'Midlife Crisis', 'Ashes to Ashes', 'Falling to Pieces'],
    albums: [
      { title: 'The Real Thing', year: 1989 },
      { title: 'Angel Dust', year: 1992 },
      { title: 'King for a Day... Fool for a Lifetime', year: 1995 }
    ],
    imageUrl: 'https://f4.bcbits.com/img/0018053356_10.jpg'
  },
  {
    id: 'van-halen',
    name: 'Van Halen',
    genre: 'Hard Rock / Glam Metal',
    formed: '1972',
    origin: 'Pasadena, California, USA',
    description: 'The band that redefined guitar playing forever. Eddie Van Halen\'s revolutionary "tapping" technique and the band\'s high-energy arena rock set the stage for the 80s metal explosion.',
    members: ['Eddie Van Halen (Late)', 'David Lee Roth', 'Alex Van Halen', 'Michael Anthony'],
    mostKnownSongs: ['Eruption', 'Jump', 'Panama', 'Ain\'t Talkin\' \'Bout Love', 'Hot for Teacher'],
    albums: [
      { title: 'Van Halen', year: 1978 },
      { title: '1984', year: 1984 },
      { title: '5150', year: 1986 }
    ],
    imageUrl: 'https://igormiranda.com.br/wp-content/uploads/2022/07/van-halen-formacao-original.jpg'
  },
  {
    id: 'motley-crue',
    name: 'Mötley Crüe',
    genre: 'Glam Metal',
    formed: '1981',
    origin: 'Los Angeles, California, USA',
    description: 'The prototypical "bad boys" of the Sunset Strip. Mötley Crüe combined heavy metal intensity with punk attitude and massive pop hooks, defining the 80s glam era.',
    members: ['Nikki Sixx', 'Tommy Lee', 'Vince Neil', 'Mick Mars', 'John 5'],
    mostKnownSongs: ['Kickstart My Heart', 'Dr. Feelgood', 'Girls, Girls, Girls', 'Home Sweet Home'],
    albums: [
      { title: 'Shout at the Devil', year: 1983 },
      { title: 'Theatre of Pain', year: 1985 },
      { title: 'Dr. Feelgood', year: 1989 }
    ],
    imageUrl: 'https://i.pinimg.com/1200x/71/d9/19/71d919f2467be42ec460735093ff4877.jpg'
  },
  {
    id: 'venom',
    name: 'Venom',
    genre: 'Speed Metal / Black Metal',
    formed: '1979',
    origin: 'Newcastle upon Tyne, England',
    description: 'The band that gave black metal its name. Venom\'s raw, Satanic imagery and fast, unpolished sound paved the way for the entire extreme metal underground.',
    members: ['Cronos', 'Mantas', 'Abaddon'],
    mostKnownSongs: ['Black Metal', 'Countess Bathory', 'Welcome to Hell', 'In League with Satan'],
    albums: [
      { title: 'Welcome to Hell', year: 1981 },
      { title: 'Black Metal', year: 1982 },
      { title: 'At War with Satan', year: 1984 }
    ],
    imageUrl: 'https://vinyl-records.nl/nwobhm/photo-gallery/venom/eine-kleine-nachtmusik/A0400-VENOM-Bandphoto.jpg'
  },
  {
    id: 'candlemass',
    name: 'Candlemass',
    genre: 'Doom Metal',
    formed: '1984',
    origin: 'Stockholm, Sweden',
    description: 'The masters of "Epic Doom." Candlemass combined the slow weight of Sabbath with operatic vocals and grand orchestral scale, creating a new standard for doom.',
    members: ['Leif Edling', 'Johan Längquist', 'Mappe Björkman', 'Lars Johansson', 'Jan Lindh'],
    mostKnownSongs: ['Solitude', 'Bewitched', 'Mirror Mirror', 'At the Gallows End'],
    albums: [
      { title: 'Epicus Doomicus Metallicus', year: 1986 },
      { title: 'Nightfall', year: 1987 },
      { title: 'Ancient Dreams', year: 1988 }
    ],
    imageUrl: 'https://i0.wp.com/www.sonicperspectives.com/wp-content/uploads/2022/11/Candlemass-Featured.jpg?fit=1800%2C1200&ssl=1'
  },
  {
    id: 'architects',
    name: 'Architects',
    genre: 'Metalcore / Progressive Metalcore',
    formed: '2004',
    origin: 'Brighton, England',
    description: 'One of the most important modern metalcore bands. Known for Sam Carter\'s powerful vocals, technical riffs, and deeply emotional lyrics often reflecting on human existence and society.',
    members: ['Sam Carter', 'Dan Searle', 'Adam Christianson', 'Alex Dean'],
    mostKnownSongs: ['Gone with the Wind', 'Doomsday', 'Animals', 'Naysayer'],
    albums: [
      { title: 'Lost Forever // Lost Together', year: 2014 },
      { title: 'All Our Gods Have Abandoned Us', year: 2016 },
      { title: 'Holy Hell', year: 2018 }
    ],
    imageUrl: 'https://www.nme.com/wp-content/uploads/2022/01/2022_Architects_EdMason_2000x1270-1392x884.jpg'
  },
  {
    id: 'bring-me-the-horizon',
    name: 'Bring Me The Horizon',
    genre: 'Metalcore / Alternative Rock',
    formed: '2004',
    origin: 'Sheffield, England',
    description: 'The masters of evolution. BMTH started as a deathcore band and transformed into a genre-defying electronic rock phenomenon, constantly pushing the boundaries of heavy music.',
    members: ['Oli Sykes', 'Lee Malia', 'Matt Kean', 'Matt Nicholls'],
    mostKnownSongs: ['Can You Feel My Heart', 'Shadow Moses', 'Throne', 'Teardrops', 'Parasite Eve'],
    albums: [
      { title: 'Sempiternal', year: 2013 },
      { title: 'That\'s the Spirit', year: 2015 },
      { title: 'POST HUMAN: SURVIVAL HORROR', year: 2020 }
    ],
    imageUrl: 'https://festileaks.com/wp-content/uploads/2016/05/bring-me-the-horizon.jpg'
  },
  {
    id: 'blind-guardian',
    name: 'Blind Guardian',
    genre: 'Power Metal',
    formed: '1984',
    origin: 'Krefeld, West Germany',
    description: 'The "Tolkien of Metal." Blind Guardian is world-renowned for their complex, choir-layered power metal and deep mythological story-telling.',
    members: ['Hansi Kürsch', 'André Olbrich', 'Marcus Siepen', 'Frederik Ehmke'],
    mostKnownSongs: ['The Bard\'s Song', 'Mirror Mirror', 'Valhalla', 'Nightfall'],
    albums: [
      { title: 'Somewhere Far Beyond', year: 1992 },
      { title: 'Imaginations from the Other Side', year: 1995 },
      { title: 'Nightfall in Middle-Earth', year: 1998 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.b45d788d58d0bf2f79b3ecaabf7fa4ab?rik=oKnHAvf7zEaHKw&riu=http%3a%2f%2fwww.powerlinemag.com%2fwp-content%2fuploads%2f2012%2f08%2fBlind-Guardian-promo-photo.jpg&ehk=r14Df1VUdY2mQu01IZ3AscGNWlF6ZFoeD%2bPyfrazwpY%3d&risl=1&pid=ImgRaw&r=0'
  },
  {
    id: 'machine-head',
    name: 'Machine Head',
    genre: 'Groove Metal / Thrash Metal',
    formed: '1991',
    origin: 'Oakland, California, USA',
    description: 'Fronted by Robb Flynn, Machine Head defined the mid-90s groove metal sound with "Burn My Eyes" and later pushed into epic thrash territory with "The Blackening."',
    members: ['Robb Flynn', 'Jared MacEachern'],
    mostKnownSongs: ['Davidian', 'Halo', 'Aesthetics of Hate', 'Locust'],
    albums: [
      { title: 'Burn My Eyes', year: 1994 },
      { title: 'The Blackening', year: 2007 },
      { title: 'Unto the Locust', year: 2011 }
    ],
    imageUrl: 'https://images.kerrangcdn.com/images/Machine-Head-February-2025-promo.jpg?auto=compress&fit=max&w=3840'
  },
  {
    id: 'primus',
    name: 'Primus',
    genre: 'Funk Metal / Alternative Rock',
    formed: '1984',
    origin: 'El Sobrante, California, USA',
    description: "Les Claypool's weird and wonderful trio. Primus is completely unique, blending virtuous slap-bass, odd time signatures, and quirky storytelling.",
    members: ['Les Claypool', 'Larry LaLonde', 'Tim Alexander'],
    mostKnownSongs: ['Jerry Was a Race Car Driver', 'My Name Is Mud', 'Tommy the Cat'],
    albums: [
      { title: 'Frizzle Fry', year: 1990 },
      { title: 'Sailing the Seas of Cheese', year: 1991 },
      { title: 'Pork Soda', year: 1993 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.d544d47af3d16db8ce7ecb9128e28ec8?rik=cTdJbOX6f81ptw&riu=http%3a%2f%2fwww.theredrocksamphitheater.com%2fwp-content%2fuploads%2f2017%2f01%2fPrimusBand-G3-167-1.jpg&ehk=rNThHaHZJsFhSFkM7U3OHsHlCpwKLOMEPRbltisYYJA%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'bathory',
    name: 'Bathory',
    genre: 'Black Metal / Viking Metal',
    formed: '1983',
    origin: 'Stockholm, Sweden',
    description: 'The one-man project of Quorthon. Bathory was instrumental in the first wave of black metal and later founded the Viking metal subgenre.',
    members: ['Quorthon (Late Founder)'],
    mostKnownSongs: ['Satan My Master', 'Blood Fire Death', 'One Rode to Asa Bay'],
    albums: [
      { title: 'Bathory', year: 1984 },
      { title: 'Under the Sign of the Black Mark', year: 1987 },
      { title: 'Hammerheart', year: 1990 }
    ],
    imageUrl: 'https://wallpapercave.com/wp/wp1983739.jpg'
  },
  {
    id: 'within-temptation',
    name: 'Within Temptation',
    genre: 'Symphonic Metal',
    formed: '1996',
    origin: 'Waddinxveen, Netherlands',
    description: 'Led by Sharon den Adel, Within Temptation is one of the pillars of the symphonic metal scene, moving from gothic roots to big, cinematic alternative metal.',
    members: ['Sharon den Adel', 'Robert Westerholt', 'Jeroen van Veen', 'Ruud Jolie'],
    mostKnownSongs: ['Mother Earth', 'Ice Queen', 'Stand My Ground', 'What About Us?'],
    albums: [
      { title: 'Mother Earth', year: 2000 },
      { title: 'The Silent Force', year: 2004 },
      { title: 'The Heart of Everything', year: 2007 },
      { title: 'Resist', year: 2019 }
    ],
    imageUrl: 'https://wallpapercat.com/w/full/e/e/3/1283603-2000x1125-desktop-hd-within-temptation-wallpaper-photo.jpg'
  },
  {
    id: 'stryper',
    name: 'Stryper',
    genre: 'Christian Metal / Glam Metal',
    formed: '1983',
    origin: 'Orange County, California, USA',
    description: 'The most successful Christian metal band in history. Known for their yellow and black stripes and for bringing faith to the hair metal scene.',
    members: ['Michael Sweet', 'Robert Sweet', 'Oz Fox', 'Perry Richardson'],
    mostKnownSongs: ['To Hell with the Devil', 'Honestly', 'Calling on You', 'Soldiers Under Command'],
    albums: [
      { title: 'Soldiers Under Command', year: 1985 },
      { title: 'To Hell with the Devil', year: 1986 },
      { title: 'In God We Trust', year: 1988 }
    ],
    imageUrl: 'https://www.billboard.com/wp-content/uploads/2020/09/stryper-2020-press-cr-Pedro-Blanco-billboard-1548-1600287878.jpg'
  },
  {
    id: 'testament',
    name: 'Testament',
    genre: 'Thrash Metal',
    formed: '1983',
    origin: 'Berkeley, California, USA',
    description: 'One of the most technically gifted bands of the thrash era. Testament combined melodic sensibilities with sheer aggression, often cited as the "5th member" of the Big Four.',
    members: ['Chuck Billy', 'Eric Peterson', 'Alex Skolnick', 'Steve Di Giorgio', 'Chris Dovas'],
    mostKnownSongs: ['Practice What You Preach', 'Over the Wall', 'The New Order', 'Disciples of the Watch'],
    albums: [
      { title: 'The Legacy', year: 1987 },
      { title: 'The New Order', year: 1988 },
      { title: 'The Gathering', year: 1999 }
    ],
    imageUrl: 'https://images7.alphacoders.com/400/thumb-1920-400377.jpg'
  },
  {
    id: 'morbid-angel',
    name: 'Morbid Angel',
    genre: 'Death Metal',
    formed: '1983',
    origin: 'Tampa, Florida, USA',
    description: 'Pioneers of the Florida death metal scene. Morbid Angel introduced complex, non-standard song structures and occult themes, defining the genre\'s evolution.',
    members: ['Trey Azagthoth', 'Steve Tucker'],
    mostKnownSongs: ['Chapel of Ghouls', 'Immortal Rites', 'Fall from Grace', 'Where the Slime Live'],
    albums: [
      { title: 'Altars of Madness', year: 1989 },
      { title: 'Blessed Are the Sick', year: 1991 },
      { title: 'Covenant', year: 1993 }
    ],
    imageUrl: 'https://www.season-of-mist.com/wp-content/uploads/2020/03/Morbid-Angel-Band-01-2011-by-Alex-Solca-scaled.jpg'
  },
  {
    id: 'mastodon',
    name: 'Mastodon',
    genre: 'Progressive Metal / Sludge Metal',
    formed: '2000',
    origin: 'Atlanta, Georgia, USA',
    description: 'One of the most critically acclaimed metal bands of the 21st century. Mastodon blends crushing sludge intensity with intricate progressive compositions and concept-driven albums.',
    members: ['Troy Sanders', 'Brent Hinds', 'Bill Kelliher', 'Brann Dailor'],
    mostKnownSongs: ['Blood and Thunder', 'The Motherload', 'Oblivion', 'Curl of the Burl'],
    albums: [
      { title: 'Leviathan', year: 2004 },
      { title: 'Blood Mountain', year: 2006 },
      { title: 'Crack the Skye', year: 2009 },
      { title: 'Hushed and Grim', year: 2021 }
    ],
    imageUrl: 'https://ca-times.brightspotcdn.com/dims4/default/9babba7/2147483647/strip/true/crop/2048x1365+0+0/resize/1440x960!/quality/90/?url=https:%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9f%2F2f%2Fc27921bb55b4416b0db092fd0af3%2Fla-et-mastodon-at-amoeba-pictures-013'
  },
  {
    id: 'saxon',
    name: 'Saxon',
    genre: 'Heavy Metal',
    formed: '1977',
    origin: 'Barnsley, England',
    description: 'One of the leaders of the New Wave of British Heavy Metal. Saxon is known for their high-energy live shows and anthemic heavy metal songs about motorcycles and history.',
    members: ['Biff Byford', 'Nigel Glockler', 'Doug Scarratt', 'Nibbs Carter', 'Brian Tatler'],
    mostKnownSongs: ['Wheels of Steel', '747 (Strangers in the Night)', 'Princess of the Night', 'Denim and Leather'],
    albums: [
      { title: 'Wheels of Steel', year: 1980 },
      { title: 'Strong Arm of the Law', year: 1980 },
      { title: 'Denim and Leather', year: 1981 }
    ],
    imageUrl: 'https://www.musiclifemagazine.net/wp-content/uploads/2018/05/band.jpg'
  },
  {
    id: 'kreator',
    name: 'Kreator',
    genre: 'Thrash Metal',
    formed: '1982',
    origin: 'Essen, West Germany',
    description: 'The most influential of the "Big Three" of Teutonic thrash metal. Kreator is known for their brutal, fast-paced sound and Mille Petrozza\'s aggressive vocals.',
    members: ['Mille Petrozza', 'Jürgen "Ventor" Reil', 'Christian "Speesy" Giesler', 'Frédéric Leclercq'],
    mostKnownSongs: ['Pleasure to Kill', 'Extreme Aggression', 'Phobia', 'Violent Revolution', 'Hate Über Alles'],
    albums: [
      { title: 'Pleasure to Kill', year: 1986 },
      { title: 'Extreme Aggression', year: 1989 },
      { title: 'Coma of Souls', year: 1990 },
      { title: 'Violent Revolution', year: 2001 }
    ],
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5e284372a502537a6fc07767/9a74197a-d8bc-4ef0-bd2b-a52a2a16431e/Kreator+banner-min.jpg'
  },
  {
    id: 'deicide',
    name: 'Deicide',
    genre: 'Death Metal',
    formed: '1987',
    origin: 'Tampa, Florida, USA',
    description: 'Lead by Glen Benton, Deicide is one of the most controversial and influential death metal bands, known for their anti-religious themes and relentless speed.',
    members: ['Glen Benton', 'Steve Asheim', 'Kevin Quirion', 'Taylor Nordberg'],
    mostKnownSongs: ['Sacificial Suicide', 'Dead by Dawn', 'Homage for Satan', 'Once Upon the Cross'],
    albums: [
      { title: 'Deicide', year: 1990 },
      { title: 'Legion', year: 1992 },
      { title: 'Once Upon the Cross', year: 1995 }
    ],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEohwT5ebKdQJM0fUircV4NVmCm1LOwbMnW7n62Ih1eS04caib4G2ojiXwqJCyNgznGyTFIHAOcGGbGEP_fUhKE4pKYx5xRtl2cNfm_86-hQUuKW3f_72j8Cz9TwuR9dbyiL47NoT8SS5IAUmU3fmO05ULutyovTSLtfa3EqF0x2ZyrNds9HIhAG8vrqf4/s16000/278165309_544371463713954_1965229343102398952_n.jpg'
  },
  {
    id: 'obituary',
    name: 'Obituary',
    genre: 'Death Metal',
    formed: '1984',
    origin: 'Tampa, Florida, USA',
    description: 'The masters of the slow-and-heavy death metal groove. Obituary is famous for John Tardy\'s unique vocal delivery and their massive, sludge-like production.',
    members: ['John Tardy', 'Donald Tardy', 'Trevor Peres', 'Terry Butler', 'Ken Andrews'],
    mostKnownSongs: ['Slowly We Rot', 'Chopped in Half', 'Cause of Death', 'Visions in My Head'],
    albums: [
      { title: 'Slowly We Rot', year: 1989 },
      { title: 'Cause of Death', year: 1990 },
      { title: 'The End Complete', year: 1992 }
    ],
    imageUrl: 'https://www.summer-breeze.de/wp-content/uploads/2024/08/11/Obituary_web.jpg'
  },
  {
    id: 'burzum',
    name: 'Burzum',
    genre: 'Black Metal',
    formed: '1991',
    origin: 'Bergen, Norway',
    description: 'The one-man project of Varg Vikernes. Burzum defined the atmospheric and ambient side of the second wave of Norwegian black metal.',
    members: ['Varg Vikernes'],
    mostKnownSongs: ['Dunkelheit', 'Lost Wisdom', 'Jesus\' Tod', 'Erblicket die Töchter des Firmaments'],
    albums: [
      { title: 'Burzum', year: 1992 },
      { title: 'Filosofem', year: 1996 },
      { title: 'Hvis lyset tar oss', year: 1994 }
    ],
    imageUrl: 'https://returnofrock.com/wp-content/uploads/2021/07/Kreator-songs-1360x765.jpg'
  },
  {
    id: 'darkthrone',
    name: 'Darkthrone',
    genre: 'Black Metal',
    formed: '1986',
    origin: 'Kolbotn, Norway',
    description: 'Starting as a death metal band before becoming one of the most cult black metal acts. Darkthrone is known for their raw "unholy" sound and refusal to play live.',
    members: ['Fenriz', 'Nocturno Culto'],
    mostKnownSongs: ['Transilvanian Hunger', 'In the Shadow of the Horns', 'Quintessence', 'A Blaze in the Northern Sky'],
    albums: [
      { title: 'A Blaze in the Northern Sky', year: 1992 },
      { title: 'Under a Funeral Moon', year: 1993 },
      { title: 'Transilvanian Hunger', year: 1994 }
    ],
    imageUrl: 'https://chaoszine.net/wp-content/uploads/2022/08/darkthrone-2021.jpg'
  },
  {
    id: 'immortal',
    name: 'Immortal',
    genre: 'Black Metal',
    formed: '1991',
    origin: 'Bergen, Norway',
    description: 'Famous for their "Blashyrkh" mythology and high-speed cold riffing. Immortal avoided the political controversy of their peers, focusing on winter landscapes and fantasy themes.',
    members: ['Demonaz Doom Occulta', 'Abbath Doom Occulta (Former)', 'Horgh (Former)'],
    mostKnownSongs: ['The Sun No Longer Rises', 'Blashyrkh (Mighty Ravendark)', 'One by One', 'All Shall Fall'],
    albums: [
      { title: 'Pure Holocaust', year: 1993 },
      { title: 'At the Heart of Winter', year: 1999 },
      { title: 'Sons of Northern Darkness', year: 2002 }
    ],
    imageUrl: 'https://wallpapercave.com/wp/wp2838847.jpg'
  },
  {
    id: 'enslaved',
    name: 'Enslaved',
    genre: 'Progressive Black Metal / Viking Metal',
    formed: '1991',
    origin: 'Haugesund, Norway',
    description: 'Evolving from traditional black/viking metal into a highly sophisticated progressive powerhouse, Enslaved remains one of the most creative forces in the Norwegian scene.',
    members: ['Grutle Kjellson', 'Ivar Bjørnson', 'Arve Isdal', 'Håkon Vinje', 'Iver Sandøy'],
    mostKnownSongs: ['Isa', 'Roots of the Mountain', '793 (Slaget om Lindisfarne)', 'Ethica Odini'],
    albums: [
      { title: 'Vikingligr Veldi', year: 1994 },
      { title: 'Frost', year: 1994 },
      { title: 'Isa', year: 2004 },
      { title: 'Heimdal', year: 2023 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.2b6c5f0125991d36dd082981aa0f0a72?rik=TU5iApvGV43b9A&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ftBBq5bQ.jpg&ehk=iKKWQFmCKVw17UGZEIRi8ytR%2fgc%2fNhV7NxjkDXGy%2bSo%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'dragonforce',
    name: 'DragonForce',
    genre: 'Power Metal',
    formed: '1999',
    origin: 'London, England',
    description: 'The masters of "extreme power metal." DragonForce is legendary for their breakneck speed, Nintendo-inspired synth sounds, and the flamboyant guitar duels of Herman Li and Sam Totman.',
    members: ['Herman Li', 'Sam Totman', 'Marc Hudson', 'Gee Anzalone', 'Alicia Vigil'],
    mostKnownSongs: ['Through the Fire and Flames', 'Fury of the Storm', 'Operation Ground and Pound', 'Cry Thunder'],
    albums: [
      { title: 'Valley of the Damned', year: 2003 },
      { title: 'Inhuman Rampage', year: 2006 },
      { title: 'The Power Within', year: 2012 }
    ],
    imageUrl: 'https://i.pinimg.com/originals/d7/12/3e/d7123e67c3d28cd62fc72f5ba83bf92c.jpg'
  },
  {
    id: 'stratovarius',
    name: 'Stratovarius',
    genre: 'Power Metal',
    formed: '1984',
    origin: 'Helsinki, Finland',
    description: 'One of the pioneers of melodic power metal. Stratovarius blended classical music influences with high-speed metal, paving the way for the entire Finnish scene.',
    members: ['Timo Kotipelto', 'Jens Johansson', 'Lauri Porra', 'Matias Kupiainen', 'Rolf Pilve'],
    mostKnownSongs: ['Black Diamond', 'Hunting High and Low', 'Eagleheart', 'Unbreakable'],
    albums: [
      { title: 'Episode', year: 1996 },
      { title: 'Visions', year: 1997 },
      { title: 'Destiny', year: 1998 },
      { title: 'Survive', year: 2022 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.51c13ef77fffc3ed041c929e9fd549d7?rik=MGHPlEKakxQKZg&riu=http%3a%2f%2fstratovarius.com%2fwp-content%2fuploads%2f2020%2f12%2fStratovarius26741.jpg&ehk=FUo%2bxwAzliRkwEmNMoc1Z5DUJB0OJ9enuP9BuYi9%2blk%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'queensryche',
    name: 'Queensrÿche',
    genre: 'Progressive Metal',
    formed: '1982',
    origin: 'Bellevue, Washington, USA',
    description: 'One of the "Big Three" of progressive metal. Queensrÿche is best known for their concept album "Operation: Mindcrime", which remains a benchmark for narrative-driven metal.',
    members: ['Geoff Tate (Classic)', 'Todd La Torre', 'Michael Wilton', 'Eddie Jackson', 'Scott Rockenfield'],
    mostKnownSongs: ['Silent Lucidity', 'Eyes of a Stranger', 'Jet City Woman', 'Empire', 'Queen of the Reich'],
    albums: [
      { title: 'The Warning', year: 1984 },
      { title: 'Rage for Order', year: 1986 },
      { title: 'Operation: Mindcrime', year: 1988 },
      { title: 'Empire', year: 1990 }
    ],
    imageUrl: 'https://i0.wp.com/www.sonicperspectives.com/wp-content/uploads/2023/09/Queensryche-Featured.jpeg?fit=1800%2C1200&ssl=1'
  },
  {
    id: 'fates-warning',
    name: 'Fates Warning',
    genre: 'Progressive Metal',
    formed: '1982',
    origin: 'Hartford, Connecticut, USA',
    description: 'Pioneers of progressive metal alongside Queensrÿche and Dream Theater. Fates Warning is known for their complex compositions and the influential songwriting of Jim Matheos.',
    members: ['Ray Alder', 'Jim Matheos', 'Joey Vera', 'Bobby Jarzombek'],
    mostKnownSongs: ['Point of View', 'Through Different Eyes', 'The Eleventh Hour', 'Monument'],
    albums: [
      { title: 'Awaken the Guardian', year: 1986 },
      { title: 'No Exit', year: 1988 },
      { title: 'Parallels', year: 1991 }
    ],
    imageUrl: 'https://fateswarning.com/wp-content/uploads/sites/2/2018/06/band20182.jpg'
  },
  {
    id: 'accept',
    name: 'Accept',
    genre: 'Heavy Metal / Speed Metal',
    formed: '1976',
    origin: 'Solingen, West Germany',
    description: 'One of the most important German heavy metal bands. Accept specialized in raw, mid-tempo anthems and high-speed aggression that influenced the thrash metal genre.',
    members: ['Mark Tornillo', 'Wolf Hoffmann', 'Uwe Lulis', 'Christopher Williams', 'Martin Motnik'],
    mostKnownSongs: ['Balls to the Wall', 'Fast as a Shark', 'Princess of the Dawn', 'Metal Heart'],
    albums: [
      { title: 'Restless and Wild', year: 1982 },
      { title: 'Balls to the Wall', year: 1983 },
      { title: 'Metal Heart', year: 1985 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.c79503e9585b4289ec39c1d2fa058e3e?rik=bJtU7hWmGzi5zA&pid=ImgRaw&r=0'
  },
  {
    id: 'exciter',
    name: 'Exciter',
    genre: 'Speed Metal',
    formed: '1978',
    origin: 'Ottawa, Ontario, Canada',
    description: 'The founders of Canadian speed metal. Exciter played an incredibly fast and raw style that was a major influence on the early thrash metal scene.',
    members: ['Dan Beehler', 'Allan Johnson', 'Daniel Dekay'],
    mostKnownSongs: ['Heavy Metal Maniac', 'Violence & Force', 'Long Live the Loud'],
    albums: [
      { title: 'Heavy Metal Maniac', year: 1983 },
      { title: 'Violence & Force', year: 1984 },
      { title: 'Long Live the Loud', year: 1985 }
    ],
    imageUrl: 'https://i0.wp.com/fullinbloom.com/wp-content/uploads/2022/09/exciterusdates-1-e1663184952469.jpg?fit=1200%2C843&ssl=1'
  },
  {
    id: 'anvil',
    name: 'Anvil',
    genre: 'Speed Metal / Heavy Metal',
    formed: '1978',
    origin: 'Toronto, Ontario, Canada',
    description: 'A highly influential band in the 80s speed metal scene, famously documented in the film "Anvil! The Story of Anvil". They were one of the first bands to combine speed with heavy metal power.',
    members: ['Steve "Lips" Kudlow', 'Robb Reiner', 'Chris Robertson'],
    mostKnownSongs: ['Metal on Metal', 'March of the Crabs', 'Forged in Fire'],
    albums: [
      { title: 'Hard \'n\' Heavy', year: 1981 },
      { title: 'Metal on Metal', year: 1982 },
      { title: 'Forged in Fire', year: 1983 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.806a98839529de10d0a3d8cca81dfc66?rik=UC0bK2Ma9KuoFw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-uMSQZE8HEss%2fVtyeOnu1mCI%2fAAAAAAAAFos%2fl5Qzj1epd6I%2fs1600%2fAnvilBand6386.jpg&ehk=OPuSGgRT8rCgQe%2bRCyr6NreUebsceokgRivVXMJQBgw%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'saint-vitus',
    name: 'Saint Vitus',
    genre: 'Doom Metal',
    formed: '1978',
    origin: 'Los Angeles, California, USA',
    description: 'One of the "big four" of doom metal. Saint Vitus stayed true to the slow, heavy Sabbath sound in an era dominated by speed, becoming icons of the underground.',
    members: ['Scott "Wino" Weinrich', 'Dave Chandler', 'Mark Adams', 'Henry Vasquez'],
    mostKnownSongs: ['Born Too Late', 'Saint Vitus', 'White Stallions', 'The Bleeding Ground'],
    albums: [
      { title: 'Saint Vitus', year: 1984 },
      { title: 'Hallow\'s Victim', year: 1985 },
      { title: 'Born Too Late', year: 1986 }
    ],
    imageUrl: 'https://www.season-of-mist.com/wp-content/uploads/2020/03/SaintVitusEsterSegarra_0603-1536x1022.jpg'
  },
  {
    id: 'sleep',
    name: 'Sleep',
    genre: 'Doom Metal / Stoner Rock',
    formed: '1990',
    origin: 'San Jose, California, USA',
    description: 'The masters of the slow, fuzzy, and weed-obsessed doom metal. Their hour-long single track "Dopesmoker" is a masterpiece of the genre.',
    members: ['Al Cisneros', 'Matt Pike', 'Jason Roeder'],
    mostKnownSongs: ['Dragonaut', 'The Druid', 'Holy Mountain', 'Dopesmoker'],
    albums: [
      { title: 'Sleep\'s Holy Mountain', year: 1992 },
      { title: 'Jerusalem', year: 1999 },
      { title: 'The Sciences', year: 2018 }
    ],
    imageUrl: 'https://i.pinimg.com/originals/2f/71/0d/2f710d0893dc20920725dec1d6446836.jpg'
  },
  {
    id: 'trouble',
    name: 'Trouble',
    genre: 'Doom Metal',
    formed: '1979',
    origin: 'Aurora, Illinois, USA',
    description: 'Combining the heavy riffs of Black Sabbath with the twin-guitar leads of Judas Priest. Trouble was one of the first bands to be labeled "Christian Metal" due to their early spiritual lyrics.',
    members: ['Eric Wagner (Late)', 'Rick Wartell', 'Bruce Franklin'],
    mostKnownSongs: ['Psalm 9', 'The Tempter', 'The Assassin', 'At the End of My Daze'],
    albums: [
      { title: 'Psalm 9', year: 1984 },
      { title: 'The Skull', year: 1985 },
      { title: 'Trouble', year: 1990 }
    ],
    imageUrl: 'https://thrashmetaliq.com/wp-content/uploads/2019/03/screen-shot-2019-03-26-at-11.18.23-pm.png'
  },
  {
    id: 'cathedral',
    name: 'Cathedral',
    genre: 'Doom Metal',
    formed: '1989',
    origin: 'Coventry, England',
    description: 'Founded by Lee Dorrian after leaving Napalm Death. Cathedral moved from extremely slow and crushing doom into a psychedelic, "seventies-groove" heavy metal sound.',
    members: ['Lee Dorrian', 'Garry Jennings', 'Scott Carlson'],
    mostKnownSongs: ['Hopkins (The Witchfinder General)', 'Midnight Mountain', 'Ebony Tears', 'Ride'],
    albums: [
      { title: 'Forest of Equilibrium', year: 1991 },
      { title: 'The Ethereal Mirror', year: 1993 },
      { title: 'The Carnival Bizarre', year: 1995 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.2b797d707d2c07754ddb222e64f4a83c?rik=Dy%2fnWBoSNXKCUQ&riu=http%3a%2f%2fwww.queensofsteel.com%2fwp-content%2fuploads%2f2016%2f08%2fhellbringer.jpg&ehk=2c6YXkmcjvjKyP%2fVv%2fhcjiPhiB%2bJ8OJfWLbqHNzMLbA%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'pentagram',
    name: 'Pentagram',
    genre: 'Doom Metal',
    formed: '1971',
    origin: 'Alexandria, Virginia, USA',
    description: 'Lead by the enigmatic Bobby Liebling, Pentagram is one of the true pioneers of heavy metal, existing in relative obscurity for decades as legends of the doom underground.',
    members: ['Bobby Liebling', 'Victor Griffin'],
    mostKnownSongs: ['Forever My Queen', 'Sign of the Wolf', 'Be Forewarned', 'All Your Sins'],
    albums: [
      { title: 'Pentagram (Relentless)', year: 1985 },
      { title: 'Day of Reckoning', year: 1987 },
      { title: 'Be Forewarned', year: 1994 }
    ],
    imageUrl: 'https://getwallpapers.com/wallpaper/full/9/f/2/798219-widescreen-pentagram-wallpaper-1920x1080.jpg'
  },
  {
    id: 'poison',
    name: 'Poison',
    genre: 'Glam Metal',
    formed: '1983',
    origin: 'Mechanicsburg, Pennsylvania, USA',
    description: 'The definitive party band of the 80s glam era. Poison prioritized hooks, image, and high-energy arena rock, becoming one of the most successful acts of the Sunset Strip scene.',
    members: ['Bret Michaels', 'Rikki Rockett', 'Bobby Dall', 'C.C. DeVille'],
    mostKnownSongs: ['Every Rose Has Its Thorn', 'Nothin\' but a Good Time', 'Talk Dirty to Me', 'Unskinny Bop'],
    albums: [
      { title: 'Look What the Cat Dragged In', year: 1986 },
      { title: 'Open Up and Say... Ahh!', year: 1988 },
      { title: 'Flesh & Blood', year: 1990 }
    ],
    imageUrl: 'https://3.bp.blogspot.com/_hX1Uagd3X7I/THHuTJWDqfI/AAAAAAAAAyM/hC9YzmeXjGM/s1600/Poison7.jpg'
  },
  {
    id: 'ratt',
    name: 'Ratt',
    genre: 'Glam Metal',
    formed: '1976',
    origin: 'San Diego, California, USA',
    description: 'Known for their high-quality songwriting and the bluesy, shred-inflected guitar work of Warren DeMartini. Ratt was a cornerstone of the 80s Hollywood heavy metal scene.',
    members: ['Stephen Pearcy', 'Warren DeMartini', 'Juan Croucier', 'Robbin Crosby (Late)'],
    mostKnownSongs: ['Round and Round', 'Lay It Down', 'Wanted Man', 'Way Cool Jr.'],
    albums: [
      { title: 'Out of the Cellar', year: 1984 },
      { title: 'Invasion of Your Privacy', year: 1985 },
      { title: 'Dancing Undercover', year: 1986 }
    ],
    imageUrl: 'https://i0.wp.com/metalwani.com/wp-content/uploads/2022/06/RATT.jpg?fit=1280%2C781&ssl=1'
  },
  {
    id: 'twisted-sister',
    name: 'Twisted Sister',
    genre: 'Glam Metal / Heavy Metal',
    formed: '1972',
    origin: 'Ho-Ho-Kus, New Jersey, USA',
    description: 'Lead by the loud and charismatic Dee Snider, Twisted Sister combined heavy metal power with a flamboyant theatrical image and a defiant punk attitude.',
    members: ['Dee Snider', 'Jay Jay French', 'Eddie "Fingers" Ojeda', 'Mark "The Animal" Mendoza', 'A. J. Pero (Late)'],
    mostKnownSongs: ['We\'re Not Gonna Take It', 'I Wanna Rock', 'The Price', 'Burn in Hell'],
    albums: [
      { title: 'Under the Blade', year: 1982 },
      { title: 'You Can\'t Stop Rock \'n\' Roll', year: 1983 },
      { title: 'Stay Hungry', year: 1984 }
    ],
    imageUrl: 'https://www.billboard.com/wp-content/uploads/media/twisted-sister-1984-portrait-billboard-1548.jpg?w=942&h=628&crop=1'
  },
  {
    id: 'def-leppard',
    name: 'Def Leppard',
    genre: 'Hard Rock / Glam Metal',
    formed: '1977',
    origin: 'Sheffield, England',
    description: 'Part of the New Wave of British Heavy Metal, Def Leppard moved into massive commercial success by refining their sound with pop sensibilities and highly polished production.',
    members: ['Joe Elliott', 'Rick Savage', 'Rick Allen', 'Phil Collen', 'Vivian Campbell'],
    mostKnownSongs: ['Pour Some Sugar on Me', 'Photograph', 'Hysteria', 'Rock of Ages'],
    albums: [
      { title: 'Pyromania', year: 1983 },
      { title: 'Hysteria', year: 1987 },
      { title: 'Adrenalize', year: 1992 }
    ],
    imageUrl: 'https://vignette.wikia.nocookie.net/defleppard/images/8/83/Def_Leppard_2011_Group_Shot_1_by_Ash_Newell.jpeg/revision/latest/scale-to-width-down/2000?cb=20131230213553'
  },
  {
    id: 'soundgarden',
    name: 'Soundgarden',
    genre: 'Alternative Metal / Grunge',
    formed: '1984',
    origin: 'Seattle, Washington, USA',
    description: 'One of the architects of the Seattle sound. Soundgarden used odd time signatures and Chris Cornell\'s incredible vocal range to create a heavy, psychedelic brand of rock.',
    members: ['Chris Cornell (Late)', 'Kim Thayil', 'Ben Shepherd', 'Matt Cameron'],
    mostKnownSongs: ['Black Hole Sun', 'Spoonman', 'Rusty Cage', 'Outshined', 'Fell on Black Days'],
    albums: [
      { title: 'Badmotorfinger', year: 1991 },
      { title: 'Superunknown', year: 1994 },
      { title: 'Down on the Upside', year: 1996 }
    ],
    imageUrl: 'https://i.pinimg.com/originals/d7/b1/65/d7b165f158da386b822c7fa09e4a38a0.jpg'
  },
  {
    id: 'exhorder',
    name: 'Exhorder',
    genre: 'Groove Metal / Thrash Metal',
    formed: '1985',
    origin: 'New Orleans, Louisiana, USA',
    description: 'Often credited with inventing the groove metal sound that Pantera later popularized. Exhorder combined extreme thrash speed with heavy New Orleans sludge.',
    members: ['Kyle Thomas', 'Jason Viebrooks', 'Sasha Horn', 'Pat O\'Brien'],
    mostKnownSongs: ['Legions of Doom', 'Desecrator', 'Slaughter in the Vatican'],
    albums: [
      { title: 'Slaughter in the Vatican', year: 1990 },
      { title: 'The Law', year: 1992 },
      { title: 'Mourn the Southern Skies', year: 2019 }
    ],
    imageUrl: 'https://www.headbangersnews.com.br/wp-content/uploads/2024/01/Exhorder2023q-1024x775.jpg'
  },
  {
    id: 'paradise-lost',
    name: 'Paradise Lost',
    genre: 'Gothic Metal / Doom Metal',
    formed: '1988',
    origin: 'Halifax, England',
    description: 'Pioneers of the gothic metal genre. Paradise Lost evolved from raw death/doom into a highly melodic and atmospheric act that influenced an entire generation of melancholic metal.',
    members: ['Nick Holmes', 'Gregor Mackintosh', 'Aaron Aedy', 'Stephen Edmondson', 'Guido Zima Montanarini'],
    mostKnownSongs: ['Gothic', 'As I Die', 'Embers Fire', 'One Second', 'The Last Time'],
    albums: [
      { title: 'Gothic', year: 1991 },
      { title: 'Icon', year: 1993 },
      { title: 'Draconian Times', year: 1995 }
    ],
    imageUrl: 'https://wallpaperaccess.com/full/6421672.jpg'
  },
  {
    id: 'my-dying-bride',
    name: 'My Dying Bride',
    genre: 'Doom Metal / Gothic Metal',
    formed: '1990',
    origin: 'Bradford, England',
    description: 'One of the "Peaceville Three" alongside Paradise Lost and Anathema. Known for their use of violins and keyboards to create a deeply poetic and tragic atmosphere.',
    members: ['Aaron Stainthorpe', 'Andrew Craighan', 'Lena Abé', 'Shaun MacGowan'],
    mostKnownSongs: ['The Cry of Mankind', 'Your River', 'Like Gods of the Sun', 'She Is the Dark'],
    albums: [
      { title: 'As the Flower Withers', year: 1992 },
      { title: 'Turn Loose the Swans', year: 1993 },
      { title: 'The Angel and the Dark River', year: 1995 }
    ],
    imageUrl: 'https://peaceville.com/mydyingbride/promo/images/IMG_4340.jpg'
  },
  {
    id: 'tiamat',
    name: 'Tiamat',
    genre: 'Gothic Metal / Progressive Metal',
    formed: '1987',
    origin: 'Täby, Sweden',
    description: 'Starting as a death metal band, Tiamat became pioneers of atmospheric gothic metal with their landmark album "Wildhoney", blending Pink Floyd-esque experimentation with heavy riffs.',
    members: ['Johan Edlund', 'Lars Sköld'],
    mostKnownSongs: ['Whatever That Hurts', 'Gaia', 'Sleeping Beauty', 'Brighter than the Sun'],
    albums: [
      { title: 'Clouds', year: 1992 },
      { title: 'Wildhoney', year: 1994 },
      { title: 'A Deeper Kind of Slumber', year: 1997 }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tiamat_Rockharz_Open_Air_2014_20.JPG/960px-Tiamat_Rockharz_Open_Air_2014_20.JPG'
  },
  {
    id: 'theatre-of-tragedy',
    name: 'Theatre of Tragedy',
    genre: 'Gothic Metal',
    formed: '1993',
    origin: 'Stavanger, Norway',
    description: 'The founders of the "beauty and the beast" vocal style, contrasting Liv Kristine\'s operatic vocals with Raymond Rohonyi\'s death metal growls.',
    members: ['Liv Kristine (Former)', 'Nell Sigland (Former)', 'Raymond Rohonyi'],
    mostKnownSongs: ['Cassandra', 'Der Tanz der Schatten', 'Lorelei', 'A Hamming We Will Go'],
    albums: [
      { title: 'Theatre of Tragedy', year: 1995 },
      { title: 'Velvet Darkness They Fear', year: 1996 },
      { title: 'Aégis', year: 1998 }
    ],
    imageUrl: 'https://www.metal-archives.com/images/1/6/4/164_photo.jpg'
  },
  {
    id: 'living-colour',
    name: 'Living Colour',
    genre: 'Funk Metal / Hard Rock',
    formed: '1984',
    origin: 'New York City, New York, USA',
    description: 'A virtuoso quartet that fused heavy metal with funk, jazz, and soul. Known for Vernon Reid\'s incredible guitar playing and Corey Glover\'s soulful, powerful vocals.',
    members: ['Corey Glover', 'Vernon Reid', 'Doug Wimbish', 'Will Calhoun'],
    mostKnownSongs: ['Cult of Personality', 'Love Rears Its Ugly Head', 'Type', 'Glamour Boys'],
    albums: [
      { title: 'Vivid', year: 1988 },
      { title: 'Time\'s Up', year: 1990 },
      { title: 'Stain', year: 1993 }
    ],
    imageUrl: 'https://www.hindustantimes.com/ht-img/img/2025/04/20/1600x900/living_colour_1745119120906_1745119131605.jpg'
  },
  {
    id: 'infectious-grooves',
    name: 'Infectious Grooves',
    genre: 'Funk Metal',
    formed: '1989',
    origin: 'Venice, California, USA',
    description: 'The funk metal side project of Suicidal Tendencies\' Mike Muir and Robert Trujillo. Known for their incredibly fun, slap-bass driven sound and wacky infectious energy.',
    members: ['Mike Muir', 'Robert Trujillo', 'Brooks Wackerman', 'Dean Pleasants'],
    mostKnownSongs: ['Therapy', 'Violent & Funky', 'Sarsippius\' Ark', 'Boom Boom Boom'],
    albums: [
      { title: 'The Plague That Makes Your Booty Move...', year: 1991 },
      { title: 'Sarsippius\' Ark', year: 1993 },
      { title: 'Groove Family Cyco', year: 1994 }
    ],
    imageUrl: 'https://spotlightreport.net/wp-content/uploads/2024/04/InfectiousGrooves_13-2048x1365.jpg'
  },
  {
    id: 'body-count',
    name: 'Body Count',
    genre: 'Rap Metal / Hardcore Punk',
    formed: '1990',
    origin: 'Los Angeles, California, USA',
    description: 'Lead by hip-hop icon Ice-T, Body Count merged the aggression of heavy metal with the street-level grit of hardcore punk and rap, famously tackling social and political issues.',
    members: ['Ice-T', 'Ernie C', 'Sean E Sean', 'Vincent Price', 'Ill Will'],
    mostKnownSongs: ['Cop Killer', 'Talk Shit, Get Shot', 'No Lives Matter', 'Black Hoodie'],
    albums: [
      { title: 'Body Count', year: 1992 },
      { title: 'Manslaughter', year: 2014 },
      { title: 'Bloodlust', year: 2017 },
      { title: 'Carnivore', year: 2020 }
    ],
    imageUrl: 'https://bodycountband.com/wp-content/uploads/2024/04/bclarge-1920x1281.jpg'
  },
  {
    id: 'stuck-mojo',
    name: 'Stuck Mojo',
    genre: 'Rap Metal / Nu Metal',
    formed: '1989',
    origin: 'Atlanta, Georgia, USA',
    description: 'One of the first bands to successfully integrate hip-hop vocals with heavy thrash metal riffs, paving the way for the nu-metal explosion of the late 90s.',
    members: ['Rich Ward', 'Bonz', 'Corey Lowery', 'Frank Fontsevere'],
    mostKnownSongs: ['Rising', 'Not-Gonna-Die', 'Pigwalk', 'Southern Born Killers'],
    albums: [
      { title: 'Snappin\' Necks', year: 1995 },
      { title: 'Pigwalk', year: 1996 },
      { title: 'Rising', year: 1998 }
    ],
    imageUrl: 'https://www.overdrive.ie/wp-content/uploads/2016/09/Stuck-Mojo-2.jpg'
  },
  {
    id: 'limp-bizkit',
    name: 'Limp Bizkit',
    genre: 'Nu Metal',
    formed: '1994',
    origin: 'Jacksonville, Florida, USA',
    description: 'The face of the late-90s nu-metal explosion. Limp Bizkit merged hip-hop attitude with high-energy metal, lead by Fred Durst and the sonic experimentation of Wes Borland.',
    members: ['Fred Durst', 'Wes Borland', 'Sam Rivers', 'John Otto', 'DJ Lethal'],
    mostKnownSongs: ['Nookie', 'Break Stuff', 'Rollin\' (Air Raid Vehicle)', 'My Way', 'Take a Look Around'],
    albums: [
      { title: 'Three Dollar Bill, Y\'all$', year: 1997 },
      { title: 'Significant Other', year: 1999 },
      { title: 'Chocolate Starfish and the Hot Dog Flavored Water', year: 2000 }
    ],
    imageUrl: 'https://wallpapers.com/images/hd/limp-bizkit-band-portrait-xqiym3mxs1ry72r5.jpg'
  },
  {
    id: 'oomph',
    name: 'Oomph!',
    genre: 'Neue Deutsche Härte',
    formed: '1989',
    origin: 'Wolfsburg, West Germany',
    description: 'Pioneers of the Neue Deutsche Härte movement. Oomph! fuzzed electronic music with heavy metal riffs, heavily influencing bands like Rammstein.',
    members: ['Dero Goi (Former)', 'Andreas Crap', 'Robert Flux', 'Der Schulz'],
    mostKnownSongs: ['Augen Auf!', 'Labyrinth', 'Gekreuzigt', 'Sandmann'],
    albums: [
      { title: 'Oomph!', year: 1992 },
      { title: 'Sperm', year: 1994 },
      { title: 'Wahrheit oder Pflicht', year: 2004 }
    ],
    imageUrl: 'https://d6scj24zvfbbo.cloudfront.net/f8abed858b46da7ba82094e89f65b03c/200000093-e342de4395/band1-9.jpg?ph=8101259f05'
  },
  {
    id: 'eisbrecher',
    name: 'Eisbrecher',
    genre: 'Neue Deutsche Härte',
    formed: '2003',
    origin: 'Fürstenfeldbruck, Germany',
    description: 'One of the most prominent modern NDH bands, known for their cold, industrial sound and the deep vocals of Alexx Wesselsky.',
    members: ['Alexx Wesselsky', 'Noel Pix'],
    mostKnownSongs: ['Verrückt', 'Was ist hier los?', 'Miststück', 'Eiszeit'],
    albums: [
      { title: 'Eisbrecher', year: 2004 },
      { title: 'Die Hölle muss warten', year: 2012 },
      { title: 'Schock', year: 2015 }
    ],
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/C1+KzmlRecS._SL1000_.png'
  },
  {
    id: 'megaherz',
    name: 'Megaherz',
    genre: 'Neue Deutsche Härte',
    formed: '1993',
    origin: 'Eichenau, Germany',
    description: 'A key band in the NDH scene, Megaherz is known for their crossover of hard rock and electronic music with provocative German lyrics.',
    members: ['Lex Wohnhaas', 'Christian "X-ti" Bystron'],
    mostKnownSongs: ['Miststück', 'Himmelfahrt', 'Jagdzeit', 'Für Immer'],
    albums: [
      { title: 'Wer bist du?', year: 1997 },
      { title: 'Kopfschuss', year: 1998 },
      { title: 'Himmelfahrt', year: 2000 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.8ca7ff61c606f0ede7037c2d1a5fb831?rik=vsBQ8paWn56ueQ&pid=ImgRaw&r=0'
  },
  {
    id: 'die-krupps',
    name: 'Die Krupps',
    genre: 'Neue Deutsche Härte',
    formed: '1980',
    origin: 'Düsseldorf, West Germany',
    description: 'Industrial pioneers who moved from early electronic body music into a heavy, guitar-driven metal sound, influencing the entire industrial metal subgenre.',
    members: ['Jürgen Engler', 'Ralf Dörper', 'Marcel Zürcher'],
    mostKnownSongs: ['Fatherland', 'To the Hilt', 'Metal Machine Music', 'Germaniac'],
    albums: [
      { title: 'Stahlwerksinfonie', year: 1981 },
      { title: 'I', year: 1992 },
      { title: 'II - The Final Option', year: 1993 }
    ],
    imageUrl: 'https://www.side-line.com/wp-content/uploads/2015/06/die-krupps-v-for-metal-machine.jpg'
  },
  {
    id: 'arcturus',
    name: 'Arcturus',
    genre: 'Avant-garde Metal',
    formed: '1991',
    origin: 'Oslo, Norway',
    description: 'A "supergroup" of the Norwegian scene, Arcturus moved from black metal into a theatrical, symphonic, and highly experimental avant-garde sound.',
    members: ['Steinar Sverd Johnsen', 'Hellhammer', 'Knut Magne Valle', 'ICS Vortex'],
    mostKnownSongs: ['The Chaos Path', 'Ad Absurdum', 'Shipwrecked Frontier Pioneer', 'Angst'],
    albums: [
      { title: 'Aspera Hiems Symfonia', year: 1996 },
      { title: 'La Masquerade Infernale', year: 1997 },
      { title: 'The Sham Mirrors', year: 2002 }
    ],
    imageUrl: 'https://www.season-of-mist.com/wp-content/uploads/2020/03/Arcturus-scaled-e1589277709793.jpg'
  },
  {
    id: 'mr-bungle',
    name: 'Mr. Bungle',
    genre: 'Avant-garde Metal / Experimental Rock',
    formed: '1985',
    origin: 'Eureka, California, USA',
    description: 'One of the most unpredictable bands in music history. Mr. Bungle, lead by Mike Patton, jumps between metal, jazz, carnival music, and pop, often in a single song.',
    members: ['Mike Patton', 'Trey Spruance', 'Trevor Dunn', 'Scott Ian', 'Dave Lombardo'],
    mostKnownSongs: ['Carousel', 'Quote Unquote', 'Retrovertigo', 'The Night They Came Home'],
    albums: [
      { title: 'Mr. Bungle', year: 1991 },
      { title: 'Disco Volante', year: 1995 },
      { title: 'California', year: 1999 },
      { title: 'The Raging Wrath of the Easter Bunny Demo', year: 2020 }
    ],
    imageUrl: 'https://images.kerrangcdn.com/images/Mr-Bungle-August-2020-promo.jpg?auto=compress&fit=max&w=1920'
  },
  {
    id: 'borgir',
    name: 'Dimmu Borgir',
    genre: 'Symphonic Black Metal',
    formed: '1993',
    origin: 'Oslo, Norway',
    description: 'The most commercially successful symphonic black metal band. Dimmu Borgir combined extreme metal with massive orchestral arrangements and cinematic soundscapes.',
    members: ['Shagrath', 'Silenoz', 'Galder'],
    mostKnownSongs: ['Progenies of the Great Apocalypse', 'Puritania', 'Mourning Palace', 'Gateways'],
    albums: [
      { title: 'Enthrone Darkness Triumphant', year: 1997 },
      { title: 'Spiritual Black Dimensions', year: 1999 },
      { title: 'Death Cult Armageddon', year: 2003 }
    ],
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a8f12b47131a5398d8eaaf6/1520310177231-HGP5XUVBT1UI31Y4LXX3/dimmu_band.jpg'
  },
  {
    id: 'unexpect',
    name: 'Unexpect',
    genre: 'Avant-garde Metal',
    formed: '1996',
    origin: 'Montreal, Quebec, Canada',
    description: 'A mind-bending fuziunea of extreme metal with violin, piano, and multi-vocal arrangements, creating a chaotic and dream-like musical experience.',
    members: ['Syriak', 'Artgag', 'ChaotH', 'Leilindel'],
    mostKnownSongs: ['Desert Urbania', 'Words', 'The Quantum Symphony'],
    albums: [
      { title: 'In a Flesh Aquarium', year: 2006 },
      { title: 'Fables of the Sleepless Night', year: 2011 }
    ],
    imageUrl: 'https://cs7.pikabu.ru/post_img/big/2018/11/16/5/1542353579122369112.png'
  },
  {
    id: 'solefald',
    name: 'Solefald',
    genre: 'Avant-garde Metal',
    formed: '1995',
    origin: 'Oslo, Norway',
    description: 'Known for their sophisticated and often intellectual approach to metal, Solefald incorporates elements of post-modernism, philosophy, and diverse musical styles.',
    members: ['Cornelius Jakhelln', 'Lazare'],
    mostKnownSongs: ['The Linear Nightmare', 'Nutrisco et Extinguo', 'Red For Fire'],
    albums: [
      { title: 'The Linear Nightmare', year: 1999 },
      { title: 'Neonism', year: 1999 },
      { title: 'In Harmonia Universali', year: 2003 }
    ],
    imageUrl: 'https://assets.season-of-mist.com/wp-content/uploads/2020/03/Solefald.jpg'
  },
  {
    id: 'the-devil-wears-prada',
    name: 'The Devil Wears Prada',
    genre: 'Metalcore',
    formed: '2005',
    origin: 'Dayton, Ohio, USA',
    description: 'One of the most important digital-era metalcore bands. KNown for their evolution from a chaotic "scenecore" sound into a mature, atmospheric metalcore powerhouse.',
    members: ['Mike Hranica', 'Jeremy DePoyster', 'Kyle Sipress', 'Jonathan Gering', 'Giuseppe Capolupo'],
    mostKnownSongs: ['Danger: Wildman', 'Mammoth', 'Hey John, What\'s Your Name Again?', 'Sacrifice'],
    albums: [
      { title: 'With Roots Above and Branches Below', year: 2009 },
      { title: 'Dead Throne', year: 2011 },
      { title: 'Color Decay', year: 2022 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.7a992c6e807eb5f7bae0a6f7be5921b6?rik=nOus3Nd9wmNDgw&pid=ImgRaw&r=0'
  },
  {
    id: 'skillet',
    name: 'Skillet',
    genre: 'Christian Rock / Alternative Metal',
    formed: '1996',
    origin: 'Memphis, Tennessee, USA',
    description: 'One of the most successful Christian rock bands of all time. Skillet is known for their anthemic sound, high-energy live shows, and empowering lyrics.',
    members: ['John Cooper', 'Korey Cooper', 'Jen Ledger', 'Seth Morrison'],
    mostKnownSongs: ['Monster', 'Hero', 'Awake and Alive', 'Legendary', 'Feel Invincible'],
    albums: [
      { title: 'Comatose', year: 2006 },
      { title: 'Awake', year: 2009 },
      { title: 'Unleashed', year: 2016 },
      { title: 'Dominion', year: 2022 }
    ],
    imageUrl: 'https://americansongwriter.com/wp-content/uploads/2020/09/Skillet.jpg?fit=2000%2C1333'
  },
  {
    id: 'august-burns-red',
    name: 'August Burns Red',
    genre: 'Metalcore',
    formed: '2003',
    origin: 'Lancaster, Pennsylvania, USA',
    description: 'A powerhouse of the modern metalcore scene, known for their technical proficiency, odd time signatures, and positive lyrical themes.',
    members: ['Jake Luhrs', 'JB Brubaker', 'Brent Rambler', 'Dustin Davidson', 'Matt Greiner'],
    mostKnownSongs: ['White Washed', 'Marianas Trench', 'Composure', 'Invisible Enemy'],
    albums: [
      { title: 'Messengers', year: 2007 },
      { title: 'Constellations', year: 2009 },
      { title: 'Rescue & Restore', year: 2013 },
      { title: 'Death Below', year: 2023 }
    ],
    imageUrl: 'https://townsquare.media/site/366/files/2021/03/August-Burns-Red-2021.jpg'
  },
  {
    id: 'mortification',
    name: 'Mortification',
    genre: 'Christian Death Metal',
    formed: '1990',
    origin: 'Geelong, Australia',
    description: 'One of the first and most influential Christian death metal bands. Mortification showed that extreme metal could effectively carry Christian spiritual themes.',
    members: ['Steve Rowe'],
    mostKnownSongs: ['Scrolls of the Megilloth', 'Raise the Banner', 'Ancient Prophecy'],
    albums: [
      { title: 'Mortification', year: 1991 },
      { title: 'Scrolls of the Megilloth', year: 1992 },
      { title: 'Post Momentary Affliction', year: 1993 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.30839df52509f1bfb7f094c4a3bfb477?rik=tR73uW9k3C6iuA&pid=ImgRaw&r=0'
  },
  {
    id: 'amebix',
    name: 'Amebix',
    genre: 'Crust Punk',
    formed: '1978',
    origin: 'Tavistock, Devon, England',
    description: 'The legends who practically founded crust punk. Amebix moved from raw punk into a heavy, dark, and almost primitive metal sound that influenced countless underground acts.',
    members: ['Rob "The Baron" Miller', 'Stig Chris Miller', 'Spider'],
    mostKnownSongs: ['Arise', 'Axeman', 'Winter', 'ICBM'],
    albums: [
      { title: 'Arise!', year: 1985 },
      { title: 'Monolith', year: 1987 },
      { title: 'Sonic Mass', year: 2011 }
    ],
    imageUrl: 'https://www.metalorgie.com/media/cache/band_hero/images/band/picture/Amebix.jpg'
  },
  {
    id: 'antisect',
    name: 'Antisect',
    genre: 'Crust Punk',
    formed: '1982',
    origin: 'Daventry, Northamptonshire, England',
    description: 'A key band in the UK anarcho-punk and crust scene. Their album "In Darkness, There is No Choice" is a masterpiece of dark, heavy political punk fuzed with metal.',
    members: ['Pete Lyons'],
    mostKnownSongs: ['In Darkness There Is No Choice', 'The World\'s Biggest Lie', 'Safety in Numbers'],
    albums: [
      { title: 'In Darkness, There is No Choice', year: 1983 },
      { title: 'The Rising of the Lights', year: 2017 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.5ed58e72a023a592199a9dbf449f62c7?rik=eiKLQHYswD4ADQ&pid=ImgRaw&r=0'
  },
  {
    id: 'extreme-noise-terror',
    name: 'Extreme Noise Terror',
    genre: 'Crust Punk / Grindcore',
    formed: '1985',
    origin: 'Ipswich, Suffolk, England',
    description: 'Masters of extreme noise. ENT was instrumental in fuzing crust punk with grindcore, known for their trademark dual vocal attack and unrelenting speed.',
    members: ['Dean Jones'],
    mostKnownSongs: ['Deceived', 'Work for Never', 'The Dead Shall Rise'],
    albums: [
      { title: 'A Holocaust in Your Head', year: 1989 },
      { title: 'Phonophobia', year: 1992 },
      { title: 'Retro-bution', year: 1995 }
    ],
    imageUrl: 'https://www.metalorgie.com/media/cache/band_hero/images/band/picture/Extreme-Noise-Terror.jpg'
  },
  {
    id: 'dystopia',
    name: 'Dystopia',
    genre: 'Crust Punk / Sludge Metal',
    formed: '1991',
    origin: 'Orange County, California, USA',
    description: 'Infamous for their extremely bleak, misanthropic themes and unique fuziunea of crust punk, sludge, and industrial soundscapes.',
    members: ['Todd Kiessling', 'Dino Sommese', 'Matt "Mauz" Parkinson'],
    mostKnownSongs: ['Stress Builds Character', 'Sanctity', 'Hands That Mold'],
    albums: [
      { title: 'Human = Garbage', year: 1994 },
      { title: 'The Aftermath', year: 1999 },
      { title: 'Dystopia', year: 2008 }
    ],
    imageUrl: 'https://f4.bcbits.com/img/0025952051_10.jpg'
  },
  {
    id: 'orange-goblin',
    name: 'Orange Goblin',
    genre: 'Stoner Metal / Doom Metal',
    formed: '1995',
    origin: 'London, England',
    description: 'One of the key bands in the UK stoner metal scene. Orange Goblin is known for their groove-heavy riffs, biker aesthetic, and high-energy heavy rock energy.',
    members: ['Ben Ward', 'Joe Hoare', 'Chris Turner', 'Harry Armstrong'],
    mostKnownSongs: ['The Filthy & the Few', 'Blue Snow', 'Red Tide Rising', 'Sons of Salem'],
    albums: [
      { title: 'Frequencies from Planet Ten', year: 1997 },
      { title: 'Time Travelling Blues', year: 1998 },
      { title: 'The Big Black', year: 2000 }
    ],
    imageUrl: 'https://peaceville.com/wp-content/uploads/2021/10/Orange-Goblin-2021-TinaK-0397-Edit.jpg'
  },
  {
    id: 'girlschool',
    name: 'Girlschool',
    genre: 'Heavy Metal',
    formed: '1978',
    origin: 'London, England',
    description: 'The longest-running all-female heavy metal band. Girlschool were important members of the NWOBHM scene and frequently collaborated with Motörhead.',
    members: ['Kim McAuliffe', 'Denise Dufort', 'Jackie Chambers', 'Tracey Lamb'],
    mostKnownSongs: ['Emergency', 'Race with the Devil', 'Hit and Run', 'C\'mon Let\'s Go'],
    albums: [
      { title: 'Demolition', year: 1980 },
      { title: 'Hit and Run', year: 1981 },
      { title: 'Screaming Blue Murder', year: 1982 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.65ddd4925c7512dfd664366c8c2017f8?rik=Lb%2bFkbqXA0xYnw&pid=ImgRaw&r=0'
  },
  {
    id: 'black-label-society',
    name: 'Black Label Society',
    genre: 'Heavy Metal',
    formed: '1998',
    origin: 'Los Angeles, California, USA',
    description: 'Founded by guitar hero Zakk Wylde after his work with Ozzy Osbourne. Black Label Society is known for crushing heavy riffs, soulful ballads, and a strong biker brotherhood aesthetic.',
    members: ['Zakk Wylde', 'John DeServio', 'Jeff Fabb', 'Dario Lorina'],
    mostKnownSongs: ['Stillborn', 'Suicide Messiah', 'In This River', 'Fire It Up'],
    albums: [
      { title: 'Sonic Brew', year: 1999 },
      { title: 'The Blessed Hellride', year: 2003 },
      { title: 'Mafia', year: 2005 },
      { title: 'Doom Crew Inc. ', year: 2021 }
    ],
    imageUrl: 'https://images8.alphacoders.com/845/845766.jpg'
  },
  {
    id: 'possessed',
    name: 'Possessed',
    genre: 'Death Metal',
    formed: '1983',
    origin: 'San Francisco, California, USA',
    description: 'The band frequently credited with inventing the death metal genre. Their 1985 album "Seven Churches" set the standard for the entire underground scene with its extreme speed and satanic themes.',
    members: ['Jeff Becerra'],
    mostKnownSongs: ['The Exorcist', 'Burning in Hell', 'Death Metal'],
    albums: [
      { title: 'Seven Churches', year: 1985 },
      { title: 'Beyond the Gates', year: 1986 },
      { title: 'Revelations of Oblivion', year: 2019 }
    ],
    imageUrl: 'https://www.spirit-of-metal.com/les%20goupes/P/Possessed/pics/a57e_1.jpg'
  },
  {
    id: 'hellhammer',
    name: 'Hellhammer',
    genre: 'Black Metal / Death Metal / Doom Metal',
    formed: '1982',
    origin: 'Nürensdorf, Switzerland',
    description: 'A primitive and extremely influential band lead by Tom G. Warrior. Hellhammer paving the way for black, death, and doom metal before evolving into Celtic Frost.',
    members: ['Tom G. Warrior', 'Martin Eric Ain (Late)'],
    mostKnownSongs: ['Messiah', 'Triumph of Death', 'Revelations of Doom'],
    albums: [
      { title: 'Apocalyptic Raids (EP)', year: 1984 }
    ],
    imageUrl: 'hhttps://cdn.mos.cms.futurecdn.net/Z6PgSvJyyTLLET7DH3d7F4.jpg'
  },
  {
    id: 'celtic-frost',
    name: 'Celtic Frost',
    genre: 'Extreme Metal / Avant-garde Metal',
    formed: '1984',
    origin: 'Zurich, Switzerland',
    description: 'One of the most important and experimental bands in extreme metal. Celtic Frost moved from the raw power of their early work into high art experimentation, influencing almost every subgenre that followed.',
    members: ['Tom G. Warrior', 'Martin Eric Ain (Late)'],
    mostKnownSongs: ['Circle of the Tyrants', 'The Usurper', 'Dethroned Emperor', 'A Dying God Coming into Human Flesh'],
    albums: [
      { title: 'To Mega Therion', year: 1985 },
      { title: 'Into the Pandemonium', year: 1987 },
      { title: 'Monotheist', year: 2006 }
    ],
    imageUrl: 'https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/Celtic-Frost-band.jpg?mtime=1560956196'
  },
  {
    id: 'eluveitie',
    name: 'Eluveitie',
    genre: 'Folk Metal / Melodic Death Metal',
    formed: '2002',
    origin: 'Winterthur, Switzerland',
    description: 'Combining traditional Celtic folk instruments (hurdy-gurdy, flutes, bagpipes) with melodic death metal. Eluveitie is unique for their use of the extinct Gaulish language in their lyrics.',
    members: ['Chrigel Glanzmann', 'Fabienne Erni'],
    mostKnownSongs: ['Inis Mona', 'The Call of the Mountains', 'A Rose for Epona', 'Thousandfold'],
    albums: [
      { title: 'Slania', year: 2008 },
      { title: 'Helvetios', year: 2012 },
      { title: 'Ategnatos', year: 2019 }
    ],
    imageUrl: 'https://wallpapercave.com/wp/oW4iDwI.jpg'
  },
  {
    id: 'korpiklaani',
    name: 'Korpiklaani',
    genre: 'Folk Metal',
    formed: '1993',
    origin: 'Lahti, Finland',
    description: 'The masters of "shaman metal" and drinking songs. Korpiklaani fuses upbeat humppa-style folk melodies with heavy metal energy.',
    members: ['Jonne Järvelä'],
    mostKnownSongs: ['Vodka', 'Beer Beer', 'Keep on Galloping', 'Ievan Polkka'],
    albums: [
      { title: 'Voice of Wilderness', year: 2005 },
      { title: 'Tales Along This Road', year: 2006 },
      { title: 'Jylhä', year: 2021 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.8c7ddf2a9490a3764111c3cbf361d27a?rik=94oEyPZYBdBMNw&pid=ImgRaw&r=0'
  },
  {
    id: 'ensiferum',
    name: 'Ensiferum',
    genre: 'Folk Metal / Melodic Death Metal',
    formed: '1995',
    origin: 'Helsinki, Finland',
    description: 'One of the pioneers of heroic folk metal. Ensiferum (Latin for "Sword Bearer") is known for their epic songwriting and battle-ready energy.',
    members: ['Petri Lindroos', 'Markus Toivonen', 'Sami Hinkka', 'Janne Parviainen'],
    mostKnownSongs: ['Lai Lai Hei', 'Token of Time', 'In My Sword I Trust', 'Victory Song'],
    albums: [
      { title: 'Ensiferum', year: 2001 },
      { title: 'Iron', year: 2004 },
      { title: 'Victory Songs', year: 2007 }
    ],
    imageUrl: 'https://f4.bcbits.com/img/0019902422_10.jpg'
  },
  {
    id: 'amorphis',
    name: 'Amorphis',
    genre: 'Melodic Death Metal / Progressive Metal',
    formed: '1990',
    origin: 'Helsinki, Finland',
    description: 'Known for their evolution from raw death metal into a unique melodic style inspired by Finnish mythology and the national epic, the Kalevala.',
    members: ['Esa Holopainen', 'Tomi Joutsen', 'Tomi Koivusaari'],
    mostKnownSongs: ['Black Winter Day', 'The Bee', 'House of Sleep', 'Silver Bride'],
    albums: [
      { title: 'Tales from the Thousand Lakes', year: 1994 },
      { title: 'Skyforger', year: 2009 },
      { title: 'Queen of Time', year: 2018 },
      { title: 'Halo', year: 2022 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.51723e142fc412ac521415300ef70dde?rik=YmWr%2btDZ%2fdHNOg&pid=ImgRaw&r=0'
  },
  {
    id: 'carcass',
    name: 'Carcass',
    genre: 'Death Metal / Grindcore',
    formed: '1985',
    origin: 'Liverpool, England',
    description: 'Pioneers of both goregrind and melodic death metal. Carcass moved from raw, medically-themed grindcore into highly sophisticated and melodic death metal mastery.',
    members: ['Jeff Walker', 'Bill Steer'],
    mostKnownSongs: ['Heartwork', 'Corporal Jigsore Quandary', 'Keep on Rotting in the Free World'],
    albums: [
      { title: 'Necroticism - Descanting the Insalubrious', year: 1991 },
      { title: 'Heartwork', year: 1993 },
      { title: 'Surgical Steel', year: 2013 }
    ],
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/jtXm6Qo8jLYF3L6woWaNyn-1280-80.jpg'
  },
  {
    id: 'repulsion',
    name: 'Repulsion',
    genre: 'Grindcore / Death Metal',
    formed: '1984',
    origin: 'Flint, Michigan, USA',
    description: 'The true pioneers of grindcore. Their 1989 album "Horrified" set the blueprint for the entire genre with its relentless speed and filthy production.',
    members: ['Scott Carlson', 'Matt Olivo'],
    mostKnownSongs: ['Radiation Sickness', 'The Helga (Black Death)', 'Maggots in Your Coffin'],
    albums: [
      { title: 'Horrified', year: 1989 }
    ],
    imageUrl: 'https://cdn.shopify.com/s/files/1/1545/2923/articles/repulsion-band-live-180108_1dc94755-7d25-4155-8d3f-e2c131917c4d_1024x.jpg?v=1567712056'
  },
  {
    id: 'ladybaby',
    name: 'Ladybaby',
    genre: 'Kawaii Metal',
    formed: '2015',
    origin: 'Tokyo, Japan',
    description: 'A viral sensation that fuzed J-pop idol music with heavy metal, famously featuring cross-dressing wrestler Ladybeard alongside Japanese idols.',
    members: ['Ladybeard (Former)', 'Rie Kaneko (Former)', 'Rei Kuromiya (Former)'],
    mostKnownSongs: ['Nippon Manju', 'Age-Age Money', 'Renge Chance'],
    albums: [
      { title: 'One Year Anniversary Album', year: 2016 }
    ],
    imageUrl: 'https://kprofiles.com/wp-content/uploads/2020/02/ladybaby-march-2024-900x600.jpg'
  },
  {
    id: 'passcode',
    name: 'PassCode',
    genre: 'Kawaii Metal',
    formed: '2013',
    origin: 'Osaka, Japan',
    description: 'Fusing idol pop with aggressive metalcore and heavy electronics. PassCode is known for their high-intensity live shows and Nao Minami\'s brutal screams.',
    members: ['Nao Minami', 'Kaede Takashima', 'Hinako Ogami', 'Emily Arima'],
    mostKnownSongs: ['Miss Unlimited', 'Ray', 'Starry Sky', 'Taking you out'],
    albums: [
      { title: 'Zenith', year: 2017 },
      { title: 'Clarity', year: 2019 },
      { title: 'Stride 4 Love', year: 2021 }
    ],
    imageUrl: 'https://overseas.passcode-official.com/package/wp-content/themes/passcode_overseas/images/common/og.jpg'
  },
  {
    id: 'hanabie',
    name: 'Hanabie.',
    genre: 'Kawaii Metal / Harajuku-core',
    formed: '2015',
    origin: 'Tokyo, Japan',
    description: 'Self-described as "Harajuku-core", Hanabie combines cute aesthetics with crushing metalcore and nu-metal, becoming a major international force in the Japanese scene.',
    members: ['Yukina', 'Matsuri', 'Hettsu', 'Chika'],
    mostKnownSongs: ['Oshite Mairu', 'Pardon Me, I Have to Go Now', 'Be the Gal!', 'Tousou'],
    albums: [
      { title: 'Girls Reform Manifest', year: 2021 },
      { title: 'Reborn Superstar!', year: 2023 }
    ],
    imageUrl: 'https://morecore.media/media/hanabie-01-2025-official-press.jpg'
  },
  {
    id: 'puya',
    name: 'Puya',
    genre: 'Latin Metal / Funk Metal',
    formed: '1987',
    origin: 'San Juan, Puerto Rico',
    description: 'One of the most successful Latin metal bands. Puya fuzed heavy thrash metal with salsa, merengue, and other Caribbean rhythms to create a unique and high-energy sound.',
    members: ['Sergio Curbelo', 'Ramon Ortiz', 'Harold Hopkins', 'Eduardo Paniagua'],
    mostKnownSongs: ['Oasis', 'Remora', 'Fundamental', 'Tirale'],
    albums: [
      { title: 'Fundamental', year: 1999 },
      { title: 'Union', year: 2001 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.29b30497ab99fe394ba9916da08b17b6?rik=8DdPZOlR9Qgr9w&pid=ImgRaw&r=0'
  },
  {
    id: 'ill-nino',
    name: 'Ill Niño',
    genre: 'Latin Metal / Nu Metal',
    formed: '1998',
    origin: 'New Jersey, USA',
    description: 'Leading icons of the American Latin metal scene. Ill Niño blended heavy nu-metal grooves with Spanish lyrics and acoustic interludes.',
    members: ['Marcos Leal', 'Dave Chavarri', 'Laz Pina'],
    mostKnownSongs: ['How Can I Live', 'What Comes Around', 'This Is War', 'I Am Loco'],
    albums: [
      { title: 'Revolution Revolución', year: 2001 },
      { title: 'Confession', year: 2003 },
      { title: 'One Nation Underground', year: 2005 }
    ],
    imageUrl: 'https://metalitalia.com/wp-content/uploads/2024/07/ILL-NINO-band-2024-1536x995.jpg'
  },
  {
    id: 'soulfly',
    name: 'Soulfly',
    genre: 'Latin Metal / Groove Metal',
    formed: '1997',
    origin: 'Phoenix, Arizona, USA',
    description: 'Founded by Max Cavalera after leaving Sepultura. Soulfly reflects Max\'s spiritual journey and his deep connection to world music and tribal rhythms.',
    members: ['Max Cavalera', 'Zyon Cavalera', 'Mike Leon'],
    mostKnownSongs: ['Eye for an Eye', 'Back to the Primitive', 'Prophecy', 'Bleed'],
    albums: [
      { title: 'Soulfly', year: 1998 },
      { title: 'Primitive', year: 2000 },
      { title: 'Prophecy', year: 2004 },
      { title: 'Totem', year: 2022 }
    ],
    imageUrl: 'https://th.bing.com/th/id/R.c6c6578353c91d071dddc57604f7ccab?rik=k4p53sY383WxSg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2fa%2f4%2f728978-soulfly-wallpapers-1920x1080-samsung-galaxy.jpg&ehk=RE6sWsxb5ejbhfhiedGeEDktBx%2b6yMLGFdYo8dAUods%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 'animal',
    name: 'A.N.I.M.A.L.',
    genre: 'Latin Metal / Groove Metal',
    formed: '1992',
    origin: 'Buenos Aires, Argentina',
    description: 'One of the most important Spanish-language metal bands. A.N.I.M.A.L. (Acosados Nuestros Indios Murieron Al Luchar) combined heavy grooves with socially conscious lyrics.',
    members: ['Andrés Giménez', 'Cristian Lapolla', 'Marcelo Castro'],
    mostKnownSongs: ['Solo por un Poco de Amor', 'El Nuevo Camino del Hombre', 'Combativo'],
    albums: [
      { title: 'El Nuevo Camino del Hombre', year: 1996 },
      { title: 'Poder Latino', year: 1998 },
      { title: 'Animal 6', year: 2001 }
    ],
    imageUrl: 'https://www.radioacktiva.com/wp-content/uploads/2023/02/09022023-animal.jpg'
  },
  {
    id: 'as-i-lay-dying',
    name: 'As I Lay Dying',
    genre: 'Metalcore',
    formed: '2000',
    origin: 'San Diego, California, USA',
    description: 'A cornerstone of the 2000s metalcore explosion. As I Lay Dying merged melodic Swedish death metal influences with American hardcore energy and precision.',
    members: ['Tim Lambesis', 'Phil Sgrosso', 'Ken Susi', 'Nick Pierce', 'Ryan Neff'],
    mostKnownSongs: ['Confined', 'The Sound of Truth', 'Nothing Left', 'My Own Grave'],
    albums: [
      { title: 'Frail Words Collapse', year: 2003 },
      { title: 'Shadows Are Security', year: 2005 },
      { title: 'An Ocean Between Us', year: 2007 },
      { title: 'Shaped by Fire', year: 2019 }
    ],
    imageUrl: 'https://thegallery.gr/wp-content/uploads/2024/09/As-I-Lay-Dying-band-2024.jpg'
  },
  {
    id: 'symphony-x',
    name: 'Symphony X',
    genre: 'Progressive Metal / Neoclassical Metal',
    formed: '1994',
    origin: 'Middletown, New Jersey, USA',
    description: 'Combining complex progressive structures with power metal energy and Michael Romeo\'s virtuoso neoclassical guitar work.',
    members: ['Michael Romeo', 'Russell Allen', 'Michael Pinnella', 'Jason Rullo', 'Michael LePond'],
    mostKnownSongs: ['The Odyssey', 'Evolution (The Grand Design)', 'Sea of Lies', 'Nevermore'],
    albums: [
      { title: 'The Divine Wings of Tragedy', year: 1997 },
      { title: 'The Odyssey', year: 2002 },
      { title: 'Paradise Lost', year: 2007 },
      { title: 'Underworld', year: 2015 }
    ],
    imageUrl: 'https://townsquare.media/site/366/files/2021/07/attachment-symphony_x_2015.jpg'
  },
  {
    id: 'jason-becker',
    name: 'Jason Becker',
    genre: 'Neoclassical Metal / Instrumental Rock',
    formed: '1986',
    origin: 'Richmond, California, USA',
    description: 'A legendary child prodigy of the neoclassical guitar. Jason Becker\'s career was tragically cut short by ALS, but his compositions remain some of the most sophisticated in the genre.',
    members: ['Jason Becker'],
    mostKnownSongs: ['Altitudes', 'Perpetual Burn', 'Mabel\'s Fatal Fable'],
    albums: [
      { title: 'Perpetual Burn', year: 1988 },
      { title: 'Perspective', year: 1996 }
    ],
    imageUrl: 'https://guitar.com/wp-content/uploads/2021/06/Jason-Becker-MediaPunch-Alamy@1400x1050.jpg'
  },
  {
    id: 'cacophony',
    name: 'Cacophony',
    genre: 'Neoclassical Metal / Speed Metal',
    formed: '1986',
    origin: 'San Francisco, California, USA',
    description: 'The legendary duo of Marty Friedman and Jason Becker. Cacophony pushing the limits of technical guitar playing with intricate dual-harmony leads and high-speed neoclassical structures.',
    members: ['Marty Friedman', 'Jason Becker'],
    mostKnownSongs: ['Speed Metal Symphony', 'The Ninja', 'Desert Island'],
    albums: [
      { title: 'Speed Metal Symphony', year: 1987 },
      { title: 'Go Off!', year: 1988 }
    ],
    imageUrl: 'https://fastly-s3.allmusic.com/release/mr0000831269/front/400/rVBBE4c_koPwsjHgTcxiFz6KsMttLlyBmmVTZ6_CLs0=.jpg'
  },
  {
    id: 'neurosis',
    name: 'Neurosis',
    genre: 'Post-Metal / Sludge Metal',
    formed: '1985',
    origin: 'Oakland, California, USA',
    description: 'The architects of post-metal. Neurosis evolved from hardcore punk into a deeply spiritual, atmospheric, and crushing sound that redefined the emotional depth of heavy music.',
    members: ['Scott Kelly (Former)', 'Steve Von Till', 'Dave Edwardson', 'Jason Roeder', 'Noah Landis'],
    mostKnownSongs: ['Locust Star', 'Stones from the Sky', 'Through Silver in Blood', 'The Doorway'],
    albums: [
      { title: 'Through Silver in Blood', year: 1996 },
      { title: 'Times of Grace', year: 1999 },
      { title: 'A Sun That Never Sets', year: 2001 }
    ],
    imageUrl: 'https://i.ytimg.com/vi/6JuOux2dakU/maxresdefault.jpg'
  },
  {
    id: 'isis',
    name: 'Isis',
    genre: 'Post-Metal',
    formed: '1997',
    origin: 'Boston, Massachusetts, USA',
    description: 'Masters of dynamic control and ocean-themed atmospheric metal. Isis brought a refined, cinematic quality to post-metal, influencing a countless number of modern atmospheric bands.',
    members: ['Aaron Turner', 'Jeff Caxide', 'Michael Gallagher', 'Aaron Harris', 'Bryant Clifford Meyer'],
    mostKnownSongs: ['In Fiction', 'The Beginning and the End', 'So Did We', 'Holy Tears'],
    albums: [
      { title: 'Oceanic', year: 2002 },
      { title: 'Panopticon', year: 2004 },
      { title: 'In the Absence of Truth', year: 2006 }
    ],
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/UFxVH3piiTQttqfqu5KsV3.jpg'
  },
  {
    id: 'cult-of-luna',
    name: 'Cult of Luna',
    genre: 'Post-Metal / Sludge Metal',
    formed: '1998',
    origin: 'Umeå, Sweden',
    description: 'A powerhouse of the European post-metal scene, known for their cold, industrial-tinged atmospheric weight and highly conceptual albums.',
    members: ['Johannes Persson', 'Magnus Lindberg', 'Andreas Johansson', 'Fredrik Kihlberg', 'Kristian Karlsson', 'Thomas Hedlund'],
    mostKnownSongs: ['Leave Me Here', 'Finland', 'Nightwalkers', 'Cold Burn'],
    albums: [
      { title: 'Salvation', year: 2004 },
      { title: 'Somewhere Along the Highway', year: 2006 },
      { title: 'A Dawn to Fear', year: 2019 },
      { title: 'The Long Road North', year: 2022 }
    ],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI3sdHI6rGe3rlskxYF1jUJ7CgjFG8yBtPAq2Innd35A_qfPyYxtS80Ak2CeEkhs4s6VQR7NNIueHOTe-08-7lLs9eObB8yx5AFRTjJKfNgvXtRfbaCdIP3khuWC-OHatv4I3V3yfS9B8/s1600/9_MC_Band.jpg'
  },
  {
    id: 'russian-circles',
    name: 'Russian Circles',
    genre: 'Post-Metal',
    formed: '2004',
    origin: 'Chicago, Illinois, USA',
    description: 'An instrumental trio that creates massive, cinematic soundscapes fuzing heavy metal intensity with post-rock dynamics and looping techniques.',
    members: ['Mike Sullivan', 'Dave Turncrantz', 'Brian Cook'],
    mostKnownSongs: ['Harper Lewis', 'Deficit', 'Mlàdek', 'Gnosis'],
    albums: [
      { title: 'Enter', year: 2006 },
      { title: 'Station', year: 2008 },
      { title: 'Geneva', year: 2009 },
      { title: 'Gnosis', year: 2022 }
    ],
    imageUrl: 'https://eternaldecay.de/wp-content/uploads/2022/07/russian-circles-logo-678x381.jpg'
  },
  {
    id: 'pelican',
    name: 'Pelican',
    genre: 'Post-Metal / Instrumental Rock',
    formed: '2001',
    origin: 'Des Plaines, Illinois, USA',
    description: 'Pioneers of instrumental post-metal. Pelican focused on "sonic architecture," using heavy riffs and beautiful melodic sections without the need for vocals.',
    members: ['Trevor de Brauw', 'Bryan Herweg', 'Larry Herweg', 'Dallas Thomas'],
    mostKnownSongs: ['Ephemeral', 'Mammoth', 'Dead Between the Walls', 'Last Day of Winter'],
    albums: [
      { title: 'Australasia', year: 2003 },
      { title: 'The Fire in Our Throats Will Beckon the Thaw', year: 2005 },
      { title: 'City of Echoes', year: 2007 }
    ],
    imageUrl: 'https://www.therockpit.net/wp-content/uploads/2019/01/pelican-1024x683.jpg'
  },
  {
    id: 'epica',
    name: 'Epica',
    genre: 'Symphonic Metal',
    formed: '2002',
    origin: 'Reuver, Netherlands',
    description: 'Fusing Simone Simons\' mezzo-soprano vocals with complex symphonic arrangements and Mark Jansen\'s death metal growls, Epica is a leader in modern symphonic metal.',
    members: ['Simone Simons', 'Mark Jansen', 'Isaac Delahaye', 'Coen Janssen', 'Rob van der Loo', 'Ariën van Weesenbeek'],
    mostKnownSongs: ['Cry for the Moon', 'The Phantom Agony', 'Storm the Sorrow', 'Unleashed'],
    albums: [
      { title: 'The Divine Conspiracy', year: 2007 },
      { title: 'Design Your Universe', year: 2009 },
      { title: 'The Holographic Principle', year: 2016 },
      { title: 'Omega', year: 2021 }
    ],
    imageUrl: 'https://ramzine.co.uk/wp-content/uploads/2021/03/Epica.jpeg'
  },
  {
    id: 'therion',
    name: 'Therion',
    genre: 'Symphonic Metal / Operatic Metal',
    formed: '1987',
    origin: 'Upplands Väsby, Sweden',
    description: 'Starting as a death metal band, Therion became the absolute pioneers of symphonic metal, being the first to fully integrate live orchestras and choirs into their sound.',
    members: ['Christofer Johnsson'],
    mostKnownSongs: ['To Mega Therion', 'Rise of Sodom and Gomorrah', 'Cult of the Shadow', 'Lemuria'],
    albums: [
      { title: 'Theli', year: 1996 },
      { title: 'Vovin', year: 1998 },
      { title: 'Secret of the Runes', year: 2001 },
      { title: 'Leviathan', year: 2021 }
    ],
    imageUrl: 'https://wallpapercave.com/wp/wp6937111.jpg'
  },
  {
    id: 'haggard',
    name: 'Haggard',
    genre: 'Symphonic Metal / Neoclassical Metal',
    formed: '1989',
    origin: 'Munich, Germany',
    description: 'A massive ensemble that fuzes death metal with medieval, renaissance, and classical music. Known for their intricate compositions and historically-themed concept albums.',
    members: ['Asis Nasseri'],
    mostKnownSongs: ['Awaking the Centuries', 'Per Aspera Ad Astra', 'Eppur Si Muove', 'The Final Victory'],
    albums: [
      { title: 'And Thou Shalt Trust... the Seer', year: 1997 },
      { title: 'Awaking the Centuries', year: 2000 },
      { title: 'Eppur Si Muove', year: 2004 }
    ],
    imageUrl: 'https://1.bp.blogspot.com/-h-1c7O8bf20/UcM6OQm_C2I/AAAAAAAAADI/hSHcde4A0YI/s1600/Haggard3.jpg'
  }
];
