import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import speakImage from "../../assets/speak.webp";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-24">
      <div
        className="w-[300px] h-[500px] overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 0 90%, 10% 100%, 90% 100%, 100% 90%, 100% 0)"
        }}
      >
        <img
          src={speakImage}
          alt="Custom Clip"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start justify-start gap-4 p-4 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/2">
        <div>
          <span className="header-btn flex items-center rounded-full text-black text-sm font-bold uppercase ">
            <LuDot className="text-xl" />
            About us
          </span>
          <h1 className="pt-10 text-xl">
            Guiding minds, healing <br /> hearts, finding peace
          </h1>
          <p className="pt-2 text-sm">
            At our mental therapy and counseling center, we are dedicated to
            guiding <br /> individuals on a journey toward inner peace and
            resilience...
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row w-full border-y-[0.5px] border-softBlush pt-4 pb-8 gap-4 px-4">
          <div className="w-full xl:w-1/2">
            <h2 className="text-lg font-semibold mb-2">Our Vision</h2>
            <p>
              Our vision is to create a world where mental wellness is
              accessible, stigma-free, and empowering, enabling individuals to
              lead.
            </p>
          </div>

          <div className="w-full xl:w-1/2">
            <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
            <div className="flex items-center text-black mb-1">
              <IoCheckmarkCircleOutline className="text-xl mr-2" />
              <p>Provide Compassionate Care</p>
            </div>
            <div className="flex items-center text-black mb-1">
              <IoCheckmarkCircleOutline className="text-xl mr-2" />
              <p>Promote Mental Wellness</p>
            </div>
            <div className="flex items-center text-black">
              <IoCheckmarkCircleOutline className="text-xl mr-2" />
              <p>Encourage Lifelong Healing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
