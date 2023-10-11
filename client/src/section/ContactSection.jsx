import React from "react";
import { Grid } from "@mui/material";
import { mailIcon, phoneIcon } from "../assets";
function ContactSection() {
  const contactData = [
    {
      imgSrc: phoneIcon,
      label: "+92-3488128670",
    },
    {
      imgSrc: mailIcon,
      label: "rozisoftservice@gmail.com",
    },
  ];
  return (
    <div className="contact-container" name="contact">
      <div className="overlay">
        <Grid
          container
          sx={{
            justifyContent: { xs: "center", md: "space-evenly" },
            gap: { xs: 5, md: 0 },
            pt: { xs: 5, md: 10 },
          }}
          alignItems={"flex-start"}
        >
          <Grid item xs={11} md={5} lg={5}>
            <div className="contact-content">
              <h1>Get a Free Quote from rozisoft</h1>
              <p>
                We are here to give you expert opinions on real estate
                investment, property, and marketing.
              </p>
              <p>
                Feel free to contact our real estate agents for buying or
                selling your plots, villas, or any other property 24/7.
              </p>
              <div className="contact-ico">
                {contactData.map((content, index) => {
                  return (
                    <div>
                      <img src={content.imgSrc} alt="contact icons" />
                      <span>{content.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
          <Grid item xs={11} md={5} lg={5}>
            <form action="submit" className="contact-form">
              <input type="text" placeholder="name" required />
              <input type="tel" placeholder="Contact No" required />
              <input type="email" placeholder="email address" required />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="btn">submit</button>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ContactSection;
