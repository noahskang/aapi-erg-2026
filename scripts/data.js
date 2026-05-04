// ============================================================
// AAPI Heritage Month — Hinge ERG NYC
// data.js — All site content data
// Last updated: April 2026 (real confirmed sources)
// ============================================================

// ============================================================
// RESTAURANTS — Unified "Recs" list: restaurants + cultural spaces, shops, studios
// Schema: id, name, neighborhood, address, kind, lat, lng, hours, link, tags,
//         description, highlights (optional), priceRange (optional),
//         photos (optional array), recommender (optional), recommenderTitle (optional)
// ============================================================
const RESTAURANTS = [
  {
    id: 1,
    name: "Xi'an Famous Foods",
    neighborhood: "Flatiron / Multiple Locations",
    address: "38 E 23rd St, New York, NY 10010",
    kind: "Shanxi Chinese",
    lat: 40.7412,
    lng: -73.9855,
    hours: "Mon–Sun: 11am–9pm",
    link: "https://www.xianfoods.com/",
    description: "A family-run Chinese chain that started as a basement bubble-tea stall in Flushing in 2005 and grew into 25+ NYC-area locations under father-son founders David and Jason Wang. Known for hand-ripped Biang Biang noodles and a proprietary 30-ingredient chili oil.",
    highlights: ["Spicy Cumin Lamb Burger", "Hand-Ripped Noodles", "Lamb Face Salad", "Liang Pi Cold Skin Noodles"],
    priceRange: "$",
    photos: [
      "assets/images/recs/xian-1.jpg",
      "assets/images/recs/xian-2.jpg"
    ],
    tags: ["Noodles", "Spicy", "Quick Bite", "Lunch Favorite"]
  },
  {
    id: 2,
    name: "Ugly Baby",
    neighborhood: "Williamsburg, Brooklyn",
    address: "364 Grand St, Brooklyn, NY 11211",
    kind: "Isaan Thai",
    lat: 40.7138,
    lng: -73.9580,
    hours: "Reopening February 2026 — check site",
    link: "https://www.uglybabynyc.com/",
    description: "Chef Sirichai Sreparplarn's beloved Carroll Gardens Isaan Thai spot closed in late 2024 after a seven-year run; the team signed a Williamsburg lease and is set to reopen at 364 Grand St in February 2026. Long lauded for spice-forward dishes that don't compromise on heat.",
    highlights: ["Crying Tiger Beef", "Larb Ped (Duck Laab)", "Papaya Pok Pok", "Sticky Rice"],
    priceRange: "$$",
    photos: [
      "assets/images/recs/uglybaby-1.jpg"
    ],
    tags: ["Thai", "Spicy", "Date Night", "Brooklyn"]
  },
  {
    id: 3,
    name: "Jongro BBQ",
    neighborhood: "Koreatown, Midtown",
    address: "22 W 32nd St, 2nd Floor, New York, NY 10001",
    kind: "Korean BBQ",
    lat: 40.7479,
    lng: -73.9878,
    hours: "Sun–Thu: 11:30am–12am, Fri–Sat: 11:30am–1am",
    link: "https://www.jongrobbqny.com/",
    description: "An import from a Korean chain that opened its first U.S. outpost on West 32nd in 2015. Meats are butchered in-house and grilled tableside in a vast second-floor room dressed with antique Korean signage and delivery bikes.",
    highlights: ["Galbi (Short Ribs)", "Brisket", "Samgyeopsal (Pork Belly)", "Spicy Marinated Chicken"],
    priceRange: "$$$",
    photos: [
      "assets/images/recs/jongro-1.jpg",
      "assets/images/recs/jongro-2.jpg",
      "assets/images/recs/jongro-3.jpg"
    ],
    tags: ["Korean BBQ", "Late Night", "Group Dinner", "K-Town"]
  },
  {
    id: 4,
    name: "Kopitiam",
    neighborhood: "Lower East Side",
    address: "151 E Broadway, New York, NY 10002",
    kind: "Malaysian (Nyonya)",
    lat: 40.7141,
    lng: -73.9906,
    hours: "Wed–Mon: 9am–4pm (Closed Tue)",
    link: "https://www.kopitiamnyc.com/",
    description: "A fast-casual Lower East Side eatery from chef-owner Kyo Pang, a third-generation Nyonya cook serving the Chinese-Malay hybrid cuisine of her family. Dishes are made without additives or artificial coloring; Pang has been a James Beard semifinalist.",
    highlights: ["Nasi Lemak", "Roti Canai", "Hainanese Chicken Rice", "Kopi C Peng (Iced Coffee)"],
    priceRange: "$$",
    photos: [
      "assets/images/recs/kopitiam-1.jpg",
      "assets/images/recs/kopitiam-2.jpg",
      "assets/images/recs/kopitiam-3.jpg"
    ],
    tags: ["Malaysian", "Brunch", "Coffee", "LES"]
  },
  {
    id: 5,
    name: "Hanoi House",
    neighborhood: "East Village",
    address: "119 Saint Marks Pl, New York, NY 10009",
    kind: "Vietnamese",
    lat: 40.7279,
    lng: -73.9840,
    hours: "Mon–Sun: 12pm–10pm",
    link: "https://www.hanoihousenyc.com/",
    description: "A plant-heavy, dimly lit East Village Vietnamese spot founded by Stephen Starr alums Ben Lowell and Sara Leveen, with chef John Nguyen on the line. The pho bac simmers for 16 hours; the patio always feels like a phở-powered St. Marks party.",
    highlights: ["Bun Bo Hue", "Bun Cha", "Banh Mi", "Cha Ca La Vong"],
    priceRange: "$$",
    photos: [
      "assets/images/recs/hanoi-1.jpg",
      "assets/images/recs/hanoi-2.jpg",
      "assets/images/recs/hanoi-3.jpg"
    ],
    tags: ["Vietnamese", "Noodles", "East Village", "Hidden Gem"]
  },
  {
    id: 6,
    name: "Atoboy",
    neighborhood: "NoMad",
    address: "43 E 28th St, New York, NY 10016",
    kind: "Modern Korean",
    lat: 40.7435,
    lng: -73.9859,
    hours: "Mon–Sat: 5:30pm–10:30pm (Closed Sun)",
    link: "https://www.atoboynyc.com/",
    description: "Chef Junghyun \"JP\" Park and Ellia Park's first NYC restaurant, opened in 2016 as the casual, banchan-driven sibling to their Michelin-two-starred Atomix. Innovative Korean-inspired cooking served on hand-thrown ceramics in a bare-bones NoMad room.",
    highlights: ["Charred Eggplant", "Braised Short Rib", "Hamachi Crudo", "Gochujang Glazed Duck"],
    priceRange: "$$$",
    photos: [
      "assets/images/recs/atoboy-1.jpg",
      "assets/images/recs/atoboy-2.jpg"
    ],
    tags: ["Korean Fine Dining", "Special Occasion", "Date Night", "NoMad"]
  },
  {
    id: 7,
    name: "Pecking House",
    neighborhood: "Chinatown",
    address: "83 Henry St, New York, NY 10002",
    kind: "Sichuan Fried Chicken",
    lat: 40.7117,
    lng: -73.9952,
    hours: "Mon–Sun: 11am–10pm",
    link: "https://www.peckinghouse.com/",
    description: "Chef Eric Huang — formerly a sous chef at Eleven Madison Park — turned a pandemic-era delivery experiment from his family's old Queens kitchen into a buttermilk-brined, Sichuan-peppercorn-finished fried-chicken sensation. The Chinatown brick-and-mortar is the current flagship after the Brooklyn original closed.",
    highlights: ["Sichuan Chili Fried Chicken", "Chicken Sandwich", "Mapo Tofu", "Dan Dan Noodles"],
    priceRange: "$$",
    photos: [
      "assets/images/recs/pecking-1.jpg"
    ],
    tags: ["Chinese", "Fried Chicken", "Chinatown", "Casual"]
  },
  {
    id: 8,
    name: "Tang Pavilion",
    neighborhood: "Midtown West",
    address: "65 W 55th St, New York, NY 10019",
    kind: "Shanghainese",
    lat: 40.7630,
    lng: -73.9791,
    hours: "Mon–Fri: 11:30am–10pm, Sat–Sun: 12pm–10pm",
    link: "https://www.tangpavilionnyc.com/",
    description: "A long-standing midtown Chinese restaurant that pairs bold Sichuan flavors with Hong Kong-style dim sum and Shanghainese classics. A reliable lunch and pre-theater stop on West 55th since the 1990s.",
    highlights: ["Soup Dumplings (Xiao Long Bao)", "Dongpo Pork", "Crab & Pork Dumplings", "Scallion Oil Noodles"],
    priceRange: "$$",
    photos: [
      "assets/images/recs/tang-1.jpg",
      "assets/images/recs/tang-2.jpg",
      "assets/images/recs/tang-3.jpg"
    ],
    tags: ["Shanghainese", "Dumplings", "Midtown", "Lunch"]
  },
  {
    id: 9,
    name: "Somtum Der",
    neighborhood: "East Village",
    address: "85 Avenue A, New York, NY 10009",
    kind: "Isaan Thai",
    lat: 40.7257,
    lng: -73.9836,
    hours: "Mon–Sun: 12pm–10:30pm",
    link: "https://www.somtumdernewyork.com/",
    description: "An East Village outpost of the Bangkok original, specializing in northeastern Thai (Isaan) cooking — papaya salads pounded to order, fermented sausages, and laab tossed with toasted rice powder. Heat-forward, communal, and reliably packed.",
    highlights: ["Som Tum Thai", "Larb Ped (Duck Laab)", "Sai Krok Isan", "Gai Yang"],
    priceRange: "$$",
    photos: [
      "assets/images/recs/somtum-1.jpg",
      "assets/images/recs/somtum-2.jpg",
      "assets/images/recs/somtum-3.jpg"
    ],
    tags: ["Thai", "Spicy", "East Village", "Group Dinner"]
  },
  {
    id: 10,
    name: "Momofuku Noodle Bar",
    neighborhood: "East Village",
    address: "171 1st Ave, New York, NY 10003",
    kind: "Modern Asian / Ramen",
    lat: 40.7287,
    lng: -73.9856,
    hours: "Mon–Sun: 5pm–10pm (lunch Fri–Sun)",
    link: "https://momofuku.com/restaurants/noodle-bar-east-village",
    description: "David Chang's flagship, where the Momofuku empire began in 2004. The original East Village space serves ramen, pork buns, and rotating large-format dishes; the famous Ssäm Bar permanently closed in 2023, but Noodle Bar remains the canonical Chang room.",
    highlights: ["Pork Belly Buns", "Momofuku Ramen", "Spicy Rice Cakes", "Smoked Chicken Wings"],
    priceRange: "$$$",
    photos: [
      "assets/images/recs/momofuku-1.jpg",
      "assets/images/recs/momofuku-2.jpg",
      "assets/images/recs/momofuku-3.jpg"
    ],
    tags: ["Ramen", "Group Dinner", "East Village", "Iconic"]
  },
  {
    id: 11,
    name: "Te Company",
    neighborhood: "West Village",
    address: "163 W 10th St, New York, NY 10014",
    kind: "Taiwanese Tea House",
    lat: 40.7340,
    lng: -74.0042,
    hours: "Wed–Sun: 12pm–7pm (Closed Mon–Tue)",
    link: "https://tecompanytea.com/",
    description: "A small West Village tearoom founded in 2015 by Elena Liao and her husband Frederico Ribeiro, sourcing premium oolongs directly from Taiwanese farmers. Its pineapple linzer cookies have a quiet cult following; the space is hushed, warm, and barely larger than a living room.",
    highlights: ["Oolong Tea Flights", "Pineapple Linzer Cookies", "Tea-Smoked Eggs", "Seasonal Tea Service"],
    recommender: "Jonathan Jin",
    recommenderTitle: "Hinge ERG",
    photos: [
      "assets/images/restaurants/te-company-1.jpg",
      "assets/images/restaurants/te-company-2.jpg",
      "assets/images/restaurants/te-company-3.jpg"
    ],
    priceRange: "$$",
    tags: ["Taiwanese", "Tea", "West Village", "Quiet"]
  },
  {
    id: 12,
    name: "Phoenix Palace",
    neighborhood: "Bowery / Chinatown",
    address: "85 Bowery, New York, NY 10002",
    kind: "Cantonese",
    lat: 40.7152,
    lng: -73.9966,
    hours: "Tue–Sun: 5:30pm–9:15pm (Closed Mon)",
    link: "https://phoenixpalaceny.com/",
    description: "A second restaurant from the team behind Potluck Club, opened on Bowery with scalloped velvet booths and a marquee out front. The menu pulls from Cantonese tradition while drifting into the founders' Chinese-American childhood favorites.",
    highlights: ["Roast Duck", "Salt & Pepper Squid", "Olive-Freckled Youtiao", "Sticky Rice with Pancetta"],
    recommender: "Julie Harris",
    recommenderTitle: "Hinge ERG",
    photos: [
      "assets/images/restaurants/phoenix-palace-1.jpg",
      "assets/images/restaurants/phoenix-palace-2.jpg"
    ],
    priceRange: "$$",
    tags: ["Cantonese", "Group Dinner", "Bowery", "Roast Meats"]
  },
  {
    id: 13,
    name: "Xing Fu Tang",
    neighborhood: "Hudson Yards / St. Marks / FiDi",
    address: "20 Hudson Yards, New York, NY 10001",
    kind: "Taiwanese Bubble Tea",
    lat: 40.7536,
    lng: -74.0014,
    hours: "Mon–Sun: 11am–9pm",
    link: "https://www.xingfutangusa.com/",
    description: "The U.S. arm of a Taiwanese bubble-tea chain founded in Taipei in 2018, known for stir-frying its tapioca pearls in brown sugar to order. The Hudson Yards counter is one of three NYC outposts.",
    highlights: ["Brown Sugar Boba Milk", "Stir-Fried Brown Sugar Boba", "Strawberry Boba", "Matcha Latte with Boba"],
    recommender: "Shmo Chuang",
    recommenderTitle: "Hinge ERG",
    photos: [
      "assets/images/restaurants/xing-fu-tang-1.jpg",
      "assets/images/restaurants/xing-fu-tang-2.jpg"
    ],
    priceRange: "$",
    tags: ["Taiwanese", "Boba", "Quick Bite", "Chain"]
  },
  {
    id: 14,
    name: "Wing on Wo & Co.",
    neighborhood: "Chinatown",
    address: "26 Mott St, New York, NY 10013",
    kind: "Porcelain Shop",
    lat: 40.7150,
    lng: -73.9981,
    hours: "Hours vary — check site",
    link: "https://wingonwoand.co/",
    description: "Founded in the 1890s as a general store and specializing in porcelain since 1925, Wing on Wo is the oldest continuously operating shop in Manhattan's Chinatown, now run by fifth-generation owner Mei Lum. The storefront also hosts community programming through The W.O.W. Project.",
    highlights: ["Hand-painted Porcelain", "Tea & Tableware", "Artist Collaborations", "Community Programming"],
    photos: [
      "assets/images/recs/wingonwo-1.jpg"
    ],
    tags: ["Shop", "Chinatown", "Heritage", "Ceramics"],
    source: "Hinge ERG team rec"
  },
  {
    id: 15,
    name: "Korean Cultural Center NY",
    neighborhood: "Midtown",
    address: "122 E 32nd St, New York, NY 10016",
    kind: "Cultural Center",
    lat: 40.7461,
    lng: -73.9819,
    hours: "Mon–Fri: 9am–5pm",
    link: "https://www.koreanculture.org/",
    description: "The official cultural arm of the Republic of Korea in New York, established in 1979 and now housed in a new eight-story Korea Center on East 32nd Street. Free galleries, a 200-seat theater, library, and rotating exhibitions of contemporary Korean art.",
    highlights: ["Rotating Exhibitions", "Film Screenings", "200-Seat Theater", "Library & Gardens"],
    photos: [
      "assets/images/recs/kcc-1.jpg",
      "assets/images/recs/kcc-2.jpg",
      "assets/images/recs/kcc-3.jpg"
    ],
    tags: ["Cultural Center", "Free", "Midtown", "Exhibitions"],
    source: "Hinge ERG team rec"
  },
  {
    id: 16,
    name: "Hyungi Park Studio",
    neighborhood: "Brooklyn",
    address: "Brooklyn, NY (by appointment)",
    kind: "Artist Studio",
    lat: 40.7081,
    lng: -73.9571,
    hours: "Sundays 1pm–5pm (check Goyo)",
    link: "https://www.hyun-gi.com/",
    description: "Hyungi Park is a Korean American multidisciplinary artist — incense maker, bookbinder, tattooer, designer — with studios in Brooklyn and Los Angeles operating under the Goyo brand she founded in 2019. Workshops and small gatherings rotate through the space.",
    highlights: ["Incense Workshops", "Bookbinding", "Small Exhibitions", "Korean Craft"],
    photos: [
      "assets/images/recs/hyungi-1.jpg",
      "assets/images/recs/hyungi-2.jpg"
    ],
    tags: ["Arts", "Studio", "Brooklyn", "Workshops"],
    source: "Hinge ERG team rec"
  },
  {
    id: 17,
    name: "Green Tile Social Club",
    neighborhood: "NYC (rotating venues)",
    address: "Various NYC venues — see site",
    kind: "Mahjong Club",
    lat: 40.7185,
    lng: -73.9945,
    hours: "Event-based — see site",
    link: "https://greentilesocialclub.com/",
    description: "A social mahjong club founded in 2022, hosting events for Asian Americans across rotating NYC venues. Drinks, lessons, and play nights aimed at a generation that didn't grow up at the table with their grandmothers.",
    highlights: ["Mahjong Nights", "Beginner Lessons", "Community Events", "Merch & Tiles"],
    photos: [
      "assets/images/recs/greentile-1.jpg",
      "assets/images/recs/greentile-2.jpg",
      "assets/images/recs/greentile-3.jpg"
    ],
    tags: ["Mahjong", "Community", "AAPI", "Events"],
    source: "Hinge ERG team rec"
  },
  {
    id: 18,
    name: "Yun Hai Shop",
    neighborhood: "East Williamsburg, Brooklyn",
    address: "170 Montrose Ave, Brooklyn, NY 11206",
    kind: "Taiwanese Pantry",
    lat: 40.7059,
    lng: -73.9388,
    hours: "Hours vary — check site",
    link: "https://yunhai.shop/",
    description: "A Taiwanese specialty pantry founded by Lisa Cheng Smith, importing premium ingredients directly from Taiwanese artisans and farms — soy sauces, dried fruit, sesame oils, Tatung steamers. The Brooklyn storefront is the only U.S. brick-and-mortar.",
    highlights: ["Soy Sauces", "Dried Fruit", "Sesame Oil", "Tatung Steamers"],
    photos: [
      "assets/images/recs/yunhai-1.jpg",
      "assets/images/recs/yunhai-2.jpg",
      "assets/images/recs/yunhai-3.jpg"
    ],
    tags: ["Shop", "Taiwanese", "Brooklyn", "Pantry"],
    source: "Hinge ERG team rec"
  },
  {
    id: 19,
    name: "Hana Makgeolli",
    neighborhood: "Greenpoint, Brooklyn",
    address: "201 Dupont St, Brooklyn, NY 11222",
    kind: "Korean Rice Wine Brewery",
    lat: 40.7384,
    lng: -73.9527,
    hours: "Tasting room — check site",
    link: "https://hanamakgeolli.com/",
    description: "A Greenpoint brewery making sool — traditional Korean rice wines including makgeolli — using only organic rice and traditional brewing methods. The Dupont Street tasting room hosts tastings, tours, and private events.",
    highlights: ["Makgeolli Tastings", "Brewery Tours", "Bottle Pickups", "Pairing Dinners"],
    photos: [
      "assets/images/recs/hana-1.jpg"
    ],
    tags: ["Brewery", "Korean", "Brooklyn", "Tasting Room"],
    source: "Hinge ERG team rec"
  },
  {
    id: 20,
    name: "The Red Pavilion",
    neighborhood: "Bushwick, Brooklyn",
    address: "243 Knickerbocker Ave, Brooklyn, NY 11237",
    kind: "Asian Neo-Noir Cabaret",
    lat: 40.7036,
    lng: -73.9213,
    hours: "Evenings — check site",
    link: "https://theredpavilion.com/",
    description: "A spellbinding Asian neo-noir nightclub in Bushwick programming immersive cabaret, live jazz, and concerts that center Asian artists. A velvet-and-incense room that takes itself seriously and not at all.",
    highlights: ["Cabaret Shows", "Live Jazz", "Drag & Burlesque", "Asian Art Programming"],
    photos: [
      "assets/images/recs/redpavilion-1.jpg",
      "assets/images/recs/redpavilion-2.jpg"
    ],
    tags: ["Performance", "Nightlife", "Brooklyn", "Cabaret"],
    source: "Hinge ERG team rec"
  },
  {
    id: 21,
    name: "Slo Slo Studio",
    neighborhood: "Chinatown",
    address: "146 Henry St, New York, NY 10002",
    kind: "Ceramics Studio",
    lat: 40.7126,
    lng: -73.9930,
    hours: "Daily: 10am–9pm",
    link: "https://sloslostudio.com/",
    description: "A ceramics studio on Henry Street offering classes, workshops, and memberships — a quiet hands-on space tucked into Chinatown. The name doubles as the philosophy: slow down, make something together.",
    highlights: ["Ceramics Classes", "Workshops", "Open Studio", "Memberships"],
    photos: [
      "assets/images/recs/sloslo-1.jpg"
    ],
    tags: ["Arts", "Ceramics", "Chinatown", "Workshops"],
    source: "Hinge ERG team rec"
  },
  {
    id: 22,
    name: "Yu & Me Books",
    neighborhood: "Chinatown",
    address: "44 Mulberry St, New York, NY 10013",
    kind: "Bookstore + Cafe",
    lat: 40.7155,
    lng: -73.9988,
    hours: "Hours vary — check site",
    link: "https://yuandmebooks.com/",
    description: "Founded by Lucy Yu in December 2021, Yu & Me is the only bookstore in NYC owned by an Asian American woman, with a tightly curated selection focused on the Asian American diaspora and translated fiction. A cafe-bar in back makes it a reading room as much as a shop.",
    highlights: ["Asian American Fiction", "Author Events", "Cafe & Bar", "Translated Lit"],
    recommender: "Joanna Hu",
    recommenderTitle: "Hinge ERG",
    photos: [
      "assets/images/recs/yume-1.jpg",
      "assets/images/recs/yume-2.jpg"
    ],
    tags: ["Bookstore", "Chinatown", "AAPI", "Cafe"],
    source: "Hinge ERG team rec"
  },
  {
    id: 23,
    name: "Japan Village",
    neighborhood: "Sunset Park, Brooklyn",
    address: "934 3rd Ave, Brooklyn, NY 11232 (Industry City)",
    kind: "Japanese Food Hall + Marketplace",
    lat: 40.6573,
    lng: -74.0086,
    hours: "Mon–Sun: 11am–8pm",
    link: "https://japanvillage.com/",
    description: "A 20,000+ sq ft Japanese food hall and marketplace inside Industry City, with stalls for ramen, takoyaki, and kaiten sushi alongside a grocery, sake selection, and home goods. Easy to lose two hours wandering.",
    highlights: ["Ramen Stalls", "Kaiten Sushi", "Sake Selection", "Japanese Grocery"],
    recommender: "Shmo Chuang",
    recommenderTitle: "Hinge ERG",
    photos: [
      "assets/images/recs/japanvillage-1.jpg",
      "assets/images/recs/japanvillage-2.jpg"
    ],
    tags: ["Food Hall", "Japanese", "Brooklyn", "Marketplace"],
    source: "Hinge ERG team rec"
  }
];

