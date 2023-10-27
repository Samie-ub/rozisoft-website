import { Grid } from "@mui/material";
import React from "react";
import { phoneIcon, mailIcon, starIcon, tickIcon } from "../assets";
import "../styles/header-styles.css";

function Header() {
  return (
    <div className="header-container">
      <Grid container>
        <Grid item sm={11.8} md={12} lg={12}>
          <Grid container justifyContent={"space-around"} alignItems={"center"}>
            <Grid item sm={6} md={5} lg={5}>
              <div className="flex">
                <div className="header-item flex">
                  <img src={phoneIcon} alt="header icons" />
                  <a href="tel:+923144085048">+92-3144085048</a>
                </div>
                <div className="header-item flex">
                  <img src={mailIcon} alt="header icons" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rozisoftservice@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    rozisoftservice@gmail.com
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
              <div className="flex justify-end">
                <div className="header-item flex">
                  <img src={starIcon} alt="header icons" />
                  <p>6 Years of Excellence</p>
                </div>
                {/* <div className="header-item flex">
                  <img src={tickIcon} alt="header icons" />
                  <p> Government License/DTS: 1994</p>
                </div> */}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
