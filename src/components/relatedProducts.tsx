"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProductTypes } from "@/type/productTypes";

const fetchRelatedProducts = async () => {
  const productsQuery = `*[_type == "product"][2..5]`;

  try {
    const data = await client.fetch(productsQuery);
    return data;
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
};

const RelatedProducts = () => {
  const [dataProducts, setDataProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRelatedProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchRelatedProducts();
        setDataProducts(data);
      } catch (err) {
        setError("Related products load karte waqt masla hua.");
      } finally {
        setLoading(false);
      }
    };

    getRelatedProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full h-auto  flex flex-col items-center p-10 poppins gap-10">
      <h1 className="text-[36px] font-medium">Related Products</h1>
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dataProducts.map((product, index) => (
          <Link
            href={`/product/${product.id}`}
            key={index}
            className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <Image
              src={product.imagePath} // Use the plain URL directly
              width={500}
              height={500}
              alt={product.name}
              className="object-cover w-[500px] h-[300px] rounded-t-lg"
            />

            <p className="poppins mt-auto">{product.name}</p>
            <p className="poppins font-medium text-[24px]">
              Rs. {product.price}
            </p>
          </Link>
        ))}
      </div>
      <h2 className="text-center mt-5 poppins font-medium text-[20px] sm:text-[24px]">
        <Link href="/shop">View More</Link>
      <p className="w-[121px] h-1 border-b-2 border-black mx-auto mt-2"></p>
      </h2>
    </div>
  );
};

export default RelatedProducts;
