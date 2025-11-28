import React from 'react';
import { IMAGES } from '../constants';
import { Coffee, Wifi, Car, ShoppingBag } from 'lucide-react';

const Amenities: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
       <div className="relative h-96 w-full overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.EXTERIOR})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 animate-slide-up">Premium Amenities</h1>
          <p className="text-white/80 max-w-2xl text-lg animate-slide-up animation-delay-200">Convenience and comfort in the heart of Addis Ababa.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Dining/Kitchen */}
            <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-sm shadow-lg">
                    <img src={IMAGES.KITCHEN} alt="Kitchen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-stone-200 p-3 rounded-full">
                        <Coffee className="w-6 h-6 text-stone-800" />
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl text-stone-800 mb-2">Fully Equipped Kitchens</h3>
                        <p className="text-stone-600">Every apartment comes with a modern kitchen, allowing you to prepare your own meals. Perfect for extended stays.</p>
                    </div>
                </div>
            </div>

            {/* Parking */}
            <div className="space-y-6">
                 <div className="aspect-video overflow-hidden rounded-sm shadow-lg">
                    <img src={IMAGES.EXTERIOR} alt="Parking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-stone-200 p-3 rounded-full">
                        <Car className="w-6 h-6 text-stone-800" />
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl text-stone-800 mb-2">Free Parking</h3>
                        <p className="text-stone-600">Secure and complimentary parking for all our guests. A rarity in the bustling Bole district.</p>
                    </div>
                </div>
            </div>

            {/* Outdoors/Location */}
            <div className="space-y-6">
                 <div className="aspect-video overflow-hidden rounded-sm shadow-lg">
                    <img src={IMAGES.DETAIL_3} alt="Location" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                 <div className="flex gap-4 items-start">
                    <div className="bg-stone-200 p-3 rounded-full">
                        <ShoppingBag className="w-6 h-6 text-stone-800" />
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl text-stone-800 mb-2">Prime Location</h3>
                        <p className="text-stone-600">Steps away from Medhane Alem Cathedral and Bole International Airport. Surrounded by the city's best cafes and malls.</p>
                    </div>
                </div>
            </div>

            {/* Tech */}
             <div className="space-y-6">
                 <div className="aspect-video overflow-hidden rounded-sm shadow-lg">
                    <img src={IMAGES.LIVING_ROOM} alt="Living" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-stone-200 p-3 rounded-full">
                        <Wifi className="w-6 h-6 text-stone-800" />
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl text-stone-800 mb-2">Free High-Speed Wi-Fi</h3>
                        <p className="text-stone-600">Stay connected with our complimentary high-speed internet, ideal for business travelers working remotely.</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Amenities;