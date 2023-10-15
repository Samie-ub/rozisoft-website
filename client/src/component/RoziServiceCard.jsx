import { Grid } from "@mui/material";
import React from "react";
import { seoServiceData } from "../content/servicesContent";
function RoziServiceCard() {
  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        sx={{ pt: { xs: 4, md: 20 }, pb: { xs: 4, md: 10 } }}
      >
        <Grid item lg={10}>
          <h1 className="heading text-center">ROZISOFT SEO SERVICES</h1>
          <p className="text-center">
            Our SEO plans are made to fit your business perfectly. We're an
            expert SEO agency that can boost your website's position in search
            engines and bring in more visitors, leads, and money.
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"space-between"}
        spacing={5}
        alignItems={"center"}
        sx={{pb:{xs:4,md:20}}}
      >
        {seoServiceData.map((content, index) => {
          return (
            <Grid item xs={12} md={3.5} lg={3.5}>
              <div className="s-card">
                <i class="fa-solid fa-arrow-right"></i>
                <span>{content}</span>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default RoziServiceCard;
