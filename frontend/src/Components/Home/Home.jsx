import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSources = [
    "/src/assets/Divorce.mp4",
    "/src/assets/Education.mp4",
    "/src/assets/Trauma.mp4",
    "/src/assets/Professional.mp4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videoSources.length]);

  return (
    <div>
      <Header currentVideo={currentVideo} />
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-5xl text-nun font-bold mb-4">
            Talk It Out With Betty
          </h1>
          <p className="text-lg mb-8">
            Discover the tools to navigate life's challenges with personalized
            guidance and support.
          </p>
          <button className="bg-primaryBeige text-primaryCoffee font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>

        {/* Video Section */}
        <div className="absolute inset-0">
          {videoSources.map((src, index) => (
            <video
              key={index}
              className={`w-full h-full object-cover ${
                index === currentVideo ? "block" : "hidden"
              }`}
              src={src}
              autoPlay
              muted
              loop
            />
          ))}

          {/* Color Overlay */}
          <div
            className="absolute inset-0 bg-primaryCoffee opacity-70 z-20 pointer-events-none"
            style={{
              mixBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
