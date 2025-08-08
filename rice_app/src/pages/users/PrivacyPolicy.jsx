
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-3">{title}</h2>
    <p className="text-gray-700 text-md md:text-lg leading-relaxed">{children}</p>
  </motion.div>
);

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f7fdf9] px-4 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-12"
        >
          Privacy Policy
        </motion.h1>

        <Section title="1. Introduction">
          Welcome to Rice-World! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </Section>

        <Section title="2. Information We Collect">
          We collect personal information like name, email, phone number, and usage data when you interact with our website. This includes data from forms, subscriptions, and analytics tools.
        </Section>

        <Section title="3. How We Use Your Information">
          We use your data to personalize your experience, respond to your inquiries, improve our services, and communicate important updates about Rice-World.
        </Section>

        <Section title="4. Cookies & Tracking">
          Our site uses cookies and third-party tools (like Google Analytics) to improve functionality and understand user behavior. You can manage cookie settings in your browser.
        </Section>

        <Section title="5. Data Sharing & Security">
          We don’t sell or rent your data. We may share it with trusted service providers under strict confidentiality. Your data is protected using encryption and secure servers.
        </Section>

        <Section title="6. User Rights">
          You have the right to access, modify, or delete your personal data. Contact us anytime to make such requests.
        </Section>

        <Section title="7. Changes to This Policy">
          We may update this policy periodically. Changes will be posted on this page, so please review it regularly.
        </Section>

        <Section title="8. Contact Us">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          📧 <a href="mailto:support@rice-world.com" className="text-green-700 underline">support@rice-world.com</a>
        </Section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rice-World. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
