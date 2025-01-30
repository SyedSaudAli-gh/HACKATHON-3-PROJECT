import React from "react";
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import Link from "next/link";
import FirstPage from "./FirstPage";
import SecondPaga from "./SecondPaga";
import ThirdPage from "./ThirdPage";
import FifthPage from "./FifthPage";

function Hero() {
  return (
    <>
      {/* first page */}
      <FirstPage />
      {/* 2nd page */}
      <SecondPaga />
      {/* 3rd */}
      <ThirdPage />
      {/* 4th */}
      <FifthPage />
      {/* 5tth */}
      <div className="w-full h-auto flex flex-col items-center py-10">
        {/* Heading Section */}
        <div className="w-full text-center mb-10">
          <h1 className="poppins font-medium text-[36px] sm:text-[48px] md:text-[64px]">
            Our Blogs
          </h1>
          <p className="poppins font-medium text-[#9F9F9F] mt-4 text-[16px] sm:text-[18px] md:text-[20px]">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7 px-4 sm:px-6">
          {/* Blog Card 1 */}
          <div className="w-full sm:w-[48%] md:w-[30%] h-auto flex flex-col gap-6 items-center rounded-[10px] overflow-hidden">
            <Link href={"/about"}>
              <div className="w-auto h-[240px] sm:h-[300px] md:h-[393px] rounded-[10px] overflow-hidden">
                <Image
                  src="/hero-blog.jpeg"
                  alt="seater"
                  width={393}
                  height={393}
                  className="object-cover w-auto h-full"
                />
              </div>
              <div className="flex flex-col mt-6 items-center gap-4">
                <h2 className="poppins text-[16px] sm:text-[18px] md:text-[20px] text-center">
                  Going all-in with millennial design
                </h2>
                <h3 className="poppins font-medium text-[18px] sm:text-[20px] md:text-[24px] text-center">
                  Read More
                </h3>
                <p className="w-[80px] sm:w-[100px] md:w-[121px] h-1 border-b-2 border-black -mt-2"></p>
                <div className="h-auto flex items-center gap-2 text-sm md:text-base">
                  <MdOutlineWatchLater />
                  <p className="poppins font-light">5 min</p>
                  <IoCalendarClearOutline className="ml-2" />
                  <p className="poppins font-light">
                    12<sup>th</sup> Oct 2022
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Card 2 */}
          <div className="w-full sm:w-[48%] md:w-[30%] h-auto flex flex-col gap-6 items-center rounded-[10px] overflow-hidden">
            <Link href={"/about"}>
              <div className="w-auto h-[240px] sm:h-[300px] md:h-[393px] rounded-[10px] overflow-hidden">
                <Image
                  src="/hero-blog-2.jpeg"
                  alt="seater"
                  width={393}
                  height={393}
                  className="object-cover w-auto h-full"
                />
              </div>
              <div className="flex flex-col mt-6 items-center gap-4">
                <h2 className="poppins text-[16px] sm:text-[18px] md:text-[20px] text-center">
                  Going all-in with millennial design
                </h2>
                <h3 className="poppins font-medium text-[18px] sm:text-[20px] md:text-[24px] text-center">
                  Read More
                </h3>
                <p className="w-[80px] sm:w-[100px] md:w-[121px] h-1 border-b-2 border-black -mt-2"></p>
                <div className="h-auto flex items-center gap-2 text-sm md:text-base">
                  <MdOutlineWatchLater />
                  <p className="poppins font-light">5 min</p>
                  <IoCalendarClearOutline className="ml-2" />
                  <p className="poppins font-light">
                    12<sup>th</sup> Oct 2022
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Card 3 */}
          <div className="w-full sm:w-[48%] md:w-[30%] h-auto flex flex-col gap-6 items-center rounded-[10px] overflow-hidden">
            <Link href={"/about"}>
              <div className="w-auto h-[240px] sm:h-[300px] md:h-[393px] rounded-[10px] overflow-hidden">
                <Image
                  src="/hero-blog-3.jpeg"
                  alt="seater"
                  width={393}
                  height={393}
                  className="object-cover w-auto h-full"
                />
              </div>
              <div className="flex flex-col mt-6 items-center gap-4">
                <h2 className="poppins text-[16px] sm:text-[18px] md:text-[20px] text-center">
                  Going all-in with millennial design
                </h2>
                <h3 className="poppins font-medium text-[18px] sm:text-[20px] md:text-[24px] text-center">
                  Read More
                </h3>
                <p className="w-[80px] sm:w-[100px] md:w-[121px] h-1 border-b-2 border-black -mt-2"></p>
                <div className="h-auto flex items-center gap-2 text-sm md:text-base">
                  <MdOutlineWatchLater />
                  <p className="poppins font-light">5 min</p>
                  <IoCalendarClearOutline className="ml-2" />
                  <p className="poppins font-light">
                    12<sup>th</sup> Oct 2022
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* View More Section */}
        <div className="w-full text-center mt-10">
          <h2 className="poppins font-medium text-[24px]">View More</h2>
          <p className="w-[121px] h-1 border-b-2 border-black mx-auto mt-4"></p>
        </div>
      </div>
      {/* 6th */}
      <div className="w-full h-auto flex justify-center items-center flex-col relative py-10">
        {/* Image Section */}
        <div className="w-full h-[450px] sm:h-[400px] md:h-[450px] bg-[#FAF4F480]">
          <Image
            src="/Our Instagram.jpeg"
            alt="seater"
            width={1440}
            height={450}
            className="object-cover w-full h-full opacity-15"
          />
        </div>

        {/* Instagram Text and Button Section */}
        <div className="w-full sm:w-[454px] h-auto absolute flex flex-col justify-center items-center gap-5 px-4 sm:px-0">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="poppins font-bold text-[40px] sm:text-[50px] md:text-[60px] leading-tight">
              Our Instagram
            </h1>
            <p className="poppins text-[16px] sm:text-[18px] md:text-[20px] text-[#333]">
              Follow our store on Instagram
            </p>
          </div>
          <button className="w-[200px] sm:w-[255px] h-[56px] sm:h-[64px] rounded-[50px] bg-[#FAF4F4] drop-shadow-md poppins text-[18px] sm:text-[20px] hover:bg-[#fcf7f7]">
            Follow Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
