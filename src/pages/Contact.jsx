// src/pages/ContactUs.jsx
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white text-[#1E293B] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-sky-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p>Darap Village, West Sikkim, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-sky-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>+91 81016 16286</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-sky-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p>vishawavani.church@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="text-sky-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">WhatsApp</h4>
                <a
                  href="https://wa.me/918101616286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-lg shadow-md space-y-6">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1E293B] text-white py-2 rounded hover:bg-sky-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
