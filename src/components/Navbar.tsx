import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'what-we-do', label: 'What we do' },
    { id: 'founders', label: 'Founders' },
    { id: 'contact', label: 'Contact' },
    { id: 'about', label: 'About Us' },
    { id: 'division', label: 'Division' },
    { id: 'blog', label: 'Blog' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-red-950 px-4 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo or brand name can go here */}
        <div className="text-white text-2xl font-semibold">
          <img className='w-20 h-20 rounded-full' src="../../logo.webp" alt="" />
        </div>

        {/* Hamburger menu for mobile */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`relative px-1 py-2 text-gray-100 text-2xl font-semibold transition-all duration-300 hover:text-white
                  ${activeItem === item.id ? 'text-white' : 'hover:opacity-80'}
                `}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left transition-transform duration-300 ease-out
                    ${activeItem === item.id ? 'scale-x-100' : 'scale-x-0'}
                  `}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 mt-4">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setActiveItem(item.id);
                  setIsMenuOpen(false); // Close the menu after selecting an item
                }}
                className={`relative px-1 py-2 text-gray-100 text-2xl font-semibold transition-all duration-300 hover:text-white
                  ${activeItem === item.id ? 'text-white' : 'hover:opacity-80'}
                `}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left transition-transform duration-300 ease-out
                    ${activeItem === item.id ? 'scale-x-100' : 'scale-x-0'}
                  `}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;