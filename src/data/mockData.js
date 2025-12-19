export const OFFERS = [
  {
    id: 1,
    shopName: "Tanishq Jewellery",
    location: {
      state: "Maharashtra",
      city: "Mumbai",
      pincode: "400050",
      lat: 19.0596,
      lng: 72.8295
    },
    category: "Gold",
    discountType: "Percentage",
    discountValue: "20% OFF",
    discountValueNumeric: 20,
    price: 50000,
    description: "Flat 20% off on Gold Making Charges. Limited time offer on wedding collections.",
    validUntil: "2025-12-31",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000",
    isFeatured: true
  },
  {
    id: 2,
    shopName: "Kalyan Jewellers",
    location: {
      state: "Karnataka",
      city: "Bangalore",
      pincode: "560001",
      lat: 12.9716,
      lng: 77.5946
    },
    category: "Diamond",
    discountType: "Flat Amount",
    discountValue: "₹5000 OFF",
    discountValueNumeric: 5000,
    price: 75000,
    description: "Get flat ₹5000 off on diamond necklace sets above ₹50k.",
    validUntil: "2025-12-25",
    image: "https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxzfGVufDB8fDB8fHww",
    isFeatured: true
  },
  {
    id: 3,
    shopName: "Malabar Gold & Diamonds",
    location: {
      state: "Delhi",
      city: "New Delhi",
      pincode: "110001",
      lat: 28.6139,
      lng: 77.2090
    },
    category: "Collections",
    discountType: "Percentage",
    discountValue: "25% OFF",
    discountValueNumeric: 25,
    price: 120000,
    description: "Special discount on Gemstone collections. Explore the royal vibes.",
    validUntil: "2026-01-10",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false
  },
  {
    id: 4,
    shopName: "Reliance Jewels",
    location: {
      state: "Maharashtra",
      city: "Pune",
      pincode: "411004",
      lat: 18.5204,
      lng: 73.8567
    },
    category: "Silver",
    discountType: "Buy 1 Get 1",
    discountValue: "BOGO",
    discountValueNumeric: 50,
    price: 5000,
    description: "Buy 1 Get 1 Free on select Silver articles.",
    validUntil: "2026-12-20",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false
  },
  {
    id: 5,
    shopName: "PC Jeweller",
    location: {
      state: "Uttar Pradesh",
      city: "Noida",
      pincode: "201301",
      lat: 28.5355,
      lng: 77.3910
    },
    category: "Gold",
    discountType: "Percentage",
    discountValue: "15% OFF",
    discountValueNumeric: 15,
    price: 45000,
    description: "15% off on Gold Coins and Bars.",
    validUntil: "2025-12-30",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxzfGVufDB8fDB8fHww",
    isFeatured: true
  },
  {
    id: 6,
    shopName: "Joyalukkas",
    location: {
      state: "Tamil Nadu",
      city: "Chennai",
      pincode: "600017",
      lat: 13.0418,
      lng: 80.2341
    },
    category: "Diamond",
    discountType: "Percentage",
    discountValue: "10% OFF",
    discountValueNumeric: 10,
    price: 60000,
    description: "10% discount on all diamond jewellery.",
    validUntil: "2026-01-05",
    image: "https://images.unsplash.com/photo-1705575518997-82a71bcc75a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D",
    isFeatured: false
  },
  {
    id: 7,
    shopName: "Pune Jewellers",
    location: {
      state: "Maharashtra",
      city: "Pune",
      pincode: "411038",
      lat: 18.5204,
      lng: 73.8567
    },
    category: "Gold",
    discountType: "Flat Amount",
    discountValue: "₹2000 OFF",
    discountValueNumeric: 2000,
    price: 25000,
    description: "Special offer for Pune Kothrud branch.",
    validUntil: "2026-01-15",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false
  }
];

export const CATEGORIES = ["All", "Gold", "Diamond", "Silver", "Collections"];

