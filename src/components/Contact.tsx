import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className=" py-5 md:py-20 bg-[#1b1f23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 md:mb-16">
          <h2 className="text-xl md:text-xl font-bold text-gray-200 mb-4">BOLLYGRAD STUDIOZ</h2>
          <p className="text-lg md:text-3xl text-gray-600">Subscribe now for fresh content.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <form className=" flex flex-wrap justify-evenly">
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-[70vw] md:w-[50vw] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent my-0"
              />
            </div>
            <button
              type="submit"
              className="w-[30vw] md:w-[10vw] bg-red-600 text-white px-2 md:px-6 py-2 md:py-3 mt-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 mt-0"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}