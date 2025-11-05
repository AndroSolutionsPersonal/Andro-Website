import React from "react";

const Footer = () => {
  return (
    <footer className="px-2 pb-2 md:px-5 md:pb-4 max-w-screen bg-foreground mt-10 md:mt-2">
      <footer className="z-20 bg-primary text-secondary-text py-10 rounded-3xl font-sans ">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-300">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services#UIUX" className="hover:text-gray-100 text-sm text-secondary">UI/UX</a></li>
                <li><a href="/services#Fullstack" className="hover:text-gray-100 text-sm text-secondary">Fullstack Development</a></li>
                <li><a href="/services#SMM" className="hover:text-gray-100 text-sm text-secondary">Social Media Management</a></li>
                <li><a href="/services#Consultancy" className="hover:text-gray-100 text-sm text-secondary">Consultancy</a></li>
                <li><a href="/services#GD" className="hover:text-gray-100 text-sm text-secondary">Graphic Design</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-300">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-100 text-sm text-secondary">Home</a></li>
                <li><a href="/about" className="hover:text-gray-100 text-sm text-secondary">About</a></li>
                <li><a href="/services" className="hover:text-gray-100 text-sm text-secondary">Services</a></li>
                <li><a href="/projects" className="hover:text-gray-100 text-sm text-secondary">Projects</a></li>
                <li><a href="/news" className="hover:text-gray-100 text-sm text-secondary">News</a></li>
                <li><a href="/contact" className="hover:text-gray-100 text-sm text-secondary">Contacts</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-300">Socials</h3>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com/andro.solutions/?utm_source=ig_web_button_share_sheet" className="hover:text-gray-100 text-sm text-secondary">Instagram</a></li>
                <li><a href="https://t.me/andro_solutions" className="hover:text-gray-100 text-sm text-secondary">Telegram</a></li>
                <li><a href="https://www.linkedin.com/company/andro-solutions/" className="hover:text-gray-100 text-sm text-secondary">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/share/17FYccYdb6/" className="hover:text-gray-100 text-sm text-secondary">Facebook</a></li>
                <li><a href="https://x.com/Andro_Solutions" className="hover:text-gray-100 text-sm text-secondary">X</a></li>
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
    </footer>
  );
};

export default Footer;
