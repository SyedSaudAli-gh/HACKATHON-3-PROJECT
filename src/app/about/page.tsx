import React from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { CiSearch } from "react-icons/ci";
import ReturnPolicy from "@/components/returnPolicy";
import PaginationPage from "@/components/pagination";

function About() {
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
            Blog
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
                  href="/about"
                  className="poppins text-[14px] sm:text-[16px] text-gray-700"
                >
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {/* body */}
      <div className="w-auto h-auto">
        <div className="w-auto h-auto flex justify-center gap-14 py-20 mx-10 flex-wrap ">
          <div className="w-full md:w-[820px] h-auto ">
            {/* first */}
            <div className="max-w-[820px] p-4 poppins">
              <div className="w-full h-auto">
                <Image
                  src="/Rectangle 68.png"
                  alt="shop-entry"
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex justify-start space-x-4 text-[#9F9F9F] mt-5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src="/blog-admin.png"
                      alt="admin"
                      width={14.48}
                      height={16.15}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src="/blog-data.png"
                      alt="date"
                      width={14.48}
                      height={16.15}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5">
                    <Image
                      src="/blog-wood.png"
                      alt="wood"
                      width={18.19}
                      height={18.19}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">Wood</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-medium text-lg md:text-2xl lg:text-3xl">
                  Going all-in with millennial design
                </p>
                <p className="text-[#9F9F9F] text-sm md:text-base mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="mt-10">
                <h3 className="font-medium text-base md:text-lg">Read more</h3>
                <div className="w-20 h-1 border-b-2 border-black mt-1"></div>
              </div>
            </div>

            {/* 2nd */}
            <div className="w-full max-w-[820px] p-4 poppins">
              <div className="w-full h-auto">
                <Image
                  src="/Rectangle 68 (1).png"
                  alt="shop-entry"
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex flex-wrap justify-start text-[#9F9F9F] mt-5 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src="/blog-admin.png"
                      alt="shop-entry"
                      width={14.48}
                      height={16.15}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src="/blog-data.png"
                      alt="shop-entry"
                      width={14.48}
                      height={16.15}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5">
                    <Image
                      src="/blog-wood.png"
                      alt="shop-entry"
                      width={18.19}
                      height={18.19}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">Handmade</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-medium text-lg md:text-2xl lg:text-3xl">
                  Exploring new ways of decorating
                </p>
                <p className="text-[#9F9F9F] text-sm md:text-base mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="mt-10">
                <h3 className="font-medium text-base md:text-lg">Read more</h3>
                <div className="w-20 h-1 border-b-2 border-black mt-1"></div>
              </div>
            </div>

            {/* 3rd */}
            <div className="w-full max-w-[820px] p-4 poppins">
              <div className="w-full h-auto">
                <Image
                  src="/Rectangle 68 (2).png"
                  alt="shop-entry"
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex flex-wrap justify-start text-[#9F9F9F] mt-5 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src="/blog-admin.png"
                      alt="shop-entry"
                      width={14.48}
                      height={16.15}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src="/blog-data.png"
                      alt="shop-entry"
                      width={14.48}
                      height={16.15}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5">
                    <Image
                      src="/blog-wood.png"
                      alt="shop-entry"
                      width={18.19}
                      height={18.19}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base">Wood</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-medium text-lg md:text-2xl lg:text-3xl">
                  Handmade pieces that took time to make
                </p>
                <p className="text-[#9F9F9F] text-sm md:text-base mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="mt-10">
                <h3 className="font-medium text-base md:text-lg">Read more</h3>
                <div className="w-20 h-1 border-b-2 border-black mt-1"></div>
              </div>
            </div>
          </div>
          {/* left */}
          <div>
            <div className="w-full max-w-[393px] h-auto md:max-w-[393px]">
              <div className="w-full max-w-[311px] h-[58px] relative mx-auto">
                <label className="w-full h-full rounded-md flex items-center border-[1px] justify-center border-black">
                  <input
                    id="text"
                    type="text"
                    className="w-full h-full pl-4 pr-10 rounded-md"
                  />
                  <CiSearch className="absolute right-4 text-2xl" />
                </label>
              </div>
              <div className="w-full max-w-[251px] h-auto mx-auto mt-10 poppins">
                <h1 className="font-medium text-[24px] text-center md:text-left">
                  Categories
                </h1>
                <div className="flex justify-between items-center mt-4 text-[#9F9F9F] text-sm md:text-base">
                  <p>Crafts</p>
                  <p>2</p>
                </div>
                <div className="flex justify-between items-center mt-4 text-[#9F9F9F] text-sm md:text-base">
                  <p>Design</p>
                  <p>8</p>
                </div>
                <div className="flex justify-between items-center mt-4 text-[#9F9F9F] text-sm md:text-base">
                  <p>Handmade</p>
                  <p>7</p>
                </div>
                <div className="flex justify-between items-center mt-4 text-[#9F9F9F] text-sm md:text-base">
                  <p>Interior</p>
                  <p>1</p>
                </div>
                <div className="flex justify-between items-center mt-4 text-[#9F9F9F] text-sm md:text-base">
                  <p>Wood</p>
                  <p>6</p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[393px] h-auto md:max-w-[393px]">
              <div className="w-full max-w-[252px] h-auto mx-auto poppins">
                <h1 className="font-medium text-[24px] text-center md:text-left">
                  Recent Posts
                </h1>

                {/* Post 1 */}
                <div className="w-full max-w-[211px] h-[80px] flex gap-2 items-center mt-8">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/b-post.png"
                      alt="shop-entry"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[119px] h-[42px] flex flex-col justify-center">
                    <p className="text-[14px]">
                      Going all-in with millennial design
                    </p>
                    <p className="text-[#9F9F9F] text-[12px]">03 Aug 2022</p>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="w-full max-w-[211px] h-[80px] flex gap-2 items-center mt-8">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/g-post-2.png"
                      alt="shop-entry"
                      width={1080}
                      height={1080}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[149px] h-[42px] flex flex-col justify-center">
                    <p className="text-[14px]">
                      Exploring new ways of decorating
                    </p>
                    <p className="text-[#9F9F9F] text-[12px]">03 Aug 2022</p>
                  </div>
                </div>

                {/* Post 3 */}
                <div className="w-full max-w-[211px] h-[80px] flex gap-2 items-center mt-8">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/b-port-3.png"
                      alt="shop-entry"
                      width={1080}
                      height={1080}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[119px] h-[42px] flex flex-col justify-center">
                    <p className="text-[14px]">
                      Handmade pieces that took time to make
                    </p>
                    <p className="text-[#9F9F9F] text-[12px]">03 Aug 2022</p>
                  </div>
                </div>

                {/* Post 4 */}
                <div className="w-full max-w-[211px] h-[80px] flex gap-2 items-center mt-8">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/b-post-4.png"
                      alt="shop-entry"
                      width={1080}
                      height={1080}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[119px] h-[42px] flex flex-col justify-center">
                    <p className="text-[14px]">Modern home in Milan</p>
                    <p className="text-[#9F9F9F] text-[12px]">03 Aug 2022</p>
                  </div>
                </div>

                {/* Post 5 */}
                <div className="w-full max-w-[211px] h-[80px] flex gap-2 items-center mt-8">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/b-post-5.png"
                      alt="shop-entry"
                      width={1080}
                      height={1080}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[119px] h-[42px] flex flex-col justify-center">
                    <p className="text-[14px]">Colorful office redesign</p>
                    <p className="text-[#9F9F9F] text-[12px]">03 Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       
<PaginationPage />
      <ReturnPolicy />
    </>
  );
}

export default About;
