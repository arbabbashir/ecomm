import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';

interface ProductSectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  products: Product[];
  onWhatsAppClick: (product: Product) => void;
}

export function ProductSection({ 
  selectedCategory, 
  onCategoryChange, 
  products, 
  onWhatsAppClick 
}: ProductSectionProps) {
  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <section className="py-16 bg-gray-100" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onWhatsAppClick={onWhatsAppClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}