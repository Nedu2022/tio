import data from "../../../data.json";
import { LuDot } from "react-icons/lu";

import { useNavigate } from "react-router-dom";

export default function BookingCard() {
    const navigate = useNavigate();



  

  return (
    <>
      <div className="w-full xl:w-4/5 w-full xl:mx-auto my-10">
        <span className="flex flex-row items-center gap-2 mb-4">
          <LuDot className="text-xl" />
          <p className="uppercase ">Services</p>
        </span>

        <span className="flex flex-col flex-start xl:flex-row xl:items-center xl:justify-between px-4">
          <p className="text-lg xl:text-3xl">
            Comprehensive services care <br /> for mind and wellness
          </p>
          <button className="flip-hover w-fit xl:mt-0 mt-4">
            <span className="flip-text"> Book an Appointment</span>
          </button>
        </span>
      </div>

      <div className="w-full px-4 xl:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 xl:my-28 my-4">
        {data.services.map((item, idx) => (
          <div
            onClick={() => navigate(`/services/${item.slug}`)}
            key={idx}
            className="relative h-[350px] xl:h-[440px] rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-800 flex flex-col justify-end p-4">
              <h1 className="absolute left-5 right-0 top-10 text-white text-md font-semibold mb-2">
                {item.name}
              </h1>
              <p className="absolute bottom-3 text-white">Read More</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
