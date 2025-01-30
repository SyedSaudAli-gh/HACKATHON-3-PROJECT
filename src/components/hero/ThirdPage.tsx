"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

import { ProductTypes } from "@/type/productTypes";

async function fetchProducts(product: number): Promise<ProductTypes[]> {
  const productsQuery = `*[_type == "product"][6..9]`;

  const dataProducts: ProductTypes[] = await client.fetch(productsQuery);
  const productsPerPage = 12;
  const startIndex = (product - 1) * productsPerPage;
  return dataProducts.slice(startIndex, startIndex + productsPerPage);
}

function ThirdPage() {
  const [dataProducts, setDataProducts] = useState<ProductTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts(currentPage);
      setDataProducts(products);
    };

    loadProducts();
  }, [currentPage]);

  const handlePageChange = (product: number) => {
    setCurrentPage(product);
  };

  return (
    <div className="w-auto h-auto flex flex-col items-center p-14 poppins gap-10">
      <div className="w-auto max-w-[1200px] mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dataProducts.map((product, index) => (
          <Link
            href={`/product/${product.id}`}
            key={index}
            className="h-auto pb-8 bg-white hover:bg-slate-50 rounded-lg shadow-md flex flex-col items-center"
          >
            {product.imagePath ? (
              <Image
                src={product.imagePath} // Use the plain URL directly
                width={500}
                height={500}
                alt={product.name}
                className="object-cover w-[500px] h-[300px] rounded-t-lg"
              />
            ) : (
              <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center rounded-md">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            <span className="poppins py-3 mt-auto text-center text-base">
              {product.name}
            </span>
            <p className="poppins font-medium text-[24px]">
              Rs. {product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ThirdPage;
