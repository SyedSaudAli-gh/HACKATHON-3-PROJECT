import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { auth } from "@/firebase/firebase"; // Import Firebase Auth
import { User } from "firebase/auth"; // Import Firebase User type

interface AddToCardSliderProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function AddToCardSlider({
  name,
  price,
  image,
  quantity,
}: AddToCardSliderProps) {
  const [cartItems, setCartItems] = useState<AddToCardSliderProps[]>([]);
  const [user, setUser] = useState<User | null>(null); // Firebase User type for user state

  // Track Firebase Auth State
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update user state
    });
    return () => unsubscribe();
  }, []);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Handle delete product
  function handleDeleteProduct(indexToRemove: number) {
    setCartItems((prevItems) => {
      const updatedItems = [
        ...prevItems.slice(0, indexToRemove),
        ...prevItems.slice(indexToRemove + 1),
      ];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update localStorage after deletion
      return updatedItems;
    });
  }

  // Handle add to cart with login check
  function handleAddToCart() {
    if (!user) {
      // If user is not logged in, show an alert or redirect to login
      alert("Please login or signup to add items to your cart.");
      return;
    }

    const itemIndex = cartItems.findIndex(
      (item) => item.name === name && item.image === image
    );

    if (itemIndex !== -1) {
      // If item already exists, update the quantity
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += quantity; // Add quantity to existing product
        localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update localStorage after quantity update
        return updatedItems;
      });
    } else {
      // Add new item to cart
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems, { name, price, image, quantity }];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update localStorage after adding new item
        return updatedItems;
      });
    }
  }

  // Dynamically calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger
        className="px-1 sm:px-1 md:px-9 h-[64px] border-[1px] rounded-[10px] flex justify-center items-center hover:border-2 border-black"
        onClick={handleAddToCart} // Adding or updating product on click
      >
        Add to Cart
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-auto">
          <SheetTitle className="w-auto poppins font-semibold text-[24px]">
            Shopping Cart
          </SheetTitle>
          <hr className="w-[287px] border-[1px] border-[#D9D9D9]" />
          <div className="space-y-4 mt-4 h-[500px] overflow-y-auto">
            {cartItems.map((item, index) => (
              <SheetDescription
                key={index}
                className="flex justify-between items-center gap-4 poppins my-5 mb-10"
              >
                <Image
                  src={item.image}
                  width={999}
                  height={999}
                  alt="Product Image"
                  className="rounded-lg w-[105px] h-[80px] object-contain"
                />
                <div className="flex flex-col items-start gap-2 text-base text-black truncate">
                  <h1>{item.name}</h1>
                  <div className="flex gap-3">
                    <span>{item.quantity}</span>
                    <span>X</span>
                    <span className="text-[#B88E2F]">
                      Rs. {(item.quantity * item.price).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteProduct(index)}
                  className="text-red-500"
                >
                  <Image src={"/x.png"} width={20} height={20} alt="remove" />
                </button>
              </SheetDescription>
            ))}
          </div>
          <SheetDescription className="w-auto flex justify-between gap-32 poppins text-base text-black">
            <span>Subtotal</span>
            <span className="text-[#B88E2F]">
              Rs. {subtotal.toLocaleString()}
            </span>
          </SheetDescription>
          <hr className="w-full border-[1px] border-[#D9D9D9] mt-4" />
          <SheetDescription className="w-auto flex gap-10 poppins text-[12px] text-black mt-4">
            <button className="w-[131px] h-[31px] border-[1px] border-black rounded-full">
              <Link href={"/cart/"}>View Cart</Link>
            </button>
            <button className="w-[131px] h-[31px] border-[1px] border-black rounded-full">
              <Link href={"/check-out/"}>Checkout</Link>
            </button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default AddToCardSlider;
