// src/components/GetInvolved.jsx
import { MessageCircle, Phone, HandHeart, Users } from "lucide-react";
import img3 from "../assets/slide3.jpeg";

export default function GetInvolved() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1E293B] tracking-wide">
          Get Involved With Us
        </h2>

        {/* Prayer Request Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center border-t-8 border-gray-700">
            <HandHeart className="w-14 h-14 text-sky-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Send a Prayer Request</h3>
            <p className="text-md text-gray-600 mb-6">
              Let us pray for you. Share your needs and our church family will lift you in prayer.
            </p>
            <a
              href="https://wa.me/918101616286?text=Hello%2C%20please%20pray%20for%20me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1E293B] text-[#ffffff] px-6 py-3 rounded-full hover:bg-sky-400 transition shadow-md"
            >
              <MessageCircle className="w-5 h-5" /> Send Prayer
            </a>
          </div>

          {/* Meet the Team Header */}
          <div className="flex flex-col items-center justify-center text-center px-6">
            <Users className="w-14 h-14 text-sky-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Meet Our Pastors & Team</h3>
            <p className="text-md text-gray-600">
              Get to know the people who serve and lead at Vishawa Vani Church. Connect and grow together.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
           src={img3}
           alt="Pastor Mica Rai"
           className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-0 border-[#1E293B]"
          />

            <h4 className="text-xl font-bold text-[#1E293B]">Pastor Mica Rai</h4>
            <p className="text-sm text-gray-600 mb-4">Senior Pastor</p>
            <a
              href="https://wa.me/918101616286"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1E293B] hover:text-sky-800 font-medium"
            >
              <Phone className="w-4 h-4" /> Connect
            </a>
          </div>

          {/* More cards can go here later */}
        </div>
      </div>
    </section>
  );
}
