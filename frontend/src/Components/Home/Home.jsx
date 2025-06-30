import Header from "../Header/Header";
import mainImg from "../../assets/calm.jpg";
import About from "../About/About";
import Services from "../ServiceComponent/Services";
import FAQ from "../FAQs/FAQ";
import { LuDot } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Header />


        <div
          style={{ backgroundImage: `url(${mainImg})` }}
          className="relative flex-grow z-10 h-screen w-full bg-cover bg-center bg-fixed inset-0" 
        >

        <div className="absolute inset-0 flex items-center justify-end bg-neutralGray bg-opacity-50  px-4 sm:px-8 md:px-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-white text-right "
          >
            <span className="flex items-center justify-end mb-6 leading-tight font-nun">
              <LuDot className="text-xl" />
              <h1>WELCOME TO TIO</h1>
            </span>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight font-nun">
              Healing Starts
              <br />
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                With{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                a{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.0 }}
              >
                Conversation
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              Are you passionate about helping others on their mental health
              journey? Join our dedicated team of compassionate professionals.
            </motion.p>
            <button className="flip-hover mt-10">
              <span className="flip-text"> Book an Appointment</span>
            </button>
          </motion.div>
        </div>

        <div className="border-t border-softBlush absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-4 py-6 max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white"
          >
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
          </motion.div>
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
