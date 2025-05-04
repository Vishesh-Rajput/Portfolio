import React, { useState } from "react";
import styles from "./cards.module.css"; // Update this path to your actual CSS module

export const Cards = () => {
  const [selected, setSelected] = useState("item-1");

  const handleChange = (e) => {
    setSelected(e.target.id);
    document.body.classList.toggle(styles.blue);
  };

  return (
    <><main className={styles.main}>
    <section className={styles.cardArea}>
      {/* Card: City */}
      <section className={styles.cardSection}>
        <div className={styles.card}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardContainer}>
              <div className={styles.cardFront}>
                <div className={`${styles.cardFrontTp} ${styles.cardFrontTpCity}`}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    style={{ enableBackground: "new 0 0 60 60" }}
                    xmlSpace="preserve"
                    className={styles.cardFrontIcon}
                  >
                    {/* SVG paths */}
                  </svg>
  
                  <h2 className={styles.cardFrontHeading}>City break</h2>
                  <p className={styles.cardFrontTextPrice}>From £29</p>
                </div>
  
                <div className={styles.cardFrontBt}>
                  <p className={`${styles.cardFrontTextView} ${styles.cardFrontTextViewCity}`}>
                    View me
                  </p>
                </div>
              </div>
              <div className={styles.cardBack}>
                <video
                  className={styles.videoContainer}
                  autoPlay
                  muted
                  loop
                >
                  <source
                    className={styles.videoMedia}
                    src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
  
          <div className={styles.insidePage}>
            <div className={styles.insidePageContainer}>
              <h3 className={`${styles.insidePageHeading} ${styles.insidePageHeadingCity}`}>
                For urban lovers
              </h3>
              <p className={styles.insidePageText}>
                As cities never sleep, there are always something going on, no
                matter what time!
              </p>
              <a href="#" className={`${styles.insidePageBtn} ${styles.insidePageBtnCity}`}>
                View deals
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
  </>
  );
};
