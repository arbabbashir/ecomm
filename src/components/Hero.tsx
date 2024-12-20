import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px] bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
        alt="Fashion Banner"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-6">New Season Arrivals</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover the latest trends in fashion and explore our new collection
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
            Shop Now
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}