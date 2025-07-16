import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Hero from "./components/Hero";
import ServiceTime from "./components/ServiceTime";
import AboutPreview from "./components/AboutPreview";
import GetInvolved from "./components/GetInvolved";
import CommunityTestimonials from "./components/CommunityTestimonials";

import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Teaching from "./pages/Teaching"; // 👈 Import your Teaching page

function Home() {
  return (
    <>
      <Hero />
      <ServiceTime />
      <AboutPreview />
      <GetInvolved />
      <CommunityTestimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teaching" element={<Teaching />} /> {/* ✅ New route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
