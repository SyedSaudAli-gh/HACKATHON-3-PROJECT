"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import Image from "next/image";
import { CustomerTypes } from "@/type/customer";
import { client } from "@/sanity/lib/client";

// Custom User Interface
interface User {
  displayName: string;
  email: string;
  uid: string;
  photoURL: string; // Made this required to avoid errors
}

function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state for customer data
  const [error, setError] = useState<string | null>(null); // Error handling

  // Fetch Firebase User
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // Convert Firebase User to custom User type
        setUser({
          displayName: currentUser.displayName || "N/A",
          email: currentUser.email || "N/A",
          uid: currentUser.uid,
          photoURL: currentUser.photoURL || "/1.png", // Default image if photoURL is null
        });
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch Address Data from Sanity
  useEffect(() => {
    const fetchAddressData = async () => {
      setIsLoading(true); // Set loading to true when starting to fetch
      try {
        if (user?.uid) {
          const customerData = await client.fetch(
            `*[_type == "customer" && _id == $userId]{address, city, phone, email}`,
            { userId: user?.uid }
          );
          console.log("Fetched Customer Data:", customerData);

          if (customerData && customerData.length > 0) {
            setCustomerInfo(customerData[0]);
          } else {
            setError("No customer data found.");
          }
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setError("Error fetching customer data.");
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    if (user) {
      fetchAddressData();
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col gap-3 bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl text-center font-bold mb-4">Profile</h1>
        {user ? (
          <div className="flex flex-col md:flex-row gap-6 my-5">
            <div className="space-y-4 w-full md:w-2/3">
              <p>
                <span className="font-semibold">Name:</span> {user.displayName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">User ID:</span> {user.uid}
              </p>
              {/* Address Details from Sanity */}
              {isLoading ? (
                <p>Loading address information...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {customerInfo?.address || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">City:</span>{" "}
                    {customerInfo?.city || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {customerInfo?.phone || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {customerInfo?.email || "N/A"}
                  </p>
                </>
              )}
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={user.photoURL}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-lg text-white object-cover"
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading user information...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
