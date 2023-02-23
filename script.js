let current = 0;

const pokemonName = [           // Name, Number, Weight, Height, Types, Category, Abilities, Hidden Abilities, HP, ATK, DEF, SPD, EXP
    ["Bulbasaur", "0001", "6.9", "0.7", ["Grass", "Poison"], "Seed", ["Overgrow"], ["Chlorophyll"], "45", "49", "49", "45", ""],
    ["Ivysaur", "0002", "13.0", "1.0", ["Grass", "Poison"], "Seed", ["Overgrow"], ["Chlorophyll"], "60", "62", "63", "60", ""],    
    ["Venusaur", "0003", "100.0", "2.0", ["Grass", "Poison"], "Seed", ["Overgrow"], ["Chlorophyll"], "80", "82", "83", "80", ""],
    ["Charmander", "0004", "8.5", "0.6", ["Fire"], "Lizard", ["Blaze"], ["Solar Power"], "39", "52", "43", "65", ""],
    ["Charmeleon", "0005", "19.0", "1.1", ["Fire"], "Flame", ["Blaze"], ["Solar Power"], "58", "64", "58", "80", ""],
    ["Charizard", "0006", "90.5", "1.7", ["Fire", "Flying"], "Flame", ["Blaze"], ["Solar Power"], "78", "84", "78", "100", ""],
    ["Squirtle", "0007", "9.0", "0.5", ["Water"], "Tiny Turtle", ["Torrent"], ["Rain Dish"], "44", "48", "65", "43", ""],
    ["Wartortle", "0008", "22.5", "1.0", ["Water"], "Turtle", ["Torrent"], ["Rain Dish"], "59", "63", "80", "58", ""],
    ["Blastoise", "0009", "85.5", "1.6", ["Water"], "Shellfish", ["Torrent"], ["Rain Dish"], "79", "83", "100", "78", ""],
    ["Caterpie", "0010", "2.9", "0.3", ["Bug"], "Worm", ["Shield Dust"], ["Run Away"], "45", "30", "35", "45", ""],
    ["Metapod", "0011", "9.9", "0.7", ["Bug"], "Cocoon", ["Shed Skin"], ["-------"], "50", "20", "55", "30", ""],
    ["Butterfree", "0012", "32.0", "1.1", ["Bug", "Flying"], "Butterfly", ["Compound Eyes"], ["Tinted Lens"], "60", "45", "50", "70", ""],
    ["Weedle", "0013", "3.2", "0.3", ["Bug", "Poison"], "Hairy Bug", ["Shield Dust"], ["Run Away"], "40", "35", "30", "50", ""],
    ["Kakuna", "0014", "10.0", "0.6", ["Bug", "Poison"], "Cocoon", ["Shed Skin"], ["-------"], "45", "25", "50", "35", ""],
    ["Beedrill", "0015", "29.5", "1.0", ["Bug", "Poison"], "Poison Bee", ["Swarm"], ["Sniper"], "65", "80", "40", "75", ""],
    ["Pidgey", "0016", "1.8", "0.3", ["Normal", "Flying"], "Tiny Bird", ["Keen Eye or Tangled Feet"], ["Big Pecks"], "40", "45", "40", "56", ""],
    ["Pidgeotto", "0017", "30.0", "1.1", ["Normal", "Flying"], "Bird", ["Keen Eye or Tangled Feet"], ["Big Pecks"], "63", "60", "55", "71", ""], 
    ["Pidgeot", "0018", "39.5", "1.5", ["Normal", "Flying"], "Bird", ["Keen Eye or Tangled Feet"], ["Big Pecks"], "83", "80", "75", "91", ""],
    ["Rattata", "0019", "3.5", "0.3", ["Normal"], "Mouse", ["Run Away or Guts"], ["Hustle"], "30", "56", "35", "72", ""],
    ["Raticate", "0020", "18.5", "0.7", ["Normal"], "Mouse", ["Run Away or Guts"], ["Hustle"], "55", "81", "60", "97", ""],
    ["Spearow", "0021", "2.0", "0.3", ["Normal", "Flying"], "Tiny Bird", ["Keen Eye"], ["Sniper"], "40", "60", "30", "70", ""],
    ["Fearow", "0022", "38.0", "1.2", ["Normal", "Flying"], "Beak", ["Keen Eye"], ["Sniper"], "65", "90", "65", "100", ""],
    ["Ekans", "0023", "6.9", "2.0", ["Poison"], "Snake", "Intimidate or Shed Skin", "Unnerve", "35", "60", "44", "55", ""],
    ["Arbok", "0024", "65.0", "3.5", ["Poison"], "Cobra", "Intimidate or Shed Skin", "Unnerve", "60", "85", "69", "80", ""],
    ["Pikachu", "0025", "6.0", "0.4", ["Electric"], "Mouse", "Static", "Lightning Rod", "35", "55", "30", "90", ""],
    ["Raichu", "0026", "30.0", "0.8", ["Electric"], "Mouse", "Static", "Lightning Rod", "60", "85", "50", "110", ""],
    ["Sandshrew", "0027", "12.0", "0.6", ["Ground"], "Mouse", "Sand Veil", "Sand Rush", "50", "75", "85", "40", ""],
    ["Sandslash", "0028", "29.5", "1.0", ["Ground"], "Mouse", "Sand Veil", "Sand Rush", "75", "100", "110", "65", ""],
    ["Nidoran♀", "0029", "7.0", "0.4", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "55", "47", "52", "41", ""],
    ["Nidorina", "0030", "20.0", "0.8", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "70", "62", "67", "56", ""],
    ["Nidoqueen", "0031", "60.0", "1.3", ["Poison", "Ground"], "Drill", "Poison Point or Rivalry", "Sheer Force", "90", "82", "87", "76", ""],
    ["Nidoran♂", "0032", "9.0", "0.5", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "46", "57", "40", "50", ""],
    ["Nidorino", "0033", "19.5", "0.9", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "61", "72", "57", "65", ""],
    ["Nidoking", "0034", "62.0", "1.4", ["Poison", "Ground"], "Drill", "Poison Point or Rivalry", "Sheer Force", "81", "92", "77", "85", ""],
    ["Clefairy", "0035", "7.5", "0.6", ["Fairy"], "Fairy", "Cute Charm or Magic Guard", "Friend Guard", "70", "45", "48", "35", ""],
    ["Clefable", "0036", "40.0", "1.3", ["Fairy"], "Fairy", "Cute Charm or Magic Guard", "Unaware", "95", "70", "73", "60", ""],
    ["Vulpix", "0037", "9.9", "0.6", ["Fire"], "Fox", "Flash Fire", "Drought", "38", "41", "40", "65", ""],
    ["Ninetales", "0038", "19.9", "1.1", ["Fire"], "Fox", "Flash Fire", "Drought", "73", "76", "75", "100", ""],
    ["Jigglypuff", "0039", "5.5", "0.5", ["Normal", "Fairy"], "Balloon", "Cute Charm or Competitive", "Friend Guard", "115", "45", "20", "20", ""],
    ["Wigglytuff", "0040", "12.0", "1.0", ["Normal", "Fairy"], "Balloon", "Cute Charm or Competitive", "Frisk", "140", "70", "45", "45", ""],
    ["Zubat", "0041", "7.5", "0.8", ["Poison", "Flying"], "Bat", "Inner Focus", "Infiltrator", "40", "45", "35", "55", ""],
    ["Golbat", "0042", "55.0", "1.6", ["Poison", "Flying"], "Bat", "Inner Focus", "Infiltrator", "75", "80", "70", "90", ""],
    ["Oddish", "0043", "5.4", "0.5", ["Grass","Poison"], "Weed", "Chlorophyll", "Run Away", "45", "50", "55", "30", ""],
    ["Gloom", "0044", "8.6", "0.8", ["Grass", "Poison"], "Weed", "Chlorophyll", "Stench", "60", "65", "70", "40", ""],
    ["Vileplume", "0045", "18.6", "1.2", ["Grass", "Poison"], "Flower", "Chlorophyll", "Effect Spore", "75", "80", "85", "50", ""],
    ["Paras", "0046", "5.4", "0.3", ["Bug", "Grass"], "Mushroom", "Effect Spore or Dry Skin", "Damp", "35", "70", "55", "25", ""], 
    ["Parasect", "0047", "29.5", "1.0", ["Bug", "Grass"], "Mushroom", "Effect Spore or Dry Skin", "Damp", "60", "95", "80", "30", ""],
    ["Venonat", "0048", "30.0", "1.0", ["Bug", "Poison"], "Insect", "Compound Eyes or Tinted Lens", "Run Away", "60", "55", "50", "45", ""],
    ["Venomoth", "0049", "12.5", "1.5", ["Bug", "Poison"], "Poison Moth", "Shield Dust or Tinted Lens", "Wonder Skin", "70", "65", "60", "90", ""],
    ["Diglett", "0050", "0.8", "0.2", ["Ground"], "Mole", "Sand Veil or Arena Trap", "Sand Force", "10", "55", "25", "95", ""],
    ["Dugtrio", "0051", "33.3", "0.7", ["Ground"], "Mole", "Sand Veil or Arena Trap", "Sand Force", "35", "80", "50", "120", ""],
    ["Meowth", "0052", "4.2", "0.4", ["Normal"], "Scratch Cat", "Pickup or Technician", "Unnerve", "50", "65", "50", "40", ""],
    ["Persian", "0053", "32.0", "1.0", ["Normal"], "Classy Cat", "Limber or Technician", "Unnerve", "65", "60", "60", "115", ""],
    ["Psyduck", "0054", "19.6", "0.8", ["Water"], "Duck", "Damp or Cloud Nine", "Swift Swim", "50", "52", "48", "55", ""],
    ["Golduck", "0055", "76.6", "1.7", ["Water"], "Duck", "Damp or Cloud Nine", "Swift Swim", "80", "82", "78", "85", ""],
    ["Mankey", "0056", "28.0", "0.5", ["Fighting"], "Pig Monkey", "Vital Spirit or Anger Point", "Defiant", "40", "80", "35", "70", ""],
    ["Primeape", "0057", "32.0", "1.0", ["Fighting"], "Pig Monkey", "Vital Spirit or Anger Point", "Defiant", "65", "105", "60", "95", ""],
    ["Growlithe", "0058", "19.0", "0.7", ["Fire"], "Puppy", "Iintimidate or Flash Fire", "Justified", "55", "70", "45", "60", ""],
    ["Arcanine", "0059", "155.0", "1.9", ["Fire"], "Legendary", "Intimidate or Flash Fire", "Justified", "90", "110", "80", "95", ""],
    ["Poliwag", "0060", "12.4", "0.6", ["Water"], "Tadpole", "Water Absorb or Damp", "Swift Swim", "40", "50", "40", "90", ""],
    ["Poliwhirl", "0061", "20.0", "1.0", ["Water"], "Tadpole", "Water Absorb or Damp", "Swift Swim", "65", "65", "65", "90", ""],
    ["Poliwrath", "0062", "54.0", "1.3", ["Water", "Fighting"], "Tadpole", "Water Absorb or Damp", "Swift Swim", "90", "85", "95", "70", ""],
    ["Abra", "0063", "19.5", "0.9", ["Psychic"], "Psi", "Synchronize or Inner Focus", "Magic Guard", "25", "20", "15", "90", ""],
    ["Kadabra", "0064", "56.5", "1.3", ["Psychic"], "Psi", "Synchronize or Inner Focus", "Magic Guard", "40", "35", "30", "105", ""],
    ["Alakazam", "0065", "48.0", "1.5", ["Psychic"], "Psi", "Synchronize or Inner Focus", "Magic Guard", "55", "50", "45", "120", ""],
    ["Machop", "0066", "19.5", "0.8", ["Fighting"], "Superpower", "Guts or No Guard", "Steadfast", "70", "80", "50", "35", ""],
    ["Machocke", "0067", "70.5", "1.5", ["Fighting"], "Superpower", "Guts or No Guard", "Steadfast", "80", "100", "70", "45", ""],
    ["Machamp", "0068", "130.0", "1.6", ["Fighting"], "Superpower", "Guts or No Guard", "Steadfast", "90", "130", "80", "55", ""],
    ["Bellsprout", "0069", "4.0", "0.7", ["Grass", "Poison"], "Flower", "Chlorophyll", "Gluttony", "50", "75", "35", "40", ""],
    ["Weepinbell", "0070", "6.4", "1.0", ["Grass", "Poison"], "Flycatcher", "Chlorophyll", "Gluttony", "65", "90", "50", "55", ""],
    ["Victreebel", "0071", "15.5", "1.7", ["Grass", "Poison"], "Flycatcher", "Chlorophyll", "Gluttony", "80", "105", "65", "70", ""],
    ["Tentacool", "0072", "45.5", "0.9", ["Water", "Poison"], "Jellyfish", "Clear Body or Liquid Ooze", "Rain Dish", "40", "40", "35", "70", ""],
    ["Tentacruel", "0073", "55.0", "1.6", ["Water", "Poison"], "Jellyfish", "Clear Body or Liquid OOze", "Rain Dish", "80", "70", "65", "100", ""],
    ["Geodude", "0074", "20.0", "0.4", ["Rock", "Ground"], "Rock", "Rock Head or Sturdy", "Sand Veil", "40", "80", "100", "20", ""], 
    ["Graveler", "0075", "105.0", "1.0", ["Rock", "Ground"], "Rock", "Rock Head or Sturdy", "Sand Veil", "55", "95", "115", "35", ""],
    ["Golem", "0076", "300.0", "1.4", ["Rock", "Ground"], "Megaton", "Rock Head or Sturdy", "Sand Veil", "80", "110", "130", "45", ""],
    ["Ponyta", "0077", "30.0", "1.0", ["Fire"], "Fire Horse", "Run Away or Flash Fire", "Flame Body", "50", "85", "55", "90", ""],
    ["Rapidash", "0078", "95.0", "1.7", ["Fire"], "Fire Horse", "Run Away or Flash Fire", "Flame Body", "65", "100", "70", "105", ""],
    ["Slowpoke", "0079", "36.0", "1.2", ["Water", "Psychic"], "Dopey", "Oblivious or Own Tempo", "Regenerator", "90", "65", "65", "15", ""],
    ["Slowbro", "0080", "78.5", "1.6", ["Water", "Psychic"], "Hermit Crab", "Oblivious or Own Tempo", "Regenerator", "95", "75", "180", "30", ""],
    ["Magnemite", "0081", "6.0", "0.3", ["Electric", "Steel"], "Magnet", "Magnet Pull or Sturdy", "Analytic", "25", "35", "70", "45", ""],
    ["Magneton", "0082", "60.0", "1.0", ["Electric", "Steel"], "Magnet", "Magnet Pull or Sturdy", "Analytic", "50", "60", "95", "70", ""],
    ["Farfetch'd", "0083", "15.0", "0.8", ["Normal", "Flying"], "Wild Duck", "Keen Eye or Inner Focus", "Defiant", "52", "65", "55", "60", ""],
    ["Doduo", "0084", "39.2", "1.4", ["Normal", "Flying"], "Twin Bird", "Run Away or Early Bird", "Tangled Feet", "35", "85", "45", "75", ""],
    ["Dodrio", "0085", "85.2", "1.8", ["Normal", "Flying"], "Triple Bird", "Run Away or Early Bird", "Tangled Feet", "60", "110", "70", "100", ""],
    ["Seel", "0086", "90.0", "1.1", ["Water"], "Sea Lion", "Thick Fat or Hydration", "Ice Body", "65", "45", "55", "45", ""],
    ["Dewgong", "0087", "120.0", "1.7", ["Water", "Ice"],"Sea Lion", "Thick Fat or Hydration", "Ice Body", "90", "70", "80", "70", ""],
    ["Grimer", "0088", "30.0", "0.9", ["Poison"], "Sludge", "Stench or Sticky Hold", "Poison Touch", "80", "80", "50", "25", ""],
    ["Muk", "0089", "30.0", "1.2", ["Poison"], "Sludge", "Stench or Sticky Hold", "Poison Touch", "105", "105", "75", "50", ""],
    ["Shellder", "0090", "4.0", "0.3", ["Water"], "Bivalve", "Shell Armor or Skill Link", "Overcoat", "30", "65", "100", "40", ""],
    ["Cloyster", "0091", "132.5", "1.5", ["Water", "Ice"], "Bivalve", "Shell Armor or Skill Link", "Overcoat", "50", "95", "180", "70", ""],
    ["Gastly", "0092", "0.1", "1.3", ["Ghost", "Poison"], "Gas", "Levitate", "-------", "30", "35", "30", "80", ""],
    ["Haunter", "0093", "0.1", "1.6", ["Ghost", "Poison"], "Gas", "Levitate", "-------", "45", "50", "45", "95", ""],
    ["Gengar", "0094", "40.5", "1.5", ["Ghost", "Poison"], "Shadow", "Levitate or Curse Body", "-------", "60", "65", "60", "110", ""],
    ["Onix", "0095", "210.0", "8.8", ["Rock", "Ground"], "Rock Snake", "Rock Head or Sturdy", "Weak Armor", "35", "45", "160", "70", ""],
    ["Drowzee", "0096", "32.4", "1.0", ["Psychic"], "Hypnosis", "Insomnia or Forewarn", "Inner Focus", "60", "48", "45", "42", ""],
    ["Hypno", "0097", "75.6", "1.6", ["Psychic"], "Hypnosic", "Insomnia or Forewarn", "Inner Focus", "85", "73", "70", "67", ""],
    ["Krabby", "0098", "6.5", "0.4", ["Water"], "River Crab", "Hyper Cutter or Shell Armor", "Sheer Force", "30", "105", "90", "50", ""],
    ["Kingler", "0099", "60.0", "1.3", ["Water"], "Pincer", "Hyper Cutter or Shell Armor", "Sheer Force", "55", "130", "115", "75", ""],
    ["Voltorb", "0100", "10.4", "0.5", ["Electric"], "Ball", "Soundproof or Static", "Aftermath", "40", "30", "50", "100", ""],
    ["Electrode", "0101", "66.6", "1.2", ["Electric"], "Ball", "Soundproof or Static", "Aftermath", "60", "50", "70", "150", ""],
    ["Exeggcute", "0102", "2.5", "0.4", ["Grass", "Psychic"], "Egg", "Chlorophyll", "Harvest", "60", "40", "80", "40", ""],
    ["Exeggutor", "0103", "120.0", "2.0", ["Grass", "Psychic"], "Coconut", "Chlorophyll", "Harvest", "95", "95", "85", "55", ""],
    ["Cubone", "0104", "6.5", "0.4", ["Ground"], "Lonely", "Rock Head or Lightning Rod", "Battle Armor", "50", "50", "95", "35", ""],
    ["Marowak", "0105", "45.0", "1.0", ["Ground"], "Bone Keeper", "Rock Head or Lightning Rod", "Battle Armor", "60", "80", "110", "45", ""],
    ["Hitmonlee", "0106", "49.8", "1.5", ["Fighting"], "Kicking", "Limber or Reckless", "Unburden", "50", "120", "53", "87", ""],
    ["Hitmonchan", "0107", "50.2", "1.4", ["Fighting"], "Punching", "Keen Eye or Iron Fist", "Inner Focus", "50", "105", "79", "76", ""],
    ["Lickitung", "0108", "65.5", "1.2", ["Normal"], "Licking", "Own Tempo or Oblivious", "Cloud Nine", "90", "55", "75", "30", ""],
    ["Koffing", "0109", "1.0", "0.6", ["Poison"], "Poison Gas", "Levitate or Neutralizing Gas", "Stench", "40", "65", "95", "35", ""],
    ["Weezing", "0110", "9.5", "1.2", ["Poison"], "Poison Gas", "Levitating or Neutralizing Gas", "Stench", "65", "90", "120", "60", ""],
    ["Ryhorn", "0111", "115.0", "1.0", ["Ground", "Rock"], "Spikes", "Lightning Rod or Rock Head", "Reckless", "80", "85", "95", "25", ""],
    ["Rhydon", "0112", "120.0", "1.9", ["Ground", "Rock"], "Drill", "Lighting Rod or Rock Head", "Reckless", "105", "130", "120", "40", ""],
    ["Chansey", "0113", "34.6", "1.1", ["Normal"], "Egg", "Natural Cure or Serene Grace", "Healer", "250", "5", "5", "50", ""],
    ["Tangela", "0114", "35.0", "1.0", ["Grass"], "Vine", "Chlorophyll or Leaf Guard", "Regenerator", "65", "55", "115", "60", ""],
    ["Kangaskhan", "0115", "80.0", "2.2", ["Normal"], "Parent", "Early Bird or Scrappy", "Inner Focus", "105", "95", "80", "90", ""],
    ["Horsea", "0116", "8.0", "0.4", ["Water"], "Dragon", "Swift Swim or Sniper", "Damp", "30", "40", "70", "60", ""],
    ["Seadra", "0117", "25.0", "1.2", ["Water"], "Dragon", "Poison Point or Sniper", "Damp", "55", "65", "95", "85", ""],
    ["Goldeen", "0118", "15.0", "0.6", ["Water"], "Goldfish", "Swift Swim or Water Veil", "Lightning Rod", "45", "67", "60", "63", ""],
    ["Seaking", "0119", "39.0", "1.3", ["Water"], "Goldfish", "Swift Swim or Water Veil", "Lightning Rod", "80", "92", "65", "68", ""],
    ["Staryu", "0120", "34.5", "0.8", ["Water"], "Star Shape", "Illuminate or Natural Cure", "Analytic", "30", "45", "55", "85", ""],
    ["Starmie", "0121", "80.0", "1.1", ["Water", "Psychic"], "Mysterious", "Illuminate or Natural Cure", "Analytic", "60", "75", "85", "115", ""],
    ["Mr. Mime", "0122", "54.5", "1.3", ["Psychic", "Fairy"], "Barrier", "Soundproof or Filter", "Technician", "40", "45", "65", "90", ""],
    ["Scyther", "0123", "56.0", "1.5", ["Bug", "Flying"], "Mantis", "Swarm or Technician", "Steadfast", "70", "110", "80", "105", ""],
    ["Jynx", "0124", "40.6", "1.4", ["Ice", "Psychic"], "Human Shape", "Oblivious or Forewarn", "Dry Skin", "65", "50", "35", "95", ""],
    ["Electabuzz", "0125", "30.0", "1.1", ["Electric"], "Electric", "Static", "Vital Spirit", "65", "83", "57", "105", ""],
    ["Magmar", "0126", "44.5", "1.3", ["Fire"], "Spitfire", "Flame Body", "Vital Spirit", "65", "95", "57", "93", ""],
    ["Pinsir", "0127", "55.0", "1.5", ["Bug"],"Stag Beetle", "Hyper Cutter or Mold Breaker", "Moxie", "65", "125", "100", "85", ""],
    ["Tauros", "0128", "88.4", "1.4", ["Normal"], "Wild Bull", "Intimidate or Anger Point", "Sheer Force", "75", "100", "95", "110", ""],
    ["Magikarp", "0129", "10.0", "0.9", ["Water"], "Fish", "Swift Swim", "Rattled", "20", "10", "55", "80", ""],
    ["Gyarados", "0130", "235.0", "6.5", ["Water", "Flying"], "Atrocious", "Intimidate", "Moxie", "95", "125", "79", "81", ""],
    ["Lapras", "0131", "220.0", "2.5", ["Water", "Ice"], "Transport", "Water Absorb or Shell Armor", "Hydration", "130", "85", "80", "60", ""],
    ["Ditto", "0132", "4.0", "0.3", ["Normal"], "Transform", "Limber", "Imposter", "48", "48", "48", "48", ""],
    ["Eevee", "0133", "6.5", "0.3", ["Normal"], "Evolution", "Run Away or Adaptability", "Anticipation", "55", "55", "50", "55", ""],
    ["Vaporeon", "0134", "29.0", "1.0", ["Water"], "Bubble Jet", "Water Absorb", "Hydration", "130", "65", "60", "65", ""],
    ["Jolteon", "0135", "24.5", "0.8", ["Electric"], "Lightning", "Volt Absorb", "Quick Feet", "65", "65", "60", "130", ""],
    ["Flareon", "0136", "25.0", "0.9", ["Fire"], "Flame", "Flash Fire", "Guts", "65", "130", "60", "65", ""],
    ["Porygon", "0137", "36.5", "0.8", ["Normal"], "Virtual", "Trace or Download", "Analytic", "65", "60", "70", "40", ""],
    ["Omanyte", "0138", "7.5", "0.4", ["Rock", "Water"], "Spiral", "Swift Swim or Shell Armor", "Weak Armor", "35", "40", "100", "35", ""],
    ["Omastar", "0139", "35.0", "1.0", ["Rock", "Water"], "Spiral", "Swift Swim or Shell Armor", "weak Armor", "70", "60", "125", "55", ""],
    ["Kabuto", "0140", "11.5", "0.5", ["Rock", "Water"], "Shellfish", "Swift Swim or Battle Armor", "Weak Armor", "30", "80", "90", "55", ""],
    ["Kabutops", "0141", "40.5", "1.3", ["Rock", "Water"], "Shellfish", "Swift Swim or Battle Armor", "Weak Armor", "60", "115", "105", "80", ""],
    ["Aerodactyle", "0142", "59.0", "1.8", ["Rock", "Flying"], "Fossil", "Rock Head or Pressure", "Unnerve", "80", "105", "65", "130", ""],
    ["Snorlax", "0143", "460.0", "2.1", ["Normal"], "Sleeping", "Immunity or Thick Fat", "Gluttony", "160", "110", "65", "30", ""],
    ["Articuno", "0144", "55.4", "1.7", ["Ice", "Flying"], "Freeze", "Pressure", "Snow Cloak", "90", "85", "100", "85", ""],
    ["Zapdos", "0145", "52.6", "1.6", ["Electric", "Flying"], "Electric", "Pressure", "Static", "90", "90", "85", "100", ""],
    ["Moltres", "0146", "60.0", "2.0", ["Fire", "Flying"], "Flame", "Pressure", "Flame Body", "90", "100", "90", "90", ""],
    ["Dratini", "0147", "3.3", "1.8", ["Dragon"], "Dragon", "Shed Skin", "Marvel Scale", "41", "64", "45", "50", ""],
    ["Dragonair", "0148", "16.5", "4.0", ["Dragon"], "Dragon", "Shed Skin", "Marvel Scale", "61", "84", "65", "70", ""],
    ["Dragonite", "0149", "210.0", "2.2", ["Dragon", "Flying"], "Dragon", "Inner Focus", "Multiscale", "91", "134", "95", "80", ""],
    ["Mewtwo", "0150", "122.0", "2.0", ["Psychic"], "Genetic", "Pressure", "Unnerve", "106", "110", "90", "130", ""],
    ["Mew", "0151", "4.0", "0.4", ["Psychic"], "New Species", "Synchronize", "-------", "100", "100", "100", "100", ""],

]
// ["", "", "", "", ["", ""], "", "", "", "", "", "", "", ""],
// ["", "", "", "", [""], "", "", "", "", "", "", "", ""],



