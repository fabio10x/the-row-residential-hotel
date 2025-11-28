import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { ROOMS } from '../constants';
import { BookingDetails } from '../types';

const Booking: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preSelectedRoomId = queryParams.get('room');

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingDetails>({
    roomId: preSelectedRoomId || ROOMS[0].id,
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const selectedRoom = ROOMS.find(r => r.id === formData.roomId) || ROOMS[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (success) {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-stone-50 px-4 flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl max-w-lg text-center border-t-4 border-stone-800">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>
                <h2 className="font-serif text-3xl text-stone-800 mb-4">Reservation Confirmed</h2>
                <p className="text-stone-600 mb-8">
                    Thank you, {formData.name}. Your booking for the <span className="font-semibold text-stone-900">{selectedRoom.name}</span> at The Row has been received. 
                    We have sent a confirmation email to {formData.email}.
                </p>
                <button onClick={() => window.location.href = '#/'} className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-stone-800">
                    Return Home
                </button>
            </div>
        </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl text-center text-stone-800 mb-12">Secure Your Stay</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Form Section */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-sm shadow-lg">
            <div className="flex mb-8 border-b border-stone-100 pb-4">
                <div className={`flex-1 text-center pb-2 ${step === 1 ? 'border-b-2 border-stone-800 font-semibold text-stone-900' : 'text-stone-400'}`}>
                    1. Stay Details
                </div>
                <div className={`flex-1 text-center pb-2 ${step === 2 ? 'border-b-2 border-stone-800 font-semibold text-stone-900' : 'text-stone-400'}`}>
                    2. Guest Information
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Select Apartment</label>
                            <select 
                                name="roomId" 
                                value={formData.roomId} 
                                onChange={handleInputChange}
                                className="w-full p-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 focus:border-stone-800 outline-none"
                            >
                                {ROOMS.map(room => (
                                    <option key={room.id} value={room.id}>{room.name} - ETB {room.price.toLocaleString()}/night</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Check-in Date</label>
                                <div className="relative">
                                    <input 
                                        type="date" 
                                        name="checkIn"
                                        required
                                        value={formData.checkIn}
                                        onChange={handleInputChange}
                                        className="w-full p-3 pl-10 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none"
                                    />
                                    <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" />
                                </div>
                                <p className="text-xs text-stone-500 mt-1">Check-in time: 2:00 PM</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Check-out Date</label>
                                <div className="relative">
                                    <input 
                                        type="date" 
                                        name="checkOut"
                                        required
                                        value={formData.checkOut}
                                        onChange={handleInputChange}
                                        className="w-full p-3 pl-10 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none"
                                    />
                                    <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" />
                                </div>
                            </div>
                        </div>

                        <div>
                             <label className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
                             <div className="relative">
                                <input 
                                    type="number" 
                                    name="guests"
                                    min="1"
                                    max={selectedRoom.capacity}
                                    value={formData.guests}
                                    onChange={handleInputChange}
                                    className="w-full p-3 pl-10 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none"
                                />
                                <Users className="absolute left-3 top-3.5 w-4 h-4 text-stone-400" />
                             </div>
                             <p className="text-xs text-stone-500 mt-1">Max capacity for this room: {selectedRoom.capacity} guests</p>
                        </div>

                        <div className="pt-6 flex justify-end">
                            <button 
                                type="button" 
                                onClick={() => setStep(2)}
                                className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    placeholder="Abebe Kebede"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none"
                                />
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    required
                                    placeholder="+251 91 123 4567"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                name="email"
                                required
                                placeholder="abebe@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-stone-700 mb-2">Special Requests (Optional)</label>
                            <textarea 
                                name="specialRequests"
                                rows={4}
                                placeholder="Dietary restrictions, early check-in request, etc."
                                value={formData.specialRequests}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-stone-300 rounded-sm focus:ring-1 focus:ring-stone-800 outline-none resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-6 flex justify-between items-center">
                            <button 
                                type="button" 
                                onClick={() => setStep(1)}
                                className="text-stone-600 hover:text-stone-900 underline text-sm"
                            >
                                Back to details
                            </button>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors disabled:bg-stone-400 flex items-center gap-2"
                            >
                                {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                            </button>
                        </div>
                    </div>
                )}
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-sm shadow-lg sticky top-28 border-t-4 border-stone-800">
                <h3 className="font-serif text-xl text-stone-800 mb-4">Your Selection</h3>
                <div className="aspect-video overflow-hidden mb-4 rounded-sm">
                    <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-stone-800">{selectedRoom.name}</h4>
                <div className="mt-4 space-y-3 text-sm text-stone-600 border-t border-stone-100 pt-4">
                    <div className="flex justify-between">
                        <span>Rate per night</span>
                        <span className="font-semibold">ETB {selectedRoom.price.toLocaleString()}</span>
                    </div>
                    {formData.checkIn && formData.checkOut && (
                        <div className="bg-stone-50 p-3 rounded-sm space-y-1">
                            <div className="flex justify-between text-xs">
                                <span>Check-in:</span>
                                <span>{formData.checkIn} (2:00 PM)</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span>Check-out:</span>
                                <span>{formData.checkOut}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-6 text-xs text-stone-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Free cancellation until 24h before check-in</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;