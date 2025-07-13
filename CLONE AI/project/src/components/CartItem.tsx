import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../context/CartContext';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  const handleUpdateQuantity = (quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white rounded-lg shadow-md p-6 mb-4"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {item.description}
          </p>
          <p className="text-lg font-bold text-black mt-2">
            ${item.price}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Quantity Controls */}
          <div className="flex items-center bg-gray-100 rounded-lg">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
            >
              <Minus className="h-4 w-4" />
            </motion.button>
            
            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
              {item.quantity}
            </span>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
            >
              <Plus className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleRemove}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-black">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}