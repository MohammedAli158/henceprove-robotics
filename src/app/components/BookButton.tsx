// components/BookButton.tsx
import Link from "next/link";
import React from "react";

export default function BookButton({ arg = "trial" }: { arg?: string }) {
  return (
   <Link href="/" >
    <button
      type="button"
      className="relative inline-flex items-center justify-center mx-auto
                 text-white font-bold px-6 py-3  bg-orange-400
                 overflow-hidden"
    >
      <span className="relative z-10 whitespace-nowrap">Book a free {arg}</span>

      {/* shimmer overlays (keeps the visual flair) */}
      <span className="absolute inset-0 pointer-events-none">
        <span className="absolute inset-0 bg-white/10 animate-pulse" />
        <span className="absolute top-0 left-0 w-full h-full
                         bg-gradient-to-r from-transparent via-white/30 to-transparent
                         animate-[shimmer_2s_infinite]" />
      </span>
    </button>
   </Link>
  );
}
