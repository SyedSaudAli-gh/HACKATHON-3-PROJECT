"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import RelatedProducts from "@/components/relatedProducts";

interface DataProducts {
  _id: string;
  name: string;
  price: number;
  images: { asset: { url: string } }[];
  description: string;
  discountPercentage: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  size?: string[];
  color?: string[];
}

const fetchProduct = async (id: string): Promise<DataProducts | null> => {
  const query = `*[_type == "product" && name == $name][0]`;

  try {
    const product = await client.fetch(query, { id });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [product, setProduct] = useState<DataProducts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await fetchProduct(id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product data available.</div>;

  return (
    <div className="w-full h-auto p-4 sm:p-10">
      <div className="flex flex-col lg:flex-row justify-evenly">
        {/* Product Images */}
        <div className="w-full lg:w-[553px] h-auto lg:h-[500px] mb-6 lg:mb-0">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="w-full lg:w-[76px] flex flex-row lg:flex-col gap-4 lg:gap-5 overflow-auto">
              {product.images?.map((image, index) => (
                <div
                  key={index}
                  className="w-[76px] h-[80px] bg-[#FFF9E5] rounded-lg cursor-pointer flex justify-center items-center overflow-hidden"
                >
                  <Image
                    src={image.asset.url}
                    alt={`Thumbnail ${index}`}
                    width={76}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[481px] h-[300px] lg:h-[500px] bg-[#FFF9E5] rounded-lg shadow-xl flex justify-center items-center overflow-hidden">
              <Image
                src={product.images[0]?.asset.url}
                alt="Product Image"
                width={1000}
                height={1000}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-[606px] h-auto flex flex-col gap-3">
          <h1 className="text-[28px] lg:text-[42px]">{product.name}</h1>
          <span className="text-[18px] lg:text-[24px] font-medium text-[#9F9F9F]">
            Rs. {product.price}.00
          </span>
          <p className="text-[13px]">{product.description}</p>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
