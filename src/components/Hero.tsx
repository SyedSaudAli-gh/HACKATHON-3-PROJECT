import React from "react";
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import Link from "next/link";

function Hero() {
  return (
    <>
      {/* first page */}
      <div className="w-full h-auto bg-[#FBEBB5] relative flex justify-around items-center">
        <div className="w-full max-w-[440px] h-auto mt-[20%] flex flex-col items-center">
          <h1 className="poppins font-medium text-[32px] sm:text-[48px] md:text-[64px] text-center">
            Rocket single seater
          </h1>
          <span className="mt-8">
            <p className="poppins font-medium text-[20px] sm:text-[24px]">
              Shop Now
            </p>
          </span>
          <p className="w-[121px] h-1 border-b-2 border-black mt-2"></p>
        </div>
        <div className="w-full max-w-[853px] h-auto mt-8 flex justify-center scale-x-[-1]">
          <Image
            src={"/hero.png"}
            alt="seater"
            width={999}
            height={999}
            layout="responsive"
          />
        </div>
      </div>
      {/* 2nd page */}
      <div className="w-full h-auto bg-[#FAF4F4] flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full max-w-[605px] h-auto m-4 flex flex-col items-center">
          <div className="w-full flex justify-center mb-4">
            <div className="w-[305px] h-auto">
              <Link href="/shop">
                <Image
                  src={"/hero-2.png"}
                  alt="seater"
                  width={380}
                  height={333}
                  layout="responsive"
                />
              </Link>
            </div>
          </div>
          <h2 className="text-center poppins font-medium text-[28px] sm:text-[36px]">
            Side table
          </h2>
          <h2 className="text-center poppins font-medium text-[20px] sm:text-[24px]">
            <Link href="/shop">View More</Link>
          </h2>
          <p className="w-[121px] h-1 border-b-2 border-black mx-auto mt-2"></p>
        </div>

        <div className="w-full max-w-[605px] h-auto m-4 flex flex-col items-center">
          <div className="w-full flex justify-center mb-4">
            <div className="w-full max-w-[600px]">
              <Link href="/shop">
                <Image
                  src={"/hero-3.png"}
                  alt="seater"
                  width={999}
                  height={999}
                  layout="responsive"
                />
              </Link>
            </div>
          </div>
          <h2 className="text-center poppins font-medium text-[28px] sm:text-[36px]">
            Side table
          </h2>
          <h2 className="text-center poppins font-medium text-[20px] sm:text-[24px]">
            <Link href="/shop">View More</Link>
          </h2>
          <p className="w-[121px] h-1 border-b-2 border-black mx-auto mt-2"></p>
        </div>
      </div>
      {/* 3rd */}
      <div className="w-full">
        <h1 className="poppins font-medium text-[36px] text-center mt-10">
          Top Picks For You
        </h1>
        <p className="poppins font-medium text-[#9F9F9F] text-center mt-4">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <div className="w-full max-w-[1200px] mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <Link href="/shop">
            <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
              <Image
                src="/card-1.png"
                alt="Trenton modular sofa_3"
                width={500}
                height={150}
                objectFit="cover"
                className="rounded-lg mb-4"
              />
              <span className="poppins ">Trenton modular sofa_3</span>
              <p className="poppins font-medium text-[24px] text-center">
                Rs. 25,000.00
              </p>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="/shop">
            <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
              <Image
                src="/card-2.png"
                alt="Granite dining table"
                width={500}
                height={500}
                objectFit="cover"
                className="rounded-lg mb-4"
              />
              <span className="poppins mt-20">
                Granite dining table with dining chair
              </span>
              <p className="poppins font-medium text-[24px] text-center">
                Rs. 25,000.00
              </p>
            </div>
          </Link>
          {/* Card 3 */}
          <Link href="/shop">
            <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
              <Image
                src="/card-3.png"
                alt="Outdoor bar table"
                width={500}
                height={150}
                objectFit="cover"
                className="rounded-lg mb-4"
              />
              <span className="poppins  mt-10">
                Outdoor bar table and stool
              </span>
              <p className="poppins font-medium text-[24px] text-center">
                Rs. 25,000.00
              </p>
            </div>
          </Link>
          {/* Card 4 */}
          <Link href="/shop">
            <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
              <Image
                src="/card-4.png"
                alt="Plain console"
                width={500}
                height={150}
                objectFit="cover"
                className="rounded-lg mb-4"
              />
              <span className="poppins mt-20 ">
                Plain console with teak mirror
              </span>
              <p className="poppins font-medium text-[24px] text-center">
                Rs. 25,000.00
              </p>
            </div>
          </Link>
        </div>
        <div className="text-center mt-10">
          <h2 className="poppins font-medium text-[24px] ">
            <Link href="/shop">View More</Link>
            <p className="w-[121px] h-1 border-b-2 border-black mx-auto mt-2"></p>
          </h2>
        </div>
      </div>
      {/* 4th */}
      <div className="w-full bg-[#FFF9E5] flex justify-center items-center py-10">
        <div className="relative flex flex-col md:flex-row items-center max-w-[1200px] w-full">
          <div className="flex justify-center md:flex-1">
            <Image
              src="/Asgaard-sofa.png"
              alt="seater"
              width={880}
              height={299}
              className="w-full max-w-[400px] md:max-w-none"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center mt-10 md:mt-0 md:ml-10">
            <span className="poppins font-medium text-[24px]">
              New Arrivals
            </span>
            <h2 className="poppins font-bold text-[32px] sm:text-[48px]">
              Asgaard sofa
            </h2>
            <button className="mt-6 w-[200px] sm:w-[255px] h-[48px] sm:h-[64px] border-2 border-black poppins text-[16px] sm:text-[20px] hover:bg-[#fff3cb]">
              <a href="/product"> Order Now</a>
            </button>
          </div>
        </div>
      </div>
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
