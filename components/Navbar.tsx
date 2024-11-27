"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggles the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            <span className="cursor-pointer">BlogReport</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-black transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-black transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-gray-800 text-2xl"
        >
          {isMenuOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-lg rounded-md w-3/4 p-6 md:hidden transition-transform duration-300 ease-in-out">
            <ul className="flex flex-col gap-6 font-medium text-gray-700">
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
