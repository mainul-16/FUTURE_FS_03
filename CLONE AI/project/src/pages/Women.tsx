import React from 'react';
import { motion } from 'framer-motion';
import LayoutWrapper from '../components/LayoutWrapper';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

interface WomenProps {
  searchQuery: string;
}

export default function Women({ searchQuery }: WomenProps) {
  // Filter women's products based on search query
  const womenProducts = products
    .filter(product => product.category === 'women')
    .filter(product => 
      searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <LayoutWrapper title="Women's Collection">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <p className="text-gray-600 text-lg">
          Explore our women's collection featuring innovative designs and superior comfort.
          {searchQuery && (
            <span className="block mt-2 text-black font-medium">
              Search results for "{searchQuery}" ({womenProducts.length} products found)
            </span>
          )}
        </p>
      </motion.div>

      {womenProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            No products found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search terms or browse all products.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {womenProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </LayoutWrapper>
  );
}