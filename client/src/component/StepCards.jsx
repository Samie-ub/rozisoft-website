import { Grid } from "@mui/material";
import React from "react";

function StepCards({ data }) {
  return (
    <div>
      <Grid container justifyContent={"space-between"} sx={{ py: { xs: 4, md: 10 } }}>
        {data.map((content, index) => {
          return (
            <Grid item className="ani" xs={12} md={4} lg={4} key={index} sx={{ py: { xs: 4, md: 5 }, px: { xs: 1, md: 2 } }}>
              <div className="step-card">
                <div className="step-icon">{content.icon}</div>
                <div className="step-content">
                  <span className="step-title">{content.title}</span>
                  <p className="step-para">{content.para}</p>
                  {content.list && (
                    <ul>
                      {content.list.map((item, itemIndex) => (
                        <li className="list" key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default StepCards;
