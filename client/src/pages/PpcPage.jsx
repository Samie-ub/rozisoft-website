import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import { methodDataPpc, pointsPpc, ppcParaTwo } from "../content/servicesContent";
import TabbedInterface from "../component/TabbedInterface";
import MethodCards from "../component/MethodCards";

function PpcPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
  return (
    <div className="seo-page">
      <Helmet>
        <title>PCC Management Services | Drive Sales with PCC Services</title>
        <meta
          name="description"
          content="Grow your business and expand your reach with optimized and data-driven PPC marketing campaigns and services."
        />
      </Helmet>
          {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid
            container
            justifyContent={"center"}
            sx={{ pt: { xs: 4, md: 0 }, pb: { xs: 4, md: 0 } }}
          >
            <Grid item xs={11}>
              <Grid container justifyContent={"center"} alignItems={"center"} sx={{py:{xs:4,md:10}}}>
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                  Promote Your Brand and Drive Immediate Sales with PPC Services
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265730/pay_per_click_uspeps.jpg" className="full-width" alt="" />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Grid
                  item
                  md={8}
                  lg={8}
                  sx={{
                    py: { xs: 4, md: 10 },
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <h1 className="heading upper text-center">
                  What our PPC Services Includes
                  </h1>
                  <p className="text-center">
                  Boost Your ROI by 20% with Professional Search Engine Marketing Services in Pakistan and Worldwide.Unleash the power of PPC advertising, the swiftest route to get your business in front of your potential audience with a remarkable ROI potential of up to 20%.
                  </p>
                </Grid>
                <Grid item lg={11.3}>
                  <TabbedInterface  points={pointsPpc}/>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{ pt: { xs: 4, md: 20 },flexDirection:{xs:"column-reverse",md:"row"} }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265734/pcc_fk0da9.png" className="full-width" alt="smm" />
                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                  <div className="smm-content">
                    <h1 className="upper">
                    WHAT IS PPC AND HOW IT CAN BENEFIT YOUR BUSINESS
                    </h1>
                    {ppcParaTwo.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
                </Grid>
              </Grid>
              <MethodCards
                heading="OUR PPC SERVICES PROCESS"
                paragraph="In-depth comprehension of your business objectives, target audience, and advertising ambitions.
                Establishment of precise goals for the PPC campaign, whether it's lead generation, driving website traffic, or boosting sales.
                "
                data={methodDataPpc}
              />
            </Grid>
          </Grid>
        
          <Footer />
        </>
      )}
    </div>
  )
}

export default PpcPage