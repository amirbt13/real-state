export interface Profile {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  construction: Date;
  category: string;
  rules: string[];
  amenities: string[];
}

export interface BProfile extends Profile {
  _id: string;
}
