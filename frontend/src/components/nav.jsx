import React, { useState } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import {
  FaHome,
  FaPhoneAlt,
  FaInfoCircle,
  FaServicestack,
  FaBriefcase,
} from "react-icons/fa";

const Navbar = ({ navcolor, scrollToView }) => {
  const [currentPage, setCurrentPage] = useState("");

  const navItems = [
    { name: "Home", icon: <FaHome />, link: "home" },
    { name: "About", icon: <FaInfoCircle />, link: "about" },
   
    { name: "Service", icon: <FaServicestack />, link: "services" },
    { name: "Portfolio", icon: <FaBriefcase />, link: "portfolio" },
    { name: "Contact", icon: <FaPhoneAlt />, link: "contact" },
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <motion.li
          key={index}
          onMouseEnter={() => setCurrentPage(item.name)}
          onMouseLeave={() => setCurrentPage("")}
          className={`relative z-[1] cursor-pointer gap-16 ${
            navcolor ? "text-black" : "text-[#c0ac8f]"
          } font-normal`}
          onClick={() => scrollToView(item.link)}
        >
          <div className="flex items-center gap-2">
            {item.icon} {item.name}
          </div>
          <AnimatePresence>
            {currentPage === item.name && (
              <motion.div
                className={`absolute bottom-0 left-0 w-full h-[0.5px] z-1 ${
                  navcolor ? "bg-black" : "bg-[#c0ac8f]"
                }`}
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, width: "0%" }}
                transition={{ duration: 0.3, ease: easeInOut }}
              />
            )}
          </AnimatePresence>
        </motion.li>
      ))}
    </>
  );
};

export default Navbar;