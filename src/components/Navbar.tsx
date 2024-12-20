import React from 'react';
import { Store, Search, User, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Store className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">Fashion Store</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#men" className="text-gray-600 hover:text-gray-800">Men</a>
            <a href="#women" className="text-gray-600 hover:text-gray-800">Women</a>
            <a href="#accessories" className="text-gray-600 hover:text-gray-800">Accessories</a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}