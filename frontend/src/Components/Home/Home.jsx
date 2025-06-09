import Header from "../Header/Header";
import mainImg from "../../assets/calm.jpg";
import About from "../About/About";
import Services from "../ServiceComponent/Services";
import FAQ from "../FAQs/FAQ";
import { LuDot } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <div className="relative flex-grow z-10 h-screen">
        <img
          src={mainImg}
          alt="Background"
          className="w-full h-screen object-cover inset-0"
        />

        <div className="absolute inset-0 flex items-center justify-end bg-neutralGray bg-opacity-50  px-4 sm:px-8 md:px-16 z-10">
          <div className="text-white text-right ">
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
              journey? Join our dedicated team of compassionate professionals.
            </p>
            <button className="flip-hover mt-10">
              <span className="flip-text"> Book an Appointment</span>
            </button>
          </div>
        </div>

        <div className="border-t border-softBlush absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-4 py-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white">
            <div className="flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-sm" />
              <p>Individual Counselling</p>
            </div>

            <div className="flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-sm" />
              <p>Couple Counselling</p>
            </div>

            <div className="flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-sm" />
              <p>Child Counselling</p>
            </div>

            <div className="flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-sm" />
              <p>Family Counselling</p>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <FAQ />

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
