import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using Rice-World, you agree to be bound by these terms. If you disagree with any part, you must not use our service.",
  },
  {
    title: "2. Modification of Terms",
    content:
      "Rice-World reserves the right to update or change the terms at any time. Continued use of the site implies acceptance of these changes.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "Users are responsible for maintaining the confidentiality of their account, password, and all activities that occur under their account.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All content, logos, and assets on this site are the intellectual property of Rice-World and may not be used without permission.",
  },
  {
    title: "5. Termination",
    content:
      "We reserve the right to suspend or terminate your access to the site at our sole discretion, with or without notice, for conduct that violates these terms.",
  },
  {
    title: "6. Governing Law",
    content:
      "These Terms shall be governed in accordance with the laws of India, without regard to its conflict of law provisions.",
  },
];

const AccordionItem = ({ section, isOpen, toggle }) => (
  <div className="border-b border-gray-200 dark:border-gray-700">
    <button
      onClick={toggle}
      className="w-full py-5 flex justify-between items-center text-left text-base md:text-lg font-medium text-gray-800 dark:text-white hover:text-green-700 transition"
    >
      {section.title}
      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-5 text-sm md:text-base text-gray-600 dark:text-gray-300"
        >
          {section.content}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-white dark:bg-black transition-colors duration-300">
      <motion.h1
        className="text-3xl md:text-5xl font-serif font-semibold text-center text-gray-900 dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Términos y condiciones
      </motion.h1>

      <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        {termsSections.map((section, index) => (
          <AccordionItem
            key={index}
            section={section}
            isOpen={openIndex === index}
            toggle={() => toggleSection(index)}
          />
        ))}
      </div>

      <motion.p
        className="text-center mt-12 text-xs text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        © 2025 Rice-World. All rights reserved.
      </motion.p>
    </div>
  );
};

export default TermsAndConditions;
