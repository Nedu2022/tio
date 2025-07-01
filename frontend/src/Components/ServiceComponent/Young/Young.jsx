import Header from "../../Header/Header";
import Youvideo from "../../../assets/young.mp4";
import { IoMdArrowDropright } from "react-icons/io";
import Footer from "../../Footer/Footer";
import TruamaBanner from "../../../assets/banner-one-shape-1.png";
import { RiPsychotherapyFill } from "react-icons/ri";
import { ImHappy2 } from "react-icons/im";
import relationship from "../../../assets/relationship.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
  { label: "Dating & Relationship", path: "/services/dating-relationship" },
  { label: "Self Esteem Issues", path: "/services/self-esteem" },
  { label: "Family Psycology", path: "/services/family-psycology" },
  { label: "Career Counseling", path: "/services/career-counseling" },
  { label: "Anxiety & Grief", path: "/services/anxiety-grief" },
  { label: "Young & Adult Intensive", path: "/young-adult" }
];

const steps = [
  { id: 1, title: "Book an Appointment", icon: <FaCalendarAlt /> },
  { id: 2, title: "Therapy Session", icon: <RiPsychotherapyFill /> },
  { id: 3, title: "Gain Confidence", icon: <ImHappy2 /> }
];

export default function YoungBookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col">
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="m-3 lg:m-0 lg:mx-0 text-primaryCoffee shadow-lg">
            <Header />
          </div>
        </div>
        <div className="relative h-96 mt-28 lg:mt-40 lg:mx-10 opacity-0 animate-fadeIn transition-opacity duration-700">
          <video
            className="w-full h-full object-cover lg:rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={Youvideo} type="video/mp4" />
          </video>

          <div className="absolute flex flex-col justify-center inset-0 bg-gradient-to-br from-black/80 to-transparent lg:rounded-3xl pointer-events-none">
            <h1 className="text-white items-center justify-center flex text-lg lg:text-3xl">
              &quot;Having a Broken Relationship?&quot;
            </h1>
            <p className="items-center justify-center flex text-white uppercase">
              Services <IoMdArrowDropright />
              <span>Young & Adult Intensive</span>
            </p>
          </div>
        </div>

        <section className="flex flex-col lg:flex-row gap-12 p-3 lg:p-6 lg:mx-40 mt-14 lg:mt-0 lg:pt-20 bg-white text-gray-800">
          <aside className="w-fit h-fit lg:w-1/3 space-y-4 border rounded-md p-2 lg:p-4">
            {categories.map((cat) => {
              const isActive = location.pathname === cat.path;
              return (
                <button
                  key={cat.path}
                  onClick={() => navigate(cat.path)}
                  className={`relative group overflow-hidden w-full text-left px-2 lg:px-4 py-3 rounded-md border transition-colors duration-300
                ${
                  isActive
                    ? "bg-primaryCoffee text-white font-semibold"
                    : "bg-white text-gray-700 hover:text-white"
                }
                  `}
                >
                  {/* Ripple effect */}
                  <span className="absolute inset-0 bg-primaryCoffee scale-0 group-hover:scale-100 transition-transform duration-[300ms] origin-center rounded-md z-0" />

                  {/* Text */}
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {cat.label}
                  </span>
                </button>
              );
            })}

            <div className="bg-primaryCoffee text-white p-3 lg:p-6 rounded-lg mt-6">
              <img src={TruamaBanner} alt="" />
              <h3 className="text-md font-semibold mb-4">
                Experiencing Similar Problems? Book a Session
              </h3>
              <button className="bg-white text-primaryCoffee font-semibold py-2 px-4 rounded-md mt-2">
                Book a Session
              </button>
            </div>
          </aside>

          <main className="w-full lg:w-3/4 space-y-6">
            {/* Image */}
            <div className="w-full">
              <img
                src={relationship}
                alt="Therapy session"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-2xl text-primaryCoffee font-bold mb-2">
                Dating & Relationship
              </h2>
              <p className="text-gray-600 mb-4">
                There are many variations of passages of lorem ipsum is simply
                free text available in the market, but the majority time you put
                aside to be in our office. Lorem ipsum dolor sit amet,
                consectetLorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>

              <h3 className="text-md text-primaryCoffee mb-2">
                Our therapies can improve your self esteem.
              </h3>
              <p className="text-gray-700">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </div>

            <div className="flex flex-col space-y-8">
              {/* Title */}
              <h1 className="text-2xl items-center font-semibold text-gray-800">
                Our Therapy Process
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 lg:gap-10 place-items-center">
                {steps.map((step) => (
                  <div key={step.id} className="relative w-40 h-40">
                    {/* Icon Circle */}
                    <div className="bg-neutral-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                      <span className="text-3xl text-primaryCoffee block leading-none">
                        {step.icon}
                      </span>
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute top-0 right-4 bg-primaryCoffee text-white text-sm w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                      {String(step.id).padStart(2, "0")}
                    </div>

                    {/* Text */}
                    <h2 className="text-sm text-center py-2">{step.title}</h2>
                    <p className="text-xs text-center px-2 text-gray-600">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center ">
                <button className="mt-[6rem] text-white bg-primaryCoffee font-semibold py-6 px-20 rounded-full">
                  Book a Session
                </button>
              </div>
            </div>
          </main>
        </section>

        <div className="mt-14">
          <Footer />
        </div>
      </section>
    </>
  );
}
