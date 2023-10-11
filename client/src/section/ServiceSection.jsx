import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "../styles/section-styles.css";
import ServiceCards from "../component/ServiceCards";
import MobileSlider from "../component/MobileSlider";

function ServiceSection() {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="service-section-container" name="service">
      <Grid container justifyContent={"center"} pt={20}>
        <Grid item xs={11} lg={11}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <h1 className="heading text-center">
                At ROZISOFT, we handle your project as  if it belongs to
                us, not just as contractors.
              </h1>

              <p className="text-center">
                Get more customers by using plans designed for the people you
                want to reach, backed by data.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} pt={10} pb={10}>
        <Grid item xs={11} lg={11}>
        {isSmallerScreen ? (
          <MobileSlider />
        ) : (
          <ServiceCards />

        )}
        </Grid>
      </Grid>
    </div>
  );
}

export default ServiceSection;
