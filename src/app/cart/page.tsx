"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderDesign from "@/components/HeaderDesign";

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

  // Handle updating the quantity of an item
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
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
      <HeaderDesign
        title="Cart"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Cart", href: "/cart" },
        ]}
      />

      <div className="w-full h-auto sm:h-[525px] flex justify-center items-center poppins p-4 sm:p-8">
        <div className="w-full sm:w-[1240px] h-auto sm:h-[390px] flex flex-col sm:flex-row justify-between gap-6">
          {/* Left Section (Cart Items Table) */}
          <div className="w-full sm:w-[calc(100%-393px)] h-auto flex flex-col gap-6 sm:gap-14 overflow-x-auto">
            {/* Table for Cart Items */}
            <table className="w-full">
              <thead>
                <tr className="bg-[#FFF9E5] rounded-lg text-nowrap">
                  <th className="py-4 px-2">Product</th>
                  <th className="py-4 px-2">Price</th>
                  <th className="py-4 px-2">Quantity</th>
                  <th className="py-4 px-2">Subtotal</th>
                  <th className="py-4 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <tr key={index} className="text-center border-b">
                      <td className="py-2 px-4 flex items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={999}
                          height={999}
                          className="object-contain w-[120px] h-[92px]"
                        />
                        <span className="ml-4">{item.name}</span>
                      </td>
                      <td className="py-2 px-4">
                        Rs. {item.price.toLocaleString()}
                      </td>
                      <td className="py-2 px-4">
                        <button
                          className="opacity-50 mr-3 hover:opacity-100 hover:transition-transform duration-500 hover:scale-150"
                          onClick={() => {
                            if (item.quantity > 1) {
                              handleQuantityChange(index, item.quantity - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <span className="border-2 py-1 px-3 ">
                          {item.quantity || 0}
                        </span>
                        <button
                          className="opacity-50 ml-3 hover:opacity-100 hover:transition-transform duration-500 hover:scale-150"
                          onClick={() =>
                            handleQuantityChange(index, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td className="py-2 px-4">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </td>
                      <td className="py-2 px-4 cursor-pointer">
                        <Image
                          src="/Vector (6).png"
                          alt="remove"
                          width={28}
                          height={28}
                          onClick={() => handleDeleteProduct(index)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-4">
                      Your cart is empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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
                <span className="text-[#9F9F9F]">
                  Rs. {subtotal.toLocaleString()}
                </span>
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
