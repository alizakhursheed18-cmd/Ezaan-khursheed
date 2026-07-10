export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in PKR (Rs.)
  category: 'BBQ Specials' | 'Grilled Specials' | 'Rice' | 'Bread' | 'Drinks';
  image: string;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  url: string;
  category: 'food' | 'interior' | 'kitchen';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic mapping to Lucide icons
}

export interface ReservationInquiry {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}
