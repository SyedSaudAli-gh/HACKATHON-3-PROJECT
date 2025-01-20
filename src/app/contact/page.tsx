import React from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ReturnPolicy from "@/components/returnPolicy";

function Contact() {
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
            Contact
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
                  className="poppins text-[14px] sm:text-[16px] "
                >
                  Contact
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="flex flex-col justify-center items-center mt-20 poppins px-4">
          <h1 className="font-semibold text-[24px] sm:text-[36px] text-center">
            Get In Touch With Us
          </h1>
          <p className="w-full max-w-[644px] mt-2 text-[#9F9F9F] text-center text-sm sm:text-base">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="w-full max-w-[1058px] flex flex-col justify-center items-center lg:flex-row m-auto px-4 mt-10 gap-8">
          <div className="w-full max-w-[393px] flex flex-col gap-8 justify-center  poppins">
            <div>
              <div className="flex items-center gap-5">
                <Image
                  src="/Vector (1).png"
                  alt="social-icon"
                  width={22}
                  height={28}
                />
                <span className="font-medium text-[20px] sm:text-[24px]">
                  Address
                </span>
              </div>
              <address className="ml-10 text-sm sm:text-base">
                236 5th SE Avenue, New York NY10000, United States
              </address>
            </div>

            <div>
              <div className="flex items-center gap-5">
                <Image
                  src="/Vector (4).png"
                  alt="social-icon"
                  width={22}
                  height={28}
                />
                <span className="font-medium text-[20px] sm:text-[24px]">
                  Phone
                </span>
              </div>
              <p className="ml-10 text-sm sm:text-base">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <div className="flex items-center gap-5">
                <Image
                  src="/Vector (3).png"
                  alt="social-icon"
                  width={22}
                  height={28}
                />
                <span className="font-medium text-[20px] sm:text-[24px]">
                  Working Time
                </span>
              </div>
              <p className="ml-10 text-sm sm:text-base">
                Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          <div className="w-full max-w-[635px] mx-auto p-5">
            <div className="w-full max-w-[531px] mx-auto flex flex-col gap-6 poppins">
              <label htmlFor="name" className="block font-medium">
                Your Name
                <input
                  id="name"
                  type="text"
                  placeholder="ABC"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </label>

              <label htmlFor="email" className="block font-medium">
                Email Address
                <input
                  id="email"
                  type="text"
                  placeholder="Abc@def.com"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </label>

              <label htmlFor="subject" className="block font-medium">
                Subject
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an optional"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </label>

              <label htmlFor="message" className="block font-medium">
                Message
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I’d like to ask about..."
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </label>

              <button className="w-full sm:w-[237px] h-[48px] border-2 rounded-lg mx-auto sm:mx-0">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReturnPolicy />
       
    </>
  );
}

export default Contact;
