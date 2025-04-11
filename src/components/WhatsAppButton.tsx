import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/554892102930"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton; 