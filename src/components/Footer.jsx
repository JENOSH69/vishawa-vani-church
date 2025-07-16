// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Vishawa Vani Church</h4>
          <p className="text-sm text-gray-300">
            Darap, West Sikkim<br />
            A Christ-centered community committed to worship, growth, and service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Church</a></li>
            <li><a href="#" className="hover:text-white transition">Teaching</a></li>
            <li><a href="#" className="hover:text-white transition">Events</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1E293B] rounded-full p-2 hover:bg-sky-400 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1E293B] rounded-full p-2 hover:bg-pink-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1E293B] rounded-full p-2 hover:bg-red-400 transition"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Vishawa Vani Church Darap. All rights reserved.
      </div>
    </footer>
  );
}
