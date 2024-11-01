import React from "react";
import classes from "./DataCollection.module.scss";
import logo from "./../../assets/logo.jpg";
import { useForm } from "react-hook-form";

const DataCollection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={classes.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="logo" />
        <h1>GLA Abuja: 1st & 2nd Timers - Data Collection</h1>

        <section className={`${classes.inputSection} ${classes.nameSection}`}>
          <label htmlFor="name">Name</label>
          <div className={`${classes.inputDiv} ${classes.nameDiv}`}>
            <input
              type="text"
              className={classes.input__}
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p style={{ color: "red" }}>{errors.firstName.message}</p>
            )}

            <input
              type="text"
              className={classes.input__}
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p style={{ color: "red" }}>{errors.lastName.message}</p>
            )}
          </div>
        </section>

        <section className={classes.inputSection}>
          <label htmlFor="phone">Phone</label>
          <div className={`${classes.inputDiv} ${classes.nameDiv}`}>
            <input
              type="tel"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="e.g 080 777 888 999"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p style={{ color: "red" }}>{errors.phone.message}</p>
            )}
          </div>
        </section>

        <section className={classes.inputSection}>
          <label htmlFor="email">Email</label>
          <div className={`${classes.inputDiv} ${classes.nameDiv}`}>
            <input
              type="email"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="johnDoe@email.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
        </section>

        <section className={classes.inputSection}>
          <label>Preferred Mode of Contact</label>
          <div className={`${classes.radioInputs } ${classes.modeOfContactDiv}`}>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="phone"
                value="Phone"
                {...register("modeOfContact", {
                  required: "Please select a mode of contact",
                })}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="email"
                value="Email"
                {...register("modeOfContact", {
                  required: "Please select a mode of contact",
                })}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="whatsapp"
                value="Socials - WhatsApp"
                {...register("modeOfContact", {
                  required: "Please select a mode of contact",
                })}
              />
              <label htmlFor="whatsapp">Socials - WhatsApp</label>
            </div>
          </div>
          {errors.modeOfContact && (
            <p style={{ color: "red" }}>{errors.modeOfContact.message}</p>
          )}
        </section>
        {/* Join our community start */}
        <section className={classes.inputSection}>
          <label>Will you like to join our GLA Abuja community?</label>
          <div className={`${classes.radioInputs } ${classes.modeOfContactDiv}`}>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="connect"
                value="Yes, you can connect me with the community."
                {...register("joinCommunity", {
                  required: "Please select an option",
                })}
              />
              <label htmlFor="connect">
                Yes, you can connect me with the community.
              </label>
            </div>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="alreadyConnected"
                value="I’m already connected with the community"
                {...register("joinCommunity", {
                  required: "Please select an option",
                })}
              />
              <label htmlFor="alreadyConnected">
                I’m already connected with the community
              </label>
            </div>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="notNow"
                value="Not right now, respectfully."
                {...register("joinCommunity", {
                  required: "Please select an option",
                })}
              />
              <label htmlFor="notNow">Not right now, respectfully.</label>
            </div>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="never"
                value="Never"
                {...register("joinCommunity", {
                  required: "Please select an option",
                })}
              />
              <label htmlFor="never">Never</label>
            </div>
          </div>
          {errors.joinCommunity && (
            <p style={{ color: "red" }}>{errors.joinCommunity.message}</p>
          )}
        </section>
        {/* Join our community end */}
        {/* Future services attendance start */}
        <section className={classes.inputSection}>
          <label>Will you be attending future services at GLA Abuja?</label>
          <div className={`${classes.radioInputs } ${classes.modeOfContactDiv}`}>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="yes"
                value="Yes"
                {...register("futureAttendance", {
                  required: "Please select an option",
                })}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className={classes.radioInput}>
              <input
                type="radio"
                id="no"
                value="No"
                {...register("futureAttendance", {
                  required: "Please select an option",
                })}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {errors.futureAttendance && (
            <p style={{ color: "red" }}>{errors.futureAttendance.message}</p>
          )}
        </section>
        {/* Future services attendance end */}

        <section className={classes.inputSection}>
          <label htmlFor="address">Address</label>
          <div className={classes.inputDiv}>
            <input
              type="text"
              className={`${classes.input__} ${classes.fullLengthInput}`}
              placeholder="Street Address"
              {...register("streetAddress")}
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
          <label htmlFor="name">
            What was your favorite part of today’s service?{" "}
          </label>
          <div className={classes.inputDiv}>
            <textarea name="" id=""></textarea>
          </div>
        </section>
        <section className={classes.inputSection}>
          <label htmlFor="name">
            Help us do better; what do you want to see implemented before your
            next service?{" "}
          </label>
          <div className={classes.inputDiv}>
            <textarea name="" id=""></textarea>
          </div>
        </section>
        <section className={classes.inputSection}>
          <label htmlFor="name">Prayer Requests </label>
          <div className={classes.inputDiv}>
            <textarea name="" id=""></textarea>
          </div>
        </section>
        <button type="submit" className={classes.donate_btn}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default DataCollection;
