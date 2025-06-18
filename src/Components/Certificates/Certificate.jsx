import React from "react";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Certificate = () => {
return(
<div className={styles.certificateSection}>
      <h2 className={styles.animatedHeading}>Certificates</h2>
      
  <div className="w-[80%] mx-auto mt-10">
  <div className="overflow-hidden rounded-xl">
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      captions={true}
      interval={3000}
      transitionTime={300}
      emulateTouch={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={false}
      useKeyboardArrows={true}
      showIndicators={true}
    >
      {/* Apply fixed height and image sizing here */}
      {[
        { src: "/certificates/udemy.png", label: "Udemy Full stack web development Certificate" },
        { src: "/certificates/mooc.png", label: "MOOC.fi Certificate" },
        { src: "/certificates/oracle.jpg", label: "Oracle Cloud Certificate" },
        { src: "/certificates/tcs.png", label: "TCS Codvita Certificate" },
        { src: "/certificates/microsoft.jpg", label: "Microsoft Virtual Internship Certificate" },
        { src: "/certificates/nptel.jpg", label: "NPTEL DBMS Certificate" },
        { src: "/certificates/cpp.jpg", label: "Coding Ninjas CPP Certificate" },
      ].map((item, index) => (
        <div key={index} className="h-[150px]">
          <img
            src={getImageUrl(item.src)}
            alt={item.label}
            className="w-full h-full object-contain"
          />
          <p className="legend text-sm">{item.label}</p>
        </div>
      ))}
    </Carousel>
  </div>
</div>
    </div>


);

}

      {/* <img class="d-block w-100" src={getImageUrl("/certificates/mooc.jpg")} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={getImageUrl("/certificates/oracle.jpg")} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={getImageUrl("/certificates/cpp.jpg")} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={getImageUrl("/certificates/microsoft.jpg")} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={getImageUrl("/certificates/nptel.jpg")} alt="Third slide"/>
    </div> */}
export default Certificate;