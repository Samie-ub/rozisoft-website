import React from "react";
import { Grid } from "@mui/material";
import "../styles/section-styles.css";
function CallSection() {
  const phoneNumber = "+92-3488128670";
  return (
    <div className="call-container">
      <Grid
        container
        sx={{
          justifyContent: { xs: "center", md: "space-evenly" },
          py: { xs: 10, md: 20 },
          gap: { xs: 5, md: 0 },
        }}
        alignItems={"center"}
      >
        <Grid item xs={11} md={5} lg={5}>
          <h1 className="heading">
            Are you ready to experience increased traffic, organic sales and
            high ROI?
          </h1>
          <br />
          <a href={`tel:${phoneNumber}`} className="btn">call Now</a>
        </Grid>
        <Grid item xs={11} md={5} lg={5}>
          <div className="bg-image">
            <div className="gradient"></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CallSection;
