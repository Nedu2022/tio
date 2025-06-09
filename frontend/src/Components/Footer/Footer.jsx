// import {
//   FaPhoneAlt,
//   FaPinterestP,
//   FaXTwitter,
//   FaFacebookF,
//   FaInstagram,
// } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      {/* Top Banner */}
      <div className="bg-[#1e1e1e] text-white py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl text-xl xl:text-3xl">Get a free consultation</h2>
        <div className="flex flex-col items-center gap-4">
          <button className="bg-[#2c2c2c] px-5 py-2 rounded-md flex items-center gap-2">
            {/* <FaPhoneAlt /> */}
            <span>+01 789 859 664</span>
          </button>
          <button className="bg-[#9b9a84] text-white px-5 py-2 rounded-md font-medium">
            Free Consultation
          </button>
        </div>
      </div>

      {/* Main Info Section */}
      <div className="w-full py-12 px-6 md:px-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 items-start">
          {/* Logo + Heading */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img src="/hipno-logo.svg" alt="Hipno" className="w-8 h-8" />
              <span className="text-2xl font-serif text-[#9b9a84]">TIO</span>
            </div>
            <h3 className="text-3xl font-serif font-medium mb-6">
              We’re Here When You’re Ready.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 text-gray-800 text-sm gap-4">
              <div>
                <h4 className="font-semibold text-gray-500 mb-1">Phone Number</h4>
                <p className="font-medium">0761-8523-398</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-500 mb-1">Email Address</h4>
                <p className="font-medium">info@domainname.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-500 mb-1">Location</h4>
                <p className="font-medium">123 High Street LN1 AB United Kingdom</p>
              </div>
            </div>
          </div>

     

        </div>

        {/* Footer Links */}
        <div className="mt-10 border-t pt-4 text-sm text-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-2 md:mb-0">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </div>
          <p>Copyright © 2025 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
