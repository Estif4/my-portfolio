import {
  easeInOut,
  motion,
  AnimatePresence,
  easeOut,
  easeIn,
} from "framer-motion";
import { useState } from "react";
import "@fontsource/montserrat/400.css"; // Regular weight
import "@fontsource/montserrat/700.css"; // Bold weight

function About() {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Scroll animation for elements
  const imageVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: easeInOut },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeInOut } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: easeInOut } },
  };

  const hoverEffect = {
    backgroundColor: "black",
    color: "#dac5a7",
    borderColor: "#dac5a7",
    opacity: 1.2,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className="relative flex flex-col gap-8 sm:mb-32 px-4 sm:items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div className="pt-36  bg-[#0e0d0d]">
        <div className="flex justify-center items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}>
            <div className="font-normal text-l text-[#dac5a7] opacity-50 tracking-wider mb-6">
              BIOGRAPHY
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center items-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: false }}
            className="text-4xl sm:text-5xl md:text-6xl text-white font-bold font-montserrat tracking-wide text-center">
            Who am I
          </motion.h1>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="h-12 border-l-4 border-[#fde4c3] mt-3 ml-4"></motion.div>
        </div>

        <div className="flex flex-col sm:flex-row mt-4 gap-8 sm:px-16 sm:ml-10 sm:gap-20 z-50">
          {/* Image and SVG Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            viewport={{ once: true }}
            className="relative w-80 sm:w-[400px] h-96 sm:h-[580px] mx-auto sm:mx-0 shadow-xl border-none shadow-[#3e3831]">
            {/* Main Image */}
            <img
              src="photome.jpg"
              alt="Filtered Image"
              className="w-[1000px] h-full ml-10 object-contain contrast-100 brightness-100 z-50"
            />
            {/* SVG Icon Positioned at Top-Left */}
            <img
              className="absolute w-28 top-[-25px] left-[-28px]  contrast-100"
              src="https://cdn.prod.website-files.com/656954895d955e65d9be31e0/6569b5002b1262d8ec8789f9_Group.svg"
              alt="SVG Icon"
            />
            <div className="absolute right-[-20px] bottom-[-16px] p-2 border-2 border-[#b39874] rounded-full w-10 h-10 z-0"></div>
            {/* Gradient Background Over the Image */}
            <div className="absolute inset-0 z-50">
              <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent opacity-80"></div>
              <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
              <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
              <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
              <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent opacity-70"></div>
              <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
          </motion.div>

          {/* About Me Section */}
          <div className="about-container mt-2 mb-10">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
              className="text-[#dac5a7] font-montserrat font-bold text-xl tracking-wide text-center sm:text-left">
              About Me
            </motion.h1>
            <div className="sm:w-[550px] mt-4">
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
                className="text-[#9b8769] font-montserrat text-l leading-10">
                I’m Estifanos Kelemu, a passionate web developer with over 3
                years of experience in building dynamic websites and
                applications. I specialize in JavaScript technologies like
                React, Vue.js, Node.js, and MongoDB.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10 mb-16">
              {[
                { label: "Name", value: "Estifanos Kelemu" },
                { label: "Address", value: "Bahirdar" },
                {
                  label: "Email",
                  value: "Estifanosk3@gmail.com",
                  link: "mailto:estifanosk3@gmail.com",
                },
                {
                  label: "Phone",
                  value: "+251930364646",
                  link: "tel:+251930364646",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  viewport={{ once: false }}
                  className="relative flex flex-col py-4 px-6 bg-[#252524] border-l-2 rounded-md border-[#dac5a7]">
                  <p
                    className={`text-xl pb-2 ${hoveredItem === item.label
                        ? "text-black z-50"
                        : "text-[#f1d3aa]"
                      }`}>
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className={`${hoveredItem === item.label
                          ? "text-black z-50"
                          : "text-[#b7a589]"
                        } text-l font-montserrat`}>
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className={`${hoveredItem === item.label
                          ? "text-black z-50"
                          : "text-[#b7a589]"
                        } text-l font-montserrat`}>
                      {item.value}
                    </p>
                  )}

                  <AnimatePresence>
                    {hoveredItem === item.label && (
                      <motion.div
                        className="absolute bottom-0 top-0 right-0 left-0 w-full rounded-lg bg-[#ecc891]"
                        initial={{ opacity: 0, width: "0%" }}
                        animate={{ opacity: 1, width: "100%" }}
                        exit={{ opacity: 0, width: "0%" }}
                        transition={{ duration: 0.7, ease: easeIn }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: false }}
              whileTap={{ scale: 1.2 }}
              whileHover={hoverEffect}
              href="mycv.pdf"
              download
              className="items-center text-center w-full sm:w-56 bg-[#efdbbc] text-black py-4 mt-4 px-10 border-[0.5px] rounded-lg border-[#dac5a7] cursor-pointer">
              <i className="fas fa-download mr-2"></i> Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
