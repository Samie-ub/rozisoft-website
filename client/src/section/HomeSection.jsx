import React from "react";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectFade } from "swiper/modules";
import { homeData } from "../content";
import "swiper/css";
import "swiper/css/effect-fade";
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
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:{xs:"none",md:"block"}}}>
              <Swiper
                modules={[Autoplay,EffectFade]}
                spaceBetween={50}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                effect="fade"
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
