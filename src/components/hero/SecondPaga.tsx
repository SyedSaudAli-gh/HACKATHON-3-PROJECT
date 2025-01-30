"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

function SecondPage() {
  const [products, setProducts] = useState<
    | {
        imagePath: string;
      }[]
    | null
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          `*[_type == "product"][11..12]{imagePath}`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-auto py-10 h-auto bg-[#FAF4F4] flex flex-col sm:flex-row justify-center items-center">
      {products?.map((product, index) => (
        <div
          key={index}
          className="w-full max-w-[605px] h-auto m-4 flex flex-col items-center"
        >
          <div className="w-full flex justify-center mb-4">
            <div className="w-full max-w-[600px]">
              {product.imagePath ? (
                <Link href="/shop">
                  <Image
                    src={product.imagePath}
                    alt={`Product ${index + 1}`}
                    width={999}
                    height={999}
                    className="w-[600] h-[333px] object-cover rounded-lg"
                  />
                </Link>
              ) : null}
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
      ))}
    </div>
  );
}

export default SecondPage;
