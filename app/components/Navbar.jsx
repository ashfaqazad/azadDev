'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white relative z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        {/* <Link href="/" className="text-xl font-bold">MySite</Link> */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/Images/logo3.svg"
            alt="Logo"
            className="h-20 w-auto align-middle"
          />
        </Link>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-2xl">☰</button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>

          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="cursor-pointer">Services ▾</button>
            {servicesOpen && (
              <ul className="absolute bg-blue-700 top-6 left-0 rounded shadow-lg">
                <li className="p-2 hover:bg-blue-800"><Link href="/services/web">Web Design</Link></li>
                <li className="p-2 hover:bg-blue-800"><Link href="/services/develop">Web Development</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/contact">Contact</Link></li>

          {/* <li
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="cursor-pointer">About Us ▾</button>
            {aboutOpen && (
              <ul className="absolute bg-blue-700 top-6 left-0 rounded shadow-lg">
                <li className="p-2 hover:bg-blue-800"><Link href="/about/org">Our Organization</Link></li>
                <li className="p-2 hover:bg-blue-800"><Link href="/about/work">Our Work</Link></li>
              </ul>
            )}
          </li> */}
        </ul>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer Panel */}
          <div className="w-64 bg-blue-700 text-white h-full p-4 space-y-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">&times;</button>
            </div>

            <ul className="space-y-3">
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>


              <li>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left">Services ▾</button>
                {servicesOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/services/web" onClick={() => setMenuOpen(false)}>Web Design</Link></li>
                    <li><Link href="/services/develop" onClick={() => setMenuOpen(false)}>Web Development</Link></li>
                  </ul>
                )}
              </li>


              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

              {/* <li>
                <button onClick={() => setAboutOpen(!aboutOpen)} className="w-full text-left">About Us ▾</button>
                {aboutOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/about/org" onClick={() => setMenuOpen(false)}>Our Organization</Link></li>
                    <li><Link href="/about/work" onClick={() => setMenuOpen(false)}>Our Work</Link></li>
                  </ul>
                )}
              </li> */}
            </ul>
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}
