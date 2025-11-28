"use client";

import BookButton from "./BookButton";
import CertifiedSection from "./CertifiedSection";

export default function CertifiedSectionWrapper() {
  return (
    <section className="relative mb-15 overflow-x-hidden">
      <div className="font-bold text-4xl text-center pt-5 mb-2">
        Join 5 million+ students worldwide,
      </div>
      <div className="font-bold text-4xl text-center mb-5">
        certified by HenceProve Robotics
      </div>

      <div className="h-[76vh] relative w-full max-w-[100vw] overflow-x-hidden">
        <CertifiedSection />
        <div className="absolute my-5 left-1/2 -translate-x-1/2">
          <BookButton />
        </div>
      </div>
    </section>
  );
}
