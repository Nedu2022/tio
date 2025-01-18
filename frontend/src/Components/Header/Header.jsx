import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ChevronDown, ChevronRight } from "react-feather";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";
import tLogo from "../../assets/TIO-logo.png";

const Header = ({ currentVideo }) => {
  return (
    <header className="text-primaryBeige w-full fixed top-0 z-[1000]">
      <div className="px-8">
        <div className="flex items-center mx-14 justify-between h-20">
          <div className="flex flex-row items-center">
            <img
              src={tLogo}
              alt="Logo"
              className={`h-24 ${
                currentVideo === 3
                  ? "filter brightness-0 invert" // Fourth video: logo turns white
                  : ""
              }`}
            />
            <h1
              className={`text-2xl font-lato font-bold ${
                currentVideo === 2 ? "text-white-500" : "text-primaryCoffee"
              }`}
            >
              T. I. O
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center cursor-pointer text-white space-x-8 opacity-100">
  {["Why Talk It Out?", "Bookings", "Contact"].map((text, index) => (
    <a
      key={index}
      href="#"
      className={`font-medium transition-colors duration-200 ${
        currentVideo === 3 ? "text-primaryCoffee" : "text-white"
      }`}
    >
      {text}
    </a>
  ))}
  <LuCircleUserRound className={`text-xl ${currentVideo === 3 ? "text-primaryCoffee" : "text-white"}`} />
  <a
    href="#"
    className="font-medium text-white bg-primaryCoffee px-4 py-2 rounded-lg hover:bg-mutedCoral"
  >
    Sponsor
  </a>
</div>


          {/* Mobile Menu Placeholder */}
          <div className="lg:hidden">
            <button className="flex items-center">Menu</button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Define prop types for Header
Header.propTypes = {
  currentVideo: PropTypes.number.isRequired, // Ensure currentVideo is validated
};

export default Header;
