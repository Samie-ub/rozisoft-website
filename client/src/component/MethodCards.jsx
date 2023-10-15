import { Grid } from "@mui/material";
import React from "react";
import { methodData } from "../content/servicesContent";

function MethodCards() {
  return (
    <div>
      <Grid container justifyContent={"center"} sx={{ py: { xs: 4, md: 20 } }}>
        <Grid item lg={9} sx={{ pb: { xs: 4, md: 10 } }}>
          <h1 className="heading text-center">
            ROZISOFT FLEXIBLE SEO METHODOLOGY
          </h1>
          <p className="text-center">
            ROZISOFT's Flexible SEO method is based on specific steps to ensure
            a strong SEO campaign structure. Here are the steps
          </p>
        </Grid>
        {methodData.map((content, index) => {
          return (
            <Grid item lg={3.6} key={index}>
              <div className="m-c">
                <h1>{content.number}</h1>
                <span>{content.title}</span>
                <p>{content.para}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default MethodCards;
