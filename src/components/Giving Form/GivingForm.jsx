import React from "react";
import classes from "./GivingForm.module.scss";
import { Form } from "react-router-dom";
import logo from "./../../assets/logo.jpg";

const GivingForm = () => {
  return (
    <section className={classes.form}>
      <form>
        <img src={logo} alt="logo" />
        <h1 >Giving Form</h1>

        <section className={`${classes.inputSection} ${classes.nameSection}`}>
          <label htmlFor="name">Name</label>
          <div className={classes.inputDiv}>
            <input
              type="text"
              className={classes.input__}
              placeholder="First Name"
            />
            <input type="text" className={classes.input__} placeholder="Last Name" />
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
            <input type="text" className={classes.input__} placeholder="City"/>
            <input type="text" className={classes.input__} placeholder="Region"/>
          </div>
          <div className={classes.inputDiv}>
            <input type="text" className={classes.input__} placeholder="Postal/Zip Code"/>
            <input type="text" className={classes.input__} placeholder="Country"/>
          </div>
        </section>
        <section className={classes.inputSection}>
          <label htmlFor="name">
            Amount(#)
          </label>
          <div className={classes.inputDiv}>
            <input
              type="number"
              step="10"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="500"
            />
          </div>
        </section>

        <button type="submit" className={classes.donate_btn}>
          Give
        </button>
      </form>
    </section>
  );
};

export default GivingForm;
