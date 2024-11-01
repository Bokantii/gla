import React from "react";
import classes from "./Footer.module.scss";
import {
  LogoFacebook,
  LogoTwitter,
  LogoYoutube,
  LogoInstagram,
} from "react-ionicons";
const Footer = () => {
  return (
    <section className={classes.footer}>
      <section className={classes.footer_content}>
        <section className={classes.footer_content_top}>
          <section className={classes.footer_content_top_left}>
            {" "}
            <p>
              Building people of integrity: integrity in thoughts, words, deeds,
              and doctrine, who will impact the Nations for the Kingdom of God.
            </p>
            <section className={classes.socials}>
              <LogoFacebook width="30px" height="30px" color="#ffffff" />
              <LogoYoutube width="30px" height="30px" color="#ffffff" />
              <LogoTwitter width="30px" height="30px" color="#ffffff" />
              <LogoInstagram width="30px" height="30px" color="#ffffff" />
            </section>
          </section>

          <section className={classes.explore}>
            <h2>Explore </h2>
            <section className={classes.lists}>
              {/* list1 */}
              <ul>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">EVENTS</a>
                </li>
                <li>
                  <a href="#">WATCH</a>
                </li>
                <li>
                  <a href="#">LIVE</a>
                </li>
              </ul>
              {/* list1 end*/}
              {/* list2 */}
              <ul>
                <li>
                  <a href="#">SERVICE</a>
                </li>
                <li>
                  <a href="#"> MINISTRIES</a>
                </li>
                <li>
                  <a href="#">ONLINE STORE</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
              {/* list2 end*/}
            </section>
          </section>
          <section className={classes.newsletter}>
            <h2>Newsletter</h2>

            <p>
              Stay tuned to receive updates about us right in your email when
              you subscribe.
            </p>
            <form className={classes.input}>
                <input type="email" placeholder="Enter your email" />
                <button style={{textTransform:"uppercase"}}>go...</button>
            </form>
          </section>
        </section>

        <p className={classes.copyright}>
          Copyright © 2023 GLA AWC All rights reserved.
        </p>
      </section>
    </section>
  );
};

export default Footer;
