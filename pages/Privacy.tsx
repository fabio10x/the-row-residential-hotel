import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-12">Privacy Policy</h1>
        
        <div className="bg-white p-10 md:p-16 rounded-sm shadow-sm space-y-8 text-stone-600 leading-relaxed">
          <p className="text-sm text-stone-400">Last Updated: November 2024</p>

          <section>
            <h2 className="font-serif text-2xl text-stone-800 mb-4">1. Introduction</h2>
            <p>
              The Row Residential Hotel ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-800 mb-4">2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-800 mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a room).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-800 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-800 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at info@therowaddis.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;