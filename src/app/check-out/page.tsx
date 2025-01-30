"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ReturnPolicy from "@/components/returnPolicy";
import { ProductTypes } from "@/type/productTypes";
import { CustomerTypes } from "@/type/customer";
import { client } from "@/sanity/lib/client";
import HeaderDesign from "@/components/HeaderDesign";
import { auth } from "@/firebase/firebase"; // Import Firebase Auth
import { User } from "firebase/auth"; // Import Firebase User type
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

const CreateCustomerInSanity = async (customerInfo: CustomerTypes) => {
  try {
    const customerObject = {
      _type: "customer",
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      address: customerInfo.address,
      city: customerInfo.city,
      phone: customerInfo.phone,
      email: customerInfo.email,
    };
    
    const response = await client.create(customerObject);
    console.log("Customer created:", response);
    return response;
  } catch (error) {
    console.error("Error creating customer in Sanity:", error);
    throw error;
  }
};

const CreateOrderInSanity = async (
  cartData: ProductTypes[],
  customer_id: string
) => {
  try {
    const orderObject = {
      _type: "order",
      customer: {
        _type: "reference",
        _ref: customer_id,
      },
      items: cartData.map((item: ProductTypes) => ({
        _key: uuidv4(), // Har item ke liye ek unique key generate karein
        product: {
          _type: "reference",
          _ref: item._id,
        },
        quantity: item.stockLevel || 1,
        price: item.price,
      })),
      order_date: new Date().toISOString(),
      total_amount: cartData.reduce(
        (total, item) => total + item.price * (item.stockLevel || 1),
        0
      ),
    };
    

    const response = await client.create(orderObject);
    console.log("Order created:", response);
    return response;
  } catch (error) {
    console.error("Error creating order in Sanity:", error);
    throw error;
  }
};

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<ProductTypes[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [customerInfo, setCustomerInfo] = useState<CustomerTypes>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });
  const [user, setUser] = useState<User | null>(null); // State to hold the user object
  const router = useRouter(); // Initialize useRouter from next/navigation

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // Redirect to login page if the user is not logged in
        router.push("/login");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  // Fetch cart items from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1), // Default to 1 if quantity is missing
    0
  );

  // Validate required fields
  const validateFields = () => {
    const requiredFields: (keyof CustomerTypes)[] = [
      "firstName",
      "lastName",
      "address",
      "city",
      "phone",
      "email",
    ];

    for (let field of requiredFields) {
      if (!customerInfo[field]) {
        alert(`Please fill in the ${field}`);
        return false;
      }
    }
    return true;
  };

  // Handle checkout process
  const handleCheckOut = async () => {
    if (validateFields()) {
      try {
        const customer = await CreateCustomerInSanity(customerInfo);
        await CreateOrderInSanity(cartItems, customer._id);
        alert("Order placed successfully!");
        console.log("Checkout completed successfully.");
        localStorage.removeItem("cartItems"); // Clear the cart after successful checkout
        router.push("/thank-you"); // Redirect to a thank-you page
      } catch (error) {
        console.error("Error during checkout:", error);
        alert("An error occurred during checkout. Please try again.");
      }
    }
  };

  // Handle input field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  // Handle payment method selection
  const handlePaymentChange = (method: string) => {
    setSelectedMethod(method);
  };

  // If the user is not logged in, show a message
  if (!user) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <p>Please log in to proceed to checkout.</p>
      </div>
    );
  }

  return (
    <>
      <HeaderDesign
        title="Checkout"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Checkout", href: "/check-out" },
        ]}
      />

      <div className="w-full min-h-screen flex justify-center items-center p-4 poppins">
        <div className="w-full max-w-[1242px] flex flex-col lg:flex-row gap-10">
          {/* Billing Details Section */}
          <div className="w-full lg:w-[608px] p-5 flex flex-col items-center">
            <div className="flex flex-col gap-9">
              <h1 className="font-semibold text-[28px] md:text-[36px]">
                Billing details
              </h1>

              {/* Billing Fields */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-3">
                  <label className="font-medium">First Name</label>
                  <input
                    name="firstName"
                    className="w-full md:w-[211px] h-[50px] md:h-[75px] rounded-[10px] border border-[#9F9F9F] px-5"
                    type="text"
                    onChange={handleInputChange}
                    value={customerInfo.firstName}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-medium">Last Name</label>
                  <input
                    name="lastName"
                    className="w-full md:w-[211px] h-[50px] md:h-[75px] rounded-[10px] border border-[#9F9F9F] px-5"
                    type="text"
                    onChange={handleInputChange}
                    value={customerInfo.lastName}
                  />
                </div>
              </div>

              <label className="font-medium">Company Name (Optional)</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
              />

              <label className="font-medium">Country / Region</label>
              <select className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F] text-[#9F9F9F]">
                <option value="sl">Sri Lanka</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="in">India</option>
              </select>

              <label className="font-medium">Street address</label>
              <input
                name="address"
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
                onChange={handleInputChange}
                value={customerInfo.address}
              />

              <label className="font-medium">Town / City</label>
              <input
                name="city"
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
                onChange={handleInputChange}
                value={customerInfo.city}
              />

              <label className="font-medium">Province</label>
              <select className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F] text-[#9F9F9F]">
                <option value="western">Western Province</option>
                <option value="eastern">Eastern Province</option>
                <option value="southern">Southern Province</option>
                <option value="northern">Northern Province</option>
                <option value="central">Central Province</option>
              </select>

              <label className="font-medium">ZIP code</label>
              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="text"
              />

              <label className="font-medium">Phone</label>
              <input
                name="phone"
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="tel"
                onChange={handleInputChange}
                value={customerInfo.phone}
              />

              <label className="font-medium">Email address</label>
              <input
                name="email"
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="email"
                onChange={handleInputChange}
                value={customerInfo.email}
              />

              <input
                className="w-full h-[50px] md:h-[75px] rounded-[10px] px-5 border border-[#9F9F9F]"
                type="email"
                placeholder="Additional information"
              />
            </div>
          </div>

          {/* Payment Details Section */}
          <div className="w-full lg:w-[608px] flex justify-center mt-12">
            <div className="w-full max-w-[533px] p-5 flex flex-col gap-8">
              <div className="flex justify-between text-[20px] md:text-[24px] font-medium">
                <h1>Product</h1>
                <h1>Subtotal</h1>
              </div>

              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-[#9F9F9F]">{item.name}</span>
                  <span className="font-light">
                    Rs. {(item.price * (item.quantity || 1)).toLocaleString()}
                  </span>
                </div>
              ))}

              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold text-[#B88E2F] text-[24px]">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>

              <hr className="border mt-5" />

              {/* Payment Options */}
              <div className="flex flex-col gap-4">
                <label className="flex items-center text-gray-500 text-lg">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank-transfer"
                    checked={selectedMethod === "bank-transfer"}
                    onChange={() => handlePaymentChange("bank-transfer")}
                    className="mr-2 w-5 h-5"
                  />
                  Direct Bank Transfer
                </label>
                {selectedMethod === "bank-transfer" && (
                  <p className="text-[#9F9F9F] font-light">
                    Make your payment directly into our bank account.
                  </p>
                )}

                <label className="flex items-center text-gray-500 text-lg">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash-on-delivery"
                    checked={selectedMethod === "cash-on-delivery"}
                    onChange={() => handlePaymentChange("cash-on-delivery")}
                    className="mr-2 w-5 h-5"
                  />
                  Cash On Delivery
                </label>
                {selectedMethod === "cash-on-delivery" && (
                  <p className="text-[#9F9F9F] font-light">
                    Pay with cash when your order is delivered.
                  </p>
                )}
              </div>

              <button
                onClick={handleCheckOut}
                className="w-full h-[64px] border border-black rounded-[15px] text-[20px]"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReturnPolicy />
    </>
  );
};

export default CheckOut;
