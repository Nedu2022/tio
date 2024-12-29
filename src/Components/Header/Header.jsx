import { useState } from "react";
import { ChevronDown } from "react-feather"; 

const Header = () => {
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);

  const toggleBookingsDropdown = () => {
    setIsBookingsOpen(!isBookingsOpen); 
  };

  return (
    <header className="bg-primaryBeige w-full shadow-md fixed top-0 z-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-lato text-neutralGray">T.I.O</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
          <a
              href="#"
              className="font-medium text-neutralGray transition-colors duration-200 px-4 py-2 rounded-md hover:bg-softBlush"
            >
              About
            </a>
            {/* Bookings Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 font-medium transition-colors duration-200"
                onClick={toggleBookingsDropdown}
              >
                <span className="text-neutralGray">Bookings</span>
                <ChevronDown className="h-4 w-4 text-neutralGray" />
              </button>

              {isBookingsOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white"
                  onMouseEnter={() => setIsBookingsOpen(true)}
                  onMouseLeave={() => setIsBookingsOpen(false)}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutralGray hover:bg-softBlush"
                  >
                    School Talk
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutralGray hover:bg-softBlush"
                  >
                    Depression
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutralGray hover:bg-softBlush"
                  >
                    Divorce Talks
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutralGray hover:bg-softBlush"
                  >
                    Professional Talks
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutralGray hover:bg-softBlush"
                  >
                    Relationship
                  </a>
                </div>
              )}
            </div>

         
            <a
              href="#"
              className="font-medium text-neutralGray transition-colors duration-200 px-4 py-2 rounded-md hover:bg-softBlush"
            >
              Contact
            </a>
            <a
              href="#"
              className="font-medium text-white bg-accentTeal transition-colors duration-200 px-4 py-2 rounded-md hover:bg-mutedCoral"
            >
              Sponsor
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
