"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import Link from "next/link";
import HeaderDesign from "@/components/HeaderDesign";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // if (user) {
      //   router.push("/dashboard");
      // }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [router]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        // Retrieve user data from Local storage
        const registrationData = localStorage.getItem("registrationData");
        const {
          firstName = "",
          lastName = "",
          gender = "",
        } = registrationData ? JSON.parse(registrationData) : {};

        // Check if user data exists in Firestore
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
          // Save user data to Firestore after email verification
          await setDoc(doc(firestore, "users", user.uid), {
            firstName,
            lastName,
            gender,
            email: user.email,
          });
        }
        // router.push("/dashboard");
      } else {
        setError("Please verify your email before Logging in.");
      }
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else {
        setError("An unknown error occurred. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <>
      <HeaderDesign
        title="My Account"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "My Account", href: "/myAccount" },
        ]}
      />
      <div className="flex flex-col my-28 lg:flex-row justify-around items-center lg:p-4">
        <div className="shadow-lg p-4 max-w-md lg:w-auto h-auto lg:h-[630px] poppins flex flex-col justify-center mt-10 lg:mt-0">
          <h1 className="font-semibold text-[24px] sm:text-[28px] lg:text-[36px]">
            Log In
          </h1>
          <form onSubmit={handleLogin} className="w-auto">
            {/* Email Field */}
            <div className="w-full max-w-md my-4">
              <label
                htmlFor="email"
                className="text-gray-800 text-sm mb-2 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
              />
            </div>
            {/* Password Fields */}
            <div className="w-full max-w-md my-4">
              <label
                htmlFor="password"
                className="text-gray-800 text-sm mb-2 block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
              />
            </div>

            {/* Display error message if there is an error */}
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <div className="flex items-center space-x-4 mt-5">
              <input
                type="checkbox"
                id="checkbox"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="checkbox"
                className="text-sm sm:text-base md:text-lg font-medium text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
              <button className="w-full sm:w-[215px] h-12 sm:h-[64px] text-sm sm:text-[20px] border-[1px] border-black rounded-[15px]">
                Log In
              </button>
              <Link href="" className="hover:underline text-sm sm:text-base">
                Lost Your Password?
              </Link>
            </div>
          </form>
          <div className="mt-10 text-center flex justify-center gap-3">
            <p>Don't have an account?</p>
            <Link href={"/signup"} className="text-blue-500 underline">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
