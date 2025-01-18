import school from "../../assets/school.jpg";
import depression from "../../assets/depression.jpg";
import divorce from "../../assets/divorce.jpg";
import professional from "../../assets/professional.jpg";
import relationship from "../../assets/relationship.jpg";
import family from "../../assets/family.jpg";
import { FiArrowRight } from "react-icons/fi";

const HoverCard = () => {
  const cards = [
    {
      id: 1,
      title: "School Therapy",
      description:
        "Supporting students in overcoming challenges, managing stress, and improving mental health for a successful future",
      image: school,
    },
    {
      id: 2,
      title: "Depression Therapy",
      description:
        "Providing support for individuals struggling with depression, promoting healing, emotional stability, and mental well-being.",
      image: depression,
    },
    {
      id: 3,
      title: "Divorce Therapy",
      description:
        "Helping individuals navigate the emotional challenges of divorce, fostering healing, and rebuilding a positive future.",
      image: divorce,
    },
    {
      id: 4,
      title: "Professional Therapy",
      description:
        "Guiding professionals to manage stress, enhance mental resilience, and achieve balance in their careers",
      image: professional,
    },
    {
      id: 5,
      title: "Relationship Therapy",
      description:
        "Strengthening communication and understanding, fostering trust, and building healthier, more fulfilling relationships together.",
      image: relationship,
    },
    {
      id: 6,
      title: "Family Therapy",
      description:
        "Enhancing family bonds, resolving conflicts, and fostering a supportive and harmonious home environment",
      image: family,
    },
  ];

  return (
    <div className="lg:p-20 bg-primaryBeige">
      <div className="p-6">
        <h3>WHAT WE DO</h3>
        <p className="lg:text-3xl sm:text-lg py-3 text-primaryPink">
          Counseling & Therapy Services
        </p>
        <span className="">
          We offer a wide range of services to meet your personal needs
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group w-full h-80 bg-white overflow-hidden rounded-3xl shadow-md"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transform scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition duration-500 ease-in-out"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-10 bg-white group-hover:bg-gray-800 group-hover:bg-opacity-50 text-black group-hover:text-white flex flex-col justify-between p-4 transition duration-500 ease-in-out">
              {/* Title */}
              <div className="flex flex-col mb-4">
                <h2 className="text-xl">{card.title}</h2>
                <p className="text-xs mt-2">{card.description}</p>
              </div>

              {/* Book Now Button */}
              <p className="px-6 py-2 text-black group-hover:text-white flex items-center cursor-pointer transition duration-300 ease-in-out">
                Book Now{" "}
                <FiArrowRight className="ml-2 text-accentTeal text-md group-hover:text-mutedCoral" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCard;
