import { Box, Gift, AudioLines } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/voicetalk/123"); // Replace 123 with a dynamic ID if needed
  };
  return (
    <div className="bg-base-300">
      <div className=" mr-10 ml-10">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <Box color="#6246ea" />
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <Link
              to="/voicetalk/123"
              className="btn btn-ghost btn-circle"
              onClick={handleButtonClick}
            >
              <AudioLines color="#6246ea" />
            </Link>

            <button className="btn btn-ghost btn-circle">
              <Gift color="#6246ea" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
