import React, { useState } from 'react';
import { Product } from './types';
import { products } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { ProductSection } from './components/ProductSection';
import { Footer } from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleWhatsAppClick = (product: Product) => {
    const message = `Hi! I'm interested in ${product.name} priced at $${product.price}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/+923202678332?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <ProductSection
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        products={products}
        onWhatsAppClick={handleWhatsAppClick}
      />
      <Footer />
    </div>
  );
}

export default App;