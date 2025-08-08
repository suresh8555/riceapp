// import React from 'react';

// const Contact = () => {
//   return (
//     <section className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold mb-8 text-center text-green-700">Contact Us</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <form className="space-y-6 bg-gray-100 p-6 rounded-xl shadow-lg">
//             <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>

//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
//               <textarea
//                 rows="4"
//                 placeholder="Your message"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* Contact Info and Map */}
//           <div className="flex flex-col gap-6">
//             <div className="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
//               <h3 className="text-2xl font-semibold text-gray-800">Contact Details</h3>
//               <p><strong>Address:</strong> Rice-World, AgriTech Park, Hyderabad, India</p>
//               <p><strong>Phone:</strong> +91 98765 43210</p>
//               <p><strong>Email:</strong> support@riceworld.com</p>
//               <p><strong>Business Hours:</strong> Mon - Fri, 9 AM - 6 PM</p>
//             </div>

//             <div className="w-full h-64 rounded-xl overflow-hidden">
//               <iframe
//                 title="Rice-World Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.600053724742!2d78.47668177513465!3d17.385044083831988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973ab29c69af%3A0x97f680843aa3f4d2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1663077083536!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 allowFullScreen=""
//                 loading="lazy"
//                 className="border-0"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-section">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-header"
      >
        <h1>Contact Rice-World</h1>
        <p>We're here to answer your queries. Reach out anytime.</p>
      </motion.div>

      <div className="contact-grid">
        {/* Form */}
        <motion.div
          initial={{ x: -5, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-form-box"
        >
          <h2>Send a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-info"
        >
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>123 Green Street, Paddy Nagar, Telangana, India</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>support@riceworld.com</span>
          </div>
        </motion.div>
      </div>

      {/* Google Map */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="contact-map"
      >
        <iframe
          title="Rice World Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30469.263803007985!2d78.45600000000001!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977c8df66b4f%3A0x5b3a4f7c5a5a6b0!2sPaddy%20Fields!5e0!3m2!1sen!2sin!4v1662626999999"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;

