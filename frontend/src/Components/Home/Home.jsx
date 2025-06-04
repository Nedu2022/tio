import Header from "../Header/Header";
import mainImg from "../../assets/calm.jpg";
import Content from "../Content/Content";
import About from "../About/About";
import Appoint from "../Appointment/appoint";
import { LuDot } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="relative">
      <Header />

      <div className="h-screen relative">
        <img
          src={mainImg}
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 md:px-16 z-10">
          <div className="text-white text-right w-full">
            <span className="flex items-center justify-end mb-6 leading-tight font-nun">
              <LuDot className="text-xl" />
              <h1>WELCOME TO TIO</h1>
            </span>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight font-nun">
              Healing Starts
              <br />
              With a Conversation
            </h1>
            <p>
              Are you passionate about helping others on their mental health
              journey? <br />
              Join our dedicated team of compassionate professionals.
            </p>
            <button className="flip-hover mt-10">
              <span className="flip-text"> Book an Appointment</span>
            </button>
          </div>
        </div>

        <div className="border-t-[0.5px] border-softBlush absolute bottom-0 left-1/2 transform -translate-x-1/2 min-w-[1200px] max-w-max flex justify-center items-center gap-24 px-4 py-10 ">
          <span className="flex items-center gap-2 text-white">
            <IoCheckmarkCircleOutline className="text-xl" />
            <p>Individual Counselling</p>
          </span>

          <span className="flex items-center gap-2 text-white">
            <IoCheckmarkCircleOutline className="text-xl" />
            <p>Group Therapy</p>
          </span>

          <span className="flex items-center gap-2 text-white">
            <IoCheckmarkCircleOutline className="text-xl" />
            <p>Psychiatric Help</p>
          </span>

          <span className="flex items-center gap-2 text-white">
            <IoCheckmarkCircleOutline className="text-xl" />
            <p>Online Support</p>
          </span>
        </div>
      </div>

      <Content />
      <About />
      <Appoint />
    </div>
  );
};

export default Home;
