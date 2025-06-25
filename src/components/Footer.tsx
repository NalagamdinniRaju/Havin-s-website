
// import { Twitter, Instagram, TwitterIcon } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#713e26] text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-bold text-[#31aaa6] mb-4">Havin's</h3>
//             <p className="text-white/80 leading-relaxed">
//               Crafting the world's most delicious ice cream with organic ingredients and sustainable practices.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#home" className="text-white/80 hover:text-[#31aaa6] transition-colors">Home</a></li>
//               <li><a href="#about" className="text-white/80 hover:text-[#31aaa6] transition-colors">About us</a></li>
//               <li><a href="#products" className="text-white/80 hover:text-[#31aaa6] transition-colors">Products</a></li>
//               <li><a href="#contact" className="text-white/80 hover:text-[#31aaa6] transition-colors">Contact us</a></li>
//               <li><a href="#franchise" className="text-white/80 hover:text-[#31aaa6] transition-colors">Franchise</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#31aaa6] transition-colors">
//                 <TwitterIcon className="w-5 h-5" />
//               </a>
//               <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#31aaa6] transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/20 mt-8 pt-8 text-center">
//           <p className="text-white/60">© 2024 Sravan Kalishetty. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  const locations = [
    {
      city: 'Tirupathi (HQ)',
      address: 'TTD Complex, Prakasham Road, Beside Bhima Jewellers, Tirupathi',
      phone: '+91 9182296602, +91 9441322586'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', link: '#' },
    { name: 'Instagram', icon: '📷', link: '#' },
    { name: 'TikTok', icon: '🎵', link: '#' },
    { name: 'LinkedIn', icon: '💼', link: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-havins-primary rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-havins-primary to-havins-light flex items-center justify-center">
                <span className="text-white font-bold text-2xl">H</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-gradient bg-gradient-to-r from-havins-primary to-havins-light bg-clip-text text-transparent">
                  Havin's
                </span>
                <p className="text-sm text-gray-400">Zero Dairy • Zero Sugar Added • Ice Creams</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              From Tirupathi, bringing premium quality ice cream that's healthy, delicious, and made with love for our community.
            </p>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-havins-primary transition-all duration-300 hover:scale-110 group"
                  >
                    <span className="text-lg group-hover:animate-wiggle">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-8 text-white">Visit Our Store</h3>
            <div className="grid gap-8">
              {locations.map((location, index) => (
                <div
                  key={location.city}
                  className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-havins-primary/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-bold text-lg mb-3 text-havins-primary">{location.city}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {location.address}
                  </p>
                  <p className="text-havins-light font-medium">
                    Phone: {location.phone}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-4 flex space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-gradient-to-r from-havins-primary to-havins-light rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Franchising Opportunities</h4>
              <p className="text-gray-400">Join our growing family of ice cream entrepreneurs</p>
              <button className="px-6 py-2 bg-gradient-to-r from-havins-primary to-havins-light text-white rounded-full hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Distributor Network</h4>
              <p className="text-gray-400">Become part of our distribution network</p>
              <button className="px-6 py-2 bg-gradient-to-r from-havins-light to-havins-primary text-white rounded-full hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Contact Us</h4>
              <p className="text-gray-400">Have questions? We'd love to hear from you</p>
              <a
                href="mailto:info@havins.com"
                className="inline-block px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-havins-primary hover:scale-105 transition-all duration-300"
              >
                info@havins.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Copyright Havin's Distribution. All Rights Reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-havins-primary transition-colors duration-200">
                Allergens
              </a>
              <a href="#" className="text-gray-400 hover:text-havins-primary transition-colors duration-200">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-havins-primary transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="absolute bottom-8 right-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gradient-to-r from-havins-primary to-havins-light rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;