// ============================================================
// EVENTS — Real confirmed NYC AAPI Month events, May 2026
// Sources: Asia Society, Japan Society, NYC Tourism, Lincoln Center,
//          LaGuardia Community College, Manhattan Borough President
// ============================================================
const EVENTS = [
  {
    id: 1,
    title: "Enchantment: A Bioplay About Ravi Shankar",
    date: "May 1, 2026",
    time: "7:30 PM – 9:00 PM",
    location: "Asia Society Museum, 725 Park Ave",
    neighborhood: "Upper East Side",
    description: "A bioplay about sitar maestro Ravi Shankar that weaves together theatre, live dance, and music to tell the story of one of the most influential Asian artists of the 20th century. An Asia Society AAPI Heritage Month special presentation.",
    category: "Performance",
    price: "$20–$35",
    link: "https://asiasociety.org/new-york/events",
    icon: "🎭",
    featured: true,
    source: "Asia Society NYC"
  },
  {
    id: 2,
    title: "Lin Hwai-min in Conversation",
    date: "May 1, 2026",
    time: "6:30 PM – 8:00 PM",
    location: "Asia Society Museum, 725 Park Ave",
    neighborhood: "Upper East Side",
    description: "A conversation celebrating decades of artistic exchange between Taiwan and the United States with Lin Hwai-min, founder of Taiwan's legendary Cloud Gate Dance Theatre — one of Asia's greatest living choreographers.",
    category: "Talk",
    price: "$15",
    link: "https://asiasociety.org/new-york/events",
    icon: "💬",
    featured: false,
    source: "Asia Society NYC"
  },
  {
    id: 3,
    title: "Trio Menil: AAPI Composers Concert",
    date: "May 3, 2026",
    time: "2:00 PM – 3:00 PM",
    location: "Asia Society Museum, 725 Park Ave",
    neighborhood: "Upper East Side",
    description: "Trio Menil performs a free afternoon concert celebrating music by AAPI composers, including the world premiere of a new work by composer Sam Wu. Honoring the diversity and innovation of Asian American voices in classical music.",
    category: "Music",
    price: "Free",
    link: "https://asiasociety.org/new-york/events",
    icon: "🎵",
    featured: false,
    source: "Asia Society NYC"
  },
  {
    id: 4,
    title: "NY Yankees Korean Heritage Day",
    date: "May 2, 2026",
    time: "1:35 PM (game time)",
    location: "Yankee Stadium, 1 E 161st St, The Bronx",
    neighborhood: "The Bronx",
    description: "The Yankees celebrate the Korean American community with pre-game ceremonies, traditional Korean cultural performances, and commemorative giveaways for fans attending the afternoon game.",
    category: "Sports",
    price: "From $25",
    link: "https://www.mlb.com/yankees",
    icon: "⚾",
    featured: false,
    source: "NYC Tourism"
  },
  {
    id: 5,
    title: "K-Pop Night at Lincoln Center",
    date: "May 5, 2026",
    time: "7:30 PM",
    location: "David Rubinstein Atrium, Lincoln Center",
    neighborhood: "Upper West Side",
    description: "A free K-Pop celebration at the Rubinstein Atrium featuring DJ CHEN and cover performances by K-Pop groups from NYU and Stony Brook University. No ticket required — arrive early as the atrium fills quickly.",
    category: "Music & Dance",
    price: "Free",
    link: "https://www.lincolncenter.org",
    icon: "🎤",
    featured: true,
    source: "NYC Tourism / Lincoln Center"
  },
  {
    id: 6,
    title: "AAPI Heritage 5K Run",
    date: "May 7, 2026",
    time: "8:00 AM",
    location: "Central Park, East 72nd St entrance",
    neighborhood: "Central Park",
    description: "A community run celebrating AAPI Heritage Month, open to all paces and abilities. Features a post-run gathering with food, music, and community tables from NYC's AAPI organizations. A celebration, not a race.",
    category: "Community",
    price: "$25 registration",
    link: "#",
    icon: "🏃",
    featured: false,
    source: "NYC AAPI community"
  },
  {
    id: 7,
    title: "Japan Parade NYC",
    date: "May 9, 2026",
    time: "12:00 PM – 3:00 PM",
    location: "6th Avenue, Midtown Manhattan",
    neighborhood: "Midtown",
    description: "New York City's annual Japan Parade marches down 6th Avenue, celebrating Japanese culture and the Japanese American community with traditional performances, taiko drummers, martial arts demonstrations, and floats from cultural organizations.",
    category: "Parade",
    price: "Free",
    link: "https://www.japanparadenyc.org",
    icon: "🌸",
    featured: true,
    source: "NYC Tourism"
  },
  {
    id: 8,
    title: "Kawai Kanjirō: House to House",
    date: "Through May 10, 2026",
    time: "Tue–Sun: 11am–6pm",
    location: "Japan Society Gallery, 333 E 47th St",
    neighborhood: "Midtown East",
    description: "Japan Society's major spring exhibition celebrates the life and career of Kawai Kanjirō — folk potter, poet, and artist — whose Kyoto home and studio are preserved as a museum. Final weeks of this immersive retrospective bridging Japanese craft and modern artistry.",
    category: "Exhibition",
    price: "$12 (members free)",
    link: "https://www.japansociety.org",
    icon: "🏺",
    featured: false,
    source: "Japan Society NYC"
  },
  {
    id: 9,
    title: "Breaking Barriers: AAPI Heritage Month",
    date: "May 14, 2026",
    time: "6:00 PM – 8:30 PM",
    location: "Manhattan Borough President's Office, 1 Centre St",
    neighborhood: "Lower Manhattan",
    description: "Hosted by the Manhattan Borough President, this event brings together AAPI community leaders, elected officials, and advocates to celebrate AAPI contributions to NYC and discuss pathways to greater representation in civic life.",
    category: "Community",
    price: "Free (RSVP required)",
    link: "https://www.manhattanbp.nyc.gov",
    icon: "🏛️",
    featured: false,
    source: "Manhattan Borough President"
  },
  {
    id: 10,
    title: "LaGuardia: An AAPI Afternoon",
    date: "May 20, 2026",
    time: "12:00 PM – 4:00 PM",
    location: "LaGuardia Community College, 31-10 Thomson Ave",
    neighborhood: "Long Island City, Queens",
    description: "The centerpiece of LaGuardia's AAPI month programming, featuring performances by the Bangladesh Students Association, Chinese Students Club, Myanmar Students Club, and Nepali Student Association, alongside cultural showcases and community tables.",
    category: "Festival",
    price: "Free",
    link: "https://www.laguardia.edu",
    icon: "🎊",
    featured: false,
    source: "LaGuardia Community College"
  },
  {
    id: 11,
    title: "NYPL: AAPI Voices — Readings & Panels",
    date: "Throughout May 2026",
    time: "Various (check NYPL calendar)",
    location: "New York Public Library branches citywide",
    neighborhood: "Citywide",
    description: "The New York Public Library presents a month-long series of author readings, panel discussions, documentary screenings, and community conversations celebrating AAPI voices. Events are free and held at branches across all five boroughs.",
    category: "Literature",
    price: "Free",
    link: "https://www.nypl.org/events/aanhpi-heritage-month",
    icon: "📚",
    featured: false,
    source: "NYPL"
  },
  {
    id: 12,
    title: "AAPI Cultural & Heritage Parade",
    date: "May 21, 2026",
    time: "11:30 AM – 2:00 PM",
    location: "6th Avenue, 44th–53rd St, Midtown Manhattan",
    neighborhood: "Midtown",
    description: "The second annual AAPI Cultural and Heritage Parade along 6th Avenue in Midtown — floats, cultural performances, and community groups representing the full breadth of the AAPI community.",
    category: "Parade",
    price: "Free",
    link: "#",
    icon: "🎋",
    featured: true,
    source: "NYC Tourism"
  },
  {
    id: 13,
    title: "Asian Comedy Fest",
    date: "May 5–6, 2026",
    time: "Doors 7 PM",
    location: "Sourmouse, 110 Delancey St, Lower East Side",
    neighborhood: "Lower East Side",
    description: "The biggest national AAPI comedy festival brings two nights of stand-up, musical comedy, drag, and solo performances to the LES. A rare chance to see the breadth of Asian American comedic voice — sharp, weird, and genuinely funny.",
    category: "Comedy",
    price: "Ticketed",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🎤",
    featured: false,
    source: "AM New York"
  },
  {
    id: 14,
    title: "Queens Night Market",
    date: "Every Saturday, May–Oct 2026",
    time: "4:00 PM – Midnight",
    location: "Flushing Meadows Corona Park, Queens",
    neighborhood: "Queens",
    description: "NYC's most beloved night market opens its 2026 season with 100+ independent vendors selling food, art, and merchandise representing cultures from across Asia and the world. Free admission, accessible by the 7 train.",
    category: "Food & Market",
    price: "Free",
    link: "https://queensnightmarket.com/",
    icon: "🏮",
    featured: false,
    source: "Queens Night Market"
  },
  {
    id: 15,
    title: "Asian Creative Festival",
    date: "May 20–21, 2026",
    time: "11:00 AM – 5:00 PM",
    location: "Industry City, 220 36th St, Sunset Park",
    neighborhood: "Brooklyn",
    description: "A two-day celebration of AAPI culture and creativity at Industry City — featuring a curated makers marketplace, speaker programming, and film screenings. One of the month's best all-ages events for art, craft, and community.",
    category: "Festival",
    price: "Free",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🎨",
    featured: false,
    source: "AM New York"
  },
  {
    id: 16,
    title: "Passport to Taiwan Festival",
    date: "May 28, 2026",
    time: "Noon – 5:00 PM",
    location: "Union Square North, 17th St & Broadway",
    neighborhood: "Union Square",
    description: "An outdoor festival celebrating Taiwan and Taiwanese American culture through food, arts and crafts, and community vendors. Free, family-friendly, and right off the subway — easy to drop into for an hour.",
    category: "Food & Market",
    price: "Free",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🥟",
    featured: false,
    source: "AM New York"
  },
  {
    id: 17,
    title: "CUNY Asian American Film Festival",
    date: "May 29, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "CUNY Graduate Center, Martin Segal Theatre, 365 5th Ave",
    neighborhood: "Midtown",
    description: "Student filmmakers from across CUNY campuses screen fiction and documentary shorts on Asian American themes — followed by an awards ceremony and filmmaker Q&A. Free and open to the public.",
    category: "Film",
    price: "Free",
    link: "https://aaari.info/2026aaff/",
    icon: "🎬",
    featured: false,
    source: "CUNY AAARI"
  },
  {
    id: 18,
    title: "Doyers St. Block Party",
    date: "May 27, 2026",
    time: "11:00 AM – 6:00 PM",
    location: "19 Doyers St, Chinatown",
    neighborhood: "Chinatown",
    description: "A low-key Chinatown afternoon: mahjong games, a silent art auction, free giveaways, and coffee. One of those block parties that feels genuinely neighborhood — not tourism, just community.",
    category: "Community",
    price: "Free",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🀄",
    featured: false,
    source: "AM New York"
  }
];

