import { useState } from "react";

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

const App = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <h3>FAQ Accordion</h3>
      {faqs.map((i, index) => {
        return (
          <div key={index} onClick={() => setActive(index)}>
            <p>{i.question}</p>
            {active === index ? <p>{i.answer}</p> : null}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
