import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../component/Loader";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/pages.styles.css";
function FinancialServicePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="blog-page">
      <Helmet>
        <title>Financial Service</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <Grid container justifyContent={"center"}>
            <Grid item xs={11} md={10.8} lg={10.8}>
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 0, md: 12 } }}
              >
                <Grid item xs={12} md={6} lg={5}>
                  <h1 className="page-head">Financial Service</h1>
                  <p className="page-para">
                    Rozisoft is like a helpful partner for financial service
                    companies. We provide solutions that are made to fit exactly
                    what these companies need. This is really important to make
                    sure that the clients of these financial companies have an
                    easy and smooth experience.
                  </p>
                  <p className="page-para">
                    At Rozisoft, we start by carefully listening to what our
                    clients want. We don't just hear them; we really try to
                    understand the details of what they need. This deep
                    understanding is the key to creating solutions that not only
                    meet but go beyond what our clients first thought of.
                  </p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <img
                    className="full-width"
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699770994/financial-services_ieg4y5.png"
                    alt="industries content"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                sx={{ py: { xs: 4, md: 12 } }}
              >
                 <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <img
                    className="full-width"
                    src="https://res.cloudinary.com/dwohygqua/image/upload/v1699791690/Finance_leaders-rafiki_vjfdbw.png"
                    alt="industries content"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <p className="page-para">
                    Our main goal is to make things better for clients in the
                    financial world. We want to make sure their work is
                    organized and runs smoothly. We create solutions that are
                    not only made for their specific needs but also think about
                    what challenges might come up in the future. This way, we
                    help them build a strong foundation for success.
                  </p>
                  <p className="page-para">
                    Additionally, Rozisoft uses the latest technologies and the
                    best ways of doing things in the financial world when we
                    create our solutions. This makes sure that what we provide
                    is not only helpful but also keeps up with the changes
                    happening in the financial sector. Whether it's making
                    things work more efficiently, making things more secure, or
                    following the rules, Rozisoft is committed to giving
                    solutions that last.
                  </p>
                  <p className="page-para">
                    By providing thoughtful and complete solutions, Rozisoft
                    wants to make financial service businesses better. We
                    believe that using the right technology and services in a
                    way that fits each company is not just important, but it's
                    the way to go above and beyond what our financial clients
                    expect from us.
                  </p>
                  <Link to="/service">
                  <button className="page-btn">
                    Learn more
                  </button>
                  </Link>
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

export default FinancialServicePage;