// ============================================================
// BOOKS — Essential AAPI Literature
// Curated from: NYPL, Reedsy, Penguin Random House, NPR reading lists
// ============================================================
const BOOKS = {
  classic: [
    {
      id: "c1",
      title: "America Is in the Heart",
      author: "Carlos Bulosan",
      year: 1946,
      coverColor: "#5C3317",
      coverImage: "https://covers.openlibrary.org/b/isbn/0143134035-M.jpg",
      genre: "Autobiographical Fiction",
      culture: "Filipino American",
      description: "A semi-autobiographical account of Filipino immigration to the US in the 1930s, chronicling labor exploitation, racism, and poverty alongside an unbreakable faith in the American ideal. Bulosan wrote this while the country was actively exploiting him — and still declared his love for it.",
      awards: ["TIME Magazine's 100 Best Nonfiction Books of the 20th Century"],
      quote: "America is not a land of one race or one class of men. We are all Americans that have toiled and suffered and known oppression and defeat."
    },
    {
      id: "c2",
      title: "No-No Boy",
      author: "John Okada",
      year: 1957,
      coverColor: "#2E4A2E",
      coverImage: "https://covers.openlibrary.org/b/isbn/0295955252-M.jpg",
      genre: "Literary Fiction",
      culture: "Japanese American",
      description: "Published in 1957 and largely ignored until rediscovered by the AAPI literary movement in the 1970s, this novel follows a Japanese American who refused military service during WWII as he returns home to Seattle to face rejection from all sides. A foundational work buried by American literature and rescued by AAPI writers.",
      awards: ["Rediscovered as canonical AAPI literature; now taught at universities nationwide"],
      quote: "Somewhere, perhaps, a better day is coming for the aching hearts."
    },
    {
      id: "c3",
      title: "The Woman Warrior",
      author: "Maxine Hong Kingston",
      year: 1976,
      coverColor: "#8B1A1A",
      coverImage: "https://covers.openlibrary.org/b/isbn/0394723929-M.jpg",
      genre: "Memoir / Mythology",
      culture: "Chinese American",
      description: "A groundbreaking blend of memoir and Chinese mythology exploring a Chinese American woman's struggle to reconcile her heritage with her American identity. Kingston shattered both form and expectation simultaneously — opening the door for every AAPI writer who came after.",
      awards: ["National Book Critics Circle Award for Nonfiction"],
      quote: "I had to get out of hating range."
    },
    {
      id: "c4",
      title: "The Joy Luck Club",
      author: "Amy Tan",
      year: 1989,
      coverColor: "#C94B2D",
      coverImage: "https://covers.openlibrary.org/b/isbn/0399134204-M.jpg",
      genre: "Literary Fiction",
      culture: "Chinese American",
      description: "Four Chinese immigrant women and their American-born daughters navigate tradition, assimilation, and the tensions between generations through interlocking stories of love, sacrifice, and misunderstanding across two continents.",
      awards: ["National Book Award Finalist", "PEN/Faulkner Award Finalist"],
      quote: "I wanted my children to have the best combination: American circumstances and Chinese character."
    },
    {
      id: "c5",
      title: "Native Speaker",
      author: "Chang-rae Lee",
      year: 1995,
      coverColor: "#2C4A6E",
      coverImage: "https://covers.openlibrary.org/b/isbn/0143124307-M.jpg",
      genre: "Literary Fiction",
      culture: "Korean American",
      description: "A Korean American spy assigned to surveil a rising Korean politician in NYC discovers a meditation on language, loyalty, and belonging. Lee writes with surgical precision about the weight of assimilation — a New York novel that captures the city and its immigrant experience with quiet perfection.",
      awards: ["Hemingway Foundation/PEN Award for Best First Novel", "QPB New Voices Award"],
      quote: "You are an emotional alien. You are sly and efficient, and you even speak a little funny."
    },
    {
      id: "c6",
      title: "The Namesake",
      author: "Jhumpa Lahiri",
      year: 2003,
      coverColor: "#4A3728",
      coverImage: "https://covers.openlibrary.org/b/isbn/0547447817-M.jpg",
      genre: "Literary Fiction",
      culture: "Indian American",
      description: "The Ganguli family's journey from Calcutta to Massachusetts and New York, told through their son Gogol — a name that becomes both burden and gift. Lahiri renders the generational tension between immigrant parents and their American-born children with perfect, quiet fidelity.",
      awards: ["New York Times Notable Book of the Year", "Los Angeles Times Book Prize Finalist"],
      quote: "He had been named for a Russian author his father loved. In this country he had become a foreigner."
    }
  ],
  recent: [
    {
      id: "r1",
      title: "The Sympathizer",
      author: "Viet Thanh Nguyen",
      year: 2015,
      coverColor: "#8B1A1A",
      coverImage: "https://covers.openlibrary.org/b/isbn/0802123457-M.jpg",
      genre: "Literary Fiction / Spy Novel",
      culture: "Vietnamese American",
      description: "A communist double agent narrates his role in the fall of Saigon and exile to America as a confession — a razor-sharp critique of both Vietnamese and American cultures, colonialism, and war, delivered with dark humor and devastating insight.",
      awards: ["Pulitzer Prize for Fiction", "PEN/Faulkner Award", "Andrew Carnegie Medal"],
      quote: "I am a spy, a sleeper, a spook, a man of two faces. Perhaps not surprisingly, I am also a man of two minds."
    },
    {
      id: "r2",
      title: "Pachinko",
      author: "Min Jin Lee",
      year: 2017,
      coverColor: "#D4A853",
      coverImage: "https://covers.openlibrary.org/b/isbn/1455569496-M.jpg",
      genre: "Historical Fiction",
      culture: "Korean / Korean-Japanese",
      description: "Four generations of a Korean family in Japan across the 20th century — facing discrimination, survival, loss, and the relentless search for dignity. An epic novel that reads with the intimacy of a family you know. Inspiration for the award-winning Apple TV+ series.",
      awards: ["National Book Award Finalist", "Dayton Literary Peace Prize Finalist"],
      quote: "History has failed us, but no matter."
    },
    {
      id: "r3",
      title: "The Best We Could Do",
      author: "Thi Bui",
      year: 2017,
      coverColor: "#1E3A5F",
      coverImage: "https://covers.openlibrary.org/b/isbn/1419718789-M.jpg",
      genre: "Illustrated Memoir",
      culture: "Vietnamese American",
      description: "A stunning illustrated memoir depicting Thi Bui's family in war-torn Vietnam, their escape as refugees, and the lasting effects of displacement on identity. When Bui becomes a mother herself, she finally begins to understand her own parents. One of the most powerful graphic memoirs ever published.",
      awards: ["American Book Award", "New York Times Bestseller"],
      quote: "I looked at my parents and saw, for the first time, not the people who had failed me, but the people who had made me."
    },
    {
      id: "r4",
      title: "On Earth We're Briefly Gorgeous",
      author: "Ocean Vuong",
      year: 2019,
      coverColor: "#3D2B1F",
      coverImage: "https://covers.openlibrary.org/b/isbn/0525562028-M.jpg",
      genre: "Autofiction",
      culture: "Vietnamese American",
      description: "Written as a letter from a son to his illiterate mother, Vuong's debut novel is a ferocious meditation on race, class, masculinity, addiction, and family — told in prose that reads like compressed poetry. Blurs the line between lyric essay and novel in a way that has permanently expanded what American fiction can do.",
      awards: ["New York Times Bestseller", "Barnes & Noble Discover Prize", "Longlisted for the Man Booker Prize"],
      quote: "Let me begin again. Let me tell you what I know."
    },
    {
      id: "r5",
      title: "Interior Chinatown",
      author: "Charles Yu",
      year: 2020,
      coverColor: "#E85D26",
      coverImage: "https://covers.openlibrary.org/b/isbn/0307907198-M.jpg",
      genre: "Experimental Fiction / Satire",
      culture: "Chinese American",
      description: "Written as a TV procedural screenplay, a background actor named Willis Wu dreams of graduating from 'Generic Asian Man' to 'Kung Fu Guy' — a biting, funny, and devastating satire of Hollywood and the limits placed on Asian American identity. The form is the argument: the screenplay format enacts the ways Asian Americans are forced to play supporting roles.",
      awards: ["National Book Award for Fiction 2020"],
      quote: "You're an Asian man, Willis. In what story have you ever been the hero?"
    },
    {
      id: "r6",
      title: "Minor Feelings: An Asian American Reckoning",
      author: "Cathy Park Hong",
      year: 2020,
      coverColor: "#2C4A6E",
      coverImage: "https://covers.openlibrary.org/b/isbn/1984820362-M.jpg",
      genre: "Essay Collection / Cultural Criticism",
      culture: "Korean American",
      description: "Essays blending biography and cultural criticism that give name to 'minor feelings': the racialized range of emotions that are negative, dysphoric, and therefore untelegenic. Hong says what many AAPI people feel but struggle to articulate — with rigor, humor, and controlled rage.",
      awards: ["PEN/Diana Pearce Open Book Award", "National Book Critics Circle Award Finalist"],
      quote: "Minor feelings are the racialized range of emotions that are negative, dysphoric, and therefore untelegenic."
    },
    {
      id: "r7",
      title: "Crying in H Mart",
      author: "Michelle Zauner",
      year: 2021,
      coverColor: "#C94B2D",
      coverImage: "https://covers.openlibrary.org/b/isbn/0525657746-M.jpg",
      genre: "Memoir",
      culture: "Korean American",
      description: "The Japanese Breakfast frontwoman's memoir about losing her Korean mother to cancer and finding her way back to her cultural identity through food. Devastating, funny, and overflowing with the sensory memory of kimchi jjigae, japchae, and grief.",
      awards: ["#1 New York Times Bestseller", "Goodreads Choice Award for Memoir & Autobiography"],
      quote: "Ever since I moved to New York, I get emotional at H Mart."
    },
    {
      id: "r8",
      title: "All You Can Ever Know",
      author: "Nicole Chung",
      year: 2018,
      coverColor: "#4A2C6E",
      coverImage: "https://covers.openlibrary.org/b/isbn/1684414008-M.jpg",
      genre: "Memoir",
      culture: "Korean American",
      description: "A memoir examining adoptee identity as Nicole Chung discovers her Korean birth family's true story differs from everything she was told. Written as she becomes a mother herself, tracing the ripples of adoption, race, and belonging across two families and two very different American lives.",
      awards: ["Finalist for the Chautauqua Prize", "BookPeople's Book of the Year"],
      quote: "What is it like to be a person who doesn't look like her family?"
    },
    {
      id: "r9",
      title: "Yellowface",
      author: "R.F. Kuang",
      year: 2023,
      coverColor: "#D4A853",
      coverImage: "https://covers.openlibrary.org/b/isbn/0063250837-M.jpg",
      genre: "Satirical Thriller",
      culture: "Chinese American",
      description: "A white author steals her Chinese American rival's unpublished manuscript and publishes it as her own, setting off a spiral she can't control. A scathing, compulsively readable satirical thriller about cultural appropriation, publishing racism, and the specific gaslighting that Asian American writers face.",
      awards: ["New York Times Bestseller", "Locus Award Finalist"],
      quote: "The publishing industry has always loved stories about Asian suffering as long as they're told by the right kind of person."
    },
    {
      id: "r10",
      title: "Real Americans",
      author: "Rachel Khong",
      year: 2024,
      coverColor: "#2A9D8F",
      coverImage: "https://covers.openlibrary.org/b/isbn/0593537254-M.jpg",
      genre: "Literary Fiction",
      culture: "Chinese American",
      description: "Three interconnected narratives spanning three generations of a Chinese American family — from a woman who emigrates from China to New York in the 1960s, to her daughter, to her grandson who sets out to find his biological father. A sweeping, beautifully observed novel about genetics, identity, and what we choose to pass on.",
      awards: ["New York Times Bestseller", "PEN/Faulkner Award Finalist 2025"],
      quote: "What is American? What is Chinese? In her world, the two were not mutually exclusive."
    },
    {
      id: "r11",
      title: "Making Asian America: A History",
      author: "Erika Lee",
      year: 2015,
      coverColor: "#1E3A5F",
      coverImage: "https://covers.openlibrary.org/b/isbn/1476739404-M.jpg",
      genre: "Nonfiction / History",
      culture: "Pan-Asian American",
      description: "The first comprehensive history of Asians in the United States, spanning more than 500 years from the earliest sailors and laborers to the present day. Lee braids together communities too often kept apart in the historical record — Chinese, Japanese, Filipino, South Asian, Southeast Asian — into a single, unflinching account of how Asian America came to be.",
      awards: ["Asian/Pacific American Award for Literature"]
    },
    {
      id: "r12",
      title: "Taiwan Travelogue",
      author: "Yang Shuang-zi",
      year: 2024,
      coverColor: "#7A8B5C",
      coverImage: "https://covers.openlibrary.org/b/isbn/1644452693-M.jpg",
      genre: "Historical Fiction",
      culture: "Taiwanese",
      description: "A bittersweet story of love, food, and colonial entanglement set on a 1938 train journey through Japanese-occupied Taiwan. A Japanese novelist and her local Taiwanese interpreter eat their way around the island, and the asymmetries of empire press in at every meal. Translated by Lin King.",
      awards: ["National Book Award for Translated Literature 2024"]
    },
    {
      id: "r13",
      title: "Human Acts",
      author: "Han Kang",
      year: 2016,
      coverColor: "#3A2F2F",
      coverImage: "https://covers.openlibrary.org/b/isbn/1101906723-M.jpg",
      genre: "Historical Fiction",
      culture: "Korean",
      description: "A novel built around the 1980 Gwangju Uprising, told through interlocking voices of the dead and the living. Han Kang writes grief and political violence with a stillness that is somehow more devastating than rage. Heavy content warnings — but it is a book that asks to be sat with, not skimmed.",
      awards: ["Premio Malaparte", "International Booker Prize (author, 2016)", "Nobel Prize in Literature (author, 2024)"]
    },
    {
      id: "r14",
      title: "Last Night at the Telegraph Club",
      author: "Malinda Lo",
      year: 2021,
      coverColor: "#9B2D5F",
      coverImage: "https://covers.openlibrary.org/b/isbn/0525555250-M.jpg",
      genre: "Historical Fiction / YA",
      culture: "Chinese American",
      description: "America in 1954 is not a safe place for two girls who fall in love — especially not for Lily Hu, the daughter of Chinese immigrants in San Francisco's Chinatown, and Kathleen Miller, who first kiss her in the back of a lesbian bar. A meticulous, tender novel about queerness, surveillance, and the McCarthy-era cost of being any kind of other.",
      awards: ["National Book Award for Young People's Literature 2021", "Stonewall Book Award", "Asian/Pacific American Award for Literature"]
    },
    {
      id: "r15",
      title: "Everything I Never Told You",
      author: "Celeste Ng",
      year: 2014,
      coverColor: "#1F4F4F",
      coverImage: "https://covers.openlibrary.org/b/isbn/1594205713-M.jpg",
      genre: "Literary Fiction",
      culture: "Chinese American",
      description: "A literary thriller about a mixed-race Chinese American family in 1970s Ohio whose middle daughter, the family favorite, is found dead in the local lake. Ng unwinds the marriage, the siblings, and the small daily silences that produced the tragedy. Quiet, controlled, and merciless.",
      awards: ["Amazon Book of the Year 2014", "Massachusetts Book Award", "Asian/Pacific American Award for Literature"]
    },
    {
      id: "r16",
      title: "Katabasis",
      author: "R.F. Kuang",
      year: 2025,
      coverColor: "#2C1F4A",
      coverImage: "https://covers.openlibrary.org/b/isbn/0063417456-M.jpg",
      genre: "Fantasy / Literary Fiction",
      culture: "Chinese American",
      description: "Kuang takes the Greek descent-into-the-underworld and runs it through a contemporary university — two ambitious graduate students chasing their dead advisor through the realms of the dead in pursuit of a recommendation letter. Funny, dense, and meaner than it sounds, in the best way."
    },
    {
      id: "r17",
      title: "The Kitchen God's Wife",
      author: "Amy Tan",
      year: 1991,
      coverColor: "#A52A2A",
      coverImage: "https://covers.openlibrary.org/b/isbn/0143038109-M.jpg",
      genre: "Literary Fiction",
      culture: "Chinese American",
      description: "A Chinese American daughter finally hears her mother's life story — a marriage in WWII-era China to a violent husband, a flight to America, decades of carefully tended secrets. Tan's second novel works the same vein as Joy Luck Club but cuts deeper into a single mother-daughter relationship.",
      awards: ["Bay Area Book Reviewers Award"]
    },
    {
      id: "r18",
      title: "The Leavers",
      author: "Lisa Ko",
      year: 2017,
      coverColor: "#3D5A2C",
      coverImage: "https://covers.openlibrary.org/b/isbn/1616206888-M.jpg",
      genre: "Literary Fiction",
      culture: "Chinese American",
      description: "A Chinese undocumented mother in the Bronx leaves for work one morning and never comes back. Her son, raised by white adoptive parents upstate, grows up to look for her. Ko writes the immigration system and transracial adoption with rare specificity — both the bureaucratic violence and the small private wreckage.",
      awards: ["PEN/Bellwether Prize for Socially Engaged Fiction", "National Book Award Longlist"]
    },
    {
      id: "r19",
      title: "The Loneliest Americans",
      author: "Jay Caspian Kang",
      year: 2021,
      coverColor: "#4A4A4A",
      coverImage: "https://covers.openlibrary.org/b/isbn/0593238125-M.jpg",
      genre: "Nonfiction / Memoir",
      culture: "Korean American",
      description: "Part journalism, part autobiography, part argument — Kang interrogates what 'Asian American' even means as a political identity, working from his own family's path through Cambridge, Chapel Hill, and Berkeley. Combative, honest, and unwilling to flatter the reader. Worth reading even if you disagree with him."
    },
    {
      id: "r21",
      title: "Virtue Hoarders: The Case against the Professional Managerial Class",
      author: "Catherine Liu",
      year: 2021,
      coverColor: "#5C5C5C",
      coverImage: "https://covers.openlibrary.org/b/isbn/1517912865-M.jpg",
      genre: "Nonfiction / Cultural Criticism",
      culture: "Chinese American",
      description: "A short, sharp denunciation of the credentialed professional managerial class — its self-congratulatory politics, its taste for individual virtue over collective action, its capture of progressive language. Liu writes from the inside as a cultural studies professor and lands punches that other critics pull."
    },
    {
      id: "r22",
      title: "Lady Tan's Circle of Women",
      author: "Lisa See",
      year: 2023,
      coverColor: "#8B3A62",
      coverImage: "https://covers.openlibrary.org/b/isbn/1982117087-M.jpg",
      genre: "Historical Fiction",
      culture: "Chinese",
      description: "Inspired by the real Ming-dynasty woman physician Tan Yunxian, who practiced medicine on women in 15th-century China and wrote a treatise that survives. See builds a novel around the friendships, midwifery, and constrained agency that made such a life possible.",
      awards: ["New York Times Bestseller"]
    },
    {
      id: "r23",
      title: "Before the Coffee Gets Cold",
      author: "Toshikazu Kawaguchi",
      year: 2019,
      coverColor: "#6B4423",
      coverImage: "https://covers.openlibrary.org/b/isbn/1529029589-M.jpg",
      genre: "Literary Fiction",
      culture: "Japanese",
      description: "The first volume in Kawaguchi's quiet, beloved series set in a tiny Tokyo basement café where, under very specific rules, you can travel back in time — but only until your coffee gets cold. Each book is a small set of connected stories about regret, love, and what we'd really say if we got the chance. Originally a stage play, and it shows in the best way."
    }
  ]
};

