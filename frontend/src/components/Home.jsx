import {
  AnimatePresence,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect } from "react";
import "@fontsource/montserrat/600.css"; // Regular weight
import "@fontsource/montserrat/700.css"; // Bold weight
function Home({ isMenuOpen, setIsMenuOpen, scrollToView }) {
  const [hovers, setHover] = useState(false);
  const [text, setText] = useState(""); // State for dynamic text
  const [index, setIndex] = useState(0); // To track the current index for typing
  const [isDeleting, setIsDeleting] = useState(false); // Flag for deletion
  const [isTypingAgain, setIsTypingAgain] = useState(false); // Flag for second typing
  const [isFinished, setIsFinished] = useState(false); // Flag to track completion
  const helloText = "Full Stack Developer"; // The text to type
  const { scrollY } = useScroll();
  const leftgo = useTransform(scrollY, [0, 200, 300, 400], [0, -20, -40, -60]);
  const imagescale = useTransform(
    scrollY,
    [0, 200, 250, 300, 350],
    [1, 1.12, 1.16, 1.18, 1.2]
  );
  const rotaterX = useTransform(
    scrollY,
    [0, 200, 400, 600, 800],
    [0, 50, 100, 50, 0] // Adjust these values for circular x motion
  );

  const rotaterY = useTransform(
    scrollY,
    [0, 200, 400, 600, 800],
    [0, 50, 0, -50, 0] // Adjust these values for circular y motion
  );
  useEffect(() => {
    if (isFinished) return; // Stop once the process is finished

    const interval = setInterval(() => {
      if (!isDeleting && index < helloText.length && !isTypingAgain) {
        // Typing effect
        setText((prev) => prev + helloText[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        // Deleting effect
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }
    }, 100); // Adjust typing and deleting speed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [index, isDeleting, isTypingAgain, isFinished]);

  return (
    <motion.div
      onClick={() => setIsMenuOpen(false)}
      className="flex flex-col sm:flex-row gap-4 mt-16 sm:mt-28 sm:pt-4 relative p-6    ">
      <div className="pl-0 sm:pl-32 pt-6 sm:pt-24 flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 70 }} // Start with opacity 0 and move 20px down
          animate={{ opacity: 1, y: 0 }} // End with opacity 1 and y at its original position
          transition={{ duration: 0.6, ease: easeInOut }} // Smooth transition of 1 second
          className="text-5xl sm:text-8xl text-white font-bold font-montserrat">
          Hello<span className="font-bold text-[#dac5a7]">.</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 70 }} // Start with opacity 0 and move 20px down
          animate={{ opacity: 1, y: 0 }} // End with opacity 1 and y at its original position
          transition={{ duration: 0.6, ease: easeInOut }}>
          <span className="inline-block border-t-4 rounded-md border-[#b7a58b] w-10 mb-2"></span>
          <span className=" text-2xl sm:text-4xl font-medium text-[#dac5a7] ml-4 font-montserrat">
            I&apos;m Estifanos Kelemu
          </span>
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 70 }} // Start with opacity 0 and move 20px down
          animate={{ opacity: 1, y: 0 }} // End with opacity 1 and y at its original position
          transition={{ duration: 0.6, ease: easeInOut }}
          className="text-white text-xl sm:text:3xl font-montserrat tracking-widest ">
          {text}
          <span className="inline-block border-[#dac5a7]">|</span>
        </motion.h3>

        {/* Motion Button */}
        <motion.div className="flex items-center mt-4 ">
          <motion.a
            style={{ x: leftgo }}
            initial={{ opacity: 0, y: 60 }} // Start with opacity 0 and move 20px down
            animate={{ opacity: 1, y: 0 }} // End with opacity 1 and y at its original position
            transition={{ duration: 1, ease: easeInOut }}
            whileTap={{ scale: 1.2 }}
            whileHover={{
              backgroundColor: "black",
              color: "#dac5a7",
              borderColor: "#dac5a7",
              opacity: 1.2,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            href="mycv.pdf"
            download
            className=" items-center hidden sm:flex bg-[#efdbbc] text-black py-3 px-10 border-[0.5px] rounded-lg border-[#dac5a7]">
            <i className="fas fa-download mr-2"></i>
            Download CV
          </motion.a>
        </motion.div>
      </div>

      <div className="bg-[#f4ddbe] mt-36 h-[400px]  w-56 relative  sm:mt-[-110px] sm:h-[600px] ml-20 sm:ml-[45px] z-50">
        <motion.div
          style={{ scale: imagescale }}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-4 top-6 sm:top-48 w-64 sm:w-[330px] sm:left-[-20px] ">
          <img src="myPhoto2.png" className="w-56 sm:w-[340px] h-auto z-50 " />
        </motion.div>
      </div>

      <div className="flex flex-col">
        <div className="w-96 mt-[-600px] ml-0 sm:mt-0 sm:pt-32 sm:ml-12 ">
          <motion.p
            initial={{ opacity: 0, y: 60 }} // Start with opacity 0 and move 20px down
            animate={{ opacity: 1, y: 0 }} // End with opacity 1 and y at its original position
            transition={{ duration: 0.6, ease: easeInOut }}
            className="text-[#7f7466] text-l font-medium">
            I'm a software developer with expertise in JavaScript, React,
            Node.js, Express.js, and MongoDB. I work with clients to build
            efficient and user-friendly solutions. Let's bring your ideas to
            life!
          </motion.p>

          {/* Flex container wrapping both the text and the arrow */}
          <motion.div
            initial={{ opacity: 0, y: 60 }} // Start with opacity 0 and move 20px down
            animate={{ opacity: 1, y: 0 }} // End with opacity 1 and y at its original position
            transition={{ duration: 1, ease: easeInOut }}
            className="flex flex-row mt-1 sm:mt-4  w-[200px] sm:w-[150px]"
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            onClick={() => setHover(true)}>
            <motion.p onClick={() => scrollToView("contact")}
              className="text-2xl font-medium text-[#c4ae8d] cursor-pointer mt-5 ">
              Lets Talk
            </motion.p>

            <motion.p
              animate={hovers ? { x: 10 } : { x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl ml-4 mt-3 sm:mt-2 text-[#efdbbc] cursor-pointer">
              &#8594;
            </motion.p>
          </motion.div>
          <motion.div
            style={{ x: rotaterX, y: rotaterY }}
            className="ml-56 sm:ml-32 mt-[-54px] sm:mt-44 opacity-70 z-0">
            <svg
              className="rotating-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="10" fill="#efdbbc" />

              <circle
                cx="100"
                cy="100"
                r="100"
                fill="none"
                stroke="#f0f0eb"
                strokeWidth="0.5"
              />

              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>

              <text fill="#efdbbc" className="circle-text">
                <textPath className="text-l" href="#circlePath">
                  Web Development Web Development Web Development Web
                  Development Web Development
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>

        {/* <div className=" absolute bottom-0 left-0 right-0 h-[256px] bg-gradient-to-b from-[rgba(32,35,38,0)] to-[#191a1b]"></div> */}
      </div>
    </motion.div>
  );
}

export default Home;
