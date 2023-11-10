import React from "react";
import { Grid } from "@mui/material";
import { aboutImage } from "../assets";
import { aboutData } from "../content";
import "../styles/section-styles.css";
function AboutSection() {
  return (
    <div className="about-container" name="about">
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} sm={11.5} md={11} lg={11}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            py={20}
            sx={{
              py: { xs: 5, md: 20 },
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
            <Grid item xs={12} md={12} lg={12} sx={{ py: { xs: 0, md: 0 } }}>
              <h1 className="heading text-end">
                Premier Digital Marketing <br /> Agency in Pakistan
              </h1>
              <br />
              <hr className="line" />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <img
                src={aboutImage}
                className="full-width"
                alt="about section content"
              />
            </Grid>
            <Grid item xs={11.8} md={6.7} lg={6}>
              {aboutData.map((content, index) => {
                return (
                  <p className="square-paragraph m-y" key={index}>
                    {content.paragraph}
                  </p>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutSection;
