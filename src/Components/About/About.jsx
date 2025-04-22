import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me...</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop.png")}
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
              <h3>Full-stack Developer</h3><br />
              <p>
              Full-stack web developer crafting clean UIs with HTML, CSS, JavaScript, and React — while exploring Node.js, Express, and databases to build efficient backend systems. Always learning and solving real-world problems.

</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="UI icon"  />
            <div className={styles.aboutItemText}>
              <h3> Computer Fundamentals</h3><br />
              <p>
              Well-versed in computer fundamentals, OOP concepts, OS principles, DBMS (SQL), and networking basics like protocols and IP addressing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};