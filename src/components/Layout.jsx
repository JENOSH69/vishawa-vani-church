// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="font-sans bg-white text-white">
      <div className="min-h-screen bg-gradient-to-br from-[#1E2A38] via-[#2F3C4E] to-[#4B5563] text-white font-sans">
        <Navbar />
        <main>
          <Outlet /> {/* This will render the current route's page */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
