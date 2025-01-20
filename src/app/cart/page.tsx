'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Handle deleting a product from the cart
  const handleDeleteProduct = (indexToRemove: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(indexToRemove, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total (you can add additional logic for taxes, shipping, etc.)
  const total = subtotal;

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
            Cart
          </h1>
        </div>
      </div>

      <div className="w-full h-auto sm:h-[525px] flex justify-center items-center poppins p-4 sm:p-8">
        <div className="w-full sm:w-[1240px] h-auto sm:h-[390px] flex flex-col sm:flex-row justify-between">
          {/* Left Section (Cart Items Table) */}
          <div className="w-full sm:w-[817px] h-auto flex flex-col gap-6 sm:gap-14">
            {/* Header with Product Info */}
            <div className="w-full h-[55px] bg-[#FFF9E5] flex justify-center items-center">
              <ul className="flex flex-wrap justify-between gap-6 sm:gap-24 text-[12px] sm:text-[16px] font-medium">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
                <li>Remove</li>
              </ul>
            </div>

            {/* Dynamically Render Products */}
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-8 sm:gap-14 items-center sm:items-start"
                >
                  {/* Image */}
                  <div className="w-[106px] h-[106px] flex justify-center items-center bg-[#fbebb5] rounded-[10px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={122}
                      height={92}
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="w-full m-auto sm:w-[573px] h-auto flex flex-col sm:flex-row gap-4 sm:gap-14 items-center sm:items-start text-[#9F9F9F]">
                    <span className="text-sm sm:text-base">{item.name}</span>
                    <span className="text-sm sm:text-base">
                      Rs. {item.price.toLocaleString()}
                    </span>
                    <span className="border-2 px-3 rounded-[5px] text-black text-sm sm:text-base">
                      {item.quantity}
                    </span>
                    <span className="text-sm sm:text-base text-black">
                      Rs.{" "}
                      {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>

                  {/* Remove Icon */}
                  <div
                    className="w-[21px] h-[21px] m-auto flex justify-center items-center cursor-pointer"
                    onClick={() => handleDeleteProduct(index)}
                  >
                    <Image
                      src="/Vector (6).png"
                      alt="remove"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>Your cart is empty.</div>
            )}
          </div>

          {/* Right Section (Cart Totals) */}
          <div className="w-full sm:w-[393px] h-auto sm:h-[390px] bg-[#FFF9E5] flex flex-col justify-center items-center gap-8 sm:gap-14 p-4 sm:p-6">
            <h1 className="text-[24px] sm:text-[32px] font-semibold text-center sm:text-left">
              Cart Totals
            </h1>

            {/* Totals */}
            <div className="flex flex-col gap-6 sm:gap-8 w-full text-center sm:text-left">
              <div className="flex justify-between gap-6 sm:gap-10 text-sm sm:text-base">
                <span className="font-medium">Subtotal</span>
                <span className="text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between gap-6 sm:gap-10 text-sm sm:text-base">
                <span className="font-medium">Total</span>
                <span className="text-[18px] sm:text-[20px] text-[#B88E2F]">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full sm:w-[222px] h-[48px] sm:h-[58.95px] border-2 border-black rounded-[15px] text-[16px] sm:text-[20px] hover:bg-[#f6efd6]">
              <Link href="/check-out">Check Out</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
