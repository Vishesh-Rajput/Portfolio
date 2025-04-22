import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>hello i'm Vishesh  </h1>
                <p className={styles.text}>IT student with strong skills in web development, programming (C, C++,
 Java), and database management, seeking an internship in Web
 development or as a tech intern to apply and enhance technical expertise.</p>
                <p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
   Contact Me
  </a>
</p>
<div class="collapse" id="collapseExample">
<div className={`card card-body ${styles.bodycard} `} >
   <a  href="mailto:vishesh.rajput.p@gmail.com"  >Email:</a> <p>vishesh.rajput.p@gmail.com </p>
    <a href="https://www.linkedin.com/in/vishesh-rajput/"  target="_blank" rel="noopener noreferrer" >linkedin:</a>
  </div>
</div>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image" className={styles.img} />
            <div className={styles.topBlur}><h1>1</h1></div>
            <div className={styles.bottomBlur}><h1>2</h1></div>
        </section>
    );
}

