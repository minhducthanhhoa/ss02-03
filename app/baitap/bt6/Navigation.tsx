import React from 'react';
import { FaUserCircle, FaLaptopCode } from 'react-icons/fa';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaLaptopCode className="text-white text-2xl mr-2" />
          <a href="/" className="text-white font-bold text-xl">
            logoipsum
          </a>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/updates" className="text-white hover:text-gray-200">
              Updates
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="/features" className="text-white hover:text-gray-200">
              Features
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-200">
              About Us
            </a>
          </li>
          <li>
            <a href="/profile" className="text-white hover:text-gray-200">
              <FaUserCircle className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;