const images = [
    '0001Bulbasaur.png',
    '0002Ivysaur.png', 
    '0003Venusaur.png', 
    '0004Charmander.png',
    '0005Charmeleon.png',
    '0006Charizard.png',
    '0007Squirtle.png',
    '0008Wartortle.png',
    '0009Blastoise.png',
    '0010Caterpie.png',
    '0011Metapod.png',
    '0012Butterfree.png',
    '0013Weedle.png',
    '0014Kakuna.png',
    '0015Beedrill.png',
    '0016Pidgey.png',
    '0017Pidgeotto.png',
    '0018Pidgeot.png',
    '0019Rattata.png',
    '0020Raticate.png',
    '0021Spearow.png',
    '0022Fearow.png',
    '0023Ekans.png',
    '0024Arbok.png',
    '0025Pikachu.png',
    '0026Raichu.png',
    '0027Sandshrew.png',
    '0028Sandslash.png',
    '0029Nidoran.png',
    '0030Nidorina.png',
    '0031Nidoqueen.png',
    '0032Nidoran.png',
    '0033Nidorino.png',
    '0034Nidoking.png',
    '0035Clefairy.png',
    '0036Clefable.png',
    '0037Vulpix.png',
    '0038Ninetales.png',
    '0039Jigglypuff.png',
    '0040Wigglytuff.png',
    '0041Zubat.png',
    '0042Golbat.png',
    '0043Oddish.png',
    '0044Gloom.png',
    '0045Vileplume.png',
    '0046Paras.png',
    '0047Parasect.png',
    '0048Venonat.png',
    '0049Venomoth.png',
    '0050Diglett.png',
    '0051Dugtrio.png',
    '0052Meowth.png',
    '0053Persian.png',
    '0054Psyduck.png',
    '0055Golduck.png',
    '0056Mankey.png',
    '0057Primeape.png',
    '0058Growlithe.png',
    '0059Arcanine.png',
    '0060Poliwag.png',
    '0061Poliwhirl.png',
    '0062Poliwrath.png',
    '0063Abra.png',
    '0064Kadabra.png',
    '0065Alakazam.png',
    '0066Machop.png',
    '0067Machoke.png',
    '0068Machamp.png',
    '0069Bellsprout.png',
    '0070Weepinbell.png',
    '0071Victreebel.png',
    '0072Tentacool.png',
    '0073Tentacruel.png',
    '0074Geodude.png',
    '0075Graveler.png',
    '0076Golem.png',
    '0077Ponyta.png',
    '0078Rapidash.png',
    '0079Slowpoke.png',
    '0080Slowbro.png',
    '0081Magnemite.png',
    '0082Magneton.png',
    '0083Farfetchd.png',
    '0084Doduo.png',
    '0085Dodrio.png',
    '0086Seel.png',
    '0087Dewgong.png',
    '0088Grimer.png',
    '0089Muk.png',
    '0090Shellder.png',
    '0091Cloyster.png',
    '0092Gastly.png',
    '0093Haunter.png',
    '0094Gengar.png',
    '0095Onix.png',
    '0096Drowzee.png',
    '0097Hypno.png',
    '0098Krabby.png',
    '0099Kingler.png',
    '0100voltorb.png',
    '0101Electrode.png',
    '0102Exeggcute.png',
    '0103exeggutor.png',
    '0104Cubone.png',
    '0105Marowak.png',
    '0106Hitmonlee.png',
    '0107Hitmonchan.png',
    '0108Lickitung.png',
    '0109Koffing.png',
    '0110Weezing.png',
    '0111Rhyhorn.png',
    '0112Rhydon.png',
    '0113Chansey.png',
    '0114Tangela.png',
    '0115Kangaskhan.png',
    '0116Horsea.png',
    '0117Seadra.png',
    '0118Goldeen.png',
    '0119Seaking.png',
    '0120Staryu.png',
    '0121Starmie.png',
    '0122Mr._Mime.png',
    '0123Scyther.png',
    '0124Jynx.png',
    '0125Electabuzz.png',
    '0126Magmar.png',
    '0127Pinsir.png',
    '0128Tauros.png',
    '0129Magikarp.png',
    '0130Gyarados.png',
    '0131Lapras.png',
    '0132Ditto.png',
    '0133Eevee.png',
    '0134Vaporeon.png',
    '0135Jolteon.png',
    '0136Flareon.png',
    '0137Porygon.png',
    '0138Omanyte.png',
    '0139Omastar.png',
    '0140Kabuto.png',
    '0141Kabutops.png',
    '0142Aerodactyl.png',
    '0143Snorlax.png',
    '0144Articuno.png',
    '0145Zapdos.png',
    '0146Moltres.png',
    '0147Dratini.png',
    '0148Dragonair.png',
    '0149Dragonite.png',
    '0150Mewtwo.png',
    '0151Mew.png'
];

