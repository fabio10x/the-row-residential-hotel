export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number;
  amenities: string[];
}

export interface BookingDetails {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export enum Page {
  HOME = 'HOME',
  ROOMS = 'ROOMS',
  AMENITIES = 'AMENITIES',
  BOOKING = 'BOOKING',
  CONTACT = 'CONTACT',
  ABOUT = 'ABOUT',
  CAREERS = 'CAREERS',
  PRESS = 'PRESS',
  PRIVACY = 'PRIVACY'
}