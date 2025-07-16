import { useState, useEffect } from "react";
import { ChevronRight, X, PlayCircle, Heart } from "lucide-react";
import img1 from "../assets/slide1.jpeg";
import img2 from "../assets/slide2.jpeg";
import img3 from "../assets/slide3.jpeg";
import qrImg from "../assets/qr.jpeg"; // ✅ QR image
// PDF is placed in public/thank-you.pdf

const images = [img1, img2, img3];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const setSlide = (index) => setCurrent(index);

  const handleThankYou = () => {
    setShowDonateModal(false);
    setThankYou(true);

    // ✅ Trigger PDF download
    const link = document.createElement("a");
    link.href = "/thank you.pdf"; // File should be in public folder
    link.download = "VishawaVaniThankYou.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // ✅ Hide thank you after a few seconds
    setTimeout(() => setThankYou(false), 4000);
  };

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={images[current]}
        alt="Church slide"
        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:px-16 text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Welcome to</span>{" "}
            <span className="text-sky-300">Vishawa Vani Church</span>
          </h1>

          <div className="flex gap-4">
            <button
              onClick={() => setShowDonateModal(true)}
              className="bg-white text-[#1E293B] px-6 py-3 rounded-md font-semibold hover:bg-sky-300 transition"
            >
              Donate
            </button>

            <button
              onClick={() => setShowVideoModal(true)}
              className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-[#1E293B] transition"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Video
            </button>
          </div>

          {thankYou && (
            <div className="mt-4 text-green-300 font-semibold">
              ❤️ Thank you for your generous donation!
            </div>
          )}
        </div>

        {/* Dots and Arrow */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                current === index ? "bg-sky-300" : "bg-white/40"
              }`}
            />
          ))}
          <button
            onClick={nextSlide}
            className="mt-6 p-2 bg-white text-[#1E293B] rounded-full hover:bg-sky-300 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="absolute bottom-6 right-6 flex flex-col items-end text-white">
          <div className="flex gap-1 mb-2">
            <div className="w-1 h-8 bg-white"></div>
            <div className="w-1 h-8 bg-sky-300"></div>
          </div>
          <div className="text-sm md:text-base space-y-2 text-right">
            <div>
              <div className="text-xl underline font-bold">1999</div>
              <div className="text-gray-200 text-xs">Establishment</div>
            </div>
            <div>
              <div className="text-xl underline font-bold">200</div>
              <div className="text-gray-200 text-xs">Total Community</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative w-[90%] md:w-[60%] aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/TFsZy9t-qDc"
              title="Church Video"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-2 right-2 text-white bg-black/70 hover:bg-black rounded-full p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white text-[#1E293B] rounded-lg p-6 max-w-md w-full relative text-center">
            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
              <Heart className="text-pink-500" /> Donate to Vishawa Vani Church
            </h2>

            <p className="text-sm mb-4">
              Scan the QR code or click the link to donate securely via UPI.
            </p>

            <img
              src={qrImg}
              alt="Donate QR"
              className="w-48 h-48 mx-auto mb-4"
            />

            <a
              href="upi://pay?pa=jenoshmuringla@oksbi&pn=VishawaVaniChurch&cu=INR"
              className="inline-block bg-[#1E293B] text-white px-4 py-2 rounded-md hover:bg-sky-400 transition"
            >
              Open in UPI App
            </a>

            <div className="mt-4">
              <button
                onClick={handleThankYou}
                className="text-sm text-sky-500 underline"
              >
                I have donated – Download Thank You Note
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
