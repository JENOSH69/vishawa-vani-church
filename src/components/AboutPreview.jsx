// src/components/AboutPreview.jsx
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="bg-white text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Church</h2>
        <p className="text-lg md:text-xl mb-6">
          Vishawa Vani Church Darap is a faith-driven community rooted in worship,
          service, and love. We believe in transforming lives through the teachings of
          Jesus Christ.
        </p>
        <Link
          to="/about"
          className="inline-block bg-[#1E293B] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#334155] transition"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
