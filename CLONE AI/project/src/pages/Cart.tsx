import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { state, dispatch } = useCart();

  const handleCheckout = () => {
    // In a real app, this would integrate with a payment processor
    alert('Checkout functionality would be implemented here!');
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <LayoutWrapper title="Shopping Cart">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper title="Shopping Cart">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Cart Items ({state.totalItems})
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClearCart}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Clear Cart
            </motion.button>
          </div>

          <AnimatePresence>
            {state.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-6 sticky top-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${state.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {state.totalPrice > 50 ? 'Free' : '$9.99'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${(state.totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>
                  ${(
                    state.totalPrice + 
                    (state.totalPrice > 50 ? 0 : 9.99) + 
                    (state.totalPrice * 0.08)
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            {state.totalPrice < 50 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
              >
                <p className="text-sm text-blue-700">
                  Add ${(50 - state.totalPrice).toFixed(2)} more for free shipping!
                </p>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center group"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="mt-4 text-center">
              <button
                onClick={() => window.history.back()}
                className="text-gray-600 hover:text-black transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </LayoutWrapper>
  );
}