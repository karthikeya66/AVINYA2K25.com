import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="text-white text-lg" />, color: 'from-blue-400 to-blue-600', url: '#' },
    { icon: <FaTwitter className="text-white text-lg" />, color: 'from-sky-400 to-sky-600', url: '#' },
    { icon: <FaInstagram className="text-white text-lg" />, color: 'from-pink-400 to-yellow-400', url: 'https://www.instagram.com/avinya__2k25?igsh=cDkzZXBieGYxaHlr' },
    { icon: <FaLinkedin className="text-white text-lg" />, color: 'from-blue-500 to-cyan-500', url: '#' },
    { icon: <FaEnvelope className="text-white text-lg" />, color: 'from-green-400 to-emerald-600', url: 'mailto:contact@avinya2k25.com' },
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-purple-900 to-indigo-900 text-gray-200 py-12 relative z-50 pointer-events-auto">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          AVINYA 2K25
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-300 text-sm md:text-base">
          Join us for the most exciting hackathon experience in India.
          <br />
          Innovation, collaboration, and breakthrough solutions await you at{' '}
          <span className="text-pink-400 font-semibold">Anurag University</span>.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6 relative z-50">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} text-white shadow-lg transform hover:scale-110 transition-transform duration-300`}
              aria-label={`${item.url.includes('mailto:') ? 'Email' : 'Social media'} link`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2025 <span className="text-purple-400 font-semibold">AVINYA 2K25</span> - Anurag University. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Built with <span className="text-red-400">❤</span> and <span className="text-blue-400">⚡</span> for the future of AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
