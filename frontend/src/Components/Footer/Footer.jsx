const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      {/* Top Banner */}
      <div className="bg-[#1e1e1e] text-white py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl text-xl xl:text-3xl">Want To Be A Volunteer?</h2>
        <div className="flex flex-col items-center gap-4">
          <button className="bg-[#9b9a84] text-white px-7 py-4 rounded-full font-medium">
            <span>Send A Message</span>
          </button>
        </div>
      </div>

      {/* Main Info Section */}
      <div className="w-full py-12 px-6 md:px-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 items-start">
          {/* Logo + Contact Info */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img src="/hipno-logo.svg" alt="Hipno" className="w-8 h-8" />
              <span className="text-3xl font-serif text-[#9b9a84]">TIO</span>
            </div>
            <h3 className="text-xl font-serif font-medium mb-6">
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
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primaryCoffee">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-primaryCoffee transition">Home</a></li>
              <li><a href="#" className="hover:text-primaryCoffee transition">About</a></li>
              <li><a href="#" className="hover:text-primaryCoffee transition">Book a Session</a></li>
              <li><a href="#" className="hover:text-primaryCoffee transition">Resources</a></li>
              <li><a href="#" className="hover:text-primaryCoffee transition">FAQ</a></li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-lg font-semibold mb-2 text-primaryCoffee">Account</h4>
            <button className="bg-primaryCoffee text-white px-5 py-2 rounded-full w-full text-sm font-medium">
              Login
            </button>
            <button className="border border-primaryCoffee text-primaryCoffee px-5 py-2 rounded-full w-full text-sm font-medium hover:bg-primaryCoffee hover:text-white transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
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
