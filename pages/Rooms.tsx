import React from 'react';
import { Link } from 'react-router-dom';
import { User, Maximize } from 'lucide-react';
import { ROOMS, IMAGES } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-stone-100 py-20 px-4 text-center">
        <h1 className="font-serif text-5xl text-stone-800 mb-4 animate-slide-up">Accommodations</h1>
        <p className="text-stone-500 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Spacious apartments and suites designed for living, not just staying.
        </p>
      </div>

      {/* Filter/Intro (Visual only for now) */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Room List */}
        <div className="space-y-24">
            {ROOMS.map((room, index) => (
                <div key={room.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 relative group overflow-hidden shadow-2xl rounded-sm">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img 
                                src={room.image} 
                                alt={room.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                             {/* Small thumbnails - using decorative usage of other images for variety */}
                             <img src={IMAGES.BATHROOM} className="w-16 h-12 object-cover border-2 border-white/80" alt="detail" />
                             <img src={IMAGES.DETAIL_1} className="w-16 h-12 object-cover border-2 border-white/80" alt="detail" />
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="flex items-center gap-4">
                             <h2 className="font-serif text-4xl text-stone-800">{room.name}</h2>
                             <div className="h-px flex-grow bg-stone-200"></div>
                        </div>
                        <p className="text-stone-600 leading-relaxed text-lg">
                            {room.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-stone-500 py-4">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Up to {room.capacity} Guests</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Maximize className="w-4 h-4" />
                                <span>Spacious Layout</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-2 text-stone-600 text-sm border-t border-b border-stone-100 py-4">
                            {room.amenities.map(amenity => (
                                <span key={amenity} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-stone-800 rounded-full"></span> {amenity}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-end justify-between pt-4">
                            <div>
                                <span className="text-xs uppercase text-stone-400 block mb-1">Starting from</span>
                                <span className="font-serif text-3xl text-stone-900">ETB {room.price.toLocaleString()}</span>
                                <span className="text-stone-500"> / night</span>
                            </div>
                            <Link 
                                to={`/booking?room=${room.id}`}
                                className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;