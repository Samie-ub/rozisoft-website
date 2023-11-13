import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import MethodCards from "../component/MethodCards";
import {
  faqsWeb,
  methodDataWeb,
  webMain,
  webPara,
  webParaTwo,
  webStepData,
} from "../content/servicesContent";
import StepCards from "../component/StepCards";
import Faqs from "../component/Faqs";
function WebDevPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="seo-page">
       <Helmet>
        <title>Web Design & Development</title>
        <meta
          name="description"
          content="Rozisoft is a reliable web development company in Islamabad, Pakistan offers top-quality website design and development services to businesses."
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
            sx={{ pt: { xs: 4, md: 0 }, pb: { xs: 4, md: 20 } }}
          >
            <Grid item xs={11}>
              <Grid container justifyContent={"center"} alignItems={"center"} sx={{py:{xs:4,md:10}}}>
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className="heading upper">
                    SIMPLE TO USE, MODERN DESIGN WEB DEVELOPMENT IN PAKISTAN
                  </h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265729/responsive_web_designing_pfo4mn.webp" className="full-width" alt="" />
                </Grid>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Grid item lg={11}>
                  <div className="smm-content">
                    <h1>WEBSITE DEVELOPMENT AGENCY IN PAKISTAN</h1>
                    <div className="smm-main-points">
                      {webPara.map((content) => {
                        return <p>{content}</p>;
                      })}
                    </div>
                  </div>
                </Grid>
              </Grid>
              <StepCards data={webStepData} />
              <MethodCards
                heading="WE PROVIDE A COMPLETE ECOMMERCE WEB DEVELOPMENT SOLUTION"
                paragraph="Are you ready to launch your online store or transition your service-based business into the digital realm? Look no further! ROZISOFT's experts are here to offer you the finest e-commerce web development solution in Pakistan and all over the World, leveraging the power of WordPress Design and Development to create an exceptional online shopping experience for your customers. Our offerings not only encompass top-tier e-commerce web development solutions but also feature the most affordable packages available in Pakistan and worldwide."
                data={methodDataWeb}
              />
              <Grid
                container
                sx={{
                  justifyContent: { xs: "center", md: "space-between" },
                  py: { xs: 10, md: 15 },
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={5}
                  lg={5}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <img src="https://res.cloudinary.com/dwohygqua/image/upload/v1698265733/web_designing_mjssio.jpg" className="full-width" alt="" />
                </Grid>
                <Grid item xs={10} md={6} lg={6}>
                  <div className="smm-content">
                    <h1>ADVANCED WEB DEVELOPMENT SERVICES</h1>
                    {webParaTwo.map((content) => {
                      return <p>{content}</p>;
                    })}
                  </div>
                  {webMain.map((content) => {
                    return (
                      <div className="smm-main-points">
                        <h3>{content.title}</h3>
                        <p>{content.para}</p>
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
              <Faqs faqsData={faqsWeb} />
            </Grid>
          </Grid>

          <Footer />
        </>
      )}
    </div>
  );
}

export default WebDevPage;