// ============================================================
// HOLIDAYS — Asian & AAPI Cultural Observances, Full Year 2026
// Dates verified from: timeanddate.com, drikpanchang.com,
//                      calendarr.com, kaiserstory.com, smartpuja.com
//
// color classes:
//   east-asian       → #E8652A (orange-red)
//   south-asian      → #D4A853 (gold)
//   southeast-asian  → #2A9D8F (teal)
//   persian          → #9B7DD0 (purple)
//   muslim           → #4A90C4 (blue)
//   heritage         → #C94B2D (accent red)
// ============================================================
const HOLIDAYS = [
  {
    id: "h1",
    name: "Pongal / Makar Sankranti",
    date: "2026-01-14", displayDate: "January 14, 2026",
    month: 0, day: 14,
    culture: "South Asian", color: "south-asian", emoji: "🌾",
    description: "A four-day Tamil harvest festival marking the sun's northward journey and the end of winter. Celebrated with sweet rice (pongal), kolam floor art, and gratitude for the harvest. Simultaneously observed across India as Makar Sankranti.",
    countries: ["India", "Sri Lanka", "Malaysia", "Singapore"]
  },
  {
    id: "h2",
    name: "Lunar New Year — Year of the Horse",
    date: "2026-02-17", displayDate: "February 17, 2026",
    month: 1, day: 17,
    culture: "East Asian", color: "east-asian", emoji: "🐴",
    description: "The most important celebration in East Asian cultures. 2026 is the Year of the Horse — symbolizing energy, freedom, and ambition. The holiday spans February 16–18 in Korea (Seollal) and Vietnam (Tết), with red envelopes, family feasts, lion dances, and fireworks.",
    countries: ["China", "Vietnam", "Korea", "Taiwan", "Singapore", "Malaysia"]
  },
  {
    id: "h3",
    name: "Ramadan Begins",
    date: "2026-02-18", displayDate: "February 18, 2026",
    month: 1, day: 18,
    culture: "Muslim", color: "muslim", emoji: "🌙",
    description: "The holiest month in Islam — 30 days of fasting from dawn to sunset, intensified prayer, and community. Observed by Muslim communities across South, Southeast, and Central Asia, and throughout the AAPI diaspora.",
    countries: ["Indonesia", "Pakistan", "Bangladesh", "Malaysia", "pan-Asian Muslim communities"]
  },
  {
    id: "h4",
    name: "Lantern Festival (Yuan Xiao)",
    date: "2026-03-04", displayDate: "March 4, 2026",
    month: 2, day: 4,
    culture: "East Asian", color: "east-asian", emoji: "🏮",
    description: "The 15th and final day of Lunar New Year, when the full moon rises and families gather with paper lanterns, share tangyuan (sweet rice balls), and play riddle games. A beautiful, romantic close to the New Year season.",
    countries: ["China", "Taiwan", "Vietnam", "Singapore", "diaspora worldwide"]
  },
  {
    id: "h5",
    name: "Nowruz — Persian New Year",
    date: "2026-03-20", displayDate: "March 20, 2026",
    month: 2, day: 20,
    culture: "Persian", color: "persian", emoji: "🌱",
    description: "The Persian and Zoroastrian New Year, marking the spring equinox at 14:46 UTC. Celebrated for over 3,000 years with the Haft-Seen table, spring cleaning, and family gatherings. Observed by over 300 million people worldwide.",
    countries: ["Iran", "Afghanistan", "Tajikistan", "Azerbaijan", "Kurdish communities", "Central Asia"]
  },
  {
    id: "h24",
    name: "Eid al-Fitr",
    date: "2026-03-20", displayDate: "March 20, 2026",
    month: 2, day: 20,
    culture: "Muslim", color: "muslim", emoji: "🌙",
    description: "The Festival of Breaking the Fast — one of Islam's two holiest celebrations, marking the end of Ramadan. Families wake before dawn, put on their finest clothes, attend communal prayers, and share a large feast. Gifts are exchanged, charity is given (Zakat al-Fitr), and joy is mandatory. Exact date varies by moon sighting.",
    countries: ["Indonesia", "Pakistan", "Bangladesh", "Malaysia", "pan-Asian Muslim communities"]
  },
  {
    id: "h6",
    name: "Holi — Festival of Colors",
    date: "2026-03-31", displayDate: "March 31, 2026",
    month: 2, day: 31,
    culture: "South Asian", color: "south-asian", emoji: "🎨",
    description: "The Festival of Colors — a joyful Hindu spring celebration marking the victory of good over evil. Celebrated by throwing vibrant colored powders and water, dancing to dhol drums, and sharing sweets. One of the most visually spectacular festivals in the world.",
    countries: ["India", "Nepal", "diaspora worldwide"]
  },
  {
    id: "h7",
    name: "Qingming Festival",
    date: "2026-04-04", displayDate: "April 4, 2026",
    month: 3, day: 4,
    culture: "East Asian", color: "east-asian", emoji: "🌿",
    description: "Tomb Sweeping Day — a time to honor ancestors by visiting graves, burning incense, and sharing meals. Also a spring festival with outdoor outings. One of the most culturally significant observances in Chinese tradition.",
    countries: ["China", "Taiwan", "Hong Kong", "diaspora worldwide"]
  },
  {
    id: "h8",
    name: "Vaisakhi — Sikh New Year",
    date: "2026-04-13", displayDate: "April 13, 2026",
    month: 3, day: 13,
    culture: "South Asian", color: "south-asian", emoji: "☀️",
    description: "One of the most important Sikh festivals, marking the founding of the Khalsa in 1699 by Guru Gobind Singh. Celebrated with nagar kirtans (processions), gurdwara prayers, and bhangra folk dancing. Also the Punjabi spring harvest festival.",
    countries: ["India (Punjab)", "Canada", "United Kingdom", "United States"]
  },
  {
    id: "h9",
    name: "Songkran — Thai New Year",
    date: "2026-04-13", displayDate: "April 13–15, 2026",
    month: 3, day: 13,
    culture: "Southeast Asian", color: "southeast-asian", emoji: "💦",
    description: "Thailand's most beloved holiday — three official days of water festivals marking the Buddhist New Year. The streets become a city-wide water fight as people splash each other to wash away bad luck. Also observed in Myanmar (Thingyan), Laos, and Cambodia.",
    countries: ["Thailand", "Myanmar", "Laos", "Cambodia", "diaspora worldwide"]
  },
  {
    id: "h10",
    name: "Vesak — Buddha's Birthday",
    date: "2026-05-01", displayDate: "May 1, 2026",
    month: 4, day: 1,
    culture: "Southeast Asian", color: "southeast-asian", emoji: "☸️",
    description: "The holiest day in Buddhism, commemorating the birth, enlightenment, and death of Gautama Buddha. Celebrated with candlelit processions, temple offerings, release of animals, and charitable giving. Observed across all Buddhist traditions worldwide.",
    countries: ["Sri Lanka", "Thailand", "Myanmar", "Cambodia", "Vietnam", "South Korea", "Japan"]
  },
  {
    id: "h11",
    name: "AAPI Heritage Month",
    date: "2026-05-01", displayDate: "May 1–31, 2026",
    month: 4, day: 1,
    culture: "Heritage", color: "heritage", emoji: "🌸",
    description: "Asian American and Pacific Islander Heritage Month — a federally recognized month honoring AAPI contributions to the United States. Designated in May to mark the arrival of the first Japanese immigrants (May 7, 1843) and completion of the transcontinental railroad (May 10, 1869).",
    countries: ["United States"]
  },
  {
    id: "h12",
    name: "Children's Day (Kodomo no Hi)",
    date: "2026-05-05", displayDate: "May 5, 2026",
    month: 4, day: 5,
    culture: "East Asian", color: "east-asian", emoji: "🎏",
    description: "A Japanese national holiday celebrating children's happiness. Families fly koinobori (carp streamers) from rooftops — one for each child — eat kashiwa mochi, and display samurai dolls. Also observed as Children's Day in South Korea.",
    countries: ["Japan", "South Korea"]
  },
  {
    id: "h13",
    name: "Buddha's Birthday (Korea)",
    date: "2026-05-24", displayDate: "May 24–25, 2026",
    month: 4, day: 24,
    culture: "East Asian", color: "east-asian", emoji: "🪔",
    description: "Korea's celebration of Buddha's birthday, a national public holiday. Temples string thousands of paper lanterns and the Yeon Deung Hoe (Lotus Lantern Festival) parade in Seoul is one of Korea's most spectacular annual events.",
    countries: ["South Korea"]
  },
  {
    id: "h25",
    name: "Eid al-Adha",
    date: "2026-05-27", displayDate: "May 27, 2026",
    month: 4, day: 27,
    culture: "Muslim", color: "muslim", emoji: "🕌",
    description: "The Festival of Sacrifice — the second and larger of the two Islamic Eid celebrations. Commemorating Ibrahim's willingness to sacrifice his son, it is marked with communal prayers, the ritual sacrifice of livestock, and distributing meat to family, neighbors, and those in need. One of the holiest days in the Islamic calendar. Exact date varies by moon sighting.",
    countries: ["Indonesia", "Pakistan", "Bangladesh", "Malaysia", "pan-Asian Muslim communities"]
  },
  {
    id: "h14",
    name: "Dragon Boat Festival (Duanwu)",
    date: "2026-06-19", displayDate: "June 19, 2026",
    month: 5, day: 19,
    culture: "East Asian", color: "east-asian", emoji: "🐉",
    description: "Commemorating the poet-patriot Qu Yuan, who drowned himself in protest of corruption. People race dragon boats, eat zongzi (sticky rice wrapped in bamboo leaves), and hang mugwort to ward off evil. A 3-day national holiday in China (June 19–21).",
    countries: ["China", "Taiwan", "Hong Kong", "Vietnam", "diaspora worldwide"]
  },
  {
    id: "h15",
    name: "Tanabata — Star Festival",
    date: "2026-07-07", displayDate: "July 7, 2026",
    month: 6, day: 7,
    culture: "East Asian", color: "east-asian", emoji: "⭐",
    description: "A Japanese celebration of the star-crossed lovers Orihime (Vega) and Hikoboshi (Altair), who are separated by the Milky Way and reunite only on this night. People write wishes on tanzaku paper strips and hang them from bamboo.",
    countries: ["Japan", "diaspora worldwide"]
  },
  {
    id: "h16",
    name: "Obon Festival",
    date: "2026-08-13", displayDate: "August 13–15, 2026",
    month: 7, day: 13,
    culture: "East Asian", color: "east-asian", emoji: "🏮",
    description: "A Japanese Buddhist tradition honoring ancestral spirits who return to visit. Celebrated with Bon Odori folk dances, lanterns floated on water to guide spirits home, and visits to graves. One of the most atmospheric traditions in Japanese culture.",
    countries: ["Japan", "Japanese American communities"]
  },
  {
    id: "h17",
    name: "Onam — Kerala Harvest Festival",
    date: "2026-09-05", displayDate: "September 5, 2026",
    month: 8, day: 5,
    culture: "South Asian", color: "south-asian", emoji: "🌺",
    description: "Kerala's biggest harvest festival, celebrating the mythical return of King Mahabali. Homes are decorated with flower carpets (pookalam), families gather for the grand Onam Sadhya (26-dish vegetarian feast on banana leaves), and snake boat races draw enormous crowds.",
    countries: ["India (Kerala)", "Malayali diaspora worldwide"]
  },
  {
    id: "h18",
    name: "Chuseok — Korean Harvest Moon",
    date: "2026-09-24", displayDate: "September 24–26, 2026",
    month: 8, day: 24,
    culture: "East Asian", color: "east-asian", emoji: "🌕",
    description: "Korea's most cherished holiday — the Korean Thanksgiving. Families travel home, pay respects to ancestors (charye), eat songpyeon (half-moon rice cakes), and wear hanbok. The full harvest moon is the centerpiece of this three-day celebration.",
    countries: ["South Korea", "North Korea", "Korean diaspora worldwide"]
  },
  {
    id: "h19",
    name: "Mid-Autumn Festival (Moon Festival)",
    date: "2026-09-25", displayDate: "September 25, 2026",
    month: 8, day: 25,
    culture: "East Asian", color: "east-asian", emoji: "🥮",
    description: "The 15th day of the 8th lunar month, when the moon is fullest and brightest. Families share mooncakes filled with lotus paste, salted egg yolk, or red bean, and children carry glowing paper lanterns. One of the most romantic and atmospheric evenings of the year.",
    countries: ["China", "Taiwan", "Vietnam", "Singapore", "Malaysia", "diaspora worldwide"]
  },
  {
    id: "h26",
    name: "Navaratri — Nine Nights",
    date: "2026-10-02", displayDate: "October 2–11, 2026",
    month: 9, day: 2,
    culture: "South Asian", color: "south-asian", emoji: "💃",
    description: "Nine nights of worship dedicated to the goddess Durga, celebrating the victory of divine feminine energy over evil. Each night honors a different form of Durga — marked by garba and dandiya raas dancing, fasting, and vibrant color-coded dress. One of Hinduism's most joyful festivals before Dussehra on the 10th day.",
    countries: ["India", "Nepal", "South Asian diaspora worldwide"]
  },
  {
    id: "h20",
    name: "Diwali — Festival of Lights",
    date: "2026-11-08", displayDate: "November 8, 2026",
    month: 10, day: 8,
    culture: "South Asian", color: "south-asian", emoji: "✨",
    description: "The most widely celebrated Hindu festival — five days marking the triumph of light over darkness. Homes are lit with diyas (clay lamps) and colorful rangoli, families exchange sweets, and fireworks fill the sky. Also significant in Jain, Sikh, and Buddhist traditions.",
    countries: ["India", "Nepal", "Sri Lanka", "Singapore", "Malaysia", "Fiji", "diaspora worldwide"]
  },
  {
    id: "h27",
    name: "Loy Krathong — Festival of Lights",
    date: "2026-11-24", displayDate: "November 24, 2026",
    month: 10, day: 24,
    culture: "Southeast Asian", color: "southeast-asian", emoji: "🪔",
    description: "Thailand's most magical night — thousands of candlelit krathong (small lotus-shaped floats) are set adrift on rivers and lakes, carrying away bad luck and making wishes. The sky fills with khom loi lanterns drifting upward. One of the most visually stunning nights in Southeast Asian tradition. Date follows the full moon of the 12th Thai lunar month.",
    countries: ["Thailand", "Laos", "Myanmar", "Thai diaspora worldwide"]
  },
  {
    id: "h21",
    name: "Guru Nanak Jayanti",
    date: "2026-11-14", displayDate: "November 14, 2026",
    month: 10, day: 14,
    culture: "South Asian", color: "south-asian", emoji: "🙏",
    description: "Gurpurab — the birthday of Guru Nanak Dev Ji, founder of Sikhism. Celebrated with continuous reading of the Guru Granth Sahib, nagar kirtans (street processions), langar (community meals open to all), and prayer.",
    countries: ["India (Punjab)", "Canada", "United Kingdom", "United States", "global Sikh diaspora"]
  },
  {
    id: "h22",
    name: "Bodhi Day",
    date: "2026-12-08", displayDate: "December 8, 2026",
    month: 11, day: 8,
    culture: "East Asian", color: "east-asian", emoji: "🍵",
    description: "Commemorating Siddhartha Gautama's enlightenment under the Bodhi tree. Observed in Zen and Mahayana Buddhist traditions with meditation, reading of sutras, and simple rituals. A quiet, contemplative day that contrasts with the season's commercial frenzy.",
    countries: ["Japan", "United States (Zen communities)", "global Buddhist diaspora"]
  },
  {
    id: "h23",
    name: "Dongzhi — Winter Solstice Festival",
    date: "2026-12-22", displayDate: "December 22, 2026",
    month: 11, day: 22,
    culture: "East Asian", color: "east-asian", emoji: "❄️",
    description: "One of the most important Chinese traditional holidays, marking the winter solstice. Families gather to share tangyuan (glutinous rice balls in sweet soup) and honor ancestors. The solstice marks the return of longer days — a time of renewal and yin-yang balance.",
    countries: ["China", "Taiwan", "Hong Kong", "Vietnam", "diaspora worldwide"]
  }
];

