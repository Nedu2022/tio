import peaceImage from "../../assets/peace.jpg";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={peaceImage}
          alt="Peaceful Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Transparent Beige Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#F2EDE8", opacity: 0.4 }}
        ></div>
        {/* Content */}
        <div className="relative flex flex-col items-start justify-center h-full px-8 lg:px-16 text-left">
          <h1 className="font-sac text-5xl md:text-2xl lg:text-4xl text-primaryPink">
            Talk It Out With Betty
          </h1>
          <p className="mt-4 text-sm md:text-md lg:text-xs text-neutralGray pl-10">
            Discover the tools to navigate life's challenges with personalized
            guidance and support.
          </p>
          <div className="mt-8 flex items-center justify-center">
            {/* Text Styled as Button */}
            <p className="text-sm md:text-md font-body text-accentTeal cursor-pointer hover:text-mutedCoral transition-all">
              Get Started
            </p>
            {/* Arrow Below */}
            <FiArrowRight className="text-accentTeal text-xl animate-bounce-right hover:text-mutedCoral transition-all" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center h-[25rem] lg:px-18 p-3">
  {/* Left Section */}
  <span className="w-full text-center lg:text-left mb-6 lg:mb-0">
    <h2 className="text-left lg:text-center text-lg sm:text-xl lg:text-3xl sm:pt-10">
      Take The First Step Towards <br /> A Balanced & Fulfilling Life.
    </h2>
  </span>

  {/* Right Section */}
  <span className="flex flex-col text-neutralGray w-fit pr-10 ">
    <p className="text-sm lg:text-center text-left">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto
      voluptates, necessitatibus nostrum quibusdam vero reprehenderit
    </p>

    {/* Horizontal Line */}
    <div className="w-full h-0.5 bg-primaryPink my-4 mx-auto lg:mx-0"></div>

    <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center">
      {/* Button */}
      <a className="flex w-fit mt-4 px-10 py-3 bg-primaryPink text-white rounded-3xl hover:bg-mutedCoral mb-4 lg:mb-0">
          Book a Consultation
        <FiArrowRight className="text-accentTeal text-lg hover:text-mutedCoral ml-2" />
      </a>

      {/* Contact Info */}
      <p className="lg:text-center text-left">
        Or Call Us: <span className="font-bold">1-555-678-8888</span>
      </p>
    </div>
  </span>
</div>

    </>
  );
};

export default Hero;
