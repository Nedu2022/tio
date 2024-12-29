import peaceImage from '../../assets/peace.jpg';
import {  FiArrowRight } from 'react-icons/fi'; 

const Hero = () => {
  return (
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
        style={{ backgroundColor: '#F2EDE8', opacity: 0.4 }}
      ></div>
      {/* Content */}
      <div className="relative flex flex-col items-start justify-center h-full px-8 lg:px-16 text-left">
        <h1 className="font-sac text-5xl md:text-2xl lg:text-4xl text-accentGold">
          Talk It Out With Betty
        </h1>
        <p className="mt-4 text-sm md:text-md lg:text-xs text-neutralGray pl-10">
          Discover the tools to navigate life's challenges with personalized guidance and support.
        </p>
        <div className="mt-8 flex items-center">
          {/* Text Styled as Button */}
          <p className="text-sm md:text-md font-body text-accentTeal cursor-pointer hover:text-mutedCoral transition-all">
            Get Started
          </p>
          {/* Arrow Below */}
          <FiArrowRight className="mt-2 text-accentTeal text-xl animate-bounce-right hover:text-mutedCoral transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
