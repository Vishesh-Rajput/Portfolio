import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    
    <section className={styles.container}>
      
    
      <div className={styles.content}>
      <span style={{ fontSize: '3em' }}>
     
  Let's{' '}
  <TypeAnimation
    sequence={[
      'Connect.',
      1100,
      'Create.',
      1100,
      'Grow Together.',
      1100,
    ]}
    wrapper="span"
    speed={40}
    style={{ fontWeight: 'bold', display: 'inline-block' }}
    repeat={Infinity}
  />
</span>

        {/* <h1 className={styles.title}>hello i'm Vishesh </h1> */}
        <p className={styles.text}>
          <br/>
          Greatings !!  I’m <span style={{
  background: 'linear-gradient(90deg, #a855f7, #f43f5e)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold'
}}>
  Vishesh Singh Rajput
</span>,
a curious and creative software engineering student who's always curious and enjoys getting creative with learning.

        </p>
       <div className={styles.btnContainer}>
         <button className={styles.btn} onClick={() => window.location.href = 'mailto:vishesh.rajput.p@gmail.com'} >
          Contact me
          
        </button>
        
       <a href="/assets/Resume_ATS.pdf" target="_blank" rel="noopener noreferrer"> 
      <button className={styles.btn}>    Resume    </button>
      </a>
      
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/flip.png")}
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
