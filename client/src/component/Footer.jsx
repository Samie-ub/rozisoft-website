import React from "react";
import { Grid } from "@mui/material";
import { socialData } from "../content";
import { Link } from "react-scroll";
import { logoIcon } from "../assets";
import "../styles/footer-styles.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const industriesData = [
    {
      label: "Hospitality",
      path: "/hospitality",
    },
    {
      label: "Travel & Tourism",
      path: "/travel-tourism",
    },
    {
      label: "Real State",
      path: "/real-estate",
    },
    {
      label: "Financial Service",
      path: "/financial-service",
    },
    {
      label: "Education",
      path: "/education",
    },
    {
      label: "News",
      path: "/news",
    },
  ];

  const contact = [
    {
      label: "Phone",
      uan: " +92 326 4075748",
      href: "tel:+923264075748",
    },
    {
      label: "Mobile",
      uan: " +92 348 8128670",
      href: "https://wa.me/+923488128670",
    },
    {
      label: "Email",
      uan: "rozisoftservice@gmail.com ",
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rozisoftservice@gmail.com",
    },
  ];

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
    {
      label: "Link Building",
      path: "/link-building",
    },
  ];

  const links = [
    {
      class: "home",
      label: "Home",
      path: "/",
    },
    {
      class: "about",
      label: "About us",
      path: "/about-us",
    },
    {
      class: "service",
      label: "Services",
      path: "/service",
    },
    {
      class: "blog",
      label: "Blogs",
      path: "/blogs",
    },
    {
      class: "contact",
      label: "Contact",
      path: "/contact-us",
    },
  ];
  return (
    <div className="footer-container">
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={11.5} md={11} lg={11}>
          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "space-around",
                md: "space-around",
              },
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              lg={3}
              sx={{ pb: { xs: 2, md: 0 } }}
            >
              <img
                src={logoIcon}
                className="footer-brand"
                alt="footer brand content"
              />
              <div className="footer-brand-info">
                {contact.map((content) => {
                  return (
                    <p>
                      <a
                        href={content.href}
                        target="_blank"
                        className="footer-link"
                        rel="noreferrer"
                      >
                        <span>{content.label} : </span>
                        {content.uan}
                      </a>
                    </p>
                  );
                })}
                <p className="footer-contact">
                  <span>Connect With Us :</span>
                </p>
                <div className="img-container">
                  {socialData.map((content, index) => {
                    return (
                      <a href={content.href} target="_black" rel="no-ref">
                        <img src={content.icon} alt="social media account" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={11}
              sm={3.5}
              md={3}
              lg={3}
              sx={{ pb: { xs: 1, md: 0 } }}
            >
              <h1>Our Services</h1>
              {servicesData.map((content) => {
                return (
                  <NavLink to={content.path}>
                    <p className="footer-link">{content.label}</p>
                  </NavLink>
                );
              })}
            </Grid>
            <Grid item xs={11} sm={3} md={2.5} lg={2}>
              <h1>Industries</h1>
              {industriesData.map((content) => {
                return (
                  <NavLink to={content.path}>
                    <p className="footer-link">{content.label}</p>
                  </NavLink>
                );
              })}
            </Grid>
            <Grid item sm={0} md={2.5} lg={2} className="display-none">
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
                      <NavLink to={content.path}>{content.label}</NavLink>
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
