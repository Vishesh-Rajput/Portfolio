
import React, { useRef } from "react"
import styles from "./Project.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.scrollWrapper}>
        <button className={styles.navButton} onClick={() => scroll("left")}>◀</button>

        <div className={styles.projectsScroll} ref={scrollRef}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        <button className={styles.navButton} onClick={() => scroll("right")}>▶</button>
      </div>
    </section>
  );
};
