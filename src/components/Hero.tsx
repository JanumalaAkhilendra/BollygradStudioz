import React from 'react';
import Navbar from '../components/Navbar';

export default function Hero() {
  return (
    <>
      <Navbar />
      <div id="home" className="relative h-screen flex flex-col lg:flex-row justify-evenly items-center bg-[#1b1f23]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="../../background-image.webp"
            alt="Photography Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Text Content */}
        <div className="relative h-full flex flex-1 items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bollygrad Studioz
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Film & Television Institute
            </p>
            <a
              href="#contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Get Connected
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="relative h-full flex flex-1 items-center justify-center text-center">
          <img
            src="../../logo.webp"
            alt="Logo"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[20vw] lg:h-[20vw] max-w-[300px] max-h-[300px] rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
}