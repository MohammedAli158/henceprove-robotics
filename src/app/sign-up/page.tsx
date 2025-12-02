"use client";
import React from "react";
import { useState } from "react";
import bg from "../../../public/bgg.png";
import logo from "../../../public/icons8-google-logo-48.png";
import Link from "next/link";
import Image from "next/image";
import UniversalButton from "../components/UniversalButton";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handlePasswordVisibility = () => {
    const passwordInputTag = document.getElementById("password") as HTMLInputElement;
    if (passwordInputTag.type == "text") {
      passwordInputTag.type = "password";
    } else {
      passwordInputTag.type = "text";
    }
  };

  const handleSubmit = () => {};
  const handleGoogleAuth = () => {};

  return (
    <section className="p-5 relative flex flex-col justify-center items-center min-h-screen sm:min-h-[74vh]">

      <div className="hidden sm:block">
        <Image
          src={bg}
          alt="background"
          fill
          className="absolute top-0 left-0 -z-50 object-cover"
        />
      </div>

      <div className="font-bold text-3xl sm:text-5xl mb-5 pb-5 relative text-black sm:text-white text-center">
        Welcome to HENCEPROVE{" "}
        <span className="font-bold text-orange-500">ROBOTICS</span>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-none">

        <input
          type="text"
          value={username}
          placeholder="Username"
          className="relative h-10 w-full sm:w-85 mb-5 rounded-md pl-5 focus:outline-none
                     text-black placeholder:text-black border-black
                     sm:text-white sm:placeholder:text-white sm:border-white"
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="relative w-full sm:w-85">
          <input
            type="text"
            id="password"
            value={password}
            placeholder="Password"
            className="relative h-10 w-full sm:w-85 rounded-md pl-5 focus:outline-none
                       text-black placeholder:text-black border-black
                       sm:text-white sm:placeholder:text-white sm:border-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handlePasswordVisibility}
          >
            👁️
          </span>
        </div>

        <input
          type="text"
          value={email}
          placeholder="Email"
          className="relative h-10 w-full sm:w-85 mt-5 mb-5 rounded-md pl-5 focus:outline-none
                     text-black placeholder:text-black border-black
                     sm:text-white sm:placeholder:text-white sm:border-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubmit}>
          <UniversalButton arg="Submit" />
        </button>

        <div className="mt-10 p-5 bg-gray-100 w-full sm:w-85 z-5 rounded-full">
          <div
            className="relative flex pr-10 text-black sm:text-white"
            onClick={handleGoogleAuth}
          >
            Continue with Google
            <Image
              src={logo}
              height={35}
              alt="Google"
              className="absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        <div className="text-black sm:text-white mt-5 text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}
