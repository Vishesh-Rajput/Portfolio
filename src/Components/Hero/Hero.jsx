import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    
    <section className={styles.container}>
      
    
      <div className={styles.content}>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Greetings! ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Welcome to my dev space.',
        1000,
        'Great to see you!',
        1000,
  
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block' }}
      repeat={Infinity}
    />
        {/* <h1 className={styles.title}>hello i'm Vishesh </h1> */}
        <p className={styles.text}>
          <br/>
          I’m Vishesh Rajput,
a full-stack Web developer who loves solving real-world problems through code.
I work with the PERN stack, and also have solid experience in C++ and Java.
Feel free to explore my work and see what I’ve been building!
        </p>
        <button className={styles.btn} onClick={() => window.location.href = 'mailto:someone@example.com'} >
          Contact me 
        </button>
        {/* <p class="d-inline-flex gap-1">
          <div className="contact-div">
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Contact Me
            </a>
          </div>
        </p> */}
        {/* <div class="collapse" id="collapseExample">
          <div className={`card card-body ${styles.bodycard} `}>
            <a href="mailto:vishesh.rajput.p@gmail.com">Email:</a>{" "}
            <p>vishesh.rajput.p@gmail.com </p>
            <a
              href="https://www.linkedin.com/in/vishesh-rajput/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin:
            </a>
          </div>
        </div> */}
      </div>
      <img
        src={getImageUrl("hero/nobg.png")}
        alt="Hero image"
        className={styles.img}
      />
      <div className={styles.topBlur}>
        <h1>1</h1>
      </div>
      <div className={styles.bottomBlur}>
        <h1>2</h1>
      </div>
    </section>
  );
};
