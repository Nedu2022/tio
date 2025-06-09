import professionalImg from "../../assets/family.jpg";
import Accordion from "./accordion";
import { LuDot } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";

const FAQ = () => {
  return (
    <div className="relative w-full min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] flex items-center">
      {/* Background Image with Object Cover */}
      <div className="absolute inset-0">
        <img
          src={professionalImg}
          alt="Therapy background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 text-white">
          {/* Left side: Title + Contact */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <LuDot className="text-lg" />
                <span className="uppercase tracking-wide">FAQs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Contact Box */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl max-w-sm">
              <div className="flex -space-x-3 mb-4">
                {[10, 11, 12, 13].map((id, i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
                    alt={`User ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="mb-2 text-white text-lg">Still have you any question?</p>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <BiSolidPhoneCall className="text-lg" />
                +01 789 859 664
              </div>
            </div>
          </div>

          {/* Right side: Accordion */}
          <div className="w-full lg:w-1/2">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;