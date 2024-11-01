import React from "react";
import classes from "./FooterB.module.scss";

const FooterB = () => {
  return (
    <section className={classes.footer}>
      <section className={classes.footer_content}>
        <p className={classes.copyright}>
          Copyright © 2024 GLA AWC All rights reserved.
        </p>
      </section>
    </section>
  );
};

export default FooterB;