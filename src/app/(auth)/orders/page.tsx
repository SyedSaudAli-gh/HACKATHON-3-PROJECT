"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import HeaderDesign from "@/components/HeaderDesign";
import { auth } from "@/firebase/firebase"; // Import Firebase Auth
import { User } from "firebase/auth"; // Import Firebase User type
import { useRouter } from "next/navigation"; // Use next/navigation for routing

// Define the type for an order
type Order = {
  _id: string;
  order_date: string;
  items: {
    product_name: string;
    product_price: number;
    product_quantity: number;
  }[];
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); // State to hold the user object
  const router = useRouter(); // Initialize useRouter

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchOrders(user.email); // Fetch orders for the logged-in user
      } else {
        router.push("/login"); // Redirect to login page if the user is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  // Fetch orders from Sanity based on the user's email
  const fetchOrders = async (email: string | null) => {
    if (!email) return;

    try {
        const query = `*[_type == "order" && customer._ref == $customerId] {
            _id,
            order_date,
            total_amount,
            status,
            items[] {
              product-> {
                name,
                price,
                imagePath
              },
              quantity,
              price
            }
          }`;
          const params = { customerId: "customer-123" };
          const orders = await client.fetch(query, params);
      setOrders(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // If the user is not logged in, show a message
  if (!user) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <p>Please log in to view your orders.</p>
      </div>
    );
  }

  // If loading, show a loading spinner
  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <p>Loading your orders...</p>
      </div>
    );
  }

  return (
    <>
      <HeaderDesign
        title="Your Orders"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Orders", href: "/orders" },
        ]}
      />

      <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 poppins">
        <div className="w-full max-w-[1242px]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#B88E2F] mb-8">
            Your Orders
          </h1>

          {orders.length === 0 ? (
            <p className="text-lg text-gray-700">You have no orders yet.</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">
                      Order ID: {order._id}
                    </h2>
                    <p className="text-gray-600">
                      Date: {new Date(order.order_date).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <div>
                          <p className="text-lg font-medium">
                            {item.product_name}
                          </p>
                          <p className="text-gray-600">
                            Quantity: {item.product_quantity}
                          </p>
                        </div>
                        <p className="text-lg font-semibold">
                          Rs. {item.product_price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-xl font-bold">
                      Total: Rs.{" "}
                      {order.items
                        .reduce(
                          (total, item) =>
                            total + item.product_price * item.product_quantity,
                          0
                        )
                        .toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;