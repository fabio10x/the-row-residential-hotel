import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  const positions = [
    { title: "Front Desk Manager", type: "Full-Time", location: "Addis Ababa, Bole", department: "Guest Services" },
    { title: "Housekeeping Supervisor", type: "Full-Time", location: "Addis Ababa, Bole", department: "Operations" },
    { title: "Sous Chef", type: "Full-Time", location: "Addis Ababa, Bole", department: "Kitchen" },
    { title: "Maintenance Technician", type: "Part-Time", location: "Addis Ababa, Bole", department: "Engineering" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-20 px-4 text-center">
        <h1 className="font-serif text-5xl mb-4">Join Our Team</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Be a part of The Row family. We are always looking for passionate individuals dedicated to excellence in hospitality.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="font-serif text-3xl text-stone-800 mb-10 border-b border-stone-200 pb-4">Current Openings</h2>
        
        <div className="space-y-6">
          {positions.map((job, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-serif text-xl text-stone-800 font-semibold">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-stone-500 mt-2">
                  <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.department}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button className="bg-stone-100 text-stone-900 px-6 py-2 uppercase tracking-wider text-xs font-semibold hover:bg-stone-900 hover:text-white transition-colors flex items-center gap-2">
                Details <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-stone-200 p-10 rounded-sm text-center">
          <h3 className="font-serif text-2xl text-stone-800 mb-4">Don't see your role?</h3>
          <p className="text-stone-600 mb-6">
            We are growing fast and always interested in meeting talent. Send your CV to our HR department.
          </p>
          <a href="mailto:careers@therowaddis.com" className="inline-block bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors">
            Email HR
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;