// ============================================================
// LONELINESS_RESOURCES — AA x Loneliness & Mental Health
// Verified URLs. Types: "article" | "org"
// ============================================================
const LONELINESS_RESOURCES = [
  {
    id: "l1",
    type: "article",
    category: "cultural-context",
    title: "4 Mental Health Issues Asian Americans Face — And How To Overcome Them",
    author: "Andee Tagle & Michelle Aslam",
    source: "NPR Life Kit",
    year: 2022,
    url: "https://www.npr.org/2022/05/24/1101020325/4-elements-to-create-home-discussing-mental-health-in-the-asian-american-communi",
    description: "Drawing on psychologist Jenny T. Wang's framework, this piece names four mental health challenges specific to Asian Americans — the model minority myth, perfectionism, deference to authority, and difficulty taking up space — and links them to a crisis of belonging.",
    stat: null
  },
  {
    id: "l2",
    type: "article",
    category: "essay",
    title: "You're Called a 'Model Minority' as an Asian American — Until They Decide You Aren't",
    author: "Gary Duong",
    source: "NPR",
    year: 2022,
    url: "https://www.npr.org/2022/05/30/1101790205/as-an-asian-american-youre-called-a-model-minority-until-they-decide-you-arent",
    description: "A first-person essay on how the conditional nature of the model minority label creates psychological precarity — and a persistent, exhausting sense of never fully belonging.",
    stat: null
  },
  {
    id: "l3",
    type: "article",
    category: "essay",
    title: "We're Fine: What's Stopping Asian-American Millennials From Talking About Mental Health",
    author: "Kimberly Truong",
    source: "Refinery29",
    year: 2018,
    url: "https://www.refinery29.com/en-us/asian-american-mental-health-second-generation-immigrants",
    description: "How filial piety, stigma, and the imperative to appear strong keep second-generation Asian Americans silent about their inner lives — and the cost of that silence over time.",
    stat: null
  },
  {
    id: "l4",
    type: "article",
    category: "essay",
    title: "Constance Wu Put Mental Health in Asian Communities in the Spotlight. Here's What's Next.",
    author: "Thuc Doan Nguyen",
    source: "Refinery29",
    year: 2023,
    url: "https://www.refinery29.com/en-us/2023/05/11346678/constance-wu-asian-american-mental-health",
    description: "Uses Constance Wu's public disclosure of a suicide attempt to examine the systemic barriers — model minority myth, cultural stigma, underrepresentation — that keep AAPI mental health invisible.",
    stat: null
  },
  {
    id: "l5",
    type: "article",
    category: "cultural-context",
    title: "The Asian-American Stigma Around Mental Health Therapy",
    author: "Jinnie Lee",
    source: "Refinery29",
    year: 2020,
    url: "https://www.refinery29.com/en-us/2020/05/9747266/asian-mental-health-therapy-stigma",
    description: "How cultural conditioning — emotional suppression, shame, saving face — prevents Asian Americans from seeking therapy, and whether a culturally compatible path forward exists.",
    stat: null
  },
  {
    id: "l6",
    type: "article",
    category: "research",
    title: "Mental Health Among Asian-Americans",
    author: "Koko Nishi, PhD",
    source: "American Psychological Association",
    year: 2012,
    url: "https://www.apa.org/pi/oema/resources/ethnicity-health/asian-american/article-mental-health",
    description: "The foundational APA overview documenting that Asian Americans are three times less likely than white Americans to seek mental health services, identifying stigma, the model minority myth, and bicultural identity conflict as root causes.",
    stat: "3× less likely to seek mental health support than white Americans"
  },
  {
    id: "l7",
    type: "article",
    category: "research",
    title: "Mental Health and Asian Americans",
    author: "U.S. Office of Minority Health",
    source: "HHS Office of Minority Health",
    year: 2024,
    url: "https://minorityhealth.hhs.gov/mental-and-behavioral-health-asian-americans",
    description: "Federal statistical overview showing Asian Americans are 45% less likely to receive mental health treatment than the general population, despite comparable rates of psychiatric disorder.",
    stat: "45% less likely to receive mental health treatment than the general population"
  },
  {
    id: "l8",
    type: "article",
    category: "research",
    title: "Intergenerational Communication about Historical Trauma in Asian American Families",
    author: "Jieyi Cai & Richard M. Lee",
    source: "Adversity and Resilience Science (PMC)",
    year: 2022,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9170877/",
    description: "Peer-reviewed research arguing that silence about war and migration trauma across generations risks alienating children from family history — and contributes to identity disconnection and isolation.",
    stat: null
  },
  {
    id: "l9",
    type: "article",
    category: "research",
    title: "Anti-Asian Hate, Social Isolation, and Mental Health Among AAPI Elders During COVID-19",
    author: "Stop AAPI Hate",
    source: "Stop AAPI Hate",
    year: 2022,
    url: "https://stopaapihate.org/2022/05/24/elder-report-2022/",
    description: "Report analyzing 824 hate incidents against AAPI adults 60+ showing that targeted violence compounded pandemic isolation, with 65.5% of elder victims reporting elevated stress.",
    stat: "65.5% of AAPI elder hate-crime victims reported elevated stress post-incident"
  },
  {
    id: "l10",
    type: "article",
    category: "cultural-context",
    title: "I'm a South Asian Gay Man. Here's What It Took to Feel Accepted",
    source: "Business Insider",
    year: "2023",
    url: "https://www.businessinsider.com/south-asian-gay-man-accepted-lgbtq-2023-1",
    description: "A first-person account of navigating the double isolation of being both South Asian and gay — the particular loneliness of communities within communities, and the long road toward belonging in both."
  },
  {
    id: "o1",
    type: "org",
    title: "Asians Do Therapy",
    source: "asiansdotherapy.com",
    url: "https://asiansdotherapy.com/",
    description: "A podcast and platform founded by a licensed therapist to reduce mental health stigma in Asian communities through storytelling, resources, and culturally matched therapist referrals.",
    icon: "🎙️"
  },
  {
    id: "o2",
    type: "org",
    title: "Asian Mental Health Collective",
    source: "asianmhc.org",
    url: "https://www.asianmhc.org",
    description: "Connects clients with over 3,000 culturally matched Asian therapists, offering free therapy funds, virtual support groups, and community resources.",
    icon: "🤝"
  },
  {
    id: "o3",
    type: "org",
    title: "The Steve Fund",
    source: "stevefund.org",
    url: "https://stevefund.org",
    description: "A leading nonprofit promoting mental health equity for young people of color, with programs, open courseware, and campus-focused resources including an AAPI Girls self-care initiative.",
    icon: "🌱"
  },
  {
    id: "o4",
    type: "org",
    title: "Asian Mental Health Project",
    source: "asianmentalhealthproject.com",
    url: "https://www.asianmentalhealthproject.com/",
    description: "A 501(c)(3) providing mental health assistance grants, peer wellness groups, free toolkits, and community events to make care accessible to Pan-Asian communities.",
    icon: "💛"
  },
  {
    id: "o5",
    type: "org",
    title: "Mental Health America: AAPI Communities",
    source: "mhanational.org",
    url: "https://mhanational.org/position-statements/asian-american-pacific-islander-communities-and-mental-health/",
    description: "MHA's position statement and resource hub on the intersection of model minority stereotyping, perpetual foreigner bias, and the cultural stigma driving AAPI mental health disparities.",
    icon: "📋"
  },
  // ── Dating & connection articles ──────────────────────────
  {
    id: "d1",
    type: "article",
    category: "dating",
    title: "How Dating Sites Automate Sexual Racism",
    author: "Liz Mineo",
    source: "Harvard Gazette",
    year: "2024",
    url: "https://news.harvard.edu/gazette/story/2024/04/how-dating-sites-automate-sexual-racism/",
    description: "Sociologist Apryl Williams on how dating app algorithms make racial discrimination \"hyper efficient and routine\" — and why anti-Asian bias in particular is baked into the design of mainstream platforms.",
    stat: "\"What dating apps do is automate sexual racism, making it hyper efficient and routine to swipe in racially curated sexual marketplaces.\" — Apryl Williams, Harvard"
  },
  {
    id: "d2",
    type: "article",
    category: "dating",
    title: "On Dating Apps, Casual Racism Has Become The Norm For Asian Men",
    author: "Brittany Wong",
    source: "HuffPost",
    year: "2024",
    url: "https://www.yahoo.com/news/dating-apps-casual-racism-become-183924405.html",
    description: "Personal accounts from Asian American men on the rejections, profile filters, and explicit \"no Asians\" messages that have become routine on dating platforms — and what it does to your sense of self.",
    stat: "\"I was sexy and exotic as a Latino, but I suddenly became undesirable as an Asian-American.\" — Lee Doud, actor"
  },
  {
    id: "d3",
    type: "article",
    category: "dating",
    title: "Is It Wrong to Have a Romantic Type Based on Race? Yes.",
    author: "Aaron Teo",
    source: "The Conversation",
    year: "2024",
    url: "https://theconversation.com/is-it-wrong-to-have-a-romantic-type-based-on-race-yes-its-a-form-of-racism-we-rarely-speak-about-229002",
    description: "A cultural critic unpacks internalized racism and fetishization through the lens of ABC's comedy *White Fever* — examining how Asian women experience 'yellow fever' and how Asian communities sometimes internalize racial hierarchies that elevate whiteness."
  },
  {
    id: "d4",
    type: "article",
    category: "dating",
    title: "Single Asian Men and Harmful Stereotypes in the Dating World",
    author: "Sam Louie",
    source: "Psychology Today",
    year: "2023",
    url: "https://www.psychologytoday.com/us/blog/minority-report/202308/single-asian-men-and-harmful-stereotypes-in-the-dating-world",
    description: "A therapist examines how persistent stereotypes — weak, shy, lacking initiative — follow Asian men into dating, and what it takes to be seen as a full person rather than a cultural shorthand."
  },
  {
    id: "d5",
    type: "article",
    category: "dating",
    title: "As An Asian American Woman, This Is The Dating App Red Flag I Don't Talk About",
    author: "Lisa Boyce",
    source: "HuffPost",
    year: "2022",
    url: "https://www.huffpost.com/entry/asian-women-dating-apps_n_628d2a05e4b0b1d9844e0a8b",
    description: "A personal essay on the specific, quietly unsettling pattern Asian American women encounter on dating apps — one that's hard to name but impossible to ignore once you've seen it."
  },
  {
    id: "d6",
    type: "article",
    category: "dating",
    title: "Dating Apps vs. Arranged Marriage: How South Asians Are Navigating Both",
    source: "NBC News",
    year: "2024",
    url: "https://www.nbcnews.com/news/asian-america/dating-apps-south-asians-arranged-marriage-rcna154392",
    description: "How South Asian Americans are navigating the friction between swipe-culture dating apps and family-led arranged marriage traditions — and what it means to want both independence and belonging."
  },
  // ── Resilience & community strength ───────────────────────
  {
    id: "r1",
    type: "article",
    category: "resilience",
    title: "The Return of the Multigenerational Family Household",
    author: "Pew Research Center",
    source: "Pew Research Center",
    year: "2022",
    url: "https://www.pewresearch.org/social-trends/2022/03/24/the-demographics-of-multigenerational-households/",
    description: "Asian Americans are more likely than any other group to live in multigenerational households — reflecting both economic pragmatism and deep intergenerational bonds that sustain community across generations.",
    stat: "29% of Asian Americans live in multigenerational households — highest of any racial group in the U.S. (Pew, 2022)."
  },
  {
    id: "r2",
    type: "article",
    category: "resilience",
    title: "Better Therapy for Asian Americans",
    author: "Diana Kwon",
    source: "Knowable Magazine",
    year: "2023",
    url: "https://knowablemagazine.org/content/article/mind/2023/better-therapy-asian-americans",
    description: "Researchers and clinicians are adapting Western psychotherapy to honor Asian cultural values — developing new approaches that don't ask patients to choose between their heritage and their healing."
  },
  {
    id: "r3",
    type: "article",
    category: "resilience",
    title: "Americans' Trust in One Another",
    author: "Laura Silver et al.",
    source: "Pew Research Center",
    year: "2025",
    url: "https://www.pewresearch.org/2025/05/08/americans-trust-in-one-another/",
    description: "A sweeping study of interpersonal trust across American demographics — with Asian Americans ranking second-highest of all racial groups, suggesting that community bonds and social cohesion remain genuine strengths.",
    stat: "38% of Asian Americans say most people can be trusted — second highest of any racial group surveyed, above the national average of 34% (Pew, 2025)."
  }
];

