import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
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
      <Helmet>
        <title>
          Best SEO Content Writing Services | Content Writing Company
        </title>
        <meta
          name="description"
          content="Content marketing is the practice of creating content (blog or social media posts, videos, tweets) that attracts your target audience."
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
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ py: { xs: 4, md: 2 } }}
              >
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                    HIGH-QUALITY WEBSITE CONTENT WRITING SERVICES IN PAKISTAN.
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1698270162/content_writing_gfctnf.png"
                    className="full-width"
                    alt=""
                  />
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
                  <img
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1698270163/content-writing-services-.jpeg_ynebht.jpg"
                    className="full-width"
                    alt="smm"
                  />
                </Grid>
                <Grid item xs={12} md={5} lg={5}>
                  <div className="smm-content">
                    <h1 className="upper">
                      PROFESSIONAL & CREATIVE WEBSITE CONTENT WRITING
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
