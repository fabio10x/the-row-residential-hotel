import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.LIVING_ROOM})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 animate-slide-up">Our Story</h1>
          <p className="text-white/90 max-w-2xl text-lg animate-slide-up animation-delay-200 font-light">
            Redefining hospitality in the heart of Addis Ababa.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-stone prose-lg mx-auto">
          <h2 className="font-serif text-4xl text-stone-800 mb-8 text-center">A Legacy of Comfort</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Established with a vision to bridge the gap between the luxury of a 4-star hotel and the warmth of a private residence, The Row Residential Hotel stands as a beacon of modern hospitality in Bole. We recognized that today's travelers—whether in Addis Ababa for business, diplomacy, or leisure—seek more than just a room; they seek a sanctuary.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Our architecture reflects the vibrant spirit of the city, while our interiors are designed to provide a calm respite from the bustling streets. Every apartment, from our standard studios to our penthouse suites, has been meticulously crafted to offer space, light, and functionality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img src={IMAGES.DETAIL_4} alt="Detail" className="rounded-sm shadow-md w-full h-64 object-cover" />
            <img src={IMAGES.DETAIL_5} alt="Detail" className="rounded-sm shadow-md w-full h-64 object-cover" />
          </div>

          <h3 className="font-serif text-3xl text-stone-800 mb-4">Our Philosophy</h3>
          <p className="text-stone-600 leading-relaxed">
            We believe in "Residential Hospitality." This means we don't just check you in; we welcome you home. Our staff are trained to anticipate your needs, providing personalized service that respects your privacy while ensuring you have everything you need for a seamless stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;