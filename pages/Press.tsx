import React from 'react';
import { Download, Newspaper } from 'lucide-react';
import { IMAGES } from '../constants';

const Press: React.FC = () => {
  const news = [
    { date: "October 15, 2024", title: "The Row Residential Hotel Wins 'Best New City Hotel'", source: "East Africa Hospitality Awards" },
    { date: "August 2, 2024", title: "Redefining Luxury: Inside Addis Ababa's Newest Residential Concept", source: "Travel & Leisure Africa" },
    { date: "June 10, 2024", title: "The Row Announces Expansion of Penthouse Suites", source: "Press Release" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="w-full md:w-2/3">
            <h1 className="font-serif text-5xl text-stone-800 mb-8">Press Center</h1>
            <p className="text-stone-600 text-lg mb-12">
              Latest news, updates, and media resources for The Row Residential Hotel.
            </p>

            <h2 className="font-serif text-2xl text-stone-800 mb-6 flex items-center gap-3">
              <Newspaper className="w-5 h-5" /> Recent News
            </h2>
            <div className="space-y-8 mb-16">
              {news.map((item, index) => (
                <div key={index} className="border-b border-stone-100 pb-8 last:border-0">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-2">{item.date}</span>
                  <h3 className="text-xl font-serif text-stone-900 mb-2 hover:text-stone-600 cursor-pointer transition-colors">{item.title}</h3>
                  <span className="text-sm text-stone-500 italic">{item.source}</span>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-stone-800 mb-6">Media Kit</h2>
            <div className="bg-stone-50 p-8 rounded-sm border border-stone-100">
              <p className="text-stone-600 mb-6">
                Download our official media kit including high-resolution images, brand assets, and fact sheets.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-white border border-stone-300 px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 transition-colors">
                  <Download className="w-4 h-4" /> Brand Assets
                </button>
                <button className="flex items-center gap-2 bg-white border border-stone-300 px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 transition-colors">
                  <Download className="w-4 h-4" /> Property Fact Sheet
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="sticky top-32">
              <img src={IMAGES.EXTERIOR} alt="The Row Exterior" className="w-full h-64 object-cover rounded-sm mb-8" />
              <div className="bg-stone-900 text-white p-8 rounded-sm">
                <h3 className="font-serif text-2xl mb-4">Media Contact</h3>
                <p className="text-stone-400 text-sm mb-6">
                  For press inquiries, interview requests, or photo shoots, please contact our PR team.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-stone-500 block text-xs uppercase tracking-wider">Email</span> press@therowaddis.com</p>
                  <p><span className="text-stone-500 block text-xs uppercase tracking-wider">Phone</span> +251 95 600 0055</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Press;