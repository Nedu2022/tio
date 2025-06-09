

const Contact = () => {
  return (
<div className="relative  mt-40 ">
<div className=" mt-20  w-full bg-primaryCoffee ">
      <div className="max-w-6xl relative bottom-20 xl:bottom-32 xl:mx-auto bg-white rounded-2xl p-5 mx-2 px-5 xl:p-20 flex flex-col md:flex-row gap-10 z-10 shadow-3xl">
        {/* Form Section */}
        <form className="flex-1 space-y-4">
          <div className="flex gap-4">
            <input  
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-200 rounded-lg p-3"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-200 rounded-lg p-3"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-lg p-3"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-lg p-3"
          />

          <div className="flex gap-4">
            <select className="w-full border border-gray-200 rounded-lg p-3 text-gray-500">
              <option>—Please choose an option</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Other</option>
            </select>
            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg p-3 text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#a3a089] text-white py-3 px-6 rounded-lg mt-2 hover:opacity-90"
          >
            Book An Appointment
          </button>
        </form>

        {/* Info Section */}
        <div className="flex-1 space-y-6">
          <div>
            <span className="text-sm uppercase tracking-widest text-[#a3a089] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#a3a089] rounded-full" />
              Appointment
            </span>
            <h2 className="text-3xl font-semibold mt-2">
              Make an appointment
            </h2>
            <p className="text-gray-500 mt-2">
              Schedule your handyman service with ease. Choose a date and time
              that works best for you.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <img
              src="https://www.svgrepo.com/show/506480/headphones.svg"
              alt="Customer Service"
              className="w-10 h-10"
            />
            <div>
              <h4 className="font-semibold">Customer Services</h4>
              <p className="text-gray-500">+91 - 123 456 7890</p>
            </div>
          </div>

          <hr />

          <div className="flex items-start gap-4">
            <img
              src="https://www.svgrepo.com/show/16171/clock.svg"
              alt="Opening Hours"
              className="w-10 h-10"
            />
            <div>
              <h4 className="font-semibold">Opening Hours</h4>
              <p className="text-gray-500">
                Mon – Sat (09:00 – 21:00) <br />
                Sunday (Closed)
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
</div>
  )
}

export default Contact