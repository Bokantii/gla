import React from "react";
import classes from "./Contact.module.scss";
import { Form } from "react-router-dom";
import logo from "./../../assets/logo.jpg";
import map from "./../../assets/map.png";

const Contact = () => {
  return (
    <section className={classes.form}>
      <form>
        <img src={logo} alt="logo" />
        <h1>Contact Us</h1>

        <section className={`${classes.inputSection} ${classes.nameSection}`}>
          <label htmlFor="name">Name</label>
          <div className={classes.inputDiv}>
            <input
              type="text"
              className={classes.input__}
              placeholder="First"
            />
            <input type="text" className={classes.input__} placeholder="Last" />
          </div>
        </section>
        <section className={classes.inputSection}>
          <label htmlFor="name">Phone</label>
          <div className={classes.inputDiv}>
            <input
              type="tel"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="e.g 080 777 888 999"
            />
          </div>
        </section>
        <section className={classes.inputSection}>
          <label htmlFor="name">Email</label>
          <div className={classes.inputDiv}>
            <input
              type="email"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="johnDoe@email.com"
            />
          </div>
        </section>
        <section className={classes.inputSection}>
          <label htmlFor="name">Address</label>
          <div className={classes.inputDiv}>
            <input
              type="text"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="Street Address"
            />
          </div>
          <div className={classes.inputDiv}>
            <input
              type="text"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="Street Address Line 2"
            />
          </div>
          <div className={classes.inputDiv}>
            <input type="text" className={classes.input__} placeholder="City" />
            <input
              type="text"
              className={classes.input__}
              placeholder="Region"
            />
          </div>
          <div className={classes.inputDiv}>
            <input
              type="text"
              className={classes.input__}
              placeholder="Postal/Zip Code"
            />
            <input
              type="text"
              className={classes.input__}
              placeholder="Country"
            />
          </div>
        </section>
        <section className={classes.inputSection}>
          <label htmlFor="name">Message</label>
          <div className={classes.inputDiv}>
            <textarea name="" id=""></textarea>
          </div>
        </section>

        <button type="submit" className={classes.donate_btn}>
          Submit
        </button>
      </form>
      <a
        href="https://www.google.com/maps?ll=9.049729,7.499129&z=15&t=m&hl=en&gl=CA&mapclient=embed&cid=3349424392776440739"
        style={{ width: "100%", marginTop: "2rem" }}
      >
        <img src={map} alt="" style={{ width: "100%" }} />
      </a>
    </section>
  );
};

export default Contact;
