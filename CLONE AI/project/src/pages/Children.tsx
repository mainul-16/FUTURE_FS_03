import React from 'react';
import { motion } from 'framer-motion';
import LayoutWrapper from '../components/LayoutWrapper';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

interface ChildrenProps {
  searchQuery: string;
}

export default function Children({ searchQuery }: ChildrenProps) {
  // Filter children's products based on search query
  const childrenProducts = products
    .filter(product => product.category === 'children')
    .filter(product => 
      searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <LayoutWrapper title="Children's Collection">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <p className="text-gray-600 text-lg">
          Fun and functional footwear designed specifically for active kids.
          {searchQuery && (
            <span className="block mt-2 text-black font-medium">
              Search results for "{searchQuery}" ({childrenProducts.length} products found)
            </span>
          )}
        </p>
      </motion.div>

      {childrenProducts.length === 0 ? (
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
          {childrenProducts.map((product, index) => (
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