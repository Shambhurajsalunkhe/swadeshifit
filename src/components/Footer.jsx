import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-white">
                Swadeshi<span className="text-primary-600">Fit</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering India's Fitness Movement. Join thousands of Indians on their journey to better health and fitness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/workouts" className="hover:text-primary-600 transition-colors">Workouts</Link></li>
              <li><Link to="/challenges" className="hover:text-primary-600 transition-colors">Challenges</Link></li>
              <li><Link to="/activity" className="hover:text-primary-600 transition-colors">Track Activity</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary-600 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 SwadeshiFit. Made with ❤️ for Atmanirbhar Bharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
