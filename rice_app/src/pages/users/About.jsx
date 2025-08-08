
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faUsers,
  faCalendarAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import {
  FaSeedling,
  FaCheckCircle,
  FaTint,
  FaLeaf,
  FaRecycle,
  FaTruck,
} from "react-icons/fa";

import { motion } from "framer-motion";


const teamMembers = [
  {
    name: "Olivia Martinez",
    role: "UX Designer",
    img: "https://wallpapercave.com/wp/wp7479519.jpg",
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    img: "https://tse1.mm.bing.net/th/id/OIP.WSuYDHIoL3fF7qwx801zhgAAAA?pid=Api&P=0&h=180",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sophia Johnson",
    role: "Frontend Developer",
    img: "https://blog.drjobpro.com/wp-content/uploads/2022/10/Secretary-Job-Description-scaled.jpg",
    desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Benjamin Davis",
    role: "Backend Developer",
    img: "https://wallpaper.dog/large/20407891.png",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

const statsData = [
  {
    icon: faTrophy,
    number: "1250+",
    label: "Successful Sales",
  },
  {
    icon: faUsers,
    number: "950+",
    label: "Happy Clients",
  },
  {
    icon: faCalendarAlt,
    number: "16",
    label: "Years in Business",
  },
  {
    icon: faStar,
    number: "4.9",
    label: "Average Rating",
  },
];

const leftFeatures = [
  {
    icon: <FaSeedling />,
    title: "Grows On Any Soil",
    description:
      "Adaptable rice strains perfect for all soil conditions across regions.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Certified Organic",
    description:
      "Grown without chemicals, backed by organic farming certifications.",
  },
  {
    icon: <FaTint />,
    title: "Water Efficient",
    description:
      "Designed to thrive with less water — sustainable and cost-effective.",
  },
];
const rightFeatures = [
  {
    icon: <FaLeaf />,
    title: "Naturally Nutritious",
    description:
      "Retains vitamins & minerals, supporting a healthier lifestyle.",
  },
  {
    icon: <FaRecycle />,
    title: "Eco-Friendly Packaging",
    description:
      "100% recyclable, biodegradable packaging aligned with green goals.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Nationwide Delivery",
    description:
      "Quick and safe delivery across all major cities and rural areas.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-banner">
        <div className="banner-overlay">
          <motion.div
            className="banner-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Explore Our World</h1>
            <p>
              Welcome to <strong>Rice-World</strong> – where tradition meets
              innovation in every grain.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-images">
          {["OIP.UOTXi8x8WownUfe0_YvaGQHaE7", "OIP.ZZeY2x0mwhUV5RvrVpYwcgHaEo", "OIP.bMDfUpC60VwcvxQt_r3l5QHaE7", "OIP.72lpWvInCf3ZKTHYN8LYOQHaET"].map(
            (img, index) => (
              <motion.div
                className="grid-image"
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={`https://tse3.mm.bing.net/th/id/${img}?pid=Api&P=0&h=180`}
                 
                  alt="About"
                />
              </motion.div>
            )
          )}
        </div>

        <motion.div
          className="about-text"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>About Us</h1>
          <h2>Overview</h2>
          <p>
           Established in 2016, Rice-World is a leading agri-tech initiative dedicated to transforming the rice supply chain. We empower rice-growing communities with technology-driven solutions, ensuring consumers receive fresh, pure, and high-quality rice directly from trusted farmers. Our mission is to bridge the gap between sustainable rice cultivation and modern consumer needs through transparency, traceability, and innovation.
          </p>
          
          <h2>Purpose & Value</h2>
          <p>
           At Rice-World, our mission is to connect rice farmers and consumers through a fair, transparent, and efficient platform. We are committed to delivering pure, premium-quality rice that is not only affordable but also safe and sustainably sourced. By empowering local farmers with modern tools and market access, we create a value chain where everyone benefits — from the paddy field to the dinner plate.
          </p>
        </motion.div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-scroll-container">
          {teamMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <motion.div
              className="stat-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="rice-feature-section">
        <div className="rice-feature-content">
          <div className="rice-feature-column">
            {leftFeatures.map((item, i) => (
              <motion.div
                className="rice-feature-item"
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="rice-icon-circle">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rice-phone-mockup"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
               src='/src/assets/app.png'
              alt="Rice World App"
            />
          </motion.div>

          <div className="rice-feature-column">
            {rightFeatures.map((item, i) => (
              <motion.div
                className="rice-feature-item"
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="rice-icon-circle">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};



export default About;

