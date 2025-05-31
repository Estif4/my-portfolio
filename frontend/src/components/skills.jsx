import React from "react";
import { motion } from "framer-motion";
import "@fontsource/montserrat/600.css"; // Regular weight
import "@fontsource/montserrat/700.css"; // Bold weight

function Skillsandtools({ setIsMenuOpen }) {
  // Define skills and tools separately
  const skills = [
    { src: "html.png", name: "HTML5" },
    { src: "css.png", name: "CSS3" },
    { src: "javascript.png", name: "JavaScript" },
    { src: "tailwind.png", name: "Tailwind CSS" },
    { src: "reactjs.png", name: "React JS" },
    { src: "redux.png", name: "Redux" },
    { src: "nodejs.png", name: "NodeJS" },
    { src: "expressjs.png", name: "Express JS" },
    { src: "mongodb.png", name: "MongoDB" },
    { src: "mongoose.png", name: "Mongoose" },
  ];

  const toolsAndSoftware = [
    { src: "git.png", name: "Git" },
    { src: "github.png", name: "GitHub" },
    { src: "vscode.png", name: "VS Code" },
    { src: "ChatGPT.png", name: "ChatGPT" },
    { src: "chrome.png", name: "Chrome" },
    { src: "mongodbCompass.png", name: "MongoDB Compass" },
    { src: "postman.png", name: "Postman" },
  ];
  const leftSkills = [
    {
      title: "JavaScript",
      description:
        "I possess advanced proficiency in JavaScript, leveraging its versatility for both frontend and backend development. This includes working with ES6+ features, asynchronous programming (async/await, Promises), and creating interactive web applications.",
      rating: 5,
      image: "5rate.svg",
    },
    {
      title: "TypeScript",
      description:
        "Skilled in TypeScript for building scalable and type-safe JavaScript applications. Experienced with typing, interfaces, generics, and leveraging TypeScript to improve code quality and maintainability.",
      rating: 5,
      image: "5rate.svg",
    },
    {
      title: "React.js",
      description:
        "Experienced in building responsive, scalable user interfaces with React.js. I am adept at managing complex state using hooks and Context API, ensuring optimal performance and maintainable code.",
      rating: 4.9,
      image: "5rate.svg",
    },
    {
      title: "Tailwind CSS",
      description:
        "Proficient in using Tailwind CSS for designing clean, responsive, and modern web layouts with utility-first styling. This allows me to create fully customized, mobile-friendly designs without the need for a lot of extra CSS.",
      rating: 5,
      image: "5rate.svg",
    },
    {
      title: "Vue.js",
      description:
        "I have familiarity with Vue.js, allowing me to create lightweight, reactive UIs for web applications. My experience with Vue Router and Vuex enhances my ability to build dynamic, full-featured single-page applications (SPAs).",
      rating: 3.5,
      image: "3.5rate.svg",
    },
    {
      title: "Real-Time Apk",
      description:
        "I have developed real-time features using Node.js and Socket.IO, allowing applications to communicate instantaneously, such as in messaging apps, notifications, or live data feeds.",
      rating: 4.6,
      image: "4.6rate.svg",
    },
  ];
  const rightSkills = [
    {
      title: "Node.js",
      description:
        "Skilled in Node.js for backend development, I focus on building RESTful APIs, handling real-time data with WebSockets, and implementing server-side logic. My understanding of event-driven architecture in Node.js ensures highly responsive applications.",
      rating: 5,
      image: "5rate.svg",
    },
    {
      title: "MongoDB",
      description:
        "Expertise in using MongoDB for NoSQL database management. I work with collections, documents, and perform CRUD operations with Mongoose for enhanced schema modeling.",
      rating: 5,
      image: "5rate.svg",
    },
    {
      title: "MySQL",
      description:
        "Proficient in using MySQL for relational database management. Experienced with designing schemas, writing complex queries, and performing CRUD operations to manage structured data efficiently.",
      rating: 5,
      image: "5rate.svg",
    },

    {
      title: "PostgreSQL",
      description:
        "Familiar with PostgreSQL for relational database management. I am skilled in writing efficient SQL queries, creating normalized data structures, and optimizing database performance for complex applications.",
      rating: 3,
      image: "3rate.svg",
    },
    {
      title: "Version Control",
      description:
        "Highly skilled in using Git for version control and collaboration in distributed teams. I manage code repositories on platforms like GitHub, ensuring efficient code review processes and version tracking.",
      rating: 4.6,
      image: "4.6rate.svg",
    },
    {
      title: "Deployment",
      description:
        "I am experienced in deploying applications using platforms like Render and Netlify. This includes automating deployment pipelines and ensuring that applications are highly available and scalable in production environments.",
      rating: 4.6,
      image: "4.6rate.svg",
    },
  ];
  // Define radius size based on screen size
  const radius = window.innerWidth > 768 ? 250 : 120; // Larger for PC, smaller for mobile

  // Calculate angles dynamically for each section based on its number of items
  const skillAngle = 360 / skills.length;
  const toolAngle = 360 / toolsAndSoftware.length;

  // Scroll-triggered animation variants
  const scrollVariantsforleft = {
    hidden: { opacity: 0, y: 40, x: -80 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const scrollVariantsforright = {
    hidden: { opacity: 0, y: 40, x: 80 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      onClick={() => setIsMenuOpen(false)}
      className="w-full h-full bg-[#0b0b0b] p-4 pt-20 sm:p-8 sm:pt-32 relative flex flex-col items-center">
      {/* Title */}
      <motion.h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-[#fffefc] mb-8 sm:mb-20 absolute top-10 sm:top-20">
        Skills & Tools
      </motion.h2>
      <span className="inline-block border-l-4 rounded-md border-[#f4cc95] h-12 sm:mt-12 ml-4 "></span>
      {/* Container for both circles */}
      <div className="flex flex-col sm:flex-row justify-center ml-40 sm:ml-96 gap-12 sm:gap-32 mt-56 sm:mt-96 items-center">
        {/* Skills Section */}
        <motion.div
          className="relative"
          style={{
            width: `${radius * 2}px`, // Double the radius for width
            height: `${radius * 2}px`, // Double the radius for height
            borderRadius: "50%", // Make it circular
            transformStyle: "preserve-3d",
          }}
          initial="hidden"
          whileInView="visible"
          variants={scrollVariantsforleft}
          viewport={{ once: true, amount: 0.2 }} // Trigger effect when 20% is in view
        >
          <motion.h3 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6 absolute top-[20px] left-[10px]">
            Skills
          </motion.h3>
          {skills.map((item, index) => {
            const x = radius * Math.cos((skillAngle * index * Math.PI) / 180);
            const y = radius * Math.sin((skillAngle * index * Math.PI) / 180);

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center"
                style={{
                  transform: `translateX(${x}px) translateY(${y}px)`,
                }}>
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-12 w-12 sm:h-16 sm:w-16 object-contain mb-2 sm:mb-3 shadow-lg"
                  style={{ boxShadow: "0 10px 15px rgba(200, 150, 25, 0.9)" }}
                />
                <p className="text-[#dac5a7] text-xs sm:text-sm font-medium">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          className="relative mt-16 sm:mt-0"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            borderRadius: "50%",
            transformStyle: "preserve-3d",
          }}
          initial="hidden"
          whileInView="visible"
          variants={scrollVariantsforright}
          viewport={{ once: true, amount: 0.2 }}>
          <motion.h3 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6 absolute top-[20px] left-[-30px]">
            Tools & Software
          </motion.h3>
          {toolsAndSoftware.map((item, index) => {
            const x = radius * Math.cos((toolAngle * index * Math.PI) / 180);
            const y = radius * Math.sin((toolAngle * index * Math.PI) / 180);

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center"
                style={{
                  transform: `translateX(${x}px) translateY(${y}px)`,
                }}>
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-12 w-12 sm:h-16 sm:w-16 object-contain mb-2 sm:mb-3 shadow-lg"
                  style={{ boxShadow: "0 10px 15px rgba(200, 150, 25, 0.9)" }}
                />
                <p className="text-[#dac5a7] text-xs sm:text-sm font-medium">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="sm:pl-28 sm:pr-28">
        <p className="text-[#635848] text-base sm:text-lg text-center p-4">
          3+ YEAR EXPERIENCE
        </p>
        <div className="flex flex-col sm:flex-row gap-8 h-[620px] overflow-y-scroll sm:overflow-y-hidden sm:h-auto">
          <div className="flex flex-row sm:gap-16">
            <div>
              <img
                src="leftforskills.svg"
                alt="Left decoration"
                className="absolute h-[1350px] hidden sm:flex"
              />
            </div>
            <div className="grid gap-4">
              {/* Left Skills */}
              {leftSkills.map((skill, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  key={index}
                  className="rounded-md bg-[#22211e] p-8 sm:w-[550px] h-64">
                  <div className="flex flex-row justify-between">
                    <span className="text-bold font-semibold sm:font-bold font-montserrat text-xl sm:text-2xl text-white">
                      {skill.title}
                    </span>
                    <span className="flex flex-row ">
                      <img src="5rate.svg" alt="Rating" />
                      <span className="text-[#dac5a7] p-2  text-l">
                        {skill.rating}
                      </span>
                    </span>
                  </div>
                  <p className="pt-6 text-sm sm:text-base text-[#dac5a7]">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="grid gap-4">
              {/* Right Skills */}
              {rightSkills.map((skill, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  key={index}
                  className="rounded-md bg-[#22211e] p-8 sm:w-[550px] h-64">
                  <div className="flex flex-row justify-between">
                    <span className="text-bold font-semibold sm:font-bold font-montserrat text-xl sm:text-2xl text-white">
                      {skill.title}
                    </span>
                    <span className="flex flex-row">
                      <img src={skill.image} alt="Rating" />
                      <span className="text-[#dac5a7] pl-2  text-l">
                        {skill.rating}
                      </span>
                    </span>
                  </div>
                  <p className="pt-6 text-base sm:text-base text-[#dac5a7]">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div>
              <img
                src="rightforskills.svg"
                alt="Right progress"
                className=" absolute sm:h-[1350px] sm:ml-[-20px] hidden sm:flex ]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillsandtools;
