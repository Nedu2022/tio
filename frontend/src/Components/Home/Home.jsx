import Header from "../Header/Header";
import mainImg from "../../assets/calm.jpg";
import Content from "../Content/Content";
import About from "../About/About";
import Appoint from "../Appointment/appoint";


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
            <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight font-nun">
              Healing Starts
              <br />
              With a Conversation
            </h1>
            <button className="hover:bg-pink-400 hover:text-white bg-primaryBeige text-primaryCoffee font-bold py-2 px-6 rounded mt-4">
              Book a Session
            </button>
          </div>
        </div>
      </div>

      <Content />
      <About />
      <Appoint/>
    </div>
  );
};

export default Home;
