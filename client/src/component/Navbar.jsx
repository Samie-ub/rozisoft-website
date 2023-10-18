import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Grid } from "@mui/material";
import { socialData, navbarData } from "../content";
import { menuIcon, crossIcon,logoIcon } from "../assets";
import "../styles/Navbar-styles.css";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 44.78;
      if (scrollY >= headerHeight) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isNavbarFixed ? "fixed-navbar" : ""}`}>
      <Grid
        container
        sx={{ justifyContent: { xs: "space-between", md: "space-evenly" },px:{xs:2,md:0 }}}
        alignItems={"center"}
      >
        <Grid item xs={3} sm={2} md={2} lg={2} sx={{display:'flex',alignItems:'center'}}>
          <img src={logoIcon} className="logo-img" alt="brand logo" />
        </Grid>
        <Grid item xs={2} sm={7} md={6} lg={6}>
          <div className="nav-links flex justify-center">
            {navbarData.map((content, index) => {
              return (
                <Link
                  activeClass="active-link"
                  to={content.class}
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={1500}
                  key={index}
                >
                  <RouterLink to={content.path}>
                    <p>{content.label}</p>
                  </RouterLink>
                </Link>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={1} sm={2} md={2} lg={2}>
          <div className="social-item flex justify-center">
            {socialData.map((content, index) => {
              return (
                <a
                  href={content.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={content.icon} alt="social icons" />
                </a>
              );
            })}
          </div>
          <div className="menubar-icon"  onClick={toggleMenu}>
          <i class="fa-solid fa-compass"></i>
          </div>
          
          {isMenuOpen && (
            <div className="menu-dropdown">
              <div className="menu-content">
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"space-between"}
                >
                  <Grid
                    item
                    xs={11}
                    sx={{
                      height: "92vh",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                   py:1
                    }}
                  >
                    <Grid container justifyContent={"space-between"} alignItems={"center"}>
                      <Grid item xs={2}>
                      <img src={logoIcon} className="logo-img" alt="brand logo" />
                      </Grid>
                      <Grid item xs={2} style={{display:"flex",
                    justifyContent:"flex-end"}}>
                        <div className="menubar-icon" onClick={toggleMenu}>
                        <i class="fa-solid fa-circle-xmark"></i>
                        </div>
                        
                      </Grid>
                    </Grid>
                    <div className="para-space">
                      {navbarData.map((content, index) => {
                        return (
                          <Link
                            activeClass="active-link"
                            to={content.class}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            key={index}
                            onClick={toggleMenu}
                          >
                            <RouterLink to={content.path}>
                              <p>{content.label}</p>
                            </RouterLink>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="img-container-nav">
                      {socialData.map((content, index) => {
                        return (
                          <img
                            className="nav-social"
                            src={content.icon}
                            alt="images for social media accounts"
                          />
                        );
                      })}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;