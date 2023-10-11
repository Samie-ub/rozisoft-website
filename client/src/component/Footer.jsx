import React from "react";
import { Grid } from "@mui/material";
import { socialData } from "../content";
import { Link } from "react-scroll";
import { logoIcon } from "../assets";
import "../styles/footer-styles.css";

function Footer() {
  const industriesData = [
    "Hospitality",
    "Travel & Tourism",
    "Real State",
    "Financial Service",
    "Education",
    "News",
  ];

  const contact = [
    {
      label: "Phone",
      uan: " +92 326 4075748",
    },
    {
      label: "Mobile",
      uan: " +92 348 8128670",
    },
    {
      label: "Email",
      uan: "rozisoftservice@gmail.com ",
    },
  ];

  const servicesData = [
    "Web Design and Development",
    "Social Media Marketing",
    "Graphic Designing",
    "Search Engine Optimization",
    "Digital Marketing",
    "Internet Marketing",
  ];

  const links = [
    {
      class: "home",
      label: "Home",
    },
    {
      class: "about",
      label: "About us",
    },
    {
      class: "service",
      label: "Services",
    },
    {
      class: "blog",
      label: "Blogs",
    },
    {
      class: "contact",
      label: "Contact",
    },
  ];
  return (
    <div className="footer-container">
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={11} lg={11}>
          <Grid
            container
            sx={{ justifyContent: { xs: "center", md: "space-around" } }}
          >
            <Grid item xs={11} md={4} lg={3}>
              <img
                src={logoIcon}
                className="footer-brand"
                alt="footer brand content"
              />
              <div className="footer-brand-info">
                {contact.map((content) => {
                  return (
                    <p>
                      <span>{content.label} : </span>
                      {content.uan}
                    </p>
                  );
                })}
                <p>
                  <span>Connect With Us :</span>
                </p>
                <div className="img-container">
                  {socialData.map((content, index) => {
                    return (
                      <img src={content.icon} alt="social media account" />
                    );
                  })}
                </div>
              </div>
            </Grid>
            <Grid item xs={11} md={3} lg={3} sx={{ pb: { xs: 4, md: 0 } }}>
              <h1>Our Services</h1>
              {servicesData.map((content) => {
                return <p>{content}</p>;
              })}
            </Grid>
            <Grid item xs={11} md={2.5} lg={2}>
              <h1>Industries</h1>
              {industriesData.map((content) => {
                return <p>{content}</p>;
              })}
            </Grid>
            <Grid item md={2.5} lg={2} className="display-none">
              <h1>quick links</h1>
              {links.map((content) => {
                return (
                  <p className="footer-link">
                    <Link
                      to={content.class}
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={1500}
                    >
                      {content.label}
                    </Link>
                  </p>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
