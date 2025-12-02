"use client";

import Image from "next/image";
import React, { useState } from "react";
import bg from "../../../public/bgg.png";
import logo from "../../../public/icons8-google-logo-48.png";
import Link from "next/link";
import UniversalButton from "../components/UniversalButton";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlePasswordVisibility = () => {
    const passwordInputTag = document.getElementById("password") as HTMLInputElement;
    passwordInputTag.type = passwordInputTag.type === "text" ? "password" : "text";
  };

  const handleSubmit = () => {};
  const handleGoogleAuth = () => {};

  return (
    <section className="relative p-5 flex flex-col justify-center items-center min-h-[74vh] bg-white md:bg-transparent">

      {/* Image now behaves EXACTLY like SignUp */}
      <div className="hidden md:block">
        <Image
          src={bg}
          alt="background"
          fill
          className="absolute top-0 left-0 -z-50 object-cover"
        />
      </div>

      <div className="font-bold text-4xl md:text-5xl mb-5 pb-5 relative 
                      text-black md:text-white text-center">
        Welcome to HENCEPROVE{" "}
        <span className="text-orange-500">
          ROBOT<span className="text-black">ICS</span>
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-[380px]">

        <input
          type="text"
          value={username}
          placeholder="Username"
          className="mb-5 h-12 w-full rounded-md pl-5 border
                     bg-white text-black placeholder:text-black
                     md:bg-transparent md:text-white md:placeholder:text-white 
                     border-gray-400 md:border-white border-none
                     focus:outline-none"
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="relative w-full">
          <input
            type="text"
            id="password"
            value={password}
            placeholder="Password"
            className="h-12 w-full rounded-md pl-5 border border-none
                       bg-white text-black placeholder:text-black
                       md:bg-transparent md:text-white md:placeholder:text-white 
                       border-gray-400 md:border-white
                       focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer 
                       text-black md:text-white"
            onClick={handlePasswordVisibility}
          >
            👁️
          </span>
        </div>

        <button onClick={handleSubmit} className="mt-5 w-full flex justify-center">
          <UniversalButton arg="Submit" />
        </button>

        <div
          className="mt-10 p-5 w-full rounded-full 
                     bg-gray-100 md:bg-gray-500 cursor-pointer"
          onClick={handleGoogleAuth}
        >
          <div className="relative flex text-black md:text-white pr-10">
            Continue with Google
            <Image
              src={logo}
              height={35}
              alt="Google"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="mt-5 text-black md:text-white">
          {"Don't"} have an account?{" "}
          <Link href="/sign-up" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}
