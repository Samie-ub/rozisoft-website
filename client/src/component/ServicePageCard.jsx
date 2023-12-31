import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid } from "@mui/material";
import "../styles/service-page-styles.css";

function ServicePageCard() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("https://rozisoft-com-backend.vercel.app/service/all-service")
      .then((response) => response.json())
      .then((data) => {
        setServiceData(data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  });

  const generateValidPath = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  return (
    <div className="page-card">
      <Grid
        container
        justifyContent={"center"}
        spacing={5}
        sx={{ pb: { xs: 4, md: 20 } }}
      >
        {serviceData.map((content, index) => {
          const validPath = generateValidPath(content.cardTitle);
          return (
            <Grid item xs={11} md={6} lg={5.6}>
              <RouterLink to={`/${validPath}`}>
                <div key={index} className="service-card full-width">
                  <div
                    className="service-bg"
                    style={{
                      backgroundImage: `url(${content.backgroundImageUrl})`,
                    }}
                  >
                    <div className="gradient-card">
                      <div className="card-content">
                        <hr className="card-line" />
                        <h1>{content.cardTitle}</h1>
                        <span>{content.cardSubServices || ""}</span>
                      </div>
                      <div className="hover-content">
                        <p>Inside our services</p>
                        <ul>
                          {(content.cardServices || "").map(
                            (service, serviceIndex) => (
                              <li key={serviceIndex}>{service.trim()}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ServicePageCard;
