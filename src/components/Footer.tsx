import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT', href: '#' },
    { label: 'BLOGS', href: '#' },
    { label: 'FOUNDERS', href: '#' },
    { label: 'CONTACT', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4">
            <img
              src="../../logo.webp"
              alt="Bollygrad Studioz"
              className="w-24 h-24 object-contain rounded-full"
            />
          </div>
          <h2 className=" text-2xl md:text-3xl font-serif mb-2">Bollygrad Studioz</h2>
          <p className="text-sm md:text-base text-gray-400">GET THE BEST STREAMING EXPERIENCE</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className=" text-xl md:text-3xl text-center font-serif mb-6">Navigation</h3>
          <ul className="space-y-3 text-center">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="text-gray-400 text-center hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className=" text-xl md:text-3xl font-serif mb-6 text-center">Contact Us</h3>
          <div className="space-y-3 text-gray-400 text-center">
            <p>41-A, Fourth Floor,<br />Kalu Sarai, Hauz Khas,<br />New Delhi-16</p>
            <p>011 4140 7008</p>
            <p>bollygard.fti@gmail.com</p>
            <p>Monday-Saturday: 10:00-18:00</p>
          </div>

          {/* Social Links */}
          
        </div>
        <div className=" items-center md:items-start">
            <h3 className=" text-xl md:text-3xl font-serif mb-6 text-center">Get Connected</h3>
            <div className="flex justify-center align-middle space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
      </div>

      {/* Discord Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-colors duration-200">
          {/* <Discord size={24} /> */}
        </button>
      </div>
    </footer>
  );
};

export default Footer;