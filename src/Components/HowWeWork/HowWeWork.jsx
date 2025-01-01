const HowWeWork = () => {
    const steps = [
      {
        number: "1",
        title: "Contact Consultation",
        description:
          "Contact us via phone, email to schedule an initial consultation where we’ll explore your needs.",
      },
      {
        number: "2",
        title: "Customized Plan",
        description:
          "We’ll develop a personalized therapy plan based on your specific needs and goals to ensure the most support.",
      },
      {
        number: "3",
        title: "Therapy Sessions",
        description:
          "Attend regular therapy sessions where we’ll collaboratively address challenges and work towards enhancing.",
      },
      {
        number: "4",
        title: "Ongoing Support",
        description:
          "We’ll provide continuous support, regularly review your progress, and adjust the plan as needed to help you.",
      },
    ];
  
    return (
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="uppercase text-sm font-semibold tracking-widest text-gray-500">
            How We Work
          </h3>
          <h2 className="text-3xl font-semibold text-primaryPink mt-2">
            Counseling & Therapy Services
          </h2>
          <p className="mt-4 text-gray-500">
            Supporting you from consultation to care for a smooth path to mental
            well-being.
          </p>
        </div>
  
        {/* Steps Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
   
          <div className="absolute hidden md:block w-full h-0.5 bg-gray-200 top-6 left-0"></div>
  
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center relative md:flex-1"
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-16 h-16 bg-primaryBeige text-primaryPink font-semibold text-xl rounded-full z-10">
                {step.number}
              </div>
  
              {/* Step Content */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowWeWork;
  