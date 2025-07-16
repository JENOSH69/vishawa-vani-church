// src/pages/AboutUs.jsx
import { Church, Eye, HeartHandshake } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-[#1E293B] w-fit mx-auto pb-2">
          About Us
        </h2>

        {/* About Church */}
        <div className="mb-12 flex flex-col md:flex-row items-start gap-6">
          <div className="bg-[#E6F4EA] p-6 rounded-lg shadow-md w-full md:w-1/3 flex items-center gap-4">
            <Church className="text-[#1E293B] w-10 h-10" />
            <div>
              <h3 className="text-xl font-semibold mb-1">About Church</h3>
              <p className="text-sm leading-relaxed">
                Vishawa Vani Church Darap, rooted in the hills of West Sikkim, is a community built
                on faith, prayer, and service. We exist to share Christ’s love and build strong spiritual lives.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-[#E6F0FA] p-6 rounded-lg shadow-md w-full md:w-1/3 flex items-center gap-4">
            <Eye className="text-[#1E293B] w-10 h-10" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Our Vision</h3>
              <p className="text-sm leading-relaxed">
                To raise disciples who live out the Gospel boldly, reflect Christ's character, and extend love
                to every corner of our community and beyond.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-[#FAF0E6] p-6 rounded-lg shadow-md w-full md:w-1/3 flex items-center gap-4">
            <HeartHandshake className="text-[#1E293B] w-10 h-10" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Our Mission</h3>
              <p className="text-sm leading-relaxed">
                Empower believers through Word, worship, and outreach. We aim to grow together
                as a family, serving the Lord faithfully and making an eternal impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
