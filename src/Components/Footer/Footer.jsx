import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-neutralGray text-white py-12">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="font-body text-lg text-accentGold mb-4">About Us</h2>
          <p className="text-sm font-body text-primaryBeige leading-relaxed">
            We’re here to help you find clarity and peace. Our counseling platform is built to guide
            you through life’s challenges with compassion and care.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-body text-lg text-accentGold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-sm text-primaryBeige hover:text-accentTeal transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm text-primaryBeige hover:text-accentTeal transition-all duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm text-primaryBeige hover:text-accentTeal transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm text-primaryBeige hover:text-accentTeal transition-all duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="font-body text-lg text-accentGold mb-4">Connect With Us</h2>
          <p className="text-sm text-primaryBeige mb-4 font-body leading-relaxed">
            Follow us on social media to stay updated and inspired.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accentTeal transition-all duration-300"
            >
              <FiFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accentTeal transition-all duration-300"
            >
              <FiTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accentTeal transition-all duration-300"
            >
              <FiInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-primaryBeige pt-6 text-center text-sm">
        <p className="text-primaryBeige">
          © {new Date().getFullYear()} Counseling App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
