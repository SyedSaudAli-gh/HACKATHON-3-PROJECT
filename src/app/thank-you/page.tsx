"use client";
import React from "react";
import HeaderDesign from "@/components/HeaderDesign";
import { useRouter } from "next/navigation"; // Use next/navigation for routing

const ThankYou = () => {
  const router = useRouter();

  return (
    <>
      <HeaderDesign
        title="Thank You"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Thank You", href: "/thank-you" },
        ]}
      />

      <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 poppins">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#B88E2F] mb-6">
            Thank You!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your order has been placed successfully. We appreciate your
            business!
          </p>
          <button
            onClick={() => router.push("/")} // Redirect to the homepage
            className="bg-[#B88E2F] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#A67C2F] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
