import React from 'react';
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify-icons/ph/instagram-logo';

const Footer = () => {
  return (
    <footer className="bg-white text-white py-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Section */}

          {/* Products Section */}

          <div className="text-black">
            <h4 className="font-bold text-lg">Kelas</h4>
            <ul className="mt-4">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Affiliate</a></li>
            </ul>
          </div>


          <div className="text-black">
            <h4 className="font-bold text-lg">Products</h4>
            <ul className="mt-4">
              <li><a href="Risol" className="hover:underline">Risol</a></li>
              <li><a href="Bricks" className="hover:underline">Bricks</a></li>
              <li><a href="Drinks" className="hover:underline">Drinks</a></li>
              <li><a href="Foods" className="hover:underline">Foods</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-black">
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="mt-4">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="text-black">
            <h4 className="font-bold text-lg">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
        <a target='_blank' href="https://www.instagram.com/gog.zie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:opacity-75 scale-150">
          <Icon icon={instagramIcon} width="32" height="32" />
        </a>

            </div>
          </div>
        </div>

        
        </div>

    </footer>
  );
};

export default Footer;