function createBugType() {
    var Bug = document.createElement("div");
    Bug.innerHTML = "Bug";
    Bug.id = "bugType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Bug);
}
let removeBugType = () => {
    let removeBug = document.getElementById("bugType");
    if (removeBug) {
        removeBug.parentNode.removeChild(removeBug);
    }
}
function createDarkType() {
    let Dark = document.createElement("div");
    Dark.innerHTML = "Dark";
    Dark.id = "darkType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Dark);
}
let removeDarkType = () => {
    let removeDark = document.getElementById("darkType");
    if (removeDark) {
        removeDark.parentNode.removeChild(removeDark);
    }
}
function createDragonType() {
    let Dragon = document.createElement("div");
    Dragon.innerHTML = "Dragon";
    Dragon.id = "dragonType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Dragon);
}
let removeDragonType = () => {
    let removeDragon = document.getElementById("dragonType");
    if (removeDragon) {
        removeDragon.parentNode.removeChild(removeDragon);
    }
}
function createElectricType() {
    let Electric = document.createElement("div");
    Electric.innerHTML = "Electric";
    Electric.id = "electricType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Electric);
}
let removeElectricType = () => {
    let removeElectric = document.getElementById("electricType");
    if (removeElectric) {
        removeElectric.parentNode.removeChild(removeElectric);
    }
}
function createFairyType() {
    let Fairy = document.createElement("div");
    Fairy.innerHTML = "Fairy";
    Fairy.id = "fairyType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Fairy);
}
let removeFairyType = () => {
    let removeFairy = document.getElementById("fairyType");
    if (removeFairy) {
        removeFairy.parentNode.removeChild(removeFairy);
    }
}
function createFightingType() {
    let Fighting = document.createElement("div");
    Fighting.innerHTML = "Fighting";
    Fighting.id = "fightingType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Fighting);
}
let removeFightingType = () => {
    let removeFighting = document.getElementById("fightingType");
    if (removeFighting) {
        removeFighting.parentNode.removeChild(removeFighting);
    }
}
function createFireType() {
    var Fire = document.createElement("div");
    Fire.innerHTML = "Fire";
    Fire.id = "fireType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Fire);
}
let removeFireType = () => {
    let removeFire = document.getElementById("fireType");
    if (removeFire) {
        removeFire.parentNode.removeChild(removeFire);
    }
}
function createFlyingType() {
    let Flying = document.createElement("div");
    Flying.innerHTML = "Flying";
    Flying.id = "flyingType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Flying);
}
let removeFlyingType = () => {
    let removeFlying = document.getElementById("flyingType");
    if (removeFlying) {
        removeFlying.parentNode.removeChild(removeFlying);
    }
}
function createGhostType() {
    let Ghost = document.createElement("div");
    Ghost.innerHTML = "Ghost";
    Ghost.id = "ghostType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Ghost);
}
let removeGhostType = () => {
    let removeGhost = document.getElementById("ghostType");
    if (removeGhost) {
        removeGhost.parentNode.removeChild(removeGhost)
    }
}
function createGrassType() {
    let Grass = document.createElement("div");
    Grass.innerHTML = "Grass";
    Grass.id = "grassType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Grass);
}
let removeGrassType = () => {
    let removeGrass = document.getElementById("grassType");
    if (removeGrass) {
        removeGrass.parentNode.removeChild(removeGrass)
    }
}
function createGroundType() {
    let Ground = document.createElement("div");
    Ground.innerHTML = "Ground";
    Ground.id = "groundType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Ground);
}
let removeGroundType = () => {
    let removeGround = document.getElementById("groundType");
    if (removeGround) {
        removeGround.parentNode.removeChild(removeGround)
    }
}
function createIceType() {
    let Ice = document.createElement("div");
    Ice.innerHTML = "Ice";
    Ice.id = "iceType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Ice);
}
let removeIceType = () => {
    let removeIce = document.getElementById("iceType");
    if (removeIce) {
        removeIce.parentNode.removeChild(removeIce)
    }
}
function createNormalType() {
    let Normal = document.createElement("div");
    Normal.innerHTML = "Normal";
    Normal.id = "normalType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Normal);
}
let removeNormalType = () => {
    let removeNormal = document.getElementById("normalType");
    if (removeNormal) {
        removeNormal.parentNode.removeChild(removeNormal)
    }
}
function createPoisonType() {
    let Poison = document.createElement("div");
    Poison.innerHTML = "Poison";
    Poison.id = "poisonType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Poison);
}
let removePoisonType = () => {
    let removePoison = document.getElementById("poisonType");
    if (removePoison) {
        removePoison.parentNode.removeChild(removePoison)
    }
}
function createPsychicType() {
    let Psychic = document.createElement("div");
    Psychic.innerHTML = "Psychic";
    Psychic.id = "psychicType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Psychic);
}
let removePsychicType = () => {
    let removePsychic = document.getElementById("psychicType");
    if (removePsychic) {
        removePsychic.parentNode.removeChild(removePsychic)
    }
}
function createRockType() {
    let Rock = document.createElement("div");
    Rock.innerHTML = "Rock";
    Rock.id = "rockType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Rock);
}
let removeRockType = () => {
    let removeRock = document.getElementById("rockType");
    if (removeRock) {
        removeRock.parentNode.removeChild(removeRock)
    }
}
function createSteelType() {
    let Steel = document.createElement("div");
    Steel.innerHTML = "Steel";
    Steel.id = "steelType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Steel);
}
let removeSteelType = () => {
    let removeSteel = document.getElementById("steelType");
    if (removeSteel) {
        removeSteel.parentNode.removeChild(removeSteel)
    }
}
function createWaterType() {
    let Water = document.createElement("div");
    Water.innerHTML = "Water";
    Water.id = "waterType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Water);
}
let removeWaterType = () => {
    let removeWater = document.getElementById("waterType");
    if (removeWater) {
        removeWater.parentNode.removeChild(removeWater)
    }
}
let removeAllTypes = () => {
    removeBugType();
    removeDarkType();
    removeDragonType();
    removeElectricType();
    removeFairyType();
    removeFightingType();
    removeFireType();
    removeFlyingType();
    removeGhostType();
    removeGrassType();
    removeGroundType();
    removeIceType();
    removeNormalType();
    removePoisonType();
    removePsychicType();
    removeRockType();
    removeSteelType();
    removeWaterType();
}
let backgroundBug = () => {
    let BugBG = document.getElementById("abilities");
    BugBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundDark = () => {
    let DarkBG = document.getElementById("abilities");
    DarkBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundDragon = () => {
    let DragonBG = document.getElementById("abilities");
    DragonBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundElectric = () => {
    let ElectricBG = document.getElementById("abilities");
    ElectricBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFairy = () => {
    let FairyBG = document.getElementById("abilities");
    FairyBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFighting = () => {
    let FightingBG = document.getElementById("abilities");
    FightingBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFire = () => {
    let FireBG = document.getElementById("abilities");
    FireBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFlying = () => {
    let FlyingBG = document.getElementById("abilities");
    FlyingBG.classList.add = `abilities-${pokemonName[current][4][0]}`;
}
let backgroundGhost = () => {
    let GhostBG = document.getElementById("abilities");
    GhostBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundGrass = () => {
    let GrassBG = document.getElementById("abilities");
    GrassBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundGround = () => {
    let GroundBG = document.getElementById("abilities");
    GroundBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundIce = () => {
    let IceBG = document.getElementById("abilities");
    IceBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundNormal = () => {
    let NormalBG = document.getElementById("abilities");
    NormalBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundPoison = () => {
    let PoisonBG = document.getElementById("abilities");
    PoisonBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundPsychic = () => {
    let PsychicBG = document.getElementById("abilities");
    PsychicBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundRock = () => {
    let RockBG = document.getElementById("abilities");
    RockBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundSteel = () => {
    let SteelBG = document.getElementById("abilities");
    SteelBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundWater = () => {
    let WaterBG = document.getElementById("abilities");
    WaterBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}

console.log(`abilities-${pokemonName[current][4][0]}`)
let backgroundTypeRemove = () => {
        let removeBG = document.getElementById("abilities");
        removeBG.classList.remove("abilities-Dark");
        removeBG.classList.remove("abilities-Bug");
        removeBG.classList.remove("abilities-Dragon");
        removeBG.classList.remove("abilities-Electric");
        removeBG.classList.remove("abilities-Fairy");
        removeBG.classList.remove("abilities-Fighting");
        removeBG.classList.remove("abilities-Fire");
        removeBG.classList.remove("abilities-Flying");
        removeBG.classList.remove("abilities-Ghost");
        removeBG.classList.remove("abilities-Grass");
        removeBG.classList.remove("abilities-Ground");
        removeBG.classList.remove("abilities-Ice");
        removeBG.classList.remove("abilities-Normal");
        removeBG.classList.remove("abilities-Poison");
        removeBG.classList.remove("abilities-Psychic");
        removeBG.classList.remove("abilities-Rock");
        removeBG.classList.remove("abilities-Steel");
        removeBG.classList.remove("abilities-Water");
    }

let updateUI = function() {
    let currentPokemon = pokemonName[current];

    const Name = document.querySelector("#pokemon-name");
    const pokemonBG = document.getElementById("abilities");
    const pokemonClassification = document.getElementById("pokemon-classification");
    const numberPokedex = document.querySelector("#pokemon-number");
    const weightPokedex = document.querySelector("#pokemon-weight");
    const heightPokedex = document.querySelector("#pokemon-height");
    const typePokedex = document.querySelector("#pokemon-type");
    const imagesPokedex = document.getElementById("pokemon-image")
    const pokemonAbility = document.getElementById("ability");
    const pokemonHiddenAbility = document.getElementById("hidden-ability");
    const pokemonHp = document.getElementById("pokemon-hp");
    const pokemonAtk = document.getElementById("pokemon-atk");
    const pokemonDef = document.getElementById("pokemon-def");
    const pokemonSpd = document.getElementById("pokemon-spd");

    Name.textContent = currentPokemon[0];
    imagesPokedex.src = `Images/${images[current]}`;
    numberPokedex.textContent = currentPokemon[1];
    weightPokedex.textContent = `${currentPokemon[2]} kg`;
    heightPokedex.textContent = `${currentPokemon[3]} m`;
    pokemonClassification.textContent = `${currentPokemon[5]} Pokemon`;
    pokemonAbility.textContent = currentPokemon[6];
    pokemonHiddenAbility.textContent = currentPokemon[7];
    pokemonHp.textContent = currentPokemon[8];
    pokemonAtk.textContent = currentPokemon[9];
    pokemonDef.textContent = currentPokemon[10];
    pokemonSpd.textContent = currentPokemon[11];


    let typeGenerator = () => {
        if(currentPokemon[4].length == 2){
            if(currentPokemon[4][0] == "Grass" && currentPokemon[4][1] == "Poison"){
                removeAllTypes();
                createGrassType();
                createPoisonType();
                backgroundTypeRemove();
                backgroundGrass();
            }
            if(currentPokemon[4][0] == "Fire" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createFireType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundFire();
            }
            if(currentPokemon[4][0] == "Bug" && currentPokemon[4][1] == "Poison"){
                removeAllTypes();
                createBugType();
                createPoisonType();
                backgroundTypeRemove();
                backgroundBug();
            }
            if(currentPokemon[4][0] == "Bug" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createBugType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundBug();
            }
            if(currentPokemon[4][0] == "Normal" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createNormalType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundNormal();
            }
            if(currentPokemon[4][0] == "Normal" && currentPokemon[4][1] == "Fairy"){
                removeAllTypes();
                createNormalType();
                createFairyType();
                backgroundTypeRemove();
                backgroundNormal();
            }
            if(currentPokemon[4][0] == "Poison" && currentPokemon[4][1] == "Ground"){
                removeAllTypes();
                createPoisonType();
                createGroundType();
                backgroundTypeRemove();
                backgroundPoison();
            }
            if(currentPokemon[4][0] == "Poison" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createPoisonType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundPoison();
            }
            if(currentPokemon[4][0] == "Water" && currentPokemon[4][1] == "Poison"){
                removeAllTypes();
                createWaterType();
                createPoisonType();
                backgroundTypeRemove();
                backgroundWater();
            }
            if(currentPokemon[4][0] == "Rock" && currentPokemon[4][1] == "Ground"){
                removeAllTypes();
                createRockType();
                createGroundType();
                backgroundTypeRemove();
                backgroundRock();
            }
            if(currentPokemon[4][0] == "Water" && currentPokemon[4][1] == "Psychic"){
                removeAllTypes();
                createWaterType();
                createPsychicType();
                backgroundTypeRemove();
                backgroundWater();
            }
            if(currentPokemon[4][0] == "Electric" && currentPokemon[4][1] == "Steel"){
                removeAllTypes();
                createElectricType();
                createSteelType();
                backgroundTypeRemove();
                backgroundElectric();
            }
            if(currentPokemon[4][0] == "Water" && currentPokemon[4][1] == "Ice"){
                removeAllTypes();
                createWaterType();
                createIceType();
                backgroundTypeRemove();
                backgroundWater();
            }
            if(currentPokemon[4][0] == "Ghost" && currentPokemon[4][1] == "Poison"){
                removeAllTypes();
                createGhostType();
                createPoisonType();
                backgroundTypeRemove();
                backgroundGhost();
            }
            if(currentPokemon[4][0] == "Grass" && currentPokemon[4][1] == "Psychic"){
                removeAllTypes();
                createGrassType();
                createPsychicType();
                backgroundTypeRemove();
                backgroundGrass();
            }
            if(currentPokemon[4][0] == "Water" && currentPokemon[4][1] == "Psychic"){
                removeAllTypes();
                createWaterType();
                createPsychicType();
                backgroundTypeRemove();
                backgroundWater();
            }
            if(currentPokemon[4][0] == "Psychic" && currentPokemon[4][1] == "Fairy"){
                removeAllTypes();
                createPsychicType();
                createFairyType();
                backgroundTypeRemove();
                backgroundPsychic();
            }
            if(currentPokemon[4][0] == "Ice" && currentPokemon[4][1] == "Psychic"){
                removeAllTypes();
                createIceType();
                createPsychicType();
                backgroundTypeRemove();
                backgroundIce();
            }
            if(currentPokemon[4][0] == "Ground" && currentPokemon[4][1] == "Rock"){
                removeAllTypes();
                createGroundType();
                createRockType();
                backgroundTypeRemove();
                backgroundGround();
            }
            if(currentPokemon[4][0] == "Rock" && currentPokemon[4][1] == "Water"){
                removeAllTypes();
                createRockType();
                createWaterType();
                backgroundTypeRemove();
                backgroundRock();
            }
            if(currentPokemon[4][0] == "Water" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createWaterType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundWater();
            }
            if(currentPokemon[4][0] == "Rock" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createRockType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundRock();
            }
            if(currentPokemon[4][0] == "Ice" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createIceType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundIce();
            }
            if(currentPokemon[4][0] == "Electric" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createElectricType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundElectric();
            }
            if(currentPokemon[4][0] == "Fire" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createFireType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundFire();
            }
            if(currentPokemon[4][0] == "Dragon" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createDragonType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundDragon();
            }
            
            
        } else if (currentPokemon[4].length == 1){
            if(currentPokemon[4].includes("Grass")){
                removeAllTypes();
                createGrassType();
                backgroundTypeRemove();
                backgroundGrass();
            }
            if(currentPokemon[4].includes("Fire")){
                removeAllTypes();
                createFireType();
                backgroundTypeRemove();
                backgroundFire();
            }
            if(currentPokemon[4].includes("Water")){
                removeAllTypes();
                createWaterType();
                backgroundTypeRemove();
                backgroundWater();
            }
            if(currentPokemon[4].includes("Poison")){
                removeAllTypes();
                createPoisonType();
                backgroundTypeRemove();
                backgroundPoison();
            }
            if(currentPokemon[4].includes("Flying")){
                removeAllTypes();
                createFlyingType();
                backgroundTypeRemove();
                backgroundFlying();
            }
            if(currentPokemon[4].includes("Bug")){
                removeAllTypes();
                createBugType();
                backgroundTypeRemove();
                backgroundBug();
            }
            if(currentPokemon[4].includes("Normal")){
                removeAllTypes();
                createNormalType();
                backgroundTypeRemove();
                backgroundNormal();
            }
            if(currentPokemon[4].includes("Fairy")){
                removeAllTypes();
                createFairyType();
                backgroundTypeRemove();
                backgroundFairy();
            }
            if(currentPokemon[4].includes("Electric")){
                removeAllTypes();
                createElectricType();
                backgroundTypeRemove();
                backgroundElectric();
            }
            if(currentPokemon[4].includes("Ground")){
                removeAllTypes();
                createGroundType();
                backgroundTypeRemove();
                backgroundGround();
            }
            if(currentPokemon[4].includes("Fighting")){
                removeAllTypes();
                createFightingType();
                backgroundTypeRemove();
                backgroundFighting();
            }
            if(currentPokemon[4].includes("Psychic")){
                removeAllTypes();
                createPsychicType();
                backgroundTypeRemove();
                backgroundPsychic();
            }
            if(currentPokemon[4].includes("Dragon")){
                removeAllTypes();
                createDragonType();
                backgroundTypeRemove();
                backgroundDragon();
            }
        }
    }
    typeGenerator();
};

const buttonPrev = document.querySelector("#Prev");
    buttonPrev.addEventListener("click", function(){
        if (current === 0) {
            current = pokemonName.length - 1;
        } else {
            current = current - 1;
        }
        console.log(current, " prev");
        updateUI();
    });

    const buttonNext = document.querySelector("#Next");
    buttonNext.addEventListener("click", function(){
        if (current === pokemonName.length - 1) {
            current = 0;
        } else {
            current = current + 1;
        }
        console.log(current, " next");
        updateUI();
        
    });

updateUI();
