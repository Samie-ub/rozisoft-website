import React from "react";
import { clientData } from "../content";
import "../styles/section-styles.css";
import { Grid } from "@mui/material";

function ClientSection() {
  return (
    <div className="client-container">
      <Grid container py={10} justifyContent={"center"}>
        <Grid item xs={11} lg={12}>
          <p className="client-heading">Clients we have worked for....</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="client-images-container">
            {clientData.map((content, index) => (
              <span key={index} className="client-image">
                <img src={content.imgSrc} alt="client info" />
              </span>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ClientSection;
