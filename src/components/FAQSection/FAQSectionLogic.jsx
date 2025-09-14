import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-4 ml-5 mr-5 bg-white border border-[#393b90] rounded-xl px-6 py-4 hover:shadow-sm transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium text-gray-600 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#393b90]"
          >
            <path
              d="M12 5v14m-7-7h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pr-10 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = ({
  faqs = [
    {
      question: "Why should startups buy Osto?",
      answer: "Osto provides comprehensive cybersecurity solutions specifically designed for startups, offering enterprise-level protection at startup-friendly pricing."
    },
    {
      question: "What cybersecurity challenges do startups face?",
      answer: "Startups face unique challenges including limited budgets, lack of dedicated security teams, and the need to balance security with rapid growth and innovation."
    },
    {
      question: "How do I know that Osto is actually contributing to my growth?",
      answer: "Osto provides detailed analytics and reporting that show how our security measures protect your business operations and enable confident scaling."
    },
    {
      question: "If a startup is facing a hard time generating cash, can I pause your services and resume later?",
      answer: "Yes, we understand startup challenges and offer flexible payment options including the ability to pause and resume services based on your business needs."
    }
  ],
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Frequently Asked Questions (FAQs)
        </h2>
      </div>
      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;