// ============================================================
// ERG_EVENTS — Asian @ Hinge ERG-organized programming for May 2026
// ============================================================
const ERG_EVENTS = [
  {
    id: "erg-1",
    title: "In Conversation with Jade Song",
    date: "May 13, 2026",
    time: "1:00 – 1:45 PM",
    location: "5th Floor, FiDi",
    description: "An author reading and conversation with Jade Song — artist and author of I Love You Don't Die and Chlorine, lauded as \"visionary and disturbing,\" a New York Times Editor's Choice, and winner of the Alex Award. Includes Q&A and a book signing & giveaway.",
    category: "Author Talk",
    icon: "📖",
    image: "assets/images/erg/jade-song.jpg",
    includes: ["Reading", "Q&A", "Book signing & giveaway"],
    notes: "Free & open to all Hinge employees. Limited books provided — first come, first served."
  },
  {
    id: "erg-2",
    title: "Filmmaker Showcase",
    subtitle: "A screening and Q&A featuring two up-and-coming AAPI filmmakers",
    date: "May 20, 2026",
    time: "12:00 – 1:00 PM",
    location: "5th Floor, FiDi",
    description: "A lunchtime double feature: two acclaimed AAPI shorts — Layover by Taylor Sanghyun Lee and Lice by Vindhya Gupta — followed by a live Q&A with both directors.",
    category: "Film",
    icon: "🎬",
    films: [
      {
        title: "Layover",
        image: "assets/images/erg/layover.jpg",
        director: "Taylor Sanghyun Lee",
        directorPhoto: "assets/images/erg/taylor-lee.jpg",
        synopsis: "Long estranged from the religious community his mother embraces, Solomon must wear a lie one last time on the day of his brief return.",
        bio: "Taylor Sanghyun Lee is an NYC-based filmmaker working across writing, directing, and cinematography. A former software engineer and UCLA grad in Linguistics & Computer Science, he earned his MFA in Directing from NYU Tisch, where he was awarded the Ang Lee Scholarship. His debut feature ROUNDS was selected for the 2026 Sundance Directors & Screenwriters Lab and the 2025 TIFF & CJ K-Story Fund. Layover is a Vimeo Staff Pick; his upcoming short Parkside East is a recipient of the Spike Lee Production Grant.",
        laurels: ["San Francisco International Film Festival", "47th Asian American International Film Festival", "New York Asian Film Festival 2024"]
      },
      {
        title: "Lice (Jooyein)",
        image: "assets/images/erg/lice.jpg",
        director: "Vindhya Gupta",
        directorPhoto: "assets/images/erg/vindhya-gupta.jpg",
        synopsis: "12-year-old Roshni forges a bond with class outcast Chakor to keep her lice infestation a secret. The malicious lie looms large as a friendship blossoms between them.",
        bio: "Vindhya Gupta is a New York–based filmmaker, creative producer, and faculty at the New York Film Academy. She holds an MFA in Film Producing from NYU Tisch. Her narrative work has premiered at Tribeca and screened across continents, earning awards from prestigious institutions. Her films operate between social realism and psychological unease, interrogating class, power, and the performance of identity. She also runs Dropper Films, with commercial credits spanning Google, HP, Uber, and Coca-Cola.",
        laurels: ["2024 Tribeca Film Festival Official Selection", "Nashville Film Festival 2024", "Indian Film Festival of Melbourne 2024", "Austin Film Festival 2024"]
      }
    ]
  },
  {
    id: "erg-3",
    title: "An Introduction to Qinghong Wine",
    subtitle: "A guided tasting in collaboration with Fuzhou Sisters",
    date: "May 28, 2026",
    time: "4:00 – 6:00 PM",
    location: "5th Floor, FiDi",
    description: "An intimate one-hour tasting with the Fuzhou Sisters — they'll share the story and history of Qinghong, a rare regional wine native to Fuzhou, China, followed by a guided pour through 5–6 varieties with curated snack pairings.",
    category: "Tasting",
    icon: "🍷",
    image: "assets/images/erg/fuzhou-sisters.jpg",
    partner: {
      name: "Fuzhou Sisters",
      url: "https://www.fuzhousisters.com/"
    },
    hostedBy: {
      name: "Fuzhou Sisters",
      bio: "Founded by childhood friends Shuyu and Qixin, who grew up together in Fuzhou and reunited in New York City in 2023. Fuzhou Sisters brings Qinghong wine — and the culture behind it — to new audiences through tasting events, community, and storytelling."
    }
  },
  {
    id: "erg-4",
    title: "Kite Making with Craft Society",
    date: "June 3, 2026",
    time: "4:00 – 6:00 PM",
    location: "5th Floor, FiDi",
    description: "A hands-on kite-making workshop hosted in partnership with Craft Society, a Brooklyn-based studio that hosts guest artists and craft programming. Materials provided — no experience needed.",
    category: "Workshop",
    icon: "🪁",
    image: "assets/images/erg/kite-making.jpg",
    partner: {
      name: "Craft Society",
      url: "https://www.craft-society.com/"
    }
  }
];

// Export for module environments
if (typeof module !== 'undefined') {
  module.exports = { RESTAURANTS, EVENTS, ERG_EVENTS, BOOKS, HOLIDAYS, LONELINESS_RESOURCES };
}
