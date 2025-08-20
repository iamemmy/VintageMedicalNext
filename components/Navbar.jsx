import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg py-4 lg:py-6 px-6 md:px-12 rounded-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section - Left Side */}
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src="/vmc-1.png"
              alt="vmc logo"
              width={200}
              height={200}
              className="w-10 lg:w-14 h-auto object-contain -ml-3 lg:ml-0"
            />
            <span className="text-lg md:text-2xl font-semibold text-gray-800">
              Vintage Medical Centre
            </span>
          </Link>

          {/* Main Navigation Items - Middle (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-brandcl01 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-brandcl01 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-brandcl01 transition-colors duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-brandcl01 transition-colors duration-300 font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-brandcl01 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* "Book Appointment" Button - Right Side (Hidden on mobile) */}
          <div className="hidden md:block">
            <Link href={'/appointment'} className="block text-center w-[fit-content] bg-brandcl01 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 shadow-md">
              Book Appointment
            </Link>
          </div>

          {/* Hamburger Icon for Mobile Menu - Right Side */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 p-6 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Menu</h2>
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
          >
            Contact
          </Link>
          <div className="pt-4">
            <Link
              href={'/appointment'}
              className="w-full block text-center bg-brandcl01 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
