"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

function FifthPage() {
  const [product, setProduct] = useState<{
    id: string;
    name: string;
    imagePath: string;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          `*[_type == "product"][18]{id , name , imagePath}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error data is not fetch", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#FFF9E5] flex justify-center items-center py-10">
      <div className="relative flex flex-col md:flex-row items-center max-w-[1200px] w-full px-4 md:px-0">
        <div className="flex justify-center md:flex-1 mb-6 md:mb-0">
          {product?.imagePath ? (
            <Image
              src={product?.imagePath}
              alt="seater"
              width={999}
              height={999}
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] rounded-xl"
            />
          ) : null}
        </div>
        <div className="flex flex-col justify-center items-center text-center md:text-left mt-10 md:mt-0 md:ml-10">
          <span className="poppins font-medium text-[18px] sm:text-[24px] lg:text-[28px]">
            New Arrivals
          </span>
          <h2 className="poppins font-bold text-[24px] sm:text-[32px] lg:text-[40px]">
            {product?.name}
          </h2>
          <button className="mt-6 w-[200px] sm:w-[250px] lg:w-[300px] h-[48px] sm:h-[56px] lg:h-[64px] border-2 border-black poppins text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#fff3cb]">
            <Link href={`/product/${product?.id}`}>Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
