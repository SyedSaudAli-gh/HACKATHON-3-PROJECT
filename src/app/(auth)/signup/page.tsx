"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import HeaderDesign from "@/components/HeaderDesign";
import ReturnPolicy from "@/components/returnPolicy";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);

      // Temporarily store user data in local storage
      localStorage.setItem(
        "registrationData",
        JSON.stringify({ firstName, lastName, gender, email })
      );

      setMessage(
        "Registration successful! Please check your email for verification."
      );

      // Clear form fields
      setFirstName("");
      setLastName("");
      setGender("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In Successful: ", user);

      // Store user data locally or redirect
      localStorage.setItem(
        "googleUserData",
        JSON.stringify({ displayName: user.displayName, email: user.email })
      );

      // setMessage("Google Sign-In Successful! Redirecting...");
      // router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred during Google Sign-In.");
      }
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
        <div className="shadow-lg p-4 max-w-md lg:w-auto h-auto lg:h-auto rounded-lg poppins flex flex-col justify-center mt-10 lg:mt-0">
          <h1 className="font-semibold text-[24px] sm:text-[28px] lg:text-[36px]">
            Create an Account
          </h1>
          <form onSubmit={handleSignUp} className="w-auto">
            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="w-full max-w-md my-4">
                <label
                  htmlFor="firstName"
                  className="text-gray-800 text-sm mb-2 block"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="w-full max-w-md my-4">
                <label
                  htmlFor="lastName"
                  className="text-gray-800 text-sm mb-2 block"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <label
              htmlFor="gender"
              className="text-gray-800 text-sm mb-2 block"
            >
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full h-8 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
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
            <div className="grid sm:grid-cols-2 gap-8">
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
              <div className="w-full max-w-md my-4">
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-800 text-sm mb-2 block"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full h-12 sm:h-14 lg:h-16 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-500 text-sm">{message}</p>}
            <button
              type="submit"
              className="w-full sm:w-[215px] h-12 sm:h-[64px] bg-black text-white hover:bg-gray-800 text-sm sm:text-[20px] rounded-[15px]"
            >
              Sign Up
            </button>
          </form>
          {/* Google Sign-In Button */}
          <div className="mt-4 flex justify-center gap-10">
            <button onClick={handleGoogleSignIn}>
              <IoLogoGoogle className="text-5xl" />
            </button>
            <button>
              <FaFacebookSquare className="text-5xl" />
            </button>
          </div>
          <div className="px-10">
            <p className="max-w-md text-justify mt-10 text-sm sm:text-base">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="max-w-md text-justify mt-5 text-sm sm:text-base">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy.</span>
            </p>
          </div>
        </div>
      </div>
      <ReturnPolicy />
    </>
  );
}

export default SignUp;
