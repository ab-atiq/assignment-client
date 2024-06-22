import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-xl mb-4">Contact Us</h2>
            <div className="flex items-center mb-2">
              <i className="fab fa-whatsapp mr-2"></i>
              <span>WhatsApp Us</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-phone-alt mr-2"></i>
              <span>+8801325065151</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope mr-2"></i>
              <span>paradisescientific@gmail.com</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>
                31, Mamun plaza Hatkhola Road, Shahid Nazrul Islam Sharak,
                Dhaka-1230
              </span>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaFacebookMessenger size={24} />
              <FaSquareInstagram size={24} />
              <FaYoutube size={24} />
              <FaLinkedin size={24} />
              <FaSquareXTwitter size={24} />
              <FaPinterestSquare size={24} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Information</h2>
            <ul>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Career</a>
              </li>
              <li className="mb-2">
                <a href="#">Gallery</a>
              </li>
              <li className="mb-2">
                <a href="#">News and Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Policies</h2>
            <ul>
              <li className="mb-2">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Refund and Return Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