// Expanded to include ALL Indian States/UTs and major cities
export const LOCATIONS = {
  "Andaman and Nicobar Islands": { "Port Blair": ["744101", "744102"] },
  "Andhra Pradesh": {
    "Visakhapatnam": ["530001", "530002", "530003"],
    "Vijayawada": ["520001", "520002"],
    "Guntur": ["522002", "522003"],
    "Nellore": ["524001", "524002"]
  },
  "Arunachal Pradesh": { "Itanagar": ["791111"] },
  "Assam": {
    "Guwahati": ["781001", "781002", "781003"],
    "Silchar": ["788001"],
    "Dibrugarh": ["786001"]
  },
  "Bihar": {
    "Patna": ["800001", "800002", "800003"],
    "Gaya": ["823001"],
    "Bhagalpur": ["812001"],
    "Muzaffarpur": ["842001"]
  },
  "Chandigarh": { "Chandigarh": ["160001", "160002", "160017", "160022"] },
  "Chhattisgarh": {
    "Raipur": ["492001", "492002"],
    "Bhilai": ["490001", "490006"],
    "Bilaspur": ["495001"]
  },
  "Dadra and Nagar Haveli and Daman and Diu": { "Daman": ["396210"], "Silvassa": ["396230"] },
  "Delhi": {
    "New Delhi": ["110001", "110003", "110020", "110025", "110049"],
    "North Delhi": ["110007", "110009"],
    "South Delhi": ["110017", "110019"]
  },
  "Goa": {
    "Panaji": ["403001"],
    "Margao": ["403601"],
    "Vasco da Gama": ["403802"]
  },
  "Gujarat": {
    "Ahmedabad": ["380001", "380002", "380009", "380015"],
    "Surat": ["395001", "395003", "395007"],
    "Vadodara": ["390001", "390007"],
    "Rajkot": ["360001", "360005"]
  },
  "Haryana": {
    "Gurugram": ["122001", "122002", "122018"],
    "Faridabad": ["121001", "121002"],
    "Panipat": ["132103"],
    "Ambala": ["133001"]
  },
  "Himachal Pradesh": { "Shimla": ["171001", "171002"], "Dharamshala": ["176215"] },
  "Jammu and Kashmir": { "Srinagar": ["190001"], "Jammu": ["180001"] },
  "Jharkhand": {
    "Ranchi": ["834001", "834002"],
    "Jamshedpur": ["831001"],
    "Dhanbad": ["826001"]
  },
  "Karnataka": {
    "Bangalore": ["560001", "560002", "560038", "560045", "560095", "560100"],
    "Mysore": ["570001", "570002"],
    "Hubli": ["580020"],
    "Mangalore": ["575001"]
  },
  "Kerala": {
    "Thiruvananthapuram": ["695001", "695002"],
    "Kochi": ["682001", "682002"],
    "Kozhikode": ["673001"],
    "Thrissur": ["680001"]
  },
  "Ladakh": { "Leh": ["194101"], "Kargil": ["194103"] },
  "Lakshadweep": { "Kavaratti": ["682555"] },
  "Madhya Pradesh": {
    "Bhopal": ["462001", "462003"],
    "Indore": ["452001", "452002", "452010"],
    "Gwalior": ["474001"],
    "Jabalpur": ["482001"]
  },
  "Maharashtra": {
    "Mumbai": ["400001", "400005", "400014", "400050", "400053", "400099"],
    "Pune": ["411001", "411004", "411038", "411057"],
    "Nagpur": ["440001", "440010"],
    "Nashik": ["422001"],
    "Aurangabad": ["431001"],
    "Thane": ["400601", "400602"]
  },
  "Manipur": { "Imphal": ["795001"] },
  "Meghalaya": { "Shillong": ["793001"] },
  "Mizoram": { "Aizawl": ["796001"] },
  "Nagaland": { "Kohima": ["797001"], "Dimapur": ["797112"] },
  "Odisha": {
    "Bhubaneswar": ["751001", "751002"],
    "Cuttack": ["753001"],
    "Rourkela": ["769001"],
    "Berhampur": ["760001"]
  },
  "Puducherry": { "Puducherry": ["605001"] },
  "Punjab": {
    "Ludhiana": ["141001", "141002"],
    "Amritsar": ["143001"],
    "Jalandhar": ["144001"],
    "Chandigarh": ["160017"], // Shared
    "Patiala": ["147001"]
  },
  "Rajasthan": {
    "Jaipur": ["302001", "302004", "302017"],
    "Jodhpur": ["342001"],
    "Udaipur": ["313001"],
    "Kota": ["324001"]
  },
  "Sikkim": { "Gangtok": ["737101"] },
  "Tamil Nadu": {
    "Chennai": ["600001", "600002", "600017", "600028", "600040"],
    "Coimbatore": ["641001", "641002"],
    "Madurai": ["625001"],
    "Tiruchirappalli": ["620001"],
    "Salem": ["636001"]
  },
  "Telangana": {
    "Hyderabad": ["500001", "500002", "500032", "500081"],
    "Warangal": ["506002"],
    "Nizamabad": ["503001"]
  },
  "Tripura": { "Agartala": ["799001"] },
  "Uttar Pradesh": {
    "Lucknow": ["226001", "226010", "226016"],
    "Kanpur": ["208001", "208002"],
    "Ghaziabad": ["201001", "201010"],
    "Noida": ["201301", "201307", "201309"],
    "Agra": ["282001"],
    "Varanasi": ["221001"],
    "Meerut": ["250001"],
    "Prayagraj": ["211001"]
  },
  "Uttarakhand": {
    "Dehradun": ["248001"],
    "Haridwar": ["249401"],
    "Roorkee": ["247667"],
    "Nainital": ["263001"]
  },
  "West Bengal": {
    "Kolkata": ["700001", "700007", "700012", "700091"],
    "Howrah": ["711101"],
    "Durgapur": ["713201"],
    "Asansol": ["713301"],
    "Siliguri": ["734001"]
  }
};
