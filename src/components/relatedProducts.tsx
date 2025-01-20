"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface DataProducts {
  productName: string;
  slug: { current: string };
  price: number;
  images: {
    asset: {
      _id: string;
      url: string;
    };
  }[];
}

const fetchRelatedProducts = async () => {
  const productsQuery = `*[_type == "product"][2..5]{
    productName, 
    slug { current }, 
    price, 
    images[] {
      asset->{
        _id,
        url
      }
    }
  }`;

  try {
    const data = await client.fetch(productsQuery);
    return data;
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
};

const RelatedProducts = () => {
  const [dataProducts, setDataProducts] = useState<DataProducts[]>([]);
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
            href={`/product/${product.slug.current}`}
            key={index}
            className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <Image
              src={product.images[0]?.asset.url || "/placeholder.png"}
              width={200}
              height={200}
              alt={product.productName}
              className="rounded-lg pt-10 object-cover"
            />

            <p className="poppins mt-auto">{product.productName}</p>
            <p className="poppins font-medium text-[24px]">
              Rs. {product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
