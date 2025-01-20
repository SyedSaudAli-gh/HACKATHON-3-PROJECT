"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full h-[100px] flex items-center justify-between  px-5 md:px-20 sticky top-0 z-10 ">
      <button
        className="block md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
      </button>

      <div className="hidden md:block ">
        <ul className="flex gap-5 md:gap-10 lg:gap-20 ">
          <li>
            <Link
              href="/"
              className="font-medium text-sm md:text-base hover:bg-slate-100  px-5 py-2 transition-all duration-500 rounded-full hover:transition-transform scale-110 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="font-medium text-sm md:text-base hover:bg-slate-100  px-5 py-2 transition-all duration-500 rounded-full hover:transition-transform scale-110 "
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-medium text-sm md:text-base hover:bg-slate-100  px-5 py-2 transition-all duration-500 rounded-full hover:transition-transform scale-110 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium text-sm md:text-base hover:bg-slate-100  px-5 py-2 transition-all duration-500 rounded-full hover:transition-transform scale-110 "
            >
              Contact
            </Link>
            <Link
              href="/seller"
              className="font-medium text-sm md:text-base hover:bg-slate-100  px-5 py-2 transition-all duration-500 rounded-full hover:transition-transform scale-110 "
            >
              Seller
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-3 sm:gap-5 items-center">
        <Link href={"/myAccount"}>
          <div className="w-6 h-6">
            <Image src="/1.png" alt="social-icon" width={28} height={28} />
          </div>
        </Link>
        <div className="w-6 h-6">
          <Image src="/2.png" alt="social-icon" width={28} height={28} />
        </div>
        <div className="w-6 h-6">
          <Image src="/3.png" alt="social-icon" width={28} height={28} />
        </div>
        <div className="w-6 h-6">
          <Link href={"/cart"}>
          <Image src="/4.png" alt="social-icon" width={28} height={28} />
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full  shadow-lg z-50">
          <button
            className="absolute top-5 right-5 text-2xl font-bold"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
          <ul className="mt-20 space-y-5 px-5">
            <li>
              <Link
                href="/"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
