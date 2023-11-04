const games = [
  {
    id: 1,
    title: "World of Goo",
    price: 9.99,
    categories: ["educational"],
    image: "../images/World of Goo.jpg",
    description:
      "Description: World of Goo is a puzzle game where players use living, squishy balls of goo to build structures and solve puzzles. It challenges players to think creatively and logically as they navigate through various levels with different physics-based challenges.",
  },
  {
    id: 2,
    title: "Human Resource Machine",
    price: 19.99,
    categories: ["educational"],
    image: "../images/Human Resource Machine.jpg",
    description:
      "Human Resource Machine is a puzzle game that introduces players to programming concepts and logic. Players solve puzzles by creating simple programs to manipulate objects, teaching them the fundamentals of programming in an engaging and accessible way.",
  },
  {
    id: 3,
    title: "Alien: Isolation",
    price: 49.99,
    categories: ["horror"],
    image: "../images/Alien_Isolation.jpg",
    description:
      "Step into the shoes of Amanda Ripley in Alien: Isolation, a survival horror game set in the Alien universe. Navigate a haunting space station, evade the deadly Xenomorph, and uncover the truth behind your mother's disappearance.",
  },
  {
    id: 4,
    title: "BioShock Infinite",
    price: 49.99,
    categories: ["shooter", "adventure"],
    image: "../images/BioShock Infinite.jpg",
    description:
      "Step into the floating city of Columbia in BioShock Infinite. Immerse yourself in a captivating narrative, wield unique weapons and powers, and unravel the mysteries of a world filled with political intrigue and fantastical elements.",
  },
  {
    id: 5,
    title: "Bloodborne",
    price: 49.99,
    categories: ["action", "horror", "rpg"],
    image: "../images/Bloodborne.jpg",
    description:
      "Enter a gothic and nightmarish world in Bloodborne. As a hunter, navigate through dark streets, confront monstrous creatures, and uncover a twisted tale of eldritch horrors in this challenging action RPG.",
  },
  {
    id: 6,
    title: "Celeste",
    price: 49.99,
    categories: ["adventure", "platformer"],
    image: "../images/Celeste.jpg",
    description:
      "Embark on a heartfelt platforming journey in Celeste. Join Madeline as she climbs the treacherous Celeste Mountain, overcoming obstacles and facing inner struggles in this challenging and emotional adventure.",
  },
  {
    id: 7,
    title: "Dark Souls III",
    price: 49.99,
    categories: ["action", "rpg"],
    image: "../images/dark_souls_III.jpg",
    description:
      "Enter a dark and unforgiving realm in Dark Souls III. Test your skill and perseverance as you navigate treacherous landscapes, battle fearsome creatures, and uncover a complex narrative in this renowned action RPG.",
  },
  {
    id: 8,
    title: "Civilization VI",
    price: 49.99,
    categories: ["strategy"],
    image: "../images/Civilization VI.jpg",
    description:
      "Engage in strategic world-building and civilization management in Civilization VI. Lead your chosen civilization from ancient times to the modern era, make crucial decisions, and compete against other leaders in various domains.",
  },
  {
    id: 9,
    title: "Destiny 2",
    price: 59.99,
    categories: ["action", "shooter"],
    image: "../images/destiny_2.jpg",
    description:
      "Embark on a galactic adventure as a Guardian in Destiny 2. Defend humanity from various alien threats, team up with friends in cooperative modes, and engage in dynamic first-person shooter combat.",
  },
  {
    id: 10,
    title: "Devil May Cry 5",
    price: 50.99,
    categories: ["action"],
    image: "../images/devil_may_cry_5.jpg",
    description:
      "Experience high-octane, stylish action in Devil May Cry 5. Play as demon hunters Nero, Dante, and V, and battle through intense combat scenarios against otherworldly foes.",
  },
  {
    id: 11,
    title: "Divinity: Original Sin 2",
    price: 39.99,
    categories: ["role-playing"],
    image: "../images/Divinity_ Original Sin 2.jpg",
    description:
      "Embark on a sprawling RPG adventure in Divinity: Original Sin 2. Create a unique character, team up with companions, and engage in tactical turn-based combat as you navigate a richly detailed fantasy world.",
  },
  {
    id: 12,
    title: "Dragon Age: Inquisition",
    price: 49.99,
    categories: ["action", "adventure"],
    image: "../images/Dragon Age_Inquisition.jpg",
    description:
      " Embark on a grand adventure in the world of Thedas in Dragon Age: Inquisition. Lead a team of diverse characters, make impactful decisions, and engage in strategic combat as you work to restore order and battle a mysterious threat.",
  },
  {
    id: 13,
    title: "Dragon Ball FighterZ",
    price: 49.99,
    categories: ["action", "fighting"],
    image: "../images/Dragon Ball FighterZ.jpg",
    description:
      "Engage in high-energy battles inspired by the Dragon Ball anime series in Dragon Ball FighterZ. Form teams of iconic characters, execute powerful moves, and experience fast-paced 2D fighting action.",
  },
  {
    id: 14,
    title: "Fallout 4",
    price: 50.99,
    categories: ["rpg", "action"],
    image: "../images/fallout_4.jpg",
    description:
      "Enter the irradiated world of Fallout 4, set in a post-apocalyptic future. Navigate the remnants of civilization, make choices that affect the world's fate, and unravel the mysteries of the Commonwealth.",
  },
  {
    id: 15,
    title: "FIFA 22",
    price: 39.99,
    categories: ["sports"],
    image: "../images/FIFA 22.jpg",
    description:
      "Experience the excitement of virtual soccer in FIFA 22. Play with authentic teams and players, engage in realistic matches, and enjoy improvements in gameplay mechanics and visuals.",
  },
  {
    id: 16,
    title: "Firewatch",
    price: 44.99,
    categories: ["adventure"],
    image: "../images/firewatch.jpg",
    description:
      "Venture into the Wyoming wilderness as a fire lookout in Firewatch. Experience a narrative-driven journey filled with isolation, intrigue, and personal exploration, all set against a backdrop of captivating landscapes.",
  },
  {
    id: 17,
    title: "Forza Horizon 4",
    price: 29.99,
    categories: ["racing"],
    image: "../images/Forza Horizon 4.jpg",
    description:
      "Take the wheel in Forza Horizon 4 and experience dynamic seasons in a shared open-world racing experience. Compete in races, perform stunts, and explore the beautiful landscapes of historic Britain.",
  },
  {
    id: 18,
    title: "Ghost of Tsushima",
    price: 59.99,
    categories: ["action", "adventure"],
    image: "../images/ghost_of_tsushima.jpg",
    description:
      "Step into the shoes of Jin Sakai, a samurai warrior, in Ghost of Tsushima. Set in feudal Japan, embark on an epic adventure, master the art of the katana, and confront the Mongol invasion.",
  },
  {
    id: 19,
    title: "God of War",
    price: 49.99,
    categories: ["action", "adventure"],
    image: "../images/God of War.jpg",
    description:
      "Experience the journey of Kratos and Atreus in God of War. Set in the world of Norse mythology, battle gods and monsters, and embark on a deeply emotional and compelling father-son quest.",
  },
  {
    id: 20,
    title: "Grand Theft Auto V",
    price: 29.99,
    categories: ["action", "adventure"],
    image: "../images/Grand Theft Auto V.jpg",
    description:
      "Enter the sprawling open-world of Los Santos in Grand Theft Auto V. Follow the stories of three criminals as they navigate a city filled with heists, missions, and a vast array of activities.",
  },
  {
    id: 21,
    title: "Hollow Knight",
    price: 14.99,
    categories: ["action", "adventure"],
    image: "../images/Hollow Knight.jpg",
    description:
      "Descend into the world of Hollow Knight, a beautifully animated and atmospheric action-adventure game. Explore the mysterious underground kingdom, battle enemies, and uncover secrets.",
  },
  {
    id: 22,
    title: "Horizon Zero Dawn",
    price: 39.99,
    categories: ["action", "adventure"],
    image: "../images/Horizon Zero Dawn.jpg",
    description:
      "Embark on an open-world adventure in Horizon Zero Dawn. Play as Aloy, a skilled hunter, and explore a vibrant world inhabited by robotic creatures. Uncover the mysteries of a post-apocalyptic Earth.",
  },
  {
    id: 23,
    title: "The Legend of Zelda: Breath of the Wild",
    price: 59.99,
    categories: ["action", "adventure"],
    image: "../images/legend_of_zelda_breath_of_the_wild.jpg",
    description:
      "Discover the vast kingdom of Hyrule in The Legend of Zelda: Breath of the Wild. Embark on a journey to defeat the ancient evil and explore a breathtaking open world filled with challenges and surprises.",
  },
  {
    id: 24,
    title: "Mass Effect: Legendary Edition",
    price: 59.99,
    categories: ["action", "rpg"],
    image: "../images/Mass Effect 3.jpg",
    description:
      "Relive the epic saga of Commander Shepard in Mass Effect: Legendary Edition. Experience the remastered trilogy with improved graphics, updated gameplay, and all the DLC content in one comprehensive package.",
  },
  {
    id: 25,
    title: "Metal Gear Solid V: The Phantom Pain",
    price: 29.99,
    categories: ["action"],
    image: "../images/Metal Gear Solid V The Phantom Pain.jpg",
    description:
      "Step into the shoes of Venom Snake in Metal Gear Solid V: The Phantom Pain. Embark on a tactical espionage mission, build your base, and navigate a dynamic open-world filled with intrigue and danger.",
  },
  {
    id: 26,
    title: "Minecraft",
    price: 29.99,
    categories: ["adventure"],
    image: "../images/minecraft.jpg",
    description:
      "Unleash your creativity in Minecraft, a sandbox game where you can build, explore, and survive in an open-world block universe. Create your own adventures and construct imaginative structures.",
  },
  {
    id: 27,
    title: "Monster Hunter: World",
    price: 39.99,
    categories: ["action", "rpg"],
    image: "../images/Monster Hunter_World.jpg",
    description:
      "Embark on a hunting expedition in Monster Hunter: World. Track and battle colossal monsters, gather resources, and team up with other hunters in this action-packed and visually stunning RPG.",
  },
  {
    id: 28,
    title: "Mortal Kombat 11",
    price: 49.99,
    categories: ["fighting"],
    image: "../images/Mortal Kombat 11.jpg",
    description:
      "Enter the arena and engage in brutal combat in Mortal Kombat 11. Experience the latest installment in the iconic franchise, featuring a roster of diverse characters and visceral, high-impact battles.",
  },
  {
    id: 29,
    title: "Nier: Automata",
    price: 39.99,
    categories: ["action", "rpg"],
    image: "../images/Nier_ automata.jpg",
    description:
      "Experience the blend of action and RPG elements in Nier: Automata. Play as androids 2B, 9S, and A2, and journey across a devastated world to unravel the truth behind the machine invasion.",
  },
  {
    id: 30,
    title: "Overwatch",
    price: 39.99,
    categories: ["action", "shooter"],
    image: "../images/Overwatch.jpg",
    description:
      "Join the ranks of Overwatch, a team-based multiplayer shooter. Select your hero from a diverse cast, work with your team, and compete in objective-based game modes in this fast-paced and colorful game.",
  },
  {
    id: 31,
    title: "Persona 5",
    price: 49.99,
    categories: ["rpg", "simulation"],
    image: "../images/persona_5.jpg",
    description:
      "Immerse yourself in the stylish and supernatural world of Persona 5. Assume the role of the Phantom Thieves, explore Tokyo, and engage in a unique blend of social simulation and turn-based RPG combat.",
  },
  {
    id: 32,
    title: "PlayerUnknown's Battlegrounds (PUBG)",
    price: 29.99,
    categories: ["action", "shooter"],
    image: "../images/Player Unknowns Battle Grounds.jpg",
    description:
      "Experience the battle royale phenomenon in PlayerUnknown's Battlegrounds (PUBG). Drop onto a vast map, scavenge for weapons, and be the last one standing in this intense and strategic multiplayer game.",
  },
  {
    id: 33,
    title: "Red Dead Redemption 2",
    price: 59.99,
    categories: ["action", "adventure"],
    image: "../images/red_dead_redemption_2.jpg",
    description:
      "Embark on an epic tale of outlaws and redemption in Red Dead Redemption 2. Explore the vast landscapes of the American West, engage in gunfights, and make meaningful choices that shape your destiny.",
  },
  {
    id: 34,
    title: "Resident Evil Village",
    price: 49.99,
    categories: ["horror"],
    image: "../images/resident_evil.jpg",
    description:
      "Enter the mysterious and terrifying world of Resident Evil Village. Face off against grotesque creatures, explore a haunted village, and uncover the dark secrets of the Resident Evil universe.",
  },
  {
    id: 35,
    title: "Sekiro: Shadows Die Twice",
    price: 59.99,
    categories: ["action", "adventure"],
    image: "../images/Sekiro Shadows Die Twice.jpg",
    description:
      "Become the 'One-Armed Wolf' in Sekiro: Shadows Die Twice. Engage in intense sword combat, stealth, and supernatural abilities as you embark on a mission to rescue your kidnapped lord in feudal Japan.",
  },
  {
    id: 36,
    title: "The Sims 4",
    price: 39.99,
    categories: ["simulation"],
    image: "../images/The Sim 4.jpg",
    description:
      "Create and control people in a virtual world in The Sims 4. Customize your characters, build homes, and guide them through various aspects of life in this popular and engaging life simulation game.",
  },
  {
    id: 37,
    title: "Spider-Man: Miles Morales",
    price: 49.99,
    categories: ["action", "adventure"],
    image: "../images/spiderman_miles_morales.jpg",
    description:
      "Swing through the streets of New York as Spider-Man in Miles Morales. Experience the rise of a new hero, master unique powers, and face challenges to become the ultimate Spider-Man.",
  },
  {
    id: 38,
    title: "Star Wars Jedi: Fallen Order",
    price: 49.99,
    categories: ["action", "adventure"],
    image: "../images/Star Wars Jedi Fallen Order.jpg",
    description:
      "Embark on a Star Wars adventure in Jedi: Fallen Order. Play as Cal Kestis, a young Jedi Padawan, and explore the galaxy, solve puzzles, and face off against the Empire and its deadly Inquisitors.",
  },
  {
    id: 39,
    title: "Stardew Valley",
    price: 14.99,
    categories: ["simulation", "rpg"],
    image: "../images/stardew_valley.jpg",
    description:
      "Escape to the countryside in Stardew Valley. Inherit a run-down farm, cultivate crops, raise animals, and build relationships with the quirky inhabitants of the charming Pelican Town.",
  },
  {
    id: 40,
    title: "Super Mario Odyssey",
    price: 59.99,
    categories: ["action", "adventure"],
    image: "../images/super_mario_odyssey.jpg",
    description:
      "Join Mario on a globe-trotting adventure in Super Mario Odyssey. Team up with Cappy, explore diverse kingdoms, and rescue Princess Peach from Bowser's clutches in this critically acclaimed platformer.",
  },
  {
    id: 41,
    title: "Super Smash Bros. Ultimate",
    price: 59.99,
    categories: ["fighting"],
    image: "../images/Super Smash Bros. Ultimate.jpg",
    description:
      "Gather your favorite characters and duke it out in Super Smash Bros. Ultimate. With a vast roster of fighters, stages, and game modes, experience the ultimate crossover brawler with friends or online.",
  },
  {
    id: 42,
    title: "The Elder Scrolls V: Skyrim",
    price: 39.99,
    categories: ["action", "rpg"],
    image: "../images/The Elder Scrolls V_ Skyrim.jpg",
    description:
      "Embark on an epic open-world journey in The Elder Scrolls V: Skyrim. As the Dragonborn, explore the vast landscapes, slay dragons, and make impactful choices in this iconic action RPG.",
  },
  {
    id: 43,
    title: "The Last of Us Part II",
    price: 59.99,
    categories: ["action", "adventure"],
    image: "../images/the_last_of_us_part_II.jpg",
    description:
      "Experience an emotionally charged story in The Last of Us Part II. Play as Ellie, navigate a post-apocalyptic world, and confront the harsh realities of survival in this highly acclaimed action-adventure game.",
  },
  {
    id: 44,
    title: "The Witcher 3: Wild Hunt",
    price: 39.99,
    categories: ["action", "rpg"],
    image: "../images/The Witcher 3_ Wild Hunt.jpg",
    description:
      "Embark on a monster-hunting quest in The Witcher 3: Wild Hunt. Play as Geralt of Rivia, explore a vast open world, make choices with far-reaching consequences, and experience a richly detailed narrative.",
  },
  {
    id: 45,
    title: "Tom Clancy's Rainbow Six Siege",
    price: 19.99,
    categories: ["action", "shooter"],
    image: "../images/Tom Clancy's Rainbow 6 Siege.jpg",
    description:
      "Engage in intense, tactical firefights in Tom Clancy's Rainbow Six Siege. Choose from a variety of operators, each with unique abilities, and participate in multiplayer matches that emphasize strategy and cooperation.",
  },
  {
    id: 46,
    title: "Uncharted 4: A Thief's End",
    price: 39.99,
    categories: ["action", "adventure"],
    image: "../images/uncharted_4_a_thiefs_end.jpg",
    description:
      "Join Nathan Drake on his final adventure in Uncharted 4: A Thief's End. Navigate exotic landscapes, solve intricate puzzles, and engage in thrilling action sequences in this cinematic action-adventure game.",
  },
  {
    id: 47,
    title: "Undertale",
    price: 9.99,
    categories: ["rpg"],
    image: "../images/Undertale.jpg",
    description:
      "Embark on a unique journey in Undertale. Encounter a cast of charming characters, navigate a rich narrative, and make choices that affect the outcome in this indie RPG that subverts traditional gaming conventions.",
  },
  {
    id: 48,
    title: "The Outer Worlds",
    price: 49.99,
    categories: ["action", "rpg"],
    image: "../images/The Outer Wilds.jpg",
    description:
      "Explore a captivating outer space adventure in The Outer Worlds. Navigate a colony on the brink of collapse, make impactful decisions, and encounter a diverse cast of characters in this action RPG.",
  },
  {
    id: 49,
    title: "Watch Dogs: Legion",
    price: 49.99,
    categories: ["action", "adventure"],
    image: "../images/Watch Dogs.jpg",
    description:
      "Immerse yourself in the near-future open-world of Watch Dogs: Legion. As a member of DedSec, recruit a resistance, hack into systems, and liberate London from oppressive forces.",
  },
  {
    id: 50,
    title: "The Witness",
    price: 39.99,
    categories: ["puzzle", "adventure"],
    image: "../images/The Witness.jpg",
    description:
      "Solve intricate puzzles in the beautiful and mysterious world of The Witness. Explore a diverse island, uncover its secrets, and test your wits in this visually stunning and thought-provoking puzzle game.",
  },
  {
    id: 51,
    title: "Wolfenstein: The New Order",
    price: 29.99,
    categories: ["action", "shooter"],
    image: "../images/Wolfenstein the New Order.jpg",
    description:
      "Fight against the Nazi regime in an alternate history in Wolfenstein: The New Order. Join the resistance, wield powerful weapons, and experience a gripping narrative in this first-person shooter.",
  },
];

export default games;
