import { LuDot } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Appoint = () => {
  return (
    <div className=" items-center justify-center  bg-red-500 p-4">
      <div className="header-btn flex items-center bg-accentGold w-fit p-4 text-backgroundGray rounded-full text-primaryPink">
        <LuDot />
        Fill The Form
        <LuDot />
      </div>
      <h1>Make an Appointment</h1>

      <div className="w-50">

     

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

       

      <div className="flex items-start gap-2">
        <div>
            <IoCheckmarkCircleOutline className="text-xl mt-1" />
        </div>
        <div>
             <span>24 Hours Services</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

            <div className="flex items-start gap-2">
        <div>
            <IoCheckmarkCircleOutline className="text-xl mt-1" />
        </div>
        <div>
             <span>24 Hours Services</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

            <div className="flex items-start gap-2">
        <div>
            <IoCheckmarkCircleOutline className="text-xl mt-1" />
        </div>
        <div>
             <span>24 Hours Services</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

            <div className="flex items-start gap-2">
        <div>
            <IoCheckmarkCircleOutline className="text-xl mt-1" />
        </div>
        <div>
             <span>24 Hours Services</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

       </div>
        </div>
    </div>
  );
};

export default Appoint;
