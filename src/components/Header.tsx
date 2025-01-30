"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Search from "./Search";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Current logged-in user
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="w-full h-[100px] flex items-center justify-between px-5 md:px-20 sticky top-0 z-10 bg-white shadow-sm">
      {/* Sidebar Toggle for Mobile */}
      <button
        className="block md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
      </button>

      {/* Navbar Links */}
      <div className="hidden md:block">
        <ul className="flex gap-5 md:gap-10 lg:gap-20">
          <li>
            <Link href="/" className="font-medium hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="font-medium hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-medium hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-medium hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* User Options */}
      <div className="flex gap-3 sm:gap-5 items-center">
        {user ? (
          <div className="relative">
            {/* User Profile Image */}
            <Image
              src={user.photoURL || "/1.png"}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-3xl cursor-pointer p-2  text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                 Orders
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Support
                </Link>
                <hr  className="h-[1px] border-2 border-e-black"/>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button className="px-4 py-2  text-white rounded-md">
              <Image src="/1.png" alt="social-icon" width={28} height={28} />
            </button>
          </Link>
        )}
        <Search />
        <Link href={"/wishList"}>
          <div className="w-6 h-6">
            <Image src="/3.png" alt="social-icon" width={28} height={28} />
          </div>
        </Link>
        <div className="w-6 h-6">
          <Link href="/cart">
            <Image src="/4.png" alt="social-icon" width={28} height={28} />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
          <button
            className="absolute top-5 right-5 text-2xl font-bold"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
          <ul className="mt-20 space-y-5 px-5">
            <li>
              <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setIsSidebarOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsSidebarOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsSidebarOpen(false)}>
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
