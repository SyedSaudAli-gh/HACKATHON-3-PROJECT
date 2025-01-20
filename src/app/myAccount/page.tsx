import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function MyAccount() {
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
            My Account
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
                  href="/myAccount"
                  className="poppins text-[14px] sm:text-[16px] text-gray-700"
                >
                  My Account
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {/* Body */}
      <div className="w-full h-auto flex flex-col mt-10 lg:flex-row justify-around items-center lg:p-4 ">
        {/* Log In */}
        <div className="w-full max-w-md lg:w-[608px] h-auto lg:h-[630px] poppins flex flex-col justify-center">
          <h1 className="font-semibold text-[24px] sm:text-[28px] lg:text-[36px]">
            Log In
          </h1>
          <div className="w-full max-w-md h-auto mt-8">
            <label htmlFor="name">
              Username or email address
              <input
                id="name"
                type="text"
                className="w-full h-12 sm:h-14 lg:h-16 mt-4 p-3 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div className="w-full max-w-md h-auto mt-5">
            <label htmlFor="Password">
              Password
              <input
                id="password"
                type="password"
                className="w-full h-12 sm:h-14 lg:h-16 mt-4 p-3 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div className="flex items-center space-x-4 mt-5">
            <input
              type="checkbox"
              id="checkbox"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="checkbox"
              className="text-sm sm:text-base md:text-lg font-medium text-gray-700"
            >
              Remember me
            </label>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
            <button className="w-full sm:w-[215px] h-12 sm:h-[64px] text-sm sm:text-[20px] border-[1px] border-black rounded-[15px]">
              <Link href="">Log In</Link>
            </button>
            <Link href="" className="hover:underline text-sm sm:text-base">
              Lost Your Password?
            </Link>
          </div>
        </div>
        {/* Register */}
        <div className="w-full max-w-md lg:w-[608px] h-auto lg:h-[630px] poppins flex flex-col justify-center mt-10 lg:mt-0">
          <h1 className="font-semibold text-[24px] sm:text-[28px] lg:text-[36px]">
            Register
          </h1>
          <div className="w-full max-w-md h-auto mt-8">
            <label htmlFor="email">
              Email address
              <input
                id="email"
                type="text"
                className="w-full h-12 sm:h-14 lg:h-16 mt-4 p-3 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <p className="w-full max-w-md font-light text-justify mt-10 text-sm sm:text-base">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="w-full max-w-md font-light text-justify mt-5 text-sm sm:text-base">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
          <div className="mt-10">
            <button className="w-full sm:w-[215px] h-12 sm:h-[64px] text-sm sm:text-[20px] border-[1px] border-black rounded-[15px]">
              <Link href="">Register</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full h-auto bg-[#FAF4F4] flex flex-wrap justify-center gap-8 py-8 poppins">
        {/* Free Delivery */}
        <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
          <h1 className="font-medium text-[24px] sm:text-[32px]">
            Free Delivery
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
          <h1 className="font-medium text-[24px] sm:text-[32px]">
            90 Days Return
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
          <h1 className="font-medium text-[24px] sm:text-[32px]">
            Secure Payment
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
