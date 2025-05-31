import React, { useState } from "react";
import { motion } from "framer-motion";

const frontEndProjects = [
  {
    title: "Simple-Calculator",
    description:
      "A simple, user-friendly calculator that performs basic arithmetic operations. Built with HTML, CSS, and JavaScript, it's designed to be responsive and visually appealing.",
    image: "calculator.png",
    liveLink: "https://estif4.github.io/calculator/",
    githubLink: "https://github.com/Estif4/calculator",
  },
  {
    title: "Todo-list project",
    description:
      "A comprehensive To-Do list application built with React and Tailwind CSS. It includes all essential features like task creation, editing, deletion, completion status, and local storage. Enhanced with modern UI/UX, responsive design.",
    image: "todolist.png",
    liveLink: "https://todo-list-project-0eol.onrender.com/",
    githubLink: "https://github.com/Estif4/todo-list-project",
  },
  {
    title: "Dice-Rolling-Game",
    description:
      "A web-based dice roll simulator where users can click a button to roll a dice, generating a random number between 1 and 6. This project demonstrates my skills in JavaScript to create interactive user experiences.",
    image: "roledice.png",
    liveLink: "https://estif4.github.io/Role-dice/",
    githubLink: "https://github.com/Estif4/Role-dice",
  },
];

const fullStackProjects = [
  {
    title: "Lead Management CRM Web ",
    description:
      "Lead Management CRM is a full-stack web application designed to help businesses efficiently track, manage, and nurture leads through the sales funnel. Built with the MERN stack (Mysql, Express, React, Node.js), this app provides features like lead tracking, status updates, and seamless user interaction to optimize customer relationship management.",
    images: ["crm1.png", "crm2.png"], // Changed to array of images
    liveLink: "https://leadmanagement.scitechvalley.com/",
    githubLink: "https://github.com/Estif4/leadmanage",
  },
  {
    title: "E-Commerce Food Web App",
    description:
      "E-Commerce Food Web App is a full-stack online food marketplace where users can browse a wide selection of food items, add them to their cart, and make purchases. Built with the MERN stack (MongoDB, Express, React, Node.js), this app offers a seamless shopping experience.",
    image: "reactfood.png",
    liveLink: "https://reactfood-1.onrender.com/",
    githubLink: "https://github.com/Estif4/ReactFood/tree/main/my-project",
  },
  {
    title: "Rick and Morty Web App",
    description:
      "Rick and Morty Web App is a fan-made, interactive website showcasing characters, episodes, and locations from the popular animated series Rick and Morty. Built with Vue.js for the frontend and Tailwind CSS for styling, this app allows users to explore the world of Rick and Morty by fetching data directly from the Rick and Morty API.",
    image: "rickandmorty.png",
    liveLink: "https://rickandmorty-tvshow.netlify.app/",
    githubLink: "https://github.com/Estif4/RickAndMorty",
  },
];

const realTimeProjects = [
  {
    title: "Real-Time Tic-Tac-Toe Game",
    description:
      "Real-Time Tic-Tac-Toe Game is an interactive, multiplayer web application where two players can play the classic Tic-Tac-Toe game in real-time, online. Built using WebSockets for real-time communication, this game allows players to compete against each other regardless of location.",
    image: "tictactoe.png",
    liveLink: "https://realtime-tiktactoe-2.onrender.com",
    githubLink: "https://github.com/Estif4/Realtime_TikTacToe",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState("FullStack");
  const [hover, setHover] = useState(false);
  const Projects = ["FrontEnd", "FullStack", "RealTime"];

  const ProjectImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="relative">
        <img
          src={images[currentIndex]}
          className="object-fill rounded-3xl h-[300px] sm:h-[400px] w-96 sm:w-[500px]"
          alt={`Project screenshot ${currentIndex + 1}`}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
              &gt;
            </button>

            <div className="flex justify-center mt-2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-[#c4ae8d]" : "bg-gray-500"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <motion.div
        key={index}
        className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-[-60px] sm:mt-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}>
        <div>
          {project.images ? (
            <ProjectImageCarousel images={project.images} />
          ) : (
            <img
              src={project.image}
              className="object-fill rounded-3xl h-[400px] sm:h-[500px] w-full sm:w-[500px]"
              alt={project.title}
            />
          )}
        </div>
        <div className="sm:w-[500px]">
          <p className="text-white text-center font-montserrat text-2xl whitespace-nowrap sm:whitespace-normal sm:text-5xl ml-4 font-bold mb-4">
            {project.title}
          </p>
          <p className="text-[#7f7466] font-[400] leading-6 sm:leading-9 text-center text-sm sm:text-[18px] font-montserrat">
            {project.description}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex ml-12 sm:ml-0 sm:flex-row mt-1 sm:mt-4 w-[300px] sm:w-[550px]">
            <motion.a
              href={project.liveLink}
              className="text-l sm:text-xl whitespace-nowrap underline font-medium text-[#c4ae8d] cursor-pointer mt-5"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              Live Demo
            </motion.a>
            <motion.p
              animate={hover ? { x: 10 } : { x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl ml-4 mt-3 sm:mt-2 text-[#efdbbc] cursor-pointer">
              &#8594;
            </motion.p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-36 sm:ml-64 mt-3 sm:mt-5">
              <img
                src="github.png"
                className="cursor-pointer h-8 w-8"
                alt="GitHub repository"
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center p-28 bg-[#22211e] sm:rounded-t-[150px] mt-10">
      <motion.p
        className="text-sm font-mono text-[#c9b495]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        PROJECTS
      </motion.p>
      <motion.p
        className="text-2xl sm:text-5xl text-gray-50 font-serif font-semibold mb-6 p-2 w-96 text-center sm:text-nowrap"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}>
        What I've Built
      </motion.p>
      <motion.span
        className="inline-block border-l-4 rounded-md border-[#f4cc95] h-12 ml-4 mb-10"
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "3rem" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}></motion.span>

      <motion.div
        layout
        className="border-[0.5px] border-[#746a5a] rounded-full flex flex-row p-2 sm:p-4 w-96 gap-4 sm:w-[650px] items-center justify-center sm:gap-24">
        {Projects.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setSelected(item)}
            className={`cursor-pointer p-3 sm:p-4 text-l sm:text-xl tracking-widest font-montserrat font-medium ${
              selected === item ? "bg-[#fbe2bb] text-black" : "text-[#b6a183]"
            } p-2 rounded-full`}
            initial={{ scale: 1 }}
            animate={{ scale: selected === item ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}>
            {item}
          </motion.div>
        ))}
      </motion.div>

      {selected === "FrontEnd" && (
        <div className="flex flex-col justify-center items-center mt-32 gap-28">
          {renderProjects(frontEndProjects)}
        </div>
      )}
      {selected === "FullStack" && (
        <div className="flex flex-col justify-center items-center mt-32 gap-28">
          {renderProjects(fullStackProjects)}
        </div>
      )}
      {selected === "RealTime" && (
        <div className="flex flex-col justify-center items-center mt-32 gap-28">
          {renderProjects(realTimeProjects)}
        </div>
      )}
    </div>
  );
};

export default Projects;
