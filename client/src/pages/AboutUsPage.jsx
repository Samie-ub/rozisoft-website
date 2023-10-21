import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { aboutData, aboutDataTwo } from "../content/aboutContent";
import { AboutImg, AboutImgII } from "../assets";
function AboutUsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const servicesData = [
    {
      label: "Web Design and Development",
      path: "/web-designing--&-development",
    },
    {
      label: "Social Media Marketing",
      path: "/social-media-marketing",
    },
    {
      label: "Graphic Designing",
      path: "/graphic-designing",
    },
    {
      label: "Search Engine Optimization",
      path: "/search-engine-optimization",
    },
    {
      label: "Digital Marketing",
      path: "/digital-marketing",
    },
    {
      label: "Pay Per Click",
      path: "/pay-per-click",
    },
    {
      label: "Content Writing",
      path: "/content-writing",
    },
  ];
  return (
    <div className="about-us-page">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid container justifyContent={"center"}>
            <Grid item xs={11} md={10.8} lg={10.8}>
              {aboutData.map((content, index) => {
                return (
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flexDirection={content.direction}
                    sx={{ py: { xs: 3, md: 6 } }}
                  >
                    <Grid item xs={12} md={6} lg={5}>
                      <div className="about-content">
                        <h1 className="heading">{content.title}</h1>
                        <p>{content.para}</p>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      md={5.5}
                      lg={6}
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      <div
                        className="brand-h"
                        style={{
                          backgroundImage: `url(${content.bgUrl})`,
                        }}
                      >
                        <div className="over-lay"></div>
                      </div>
                    </Grid>
                  </Grid>
                );
              })}

              {aboutDataTwo.map((content) => {
                return (
                  <Grid
                    container
                    justifyContent={"center"}
                    spacing={1}
                    sx={{ py: { xs: 4, md: 10 } }}
                  >
                    <Grid item xs={12} md={6} lg={6}>
                      <img src={AboutImg} className="full-width" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <h1 className=" about-h">{content.title}</h1>
                      <p className="about-d">{content.para}</p>
                      <p className="about-d">{content.paraTwo}</p>
                    </Grid>
                  </Grid>
                );
              })}

              <Grid
                container
                alignItems={"center"}
                sx={{ pb: { xs: 4, md: 20 } }}
              >
                <Grid item xs={12} md={5} lg={5}>
                  <div className="about-btn">
                    <p>
                      <span className="highlight">Are you ready </span> <br />{" "}
                      to experience increased traffic, organic sales and high
                      ROI?
                    </p>
                    <button className="btn" onClick={toggleDropdown}>
                      How can we help you?{" "}
                      <i class="fa-solid fa-angle-down"></i>
                    </button>
                    {isDropdownOpen && (
                      <div className="dropdown-content">
                        {servicesData.map((content) => {
                          return <Link to={content.path}>{content.label}</Link>;
                        })}
                      </div>
                    )}
                  </div>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                  <img src={AboutImgII} className="full-width" alt="" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Footer />
        </>
      )}
    </div>
  );
}

export default AboutUsPage;
