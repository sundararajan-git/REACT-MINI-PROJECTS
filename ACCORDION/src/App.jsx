import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";
import "./App.css";

const App = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col items-center gap-8 pt-[10%] px-4 bg-gray-100 h-screen">
      <div className="flex items-center gap-4">
        <TfiLayoutAccordionSeparated size={25} />
        <h3 className="text-2xl font-semibold text-purple-600">
          FAQ Accordion
        </h3>
      </div>
      <div className="w-full max-w-2xl space-y-2 bg-white rounded p-2 px-4">
        {faqs.map((i, index) => {
          const isActive = active === index;
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer border-gray-200 p-4 space-y-4 transition-all ${
                faqs.length - 1 !== index ? "border-b" : ""
              } `}
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-900">{i.question}</p>
                <span className="text-gray-400">
                  {isActive ? <FiMinus size={15} /> : <FiPlus size={15} />}
                </span>
              </div>
              {isActive && <p className="mt-2 text-gray-600">{i.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping charges may apply.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "You can change or cancel your order within 24 hours of placing it by contacting our support team.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes, our support team is available 24/7 via email, chat, and phone.",
  },
];
