// src/components/CommunityTestimonials.jsx
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../assets/slide1.jpeg";
import img2 from "../assets/slide2.jpeg";
import img3 from "../assets/slide3.jpeg";

const testimonials = [
  {
    text: "“This church has truly been a family to me. I found hope, love, and purpose here.”",
    name: "Reena Gurung",
    role: "Youth Member",
    image: img1,
  },
  {
    text: "“A place where hearts are healed and lives are restored through Christ.”",
    name: "David Rai",
    role: "Volunteer",
    image: img2,
  },
  {
    text: "“I’ve seen my family grow spiritually since joining Vishawa Vani Church.”",
    name: "Lhamu Sherpa",
    role: "Sunday School Teacher",
    image: img3,
  },
];

export default function CommunityTestimonials() {
  const [current, setCurrent] = useState(0);
    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-20 text-[#1E293B]">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl font-bold mb-12"> Our Community </h2>

        {/* Testimonial Card */}
        <div className="transition duration-700 ease-in-out px-4">
          <p className="text-xl  font-light mb-8 max-w-3xl mx-auto">
            {testimonials[current].text}
          </p>
          <div className="flex flex-col items-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full object-cover mb-2"
            />
            <p className="text-md font-semibold">{testimonials[current].name}</p>
            <p className="text-sm text-gray-500">{testimonials[current].role}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === idx ? "bg-sky-400 w-5" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
            ></button>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
          <button
            onClick={prev}
            className="bg-white border border-gray-300 hover:bg-gray-100 p-2 rounded-full shadow"
          >
            <ArrowLeft className="w-5 h-5 text-[#1E293B]" />
          </button>
          <button
            onClick={next}
            className="bg-white border border-gray-300 hover:bg-gray-100 p-2 rounded-full shadow"
          >
            <ArrowRight className="w-5 h-5 text-[#1E293B]" />
          </button>
        </div>
      </div>
    </section>
  );
}

