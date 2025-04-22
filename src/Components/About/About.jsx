import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/codeicon.png")} alt="code-icon" />
            <div className={styles.aboutItemText}>
              <h3>Programmer </h3><br />
              <p>
               A curious programmer skilled in C, C++, Java (basic), and JavaScript, driven by the thrill of debugging and solving complex problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />

            <div className={styles.aboutItemText}>
              <h3>Frontend Web Developer</h3><br />
              <p>
                A creative frontend developer skilled in HTML, CSS, JavaScript, and React, passionate about crafting visually appealing and responsive user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="UI icon"  />
            <div className={styles.aboutItemText}>
              <h3> Backend Web Developer</h3><br />
              <p>
                A beginner backend developer exploring Node.js, Express, and  relational databases, eager to build efficient server-side applications and enhance problem-solving skills
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};