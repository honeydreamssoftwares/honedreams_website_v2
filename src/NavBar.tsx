import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
//import logo from '/path/to/images/logo.svg'; // Adjust the path as necessary

export const NavigationBar = () => {
  return (
    <nav className="fixed z-50 w-full bg-white border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="container py-3 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link to="/" className="flex mr-4">
              <img src='' className="h-8 mr-3" alt="Honeydreams Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Honeydreams</span>
            </Link>
            <div className="hidden sm:flex sm:ml-6">
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link to="/team" className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Team</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
