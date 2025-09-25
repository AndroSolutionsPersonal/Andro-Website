import React from "react";

const Footer = () => {
  return (
    <footer className="z-20 bg-primary text-secondary-text py-10 rounded-3xl font-sans mx-4 mb-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-300">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Branding</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Design</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Marketing</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Development</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-300">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Home</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Projects</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">About</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Services</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Contacts</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-300">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Telegram</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-secondary-text/30"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-secondary">
          Copyright © {new Date().getFullYear()} All Rights Reserved. Powered by{" "}
          <span className="font-semibold">Andro Solutions.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
