import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const DelogisHeader = () => {
  return (
    <div className="flex w-full">

      {/* LEFT SECTION */}
      <div className="bg-[#F4EFEC] flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 w-[25%] min-w-fit rounded-l-lg">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-[#1e1e1e]">Delogis</h1>
            <p className="text-xs text-gray-500">Psychology & Counseling</p>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="bg-white px-6 md:px-12 py-3 w-full flex justify-between items-center rounded-none">
        {/* NAV */}
        <nav className="flex items-center gap-6 font-medium text-gray-700 text-base">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/about" className="hover:text-primary transition">About</a>
          <a href="/services" className="hover:text-primary transition">Services</a>
          <a href="/cases" className="hover:text-primary transition">Cases</a>
          <a href="/contact" className="hover:text-primary transition">Contact</a>
          <a href="/blog" className="hover:text-primary transition">Blog</a>
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <span className="w-px h-6 bg-[#D4B0A3]"></span>
          <FiSearch className="text-xl text-gray-700 cursor-pointer hover:opacity-70" />
          <FiShoppingCart className="text-xl text-gray-700 cursor-pointer hover:opacity-70" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center bg-[#5B3B2E] text-white px-4 py-3 gap-3 rounded-r-lg">
        {/* SOCIALS */}
        <div className="flex items-center gap-3">
          <FaTwitter className="cursor-pointer hover:opacity-80" />
          <FaFacebookF className="cursor-pointer hover:opacity-80" />
          <FaPinterestP className="cursor-pointer hover:opacity-80" />
          <FaInstagram className="cursor-pointer hover:opacity-80" />
        </div>

        {/* Divider */}
        <div className="h-full w-px bg-white mx-3"></div>

        {/* BUTTON */}
        <div className="bg-[#1C1411] px-4 py-2 rounded-md relative">
          <button className="font-bold text-sm whitespace-nowrap">
            Make an Appointment
          </button>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-[#C6977F] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DelogisHeader;
