import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl text-white mb-4">THE ROW</h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Your home away from home in the heart of Addis Ababa. Experience the comfort of residential living with the luxury of 4-star service.
            </p>
          </div>
          
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-stone-400" />
                <span>Bole Sub City,<br />Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-stone-400" />
                <span>+251 95 600 0055</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stone-400" />
                <span>info@therowaddis.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-stone-100 transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-stone-100 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-stone-100 transition-colors">Press Center</Link></li>
              <li><Link to="/privacy" className="hover:text-stone-100 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
            <div className="mt-6">
                <p className="text-xs text-stone-500">Subscribe for exclusive offers.</p>
                <div className="mt-2 flex">
                    <input type="email" placeholder="Your email" className="bg-stone-800 text-white px-3 py-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-stone-600" />
                    <button className="bg-stone-700 text-white px-3 py-2 text-xs uppercase hover:bg-stone-600 transition-colors">Join</button>
                </div>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} The Row Residential Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;