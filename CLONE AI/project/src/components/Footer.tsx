import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: ['Shoes', 'Clothing', 'Accessories', 'New Releases', 'Sale']
    },
    {
      title: 'Sports',
      links: ['Running', 'Basketball', 'Football', 'Training', 'Skateboarding']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Size Guide', 'Returns', 'Shipping Info', 'Contact Us']
    },
    {
      title: 'Company',
      links: ['About Stride', 'Careers', 'Investors', 'Sustainability', 'News']
    }
  ];

  const socialLinks = [
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © 2025 Stride, Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 text-xs text-gray-400">
                <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300">Terms of Use</a>
                <a href="#" className="hover:text-gray-300">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}