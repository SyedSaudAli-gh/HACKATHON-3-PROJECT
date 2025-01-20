"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import PaginationPage from "@/components/pagination";
import ReturnPolicy from "@/components/returnPolicy";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface DataProducts {
  _id: string; // Use _id if Sanity returns _id
  name: string;
  price: number;
  imagePath: any;
}


async function fetchProducts(product: number): Promise<DataProducts[]> {
  const productsQuery = `*[_type == "product"]`;

  const dataProducts: DataProducts[] = await client.fetch(productsQuery);
  const productsPerPage = 12;
  const startIndex = (product - 1) * productsPerPage;
  return dataProducts.slice(startIndex, startIndex + productsPerPage);
}

function Shop() {
  const [dataProducts, setDataProducts] = useState<DataProducts[]>([]);
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
            Shop
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
                  href="/shop"
                  className="poppins text-[14px] sm:text-[16px] text-gray-700"
                >
                  Shop
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {/* Filter */}
      <div className="w-full h-auto bg-[#FAF4F4] mt-12 flex flex-wrap items-center justify-between px-5 py-4 md:px-20 md:h-[100px]">
        <div className="flex flex-wrap items-center gap-4 md:gap-5">
          <div className="flex items-center gap-2">
            <Image
              src="/shop-Voulm.png"
              alt="shop-entry"
              width={25}
              height={25}
              className="w-[19px] h-[17px]"
            />
            <p className="poppins text-[16px] md:text-[20px]">Filter</p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/Vector (2).png"
              alt="shop-entry"
              width={17}
              height={17}
              className="w-[16px] h-[16px]"
            />
            <Image
              src="/Vector.png"
              alt="shop-entry"
              width={17}
              height={17}
              className="w-[16px] h-[16px]"
            />
          </div>

          <div className="w-[1px] h-8 bg-[#9F9F9F] hidden md:block"></div>

          <span className="poppins text-[14px] md:text-[16px]">
            Showing 1–16 of 32 results
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-5">
          <div className="flex items-center gap-2">
            <p className="text-[14px] md:text-[16px]">Show</p>
            <input
              type="number"
              placeholder="16"
              className="w-[55px] h-[40px] bg-white p-2 text-center border border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[14px] md:text-[16px]">Sort by</p>
            <input
              type="text"
              placeholder="Default"
              className="w-[120px] md:w-[188px] h-[40px] bg-white p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center p-10 poppins gap-10">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {dataProducts.map((product, index) => (
            <Link
              href={`/product/${product._id}`}
              key={index}
              className="h-auto bg-white hover:bg-slate-50 rounded-lg shadow-md flex flex-col items-center"
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

              <span className="poppins py-2 mt-auto text-center text-base">
                {product.name}
              </span>
              <p className="poppins font-medium text-[24px]">
                Rs. {product.price}
              </p>
            </Link>
          ))}
        </div>
        <PaginationPage
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <ReturnPolicy />
      </div>
    </>
  );
}

export default Shop;
