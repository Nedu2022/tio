// import { Button } from "@/components/ui/button";
import { FaRegCircle } from "react-icons/fa";
import data from "../../../data.json"; 

export default function BookingCard() {
  console.log(data); // Log the data to check its structure
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.services.map((item, idx) => (
        <div
          key={idx}
          className=" max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white transition-all duration-300 hover:bg-pink-400 hover:text-white group p-6"
        >
          {/* Circular Icon */}
          <div className="w-10 text-white rounded-full p-3 bg-transparent shadow-md">
            <FaRegCircle />
          </div>

          {/* Content */}
          <div className="mt-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              {item.name}
            </h1>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="bg-blue-600 hover:bg-blue-700 text-white">
              {item.buttonText}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );}
   