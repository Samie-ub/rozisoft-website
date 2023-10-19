import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import { contentCover, contentCoverII } from "../assets";
import {
  contentPara,
  contentParaTwo,
  contentStepData,
} from "../content/servicesContent";
import StepCards from "../component/StepCards";
function ContentWritingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="seo-page">
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
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                    HIGH-QUALITY WEBSITE CONTENT WRITING SERVICES IN PAKISTAN.
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img src={contentCover} className="full-width" alt="" />
                </Grid>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Grid item lg={11}>
                  <div className="smm-content">
                    <h1 className="upper">
                      CLEARCONCISE AND CATCHY CONTENT WRITING
                    </h1>
                    <div className="smm-main-points">
                      {contentPara.map((content) => {
                        return <p>{content}</p>;
                      })}
                    </div>
                  </div>
                </Grid>
              </Grid>
              <StepCards data={contentStepData} />
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 4, md: 10 } }}
              >
                <Grid item xs={12} md={6} lg={6}>
                  <img src={contentCoverII} className="full-width" alt="smm" />
                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                  <div className="smm-content">
                    <h1 className="upper">
                      Quality Graphic Design | Brand Consistency
                    </h1>
                    {contentParaTwo.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
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

export default ContentWritingPage;
