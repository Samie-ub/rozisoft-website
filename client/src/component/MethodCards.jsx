import { Grid } from "@mui/material";
import React from "react";

function MethodCards({ heading, paragraph, data }) {
  return (
    <div>
      <Grid container justifyContent={"center"} sx={{ py: { xs: 4, md: 20 } }}>
        <Grid item md={9} lg={9} sx={{ pb: { xs: 4, md: 10 } }}>
          <h1 className="heading text-center">{heading}</h1>
          <p className="text-center">{paragraph}</p>
        </Grid>
        {data.map((content, index) => {
          return (
            <Grid item md={3.6} lg={3.6} key={index}>
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
