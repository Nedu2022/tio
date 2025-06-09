import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import data from "../../../data.json"; 

const Accordion = () => {
      const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
   <div className="text-white flex items-center justify-center px-4">
  <div className="max-w-xl w-full">
    {data.faqs.map((faq, index) => (
      <div key={index} className="border-b last:border-b-0 border-white/30 py-4">
        <button
          onClick={() => toggle(index)}
          className="w-full flex justify-between items-center text-left text-sm xl:text-lg font-medium"
        >
          {faq.question}
          {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
        </button>

        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-white/80 text-sm">{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Accordion