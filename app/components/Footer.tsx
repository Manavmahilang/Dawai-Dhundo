'use client'
import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <Link href="/" className="text-gray-700 font-bold text-lg mb-2 md:mb-0 mr-4">
            Home
          </Link>
          <p className="text-gray-600">
            © 2023 Dawai Dhundo , All Rights Reserved
          </p>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Link href="/about" className="text-gray-600 font-bold text-sm mr-4 hover:text-blue-500">
              About Us
          </Link>
          <Link href="/contact"  className="text-gray-600 font-bold text-sm mr-4 hover:text-blue-500">
              Contact Us
          </Link>
          <Link href="/privacy" className="text-gray-600 font-bold text-sm hover:text-blue-500">
              Privacy Policy
          </Link>
          <div className="ml-4 flex">
            <FacebookIcon
              className="text-gray-600 hover:text-blue-500"
              size={24}
            />
            <TwitterIcon
              className="text-gray-600 hover:text-blue-500 ml-4"
              size={24}
            />
            <InstagramIcon
              className="text-gray-600 hover:text-blue-500 ml-4"
              size={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
