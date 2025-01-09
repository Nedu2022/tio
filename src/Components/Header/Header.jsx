import { useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import { LuCircleUserRound } from "react-icons/lu";
import tLogo from "../../assets/TIO-logo.png";

const Header = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <header className="text-primaryBeige w-full fixed top-0 z-[1000]">
      <div className="px-8">
        <div className="flex items-center mx-14 justify-between h-20">
        
          <div className="flex flex-row items-center">
          <img src={tLogo} alt="Logo" className="h-24" />
            <h1 className="text-2xl font-lato text-primaryBeige font-bold">T. I. O</h1>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8 opacity-100">
      {/* Navigation Items */}
      <a
        href="#"
        className={`font-medium transition-colors duration-200 px-4 py-2 ${
          hoveredItem && hoveredItem !== "whyTalkItOut" ? "opacity-50" : "opacity-100"
        }`}
        onMouseEnter={() => handleMouseEnter("whyTalkItOut")}
        onMouseLeave={handleMouseLeave}
      >
        Why Talk It Out?
      </a>

      {/* Bookings Dropdown */}
      <div
        className={`relative ${
          hoveredItem && hoveredItem !== "bookings" ? "opacity-50" : "opacity-100"
        }`}
        onMouseEnter={() => handleMouseEnter("bookings")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center space-x-1 font-medium transition-colors duration-300">
          <span>Bookings</span>
          <span
            className={`transition-transform duration-500 ease-in-out ${
              hoveredItem === "bookings" ? "rotate-90" : "rotate-0"
            }`}
          >
            {hoveredItem === "bookings" ? (
              <ChevronRight className="h-4 w-4 text-neutralGray" />
            ) : (
              <ChevronDown className="h-4 w-4 text-neutralGray" />
            )}
          </span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 pt-4 px-2 pb-4 w-52 rounded-xl transition-opacity duration-300 ${
            hoveredItem === "bookings" ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <a
            href="#"
            className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
          >
            School Talk
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
          >
            Depression
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
          >
            Divorce Talks
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
          >
            Professional Talks
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
          >
            Relationship
          </a>
        </div>
      </div>

      <a
        href="#"
        className={`font-medium transition-colors duration-200 ${
          hoveredItem && hoveredItem !== "contact" ? "opacity-50" : "opacity-100"
        }`}
        onMouseEnter={() => handleMouseEnter("contact")}
        onMouseLeave={handleMouseLeave}
      >
        Contact
      </a>
      <LuCircleUserRound
        className={`text-xl ${
          hoveredItem && hoveredItem !== "userIcon" ? "opacity-100" : "opacity-100"
        }`}
        onMouseEnter={() => handleMouseEnter("userIcon")}
        onMouseLeave={handleMouseLeave}
      />
      <a
        href="#"
        className={`font-medium text-white bg-primaryCoffee transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-mutedCoral ${
          hoveredItem && hoveredItem !== "sponsor" ? "opacity-100" : "opacity-100"
        }`}
        onMouseEnter={() => handleMouseEnter("sponsor")}
        onMouseLeave={handleMouseLeave}
      >
        Sponsor
      </a>
    </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              className="flex flex-col items-center justify-between h-6 w-8 cursor-pointer group focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`h-0.5 w-full bg-primaryPink transition-all duration-300 ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                } group-hover:scale-x-70`}
              ></span>
              <span
                className={`h-0.5 w-full bg-primaryPink transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                } group-hover:scale-x-50`}
              ></span>
              <span
                className={`h-0.5 w-full bg-primaryPink transition-all duration-300 ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                } group-hover:scale-x-70`}
              ></span>
            </button>
          </div>

          {/* Mobile Dropdown and Navigation Menu */}
          <div
            className={`lg:hidden fixed top-20 right-0 bg-white w-full h-[calc(100vh-5rem)] transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-20" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col items-right lg:items-center space-y-12 mt-8 px-4">
              <a
                href="#"
                className="font-medium text-neutralGray transition-colors duration-200"
              >
                About
              </a>

              {/* Bookings Dropdown for Mobile */}
              <div className="relative w-content">
                <div
                  className="flex flex-col w-fit"
                  onClick={() => setIsBookingsOpen(!isBookingsOpen)}
                >
                  <button className="flex items-center space-x-1 font-medium transition-colors duration-300">
                    <span className="text-neutralGray">Bookings</span>
                    <span
                      className={`transition-transform duration-500 ease-in-out ${
                        isBookingsOpen ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      {isBookingsOpen ? (
                        <ChevronRight className="h-4 w-4 text-neutralGray" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-neutralGray" />
                      )}
                    </span>
                  </button>

                  {/* Mobile Dropdown Menu */}
                  {isBookingsOpen ? (
                    <div
                      className="w-full pt-4 pb-4 rounded-xl bg-white transition-all duration-300 opacity-100 transform ease-in-out scale-100"
                      onClick={(e) => e.stopPropagation()}
                      style={{ transform: "translateY(0)", opacity: 1 }}
                    >
                      <a
                        href="#"
                        className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
                      >
                        School Talk
                      </a>
                      <a
                        href="#"
                        className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
                      >
                        Depression
                      </a>
                      <a
                        href="#"
                        className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
                      >
                        Divorce Talks
                      </a>
                      <a
                        href="#"
                        className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
                      >
                        Professional Talks
                      </a>
                      <a
                        href="#"
                        className="block px-6 py-3 text-neutralGray hover:bg-softBlush transition-all duration-200"
                      >
                        Relationship
                      </a>
                    </div>
                  ) : (
                    <div className="w-full rounded-xl bg-white opacity-0 transform translate-y-[-10px] transition-all duration-300"></div>
                  )}
                </div>
              </div>

              <a
                href="#"
                className="font-medium text-neutralGray transition-colors duration-200"
              >
                Contact
              </a>
           
              <a
                href="#"
                className="w-fit font-medium text-white bg-primaryPink px-6 py-2 rounded-md transition-colors duration-200 hover:bg-mutedCoral"
              >
                Sponsor
              </a>
            </nav>
            <div className="flex space-x-6 px-4 pt-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-primaryPink transition-all duration-300"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-primaryPink transition-all duration-300"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-primaryPink transition-all duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
