import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Coffee, Wifi, Car, ShoppingBag } from 'lucide-react';
import { IMAGES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ backgroundImage: `url(${IMAGES.HERO_MAIN})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          <span className="text-white/90 uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-slide-up">
            Welcome to Addis Ababa
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight shadow-sm animate-slide-up animation-delay-200">
            The Row <br/>Residential Hotel
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-light animate-slide-up animation-delay-400">
            Experience the pulse of Bole. A 4-star sanctuary blending residential comfort with hotel luxury.
          </p>
          <Link 
            to="/rooms" 
            className="group bg-white text-stone-900 px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-stone-200 transition-all duration-300 animate-slide-up animation-delay-600 flex items-center gap-2"
          >
            View Apartments <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <span className="text-stone-500 uppercase tracking-widest text-sm font-bold">The Location</span>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
                    Heart of the City
                </h2>
                <p className="text-stone-600 leading-relaxed">
                    Located in the bustling neighborhood of Bole, The Row Residential Hotel places you at the center of Addis Ababa's vibrant lifestyle. 
                    We are just minutes away from Bole International Airport, the iconic Medhane Alem Cathedral, and the city's most stylish malls.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start gap-3">
                        <ShoppingBag className="w-6 h-6 text-stone-700 mt-1" />
                        <div>
                            <h4 className="font-serif text-lg text-stone-800">Shopping & Dining</h4>
                            <p className="text-sm text-stone-500">Walk to premium malls and restaurants.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-stone-700 mt-1" />
                        <div>
                            <h4 className="font-serif text-lg text-stone-800">Prime Access</h4>
                            <p className="text-sm text-stone-500">Minutes from the International Airport.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src={IMAGES.EXTERIOR} alt="Exterior" className="w-full h-64 object-cover rounded-sm shadow-lg transform translate-y-8" />
                <img src={IMAGES.LIVING_ROOM} alt="Interior" className="w-full h-64 object-cover rounded-sm shadow-lg" />
            </div>
        </div>
      </section>

      {/* Featured Gallery Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
             <h2 className="font-serif text-4xl text-stone-800 mb-4">Residential Comfort</h2>
             <div className="w-24 h-1 bg-stone-800 mx-auto"></div>
             <p className="text-stone-500 mt-4">Spacious living areas designed for short and long term stays.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1">
            <div className="group relative overflow-hidden h-80">
                <img src={IMAGES.BEDROOM_1} alt="Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
            <div className="group relative overflow-hidden h-80">
                <img src={IMAGES.KITCHEN} alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
            <div className="group relative overflow-hidden h-80">
                <img src={IMAGES.BEDROOM_2} alt="Bedroom Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
        </div>
        <div className="text-center mt-12">
            <Link to="/rooms" className="inline-block border border-stone-800 text-stone-800 px-10 py-3 uppercase tracking-widest text-sm hover:bg-stone-800 hover:text-white transition-colors">
                See All Rooms
            </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    <span className="text-2xl font-serif">4.8 / 5</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-4">Guest Reviews</h2>
                <p className="text-stone-400">What our guests say about their stay.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-stone-800 p-8 rounded-sm shadow-xl border border-stone-700">
                        <div className="flex gap-1 mb-4 text-amber-400">
                            {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-stone-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                        <h4 className="font-serif text-lg text-white">{t.name}</h4>
                        <span className="text-xs text-stone-500 uppercase tracking-wider">Verified Guest</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;