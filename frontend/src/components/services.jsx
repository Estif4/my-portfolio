import React, { useState, useEffect } from "react";
import "@fontsource/montserrat/600.css"; // Regular weight
import "@fontsource/montserrat/700.css"; // Bold weight
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const services = [
    {
      no: "01.",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using HTML, CSS,tailwind css framework, JavaScript, and React.",
    },
    {
      no: "02.",
      title: "Backend Development",
      description:
        "Creating robust server-side applications and RESTful APIs with Node.js and Express.js.",
    },
    {
      no: "03.",
      title: "Full-Stack Solutions",
      description:
        "Providing end-to-end solutions by integrating frontend and backend technologies.",
    },
    {
      no: "04.",
      title: "Database Management",
      description:
        "Designing and managing databases using MongoDB,  for efficient data storage and retrieval.",
    },
    {
      no: "05.",
      title: "Realtime App Development",
      description:
        "Developing real-time applications with WebSockets and other technologies for live updates.",
    },
    {
      no: "06.",
      title: "UX/UI Design ",
      description:
        "Designing user-friendly and aesthetically pleasing interfaces using Figma.",
    },
    {
      no: "07.",
      title: "API Integration and Development",
      description:
        "Integrating third-party APIs and developing custom APIs for seamless data exchange.",
    },
    {
      no: "08.",
      title: "Mobile App Development ",
      description:
        "Building cross-platform mobile applications with Flutter for Android.",
    },
  ];

  const [textclrforhover, settextclrforhover] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default to 4 items per slide
  const totalSlides = Math.ceil(services.length / itemsPerSlide); // Total slides

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);
  const [currentItem, setCurrentItem] = useState("");

  // Automatically scroll the carousel every 3 seconds
  useEffect(() => {
    if (!isAutoScrollActive) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 9000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isAutoScrollActive, totalSlides]);

  // Handle Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setIsAutoScrollActive(false); // Stop automatic scrolling
  };

  // Handle Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setIsAutoScrollActive(false); // Stop automatic scrolling
  };

  // Get the images for the current slide
  const currentImages = services.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  // Update itemsPerSlide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerSlide(1); // Mobile view
      } else {
        setItemsPerSlide(4); // Default view
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  return (
    <motion.div className="flex flex-col items-center justify-center p-10">
      <motion.p
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        className="text-sm font-mono text-[#c9b495]">
        SERVICES
      </motion.p>
      <motion.p
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        className="text-5xl text-gray-50 font-serif font-semibold mb-6 p-2">
        What I Do
      </motion.p>
      <div className="flex flex-grow"></div>
      <span className="inline-block border-l-4 rounded-md border-[#f4cc95] h-12 ml-4 mb-10"></span>
      {/* Carousel Container */}
      <div className="w-[1150px] h-[400px] overflow-hidden">
        <div className="flex gap-10 justify-center">
          <AnimatePresence>
            {currentImages.map((item, index) => (
              <motion.div
                onMouseEnter={() => {
                  setCurrentItem(item.no), settextclrforhover(false);
                }}
                onMouseLeave={() => {
                  setCurrentItem(""), settextclrforhover(true);
                }}
                key={index}
                className="relative bg-[#22211e] border-[1px] border-[#dac5a7] rounded-lg h-[390px] flex flex-col w-[32%]  sm:w-[22%] p-6">
                <p
                  className={`${
                    textclrforhover ? "text-zinc-600" : "text-zinc-600"
                  } text-5xl font-bold z-50`}>
                  {item.no}
                </p>
                <p
                  className={`${
                    textclrforhover ? "text-gray-50" : "text-black"
                  } mt-4 font-semibold text-2xl z-50`}>
                  {item.title}
                </p>
                <p
                  className={`${
                    textclrforhover ? "text-[#a89474]" : "text-black"
                  } mt-4  text-sm  sm:text-lg z-50`}>
                  {item.description}
                </p>
                <div className="flex-grow"></div>
                <span
                  className={`${
                    textclrforhover ? "border-[#f4cc95]" : "border-black"
                  } inline-block border-t-4 rounded-md border-[#b7a58b] w-10 mb-2`}></span>
                {currentItem === item.no && (
                  <motion.div
                    className="absolute bottom-0 w-full h-full z-1 bg-[#c0ac8f] rounded-lg left-0"
                    initial={{ opacity: 0, height: "0%" }}
                    animate={{ opacity: 1, height: "100%" }}
                    exit={{ opacity: 0, height: "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex flex-row gap-12 mt-6">
        <img
          src="LeftArrow.svg"
          alt="left arrow"
          className="cursor-pointer"
          onClick={prevSlide}
        />
        <img
          src="Right Arrow.svg"
          alt="Right Arrow"
          className="cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </motion.div>
  );
}

export default Services;
