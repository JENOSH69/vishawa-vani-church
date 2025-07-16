import { useState } from "react";
import { Filter } from "lucide-react";
import christmas1 from "../assets/christmas.jpeg";
import easter1 from "../assets/eastersunday.jpeg";
import goodFriday1 from "../assets/goodfriday.jpeg";
import palmSunday1 from "../assets/palmsunday.jpeg";
//import members from "../assets/members.jpg";

const categories = [
  { label: "All", value: "all" },
  { label: "Christmas", value: "christmas" },
  { label: "Palm Sunday", value: "palm" },
  { label: "Easter Sunday", value: "easter" },
  { label: "Good Friday", value: "goodfriday" },
  { label: "Church Members", value: "members" },
];

const images = [
  { src: christmas1, category: "christmas" },
  { src: easter1, category: "easter" },
  { src: goodFriday1, category: "goodfriday" },
  { src: palmSunday1, category: "palm" },
  //{ src: members, category: "members" },
];

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filteredImages =
    active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Mobile Dropdown */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Gallery</h2>
          <div className="md:hidden relative">
            <select
              className="appearance-none border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <Filter className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Desktop filter buttons */}
        <div className="hidden md:flex gap-6 mb-10 border-t border-b border-gray-300 py-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`text-sm font-medium hover:text-sky-500 transition border-b-2 pb-1 px-2 ${
                active === cat.value
                  ? "border-sky-500 text-sky-600"
                  : "border-transparent text-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded shadow-md">
              <img
                src={img.src}
                alt=""
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
