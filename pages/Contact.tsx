import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { IMAGES } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-stone-800 mb-4">Contact Us</h1>
            <p className="text-stone-500">We are here to assist you 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-sm overflow-hidden">
            <div className="relative min-h-[400px]">
                 <img src={IMAGES.HERO_MAIN} alt="Resort Location" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-stone-900/80 p-12 text-white flex flex-col justify-center space-y-8">
                    <div>
                        <h3 className="font-serif text-2xl mb-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> Address</h3>
                        <p className="text-white/80 pl-7">Bole Sub City<br/>Addis Ababa<br/>Ethiopia</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl mb-2 flex items-center gap-2"><Phone className="w-5 h-5" /> Phone</h3>
                        <p className="text-white/80 pl-7">+251 95 600 0055</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl mb-2 flex items-center gap-2"><Mail className="w-5 h-5" /> Email</h3>
                        <p className="text-white/80 pl-7">info@therowaddis.com</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl mb-2 flex items-center gap-2"><Clock className="w-5 h-5" /> Check-In</h3>
                        <p className="text-white/80 pl-7">Check-in: 2:00 PM<br/>Check-out: 11:00 AM</p>
                    </div>
                 </div>
            </div>

            <div className="p-12">
                <h3 className="font-serif text-3xl text-stone-800 mb-6">Send us a message</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm text-stone-600 mb-1">Name</label>
                        <input type="text" className="w-full border border-stone-300 p-3 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm text-stone-600 mb-1">Email</label>
                        <input type="email" className="w-full border border-stone-300 p-3 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm text-stone-600 mb-1">Message</label>
                        <textarea rows={4} className="w-full border border-stone-300 p-3 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none"></textarea>
                    </div>
                    <button className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors">
                        SendMessage
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;