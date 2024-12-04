import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./Navbar/Navbar";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VoiceTalk from "./pages/VoiceTalk";

export default function App() {
  return (
    <Router>
      <div className="">
        <Navbar />

        <HeroSection />
        <FaqSection />
        <Users />
        <Footer />
      </div>
      <Routes>
        <Route path="/voicetalk/:id" element={<VoiceTalk />} />
      </Routes>
    </Router>
  );
}
