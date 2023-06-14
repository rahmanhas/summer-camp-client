import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  const textColor = isDarkMode ? 'text-white' : 'text-gray-500';
  const backgroundColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const iconColor = isDarkMode ? 'dark:hover:text-white' : 'dark:hover:text-gray-900';

  return (
    <footer className={`${backgroundColor} ${textColor}`}>
      <div className="mx-auto w-full">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
            <ul className={`${textColor} font-medium`}>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Help center */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
            <ul className={`${textColor} font-medium`}>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Address:
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  8, Ossom Lane, NY
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className={`${textColor} font-medium`}>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Download */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Download</h2>
            <ul className={`${textColor} font-medium`}>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 text-white bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023 <a href="https://flowbite.com/">DanceFlow Academy™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" className={`text-gray-400 ${iconColor}`}>
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className={`text-gray-400 ${iconColor}`}>
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className={`text-gray-400 ${iconColor}`}>
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className={`text-gray-400 ${iconColor}`}>
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
