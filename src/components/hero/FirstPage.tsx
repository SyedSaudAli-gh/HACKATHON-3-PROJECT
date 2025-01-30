"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductTypes } from "@/type/productTypes";
import { client } from "@/sanity/lib/client";

function FirstPage() {
  const [product, setProduct] = useState<{
    id: string;
    name: string;
    imagePath: string;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          `*[_type == "product"][4]{id , name , imagePath}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error data is not fetch", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-auto pb-10 bg-[#FBEBB5] relative flex justify-around items-center">
      <div className="w-full max-w-[440px] h-auto mt-[20%] flex flex-col items-center">
        <h1 className="poppins font-medium text-[32px] sm:text-[48px] md:text-[64px] text-center">
          {product?.name}
        </h1>
        <span className="mt-8">
          <Link
            href={"/shop"}
            className="poppins font-medium text-[20px] sm:text-[24px]"
          >
            Shop Now
          </Link>
        </span>
        <p className="w-[121px] h-1 border-b-2 border-black mt-2"></p>
      </div>
      {product?.imagePath ? (
        <Link href={`/product/${product.id}`}>
          <div className="w-auto max-w-[853px] h-auto mt-8 flex justify-center">
            <Image
              src={product.imagePath}
              alt="seater"
              width={500}
              height={500}
              layout="intrinsic"
            />
          </div>
        </Link>
      ) : null}
    </div>
  );
}

export default FirstPage;
