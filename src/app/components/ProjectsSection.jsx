"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description: "Using Machine Learning",
    image: "/images/projects/1.png",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/charan-271/Movie-Recommendation-System",
    previewUrl: "https://github.com/charan-271/Movie-Recommendation-System",
  },
  {
    id: 2,
    title: "Quality Control System",
    description: "Using Machine-vision and Robotics",
    image: "/images/projects/2.png",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/charan-271/Quality-Control-system-using-machine-vision",
    previewUrl: "https://github.com/charan-271/Quality-Control-system-using-machine-vision",
  },
  {
    id: 3,
    title: "Compact PLC With Display",
    description: "Using ESP8266 & Arduino Nano",
    image: "/images/projects/3.png",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/charan-271/Smart-PLC-using-ESP32",
    previewUrl: "https://github.com/charan-271/Smart-PLC-using-ESP32",
  },
  {
    id: 4,
    title: "Weather App",
    description: "Using JAVA & opensource API's",
    image: "/images/projects/4.png",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/charan-271/Weather-App",
    previewUrl: "https://github.com/charan-271/Weather-App",
  },
  {
    id: 5,
    title: "Vital Sense",
    description: "An IOT Healthcare Website, with edge devices",
    image: "/images/projects/5.png",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/charan-271/VitalSense",
    previewUrl: "https://github.com/charan-271/VitalSense",
  },
  {
    id: 6,
    title: "Eco Sentry",
    description: "ARM cortex based automation system",
    image: "/images/projects/6.png",
    tag: ["All", "Hardware"],
    gitUrl: "https://github.com/charan-271/Eco-Sentry-",
    previewUrl: "https://github.com/charan-271/Eco-Sentry-",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
