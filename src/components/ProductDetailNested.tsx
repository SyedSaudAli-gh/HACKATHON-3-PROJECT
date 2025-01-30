"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

function ProductDetailNested() {
  const [product, setProduct] = useState<{ id: string; imagePath: string }[]>([]); // State to store the paths of 2 images

  useEffect(() => {
    async function fetchImages() {
      try {
        // Sanity query to fetch two images
        const query = `*[_type == "product"][10..11]{id , imagePath}`;
        const data = await client.fetch(query); // Fetch data
        setProduct(data); // Update state with the images
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-8 px-4 sm:px-8">
      {product.length > 0 ? (
        product.map((product, index) => (
          <Link key={index} href={`/product/${product.id}`}>
            <div className="w-full sm:w-[300px] lg:w-[605px] h-[200px] sm:h-[348px] bg-[#FFF9E5] rounded-[10px] overflow-hidden">
              <Image
                src={product.imagePath}
                alt={`Product ${index + 1}`}
                width={605}
                height={348}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </Link>
        ))
      ) : (
        <p>Loading Image...</p>
      )}
    </div>
  );
}

export default ProductDetailNested;
