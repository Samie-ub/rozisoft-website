import React from "react";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { homeData } from "../content";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/section-styles.css";

function HomeSection() {
  return (
    <div className="home-container"  name="home">
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                autoplay={true}
                loop={true}
                slidesPerView={1}
              >
                {homeData.map((content, index) => {
                  return (
                    <SwiperSlide>
                      <div>
                        <img
                          src={content}
                          className="home-img"
                          alt="home banner"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeSection;
