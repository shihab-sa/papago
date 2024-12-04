import { AudioLines } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import man from "../assets/images/hero.png";

function HeroSection() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/voicetalk/123"); // Replace 123 with a dynamic ID if needed
  };

  return (
    <div className="hero bg-base-200 min-h-screen bg-gradient-to-r from-green-200 to-blue-500 flex flex-col items-center justify-center px-4 md:px-8">
      <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center gap-8 w-full">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img src={man} alt="hero" className="max-w-full h-auto rounded-lg" />
        </div>
        {/* Content Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
            Papago
          </h1>
          <p className="text-black text-base md:text-lg lg:text-xl mb-6">
            AI-powered translation, voice translation, and conversation mode.
            Choose Bangla and English, then use the microphone for speaking.
          </p>

          <Link
            to="/voicetalk/123"
            className="btn btn-primary flex items-center justify-center gap-2 px-4 py-2 text-sm md:text-base lg:text-lg"
            onClick={handleButtonClick}
          >
            Practicing
            <AudioLines />
          </Link>
          {/* <button className="" onClick={goToAbout}>
            Practicing
            <AudioLines />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
