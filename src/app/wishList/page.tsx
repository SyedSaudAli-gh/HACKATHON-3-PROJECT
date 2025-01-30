"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Import Sanity client
import { ProductTypes } from "@/type/productTypes";
import Image from "next/image";
import AddToCardSlider from "@/components/AddToCardSlider";
import { FaRegHeart } from "react-icons/fa";
import HeaderDesign from "@/components/HeaderDesign";

function Wishlist() {
  const [wishlist, setWishlist] = useState<ProductTypes[]>([]);
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  // Fetch wishlist from localStorage and query Sanity for product details
  useEffect(() => {
    const fetchWishlist = async () => {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        const wishlistIds: string[] = JSON.parse(storedWishlist);

        if (wishlistIds.length > 0) {
          try {
            // Fetch products based on IDs
            const query = `*[_type == "product" && id in $wishlistIds]`;
            const products: ProductTypes[] = await client.fetch(query, { wishlistIds });

            // Remove duplicates by ensuring unique IDs
            const uniqueProducts = products.filter(
              (value: ProductTypes, index: number, self: ProductTypes[]) =>
                index === self.findIndex((t: ProductTypes) => t.id === value.id)
            );

            setWishlist(uniqueProducts); // Update state with fetched products
          } catch (error) {
            console.error("Error fetching wishlist products:", error);
          }
        }
      }
    };

    fetchWishlist();
  }, []);

  // Save wishlist IDs to localStorage whenever it changes
  useEffect(() => {
    const wishlistIds = wishlist.map((item) => item.id);
    if (wishlistIds.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistIds)); // Save IDs to localStorage
    } else {
      localStorage.removeItem("wishlist"); // Clear localStorage if wishlist is empty
    }
  }, [wishlist]);

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((product) => product.id !== id);
      return updatedWishlist; // Return updated wishlist
    });
  };

  const handleWishlistToggle = (product: ProductTypes) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      setWishlist((prev) => [...prev, product]);
    }
  };

  return (
    <>
      <HeaderDesign
        title="Wishlist"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Wishlist", href: "/wishList" },
        ]}
      />
      <div className="w-full h-auto flex flex-col items-center p-10 poppins gap-10">
        {wishlist.length > 0 ? (
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="h-auto bg-white hover:bg-slate-50 rounded-lg shadow-md flex flex-col items-center"
              >
                <div className="relative">
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
                  <div className="absolute top-2 left-2">
                    <FaRegHeart
                      className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${
                        likedProducts.includes(product.id)
                          ? "text-gray-500"
                          : "text-red-500"
                      }`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent navigation
                        handleWishlistToggle(product);
                        setLikedProducts((prev) =>
                          prev.includes(product.id)
                            ? prev.filter((id) => id !== product.id)
                            : [...prev, product.id]
                        );
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
                <AddToCardSlider
                  name={product.name}
                  price={product.price}
                  image={product.imagePath}
                  quantity={1} // Default quantity of 1
                />
                <button
                  className="py-2 px-4 cursor-pointer text-red-500"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </>
  );
}

export default Wishlist;
