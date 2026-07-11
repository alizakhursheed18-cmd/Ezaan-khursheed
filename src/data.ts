import { MenuItem, Review, GalleryItem, Feature } from './types';

export const HERO_BG = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600";

export const MENU_ITEMS: MenuItem[] = [
  // BBQ Specials
  {
    id: 'bbq-2',
    name: 'Beef Boti',
    description: 'Tender beef chunks steeped in a special raw papaya and ginger-garlic marinade, grilled slowly on open coals for a melt-in-your-mouth experience.',
    price: 550,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1532636875304-0c8fe119ff91?auto=format&fit=crop&q=80&w=800',
    isSpicy: true
  },
  {
    id: 'bbq-3',
    name: 'Chicken Boti',
    description: 'Succulent boneless chicken breast pieces marinated in our house-special red barbecue spices and roasted over glowing coals.',
    price: 400,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'bbq-4',
    name: 'Malai Boti',
    description: 'Delectably creamy boneless chicken cubes marinated in heavy cream, yogurt, mild green chilies, and cardamoms. Incredibly soft and juicy.',
    price: 450,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'bbq-5',
    name: 'Seekh Kabab',
    description: 'Finely minced beef blended with home-ground coriander, cumin, onions, and spicy herbs, skewered and barbecued directly over flaming charcoal.',
    price: 300,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1561719122-f2d0f993004a?auto=format&fit=crop&q=80&w=800',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'bbq-6',
    name: 'Reshmi Kabab',
    description: 'Soft and delicate chicken minced kababs, mixed with coriander, fresh butter, cream, and mild green chillies, charcoal grilled.',
    price: 400,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1628294896516-3441be614788?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bbq-7',
    name: 'Zafrani Boti Boti',
    description: 'Aromatic, saffron-infused tender chicken skewers prepared with premium cream, cardamoms, and real saffron for a royal flavor.',
    price: 450,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'bbq-8',
    name: 'Gola Kabab',
    description: 'Super soft, melt-in-the-mouth circular beef kababs seasoned with nutmeg, mace, and local spices, smoked to perfection.',
    price: 400,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    isSpicy: true
  },
  {
    id: 'bbq-9',
    name: 'Chicken Malai',
    description: 'Single serving of ultra-creamy grilled chicken breast boti, tenderly prepared over charcoal with mild green spices.',
    price: 200,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bbq-10',
    name: 'Bihari Tikka',
    description: 'Extremely tender, spicy beef or chicken strips marinated in rich mustard oil, raw papaya, and high-heat Bihari red spices.',
    price: 380,
    category: 'BBQ Specials',
    image: 'https://images.unsplash.com/photo-1532636875304-0c8fe119ff91?auto=format&fit=crop&q=80&w=800',
    isSpicy: true
  },

  // Grilled Specials
  {
    id: 'grill-1',
    name: 'Chicken Leg',
    description: 'Full leg quarter, deeply scored and marinated in hot tandoori spices and vinegar, then charcoal grilled. Perfect smokey skin.',
    price: 360,
    category: 'Grilled Specials',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800',
    isSpicy: true
  },
  {
    id: 'grill-2',
    name: 'Chicken Chest',
    description: 'Full double-sized chicken breast quarter, grilled slowly to preserve natural juices, coated in a light zesty spice marinade.',
    price: 370,
    category: 'Grilled Specials',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800'
  },

  // Rolls Specials
  {
    id: 'roll-1',
    name: 'Chicken Roll',
    description: 'Juicy charcoal-grilled chicken boti wrapped in a crispy golden paratha with sliced onions and tangy green chutney.',
    price: 150,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roll-2',
    name: 'Chicken Mayo Roll',
    description: 'Smokey chicken chunks layered with rich garlic mayo sauce, rolled snug in a freshly fried hot paratha.',
    price: 160,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1625182630526-8c9306b23456?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'roll-3',
    name: 'Chicken Malai Roll',
    description: 'Tender Malai Boti pieces rolled with dynamic green chutney, fresh cream, and onions in a golden fried paratha.',
    price: 170,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roll-4',
    name: 'Beef Roll',
    description: 'Authentic grilled beef seekh kabab pieces wrapped in hot fried paratha with Karachi-style spiced chutney.',
    price: 170,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roll-5',
    name: 'Beef Mayo Roll',
    description: 'Tender grilled beef pieces combined with rich garlic mayo and freshly cut onions, wrapped in a crispy paratha.',
    price: 200,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roll-6',
    name: 'Zinger Roll',
    description: 'Crispy deep-fried golden chicken breast strip topped with mayo and crisp lettuce, wrapped in a warm soft paratha.',
    price: 250,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'roll-7',
    name: 'Kabab Roll',
    description: 'Sizzling beef seekh kabab wrapped inside a hot crispy paratha with spicy house-made mint-coriander yogurt chutney.',
    price: 150,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1625182630526-8c9306b23456?auto=format&fit=crop&q=80&w=800'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'feat-1',
    title: 'Fresh Ingredients',
    description: 'We procure 100% fresh, organic meats and ground spices daily to ensure superior taste.',
    iconName: 'Leaf'
  },
  {
    id: 'feat-2',
    title: 'Traditional BBQ Taste',
    description: 'Time-tested recipes cooked on charcoal grills, preserving authentic Pakistani street-food heritage.',
    iconName: 'Flame'
  },
  {
    id: 'feat-3',
    title: 'Hygienic Kitchen',
    description: 'Our kitchen maintains immaculate hygiene standards, daily deep cleanings, and safety audits.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'feat-4',
    title: 'Affordable Prices',
    description: 'Enjoy premium-grade barbecue and robust traditional flavors starting from just Rs. 300 to Rs. 550.',
    iconName: 'Coins'
  },
  {
    id: 'feat-5',
    title: 'Family Friendly',
    description: 'A cozy, clean, and respectable family-friendly environment with designated seating areas.',
    iconName: 'Users'
  },
  {
    id: 'feat-6',
    title: 'Fast Takeaway',
    description: 'Get your orders packed fresh, piping hot, and beautifully sealed with rapid takeaway service.',
    iconName: 'Zap'
  },
  {
    id: 'feat-7',
    title: 'Experienced Chefs',
    description: 'Our master ustaads have over two decades of experience perfecting heat control and marinades.',
    iconName: 'Award'
  },
  {
    id: 'feat-8',
    title: 'Quality Service',
    description: 'Attentive, friendly, and respectful staff serving your meals with warmth and prompt hospitality.',
    iconName: 'Sparkles'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Mohammad Ahsan',
    rating: 5,
    text: 'The best BBQ in Shah Faisal. Fresh, juicy, and full of authentic flavors. Their Malai Boti and Beef Seekh Kababs are absolutely heavenly and melt in the mouth. Extremely reasonable pricing.',
    date: 'June 25, 2026',
    avatar: 'MA'
  },
  {
    id: 'rev-2',
    author: 'Sadia Fatima',
    rating: 5,
    text: 'Affordable prices with excellent quality. The kitchen looks clean, and the service is quite fast. Takeaway packing is superb, everything remains piping hot till we reach home.',
    date: 'June 18, 2026',
    avatar: 'SF'
  },
  {
    id: 'rev-3',
    author: 'Kamran Mughal',
    rating: 5,
    text: 'Highly recommended for families and BBQ lovers. Finding genuine tandoori taste is rare, but Meerut Kabab nails it. Their hot Naan paired with Chicken Tikka is a match made in heaven!',
    date: 'May 30, 2026',
    avatar: 'KM'
  },
  {
    id: 'rev-4',
    author: 'Zainab Jamil',
    rating: 4,
    text: 'Extremely soft Reshmi Kabab and the Malai Boti was incredibly creamy. The environment is clean and perfect for a casual family dinner. Will definitely visit again.',
    date: 'May 12, 2026',
    avatar: 'ZJ'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Live Charcoal BBQ Grill',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'gal-2',
    title: 'Freshly Grilled Chicken Tikka',
    url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'gal-3',
    title: 'Mouthwatering Beef Boti',
    url: 'https://images.unsplash.com/photo-1532636875304-0c8fe119ff91?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'gal-4',
    title: 'Smoking Hot Seekh Kabab',
    url: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  },
  {
    id: 'gal-5',
    title: 'Cozy Restaurant Interior',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    category: 'interior'
  },
  {
    id: 'gal-6',
    title: 'Immaculate Dining Area',
    url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=800',
    category: 'interior'
  },
  {
    id: 'gal-7',
    title: 'Hygienic Grill Kitchen',
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    category: 'kitchen'
  },
  {
    id: 'gal-8',
    title: 'Happy Customers Dining',
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
    category: 'interior'
  },
  {
    id: 'gal-9',
    title: 'Golden Fresh Naan from Tandoor',
    url: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800',
    category: 'food'
  }
];
