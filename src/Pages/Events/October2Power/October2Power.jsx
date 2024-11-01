import React from "react";
import classes from "./October2Power.module.scss";
import heroImg from "./../../../assets/heroImg.jpeg";
import flyer2 from "./../../../assets/flyer2.jpeg";
import logo from "./../../../assets/map.png";
import october2power from './../../../assets/october2power.mp4';
import FooterB from "../../../components/FooterB/FooterB";
const HomeB = () => {
  return (
    <section className={`${classes.October2Power} container-fluid`}>
      {/* HERO START */}
      <section className={`${classes.hero} container-fluid`}>
      
        
      </section>
      {/* HERO END */}
      {/* ABOUT CONFERENCE START */}
      
      {/* ABOUT CONFERENCE END */}
      {/* SPEAKER PROFILE START */}
      <section className={classes.speakers_section}>
        <section className={classes.speakers}>
          <img src={heroImg} alt="speakers" />
          <img src={flyer2} alt="speakers" />
        </section>
       
      </section>

      {/* SPEAKER PROFILE END */}
      {/* SCHEDULE START */}
    
      {/* SCHEDULE END */}
      {/* VENUE AND DIRECTIONS START */}
      <section className={classes.venue_and_directions}>
        <a
          href="https://www.google.com/maps/place/Guiding+Light+Assembly+(GLA+Abuja)/@9.049729,7.499129,15z/data=!4m6!3m5!1s0x104e0bbef4864b67:0x2e7b8bbd3d77dba3!8m2!3d9.0497294!4d7.4991292!16s%2Fg%2F11c5znj34_?hl=en&entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D"
          className={classes.map_link}
        >
          <img src={logo} />
        </a>
      </section>
      {/* VENUE AND DIRECTIONS END */}
      <section className={classes.videoBackground}>
        <video autoPlay muted loop>
          <source src={october2power} type="video/mp4" />
        </video>
        <div className={classes.overlay}></div>
      </section>

      <FooterB />
    </section>
  );
};

export default HomeB;
