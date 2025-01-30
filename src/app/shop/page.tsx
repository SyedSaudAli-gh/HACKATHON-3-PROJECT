"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import PaginationPage from "@/components/pagination";
import ReturnPolicy from "@/components/returnPolicy";
import { ProductTypes } from "@/type/productTypes";
import { FaRegHeart } from "react-icons/fa";
import HeaderDesign from "@/components/HeaderDesign";

async function fetchProducts(product: number): Promise<ProductTypes[]> {
  const productsQuery = `*[_type == "product"]`;
  const dataProducts: ProductTypes[] = await client.fetch(productsQuery);
  const productsPerPage = 12;
  const startIndex = (product - 1) * productsPerPage;
  return dataProducts.slice(startIndex, startIndex + productsPerPage);
}

function Shop() {
  const [dataProducts, setDataProducts] = useState<ProductTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  // Fetch products and liked products on page load
  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts(currentPage);
      setDataProducts(products);
    };

    loadProducts();

    // Fetch liked products from localStorage
    const storedLikes = localStorage.getItem("wishlist");
    if (storedLikes) {
      setLikedProducts(JSON.parse(storedLikes));
    }
  }, [currentPage]);

  // Save liked products to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(likedProducts));
  }, [likedProducts]);

  // Handle page change for pagination
  const handlePageChange = (product: number) => {
    setCurrentPage(product);
  };

  // Toggle product in wishlist
  const handleWishlistToggle = (product: ProductTypes) => {
    const isInWishlist = likedProducts.includes(product.id);

    const updatedWishlist = isInWishlist
      ? likedProducts.filter((id) => id !== product.id) // Remove from wishlist
      : [...likedProducts, product.id]; // Add to wishlist

    setLikedProducts(updatedWishlist);
  };

  return (
    <>
      <HeaderDesign
        title="Shop"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Shop", href: "/shop" },
        ]}
      />

      {/* Filter Section */}
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

      {/* Product Grid */}
      <div className="w-full h-auto flex flex-col items-center p-10 poppins gap-10">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {dataProducts.map((product, index) => (
            <Link
              href={`/product/${product.id}`}
              key={index}
              className="h-auto bg-white hover:bg-slate-50 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="relative">
                {product.imagePath ? (
                  <Image
                    src={product.imagePath}
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
                <div className="absolute top-2 left-2">
                  <FaRegHeart
                    className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${
                      likedProducts.includes(product.id)
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      handleWishlistToggle(product);
                    }}
                  />
                </div>
              </div>
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