import { Room } from './types';

// Provided Images for The Row Residential Hotel
export const IMAGES = {
  HERO_MAIN: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/69274271.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  LIVING_ROOM: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/1da21f5a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  BEDROOM_1: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/bb296304.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  KITCHEN: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/a1937ab0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  BEDROOM_2: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/a618c514.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  BEDROOM_TWIN: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/b40062c2.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  BATHROOM: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/11c30abf.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  EXTERIOR: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/w1019h674x5y0-09c170ec.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  DETAIL_1: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/44733c46.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  DETAIL_2: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/dc1b5af7.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  DETAIL_3: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/d37a06f7.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  DETAIL_4: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/1245673a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  DETAIL_5: 'https://images.trvl-media.com/lodging/122000000/121890000/121883500/121883412/13ec8c1e.jpg?impolicy=resizecrop&rw=1200&ra=fit',
};

export const ROOMS: Room[] = [
  {
    id: 'standard-studio',
    name: 'Standard Studio',
    description: 'A modern, well-appointed studio perfect for business travelers. Features a comfortable work area, kitchenette, and city views of Bole.',
    price: 12350,
    image: IMAGES.BEDROOM_1,
    capacity: 2,
    amenities: ['Free Wi-Fi', 'Kitchenette', 'Work Desk', 'City View']
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Spacious suite with separate living area, ideal for extended stays. Enjoy premium furnishings and a fully equipped kitchen.',
    price: 15500,
    image: IMAGES.LIVING_ROOM,
    capacity: 3,
    amenities: ['Full Kitchen', 'Living Room', 'Balcony', 'Premium WiFi']
  },
  {
    id: 'two-bedroom-apt',
    name: 'Two-Bedroom Apartment',
    description: 'The ultimate residential experience for families or groups. Two private bedrooms, two bathrooms, and a large dining area.',
    price: 22000,
    image: IMAGES.BEDROOM_2,
    capacity: 4,
    amenities: ['2 Bedrooms', '2 Bathrooms', 'Dining Area', 'Laundry']
  },
  {
    id: 'penthouse-residence',
    name: 'The Row Penthouse',
    description: 'Luxury redefined on the top floor. Panoramic views of Addis Ababa, expansive terrace, and exclusive amenities.',
    price: 35000,
    image: IMAGES.HERO_MAIN,
    capacity: 4,
    amenities: ['Panoramic View', 'Private Terrace', 'Concierge', 'VIP Access']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Abebe Kebede",
    text: "Excellent location in Bole. Close to the airport and the malls. The room was spacious and felt like a real apartment.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    text: "The staff were incredibly helpful. Great value for the price, especially with the free parking and Wi-Fi.",
    rating: 4
  },
  {
    id: 3,
    name: "David Chen",
    text: "Perfect for my business trip. The internet was fast and the desk area was very comfortable. Highly recommended.",
    rating: 5
  }
];
