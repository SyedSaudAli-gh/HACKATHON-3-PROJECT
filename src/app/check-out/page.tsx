"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ReturnPolicy from "@/components/returnPolicy";

function CheckOut() {
  const [selectedMethod, setSelectedMethod] = useState<string>(""); // State for selected payment method

  const handlePaymentChange = (method: string) => {
    setSelectedMethod(method); // Update selected method
  };
  return (
    <>
      <div className="w-full h-[316px] relative flex flex-col items-center">
        <Image
          src="/shop.jpeg"
          alt="shop-entry"
          width={1440}
          height={450}
          className="object-cover w-full h-full blur-[2px] opacity-50"
        />

        <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center gap-3 px-4">
          <div className="w-[60px] h-[60px] sm:w-[77px] sm:h-[77px]">
            <Image
              src="/shop-logo.png"
              alt="shop-entry"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>

          <h1 className="poppins font-medium text-[28px] sm:text-[36px] md:text-[48px] -mt-2">
            Checkout
          </h1>

          <Breadcrumb>
            <BreadcrumbList className="flex gap-2 text-center">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="poppins font-medium text-[14px] sm:text-[16px] text-black"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black text-[14px] sm:text-[16px]" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/shop"
                  className="poppins text-[14px] sm:text-[16px] text-gray-700"
                >
                  Checkout
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {/* body */}
      <div className="w-full min-h-screen flex justify-center items-center p-4 poppins">
        <div className="w-full max-w-[1242px] flex flex-col lg:flex-row gap-10">
          {/* Billing Details Section */}
          <div className="w-full lg:w-[608px] p-5 flex flex-col items-center">
            <div className="flex flex-col gap-9">
              <h1 className="font-semibold text-[28px] md:text-[36px]">
                Billing details
              </h1>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-3">
                  <label className="font-medium">First Name</label>
                  <input
                    className="w-full md:w-[211px] h-[50px] md:h-[75px] rounded-[10px] border border-[#9F9F9F] px-5"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-medium">Last Name</label>
                  <input
                    className="w-full md:w-[211px] h-[50px] md:h-[75px] rounded-[10px] border border-[#9F9F9F] px-5"
                    type="text"
                  />
                </div>
              </div>

              <label className="font-medium">Company Name (Optional)</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
              />

              <label className="font-medium">Country / Region</label>
              <select className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F] text-[#9F9F9F]">
                <option value="sl">Sri Lanka</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="in">India</option>
              </select>

              <label className="font-medium">Street address</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
              />

              <label className="font-medium">Town / City</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
              />

              <label className="font-medium">Province</label>
              <select className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F] text-[#9F9F9F]">
                <option value="western">Western Province</option>
                <option value="eastern">Eastern Province</option>
                <option value="southern">Southern Province</option>
                <option value="northern">Northern Province</option>
                <option value="central">Central Province</option>
              </select>

              <label className="font-medium">ZIP code</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
              />

              <label className="font-medium">Phone</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="tel"
              />

              <label className="font-medium">Email address</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="email"
              />

              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="email"
                placeholder="Additional information"
              />
            </div>
          </div>

          {/* Payment Details Section */}
          <div className="w-full lg:w-[608px] flex justify-center mt-12">
            <div className="w-full max-w-[533px] p-5 flex flex-col gap-8">
              <div className="flex justify-between text-[20px] md:text-[24px] font-medium">
                <h1>Product</h1>
                <h1>Subtotal</h1>
              </div>

              <div className="flex justify-between">
                <span className="text-[#9F9F9F]">Asgaard sofa</span>
                <span className="font-light">Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold text-[#B88E2F] text-[24px]">
                  Rs. 250,000.00
                </span>
              </div>

              <hr className="border mt-5" />

              {/* Payment Options */}
              <div className="flex flex-col gap-4">
                <label className="flex items-center text-gray-500 text-lg">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank-transfer"
                    checked={selectedMethod === "bank-transfer"}
                    onChange={() => handlePaymentChange("bank-transfer")}
                    className="mr-2 w-5 h-5"
                  />
                  Direct Bank Transfer
                </label>
                {selectedMethod === "bank-transfer" && (
                  <p className="text-[#9F9F9F] font-light">
                    Make your payment directly into our bank account.
                  </p>
                )}

                <label className="flex items-center text-gray-500 text-lg">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash-on-delivery"
                    checked={selectedMethod === "cash-on-delivery"}
                    onChange={() => handlePaymentChange("cash-on-delivery")}
                    className="mr-2 w-5 h-5"
                  />
                  Cash On Delivery
                </label>
                {selectedMethod === "cash-on-delivery" && (
                  <p className="text-[#9F9F9F] font-light">
                    Pay with cash when your order is delivered.
                  </p>
                )}
              </div>

              <button className="w-full h-[64px] border border-black rounded-[15px] text-[20px]">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReturnPolicy />
    </>
  );
}

export default CheckOut;
