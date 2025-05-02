import React from 'react';
import { Film } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Film className="w-8 h-8 text-primary-500 group-hover:text-primary-400 transition-colors" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              NFTinema
            </span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-primary-500 hover:text-primary-600 transition-colors font-medium"
            >
              Movies
            </Link>
            <Link 
              to="/about" 
              className="text-primary-500 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};