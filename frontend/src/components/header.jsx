import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Nav from "./nav";
import { FaBars } from "react-icons/fa";

const Header = ({ isMenuOpen, setIsMenuOpen, scrollToView }) => {
  const { scrollY } = useScroll();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [imageSrc, setImageSrc] = useState("image3.png"); // Default image for large screens
  const [navcolor, setColornav] = useState(false);
  const backgroundY = useTransform(
    scrollY,
    [0, 200, 300, 400, 500],
    [0, 0.3, 0.5, 0.8, 1]
  ); // Moves faster

  const navHeight = useTransform(
    scrollY,
    [0, 200, 250, 300, 400],
    [100, 90, 85, 80, 70]
  );

  const backgroundOpacityLarge = useTransform(
    scrollY,
    [0, 100, 200, 300, 500],
    [1, 0.5, 0.8, 1, 1]
  );
  const backgroundColorLarge = useTransform(
    scrollY,
    [0, 200],
    ["#0e0e0e", "rgb(218, 197, 167)"]
  );
  const backgroundOpacitySmall = useTransform(scrollY, [0, 500], [1, 0.8]);
  const backgroundColorSmall = useTransform(
    scrollY,
    [0, 500],
    ["#242221", "#242221"]
  );

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isLargeScreen) {
      const unsubscribe = scrollY.onChange((y) => {
        if (y > 300) {
          setImageSrc("image4.png");
          setColornav(true);
        } else {
          setImageSrc("image3.png");
          setColornav(false);
        }
      });

      return () => unsubscribe(); // Properly cleanup listener
    }
  }, [isLargeScreen]); // Dependency updated

  return (
    <motion.header
      style={
        isLargeScreen
          ? {
              opacity: backgroundOpacityLarge,
              backgroundColor: backgroundColorLarge,
              height: navHeight,
            }
          : {
              backgroundColor: backgroundColorSmall,
            }
      }
      className="fixed top-0 left-0 w-screen gap:32 items-center z-[200] bg-[#242221] sm:bg-[#0e0e0e] py-3 sm:py-6 px-6 sm:px-20 sm:pt-8 flex justify-between">
      {/* Logo on the left */}
      <motion.img
        src={imageSrc} // Dynamically set the image based on the scroll position and screen size
        className="h-14 w-32 sm:w-40 sm:object-contain ml-[-20px] sm:ml-0 z-[100]"
        alt="Logo"
      />

      {/* Hamburger menu icon for mobile */}
      <FaBars
        size={18}
        color="#dac5a7"
        className="absolute right-4 top-8 sm:hidden cursor-pointer mr-2"
        onClick={toggleMenu}
      />

      {/* Navigation menu for larger screens */}
      <nav>
        <motion.ul className="hidden sm:flex gap-10 sm:mr-2">
          <Nav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navcolor={navcolor}
            scrollToView={scrollToView}
          />
        </motion.ul>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed sm:hidden top-0 left-0 w-screen h-[250px] bg-[#242221] z-1"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 80 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4, staggerChildren: 0.5 }}>
            <ul className="flex ml-4 flex-col items-start p-4 justify-center gap-6 z-[-1] w-full">
              <Nav scrollToView={scrollToView} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;