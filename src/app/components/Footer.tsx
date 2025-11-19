export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-white text-2xl font-semibold tracking-wide">
          <span className="text-orange-500">Hence</span>Prove
        </div>

        {/* Buttons / Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="/faq" className="hover:text-orange-400 transition">FAQ</a>
          <a href="/privacy-policy" className="hover:text-orange-400 transition">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-orange-400 transition">Terms & Conditions</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} HenceProve. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
