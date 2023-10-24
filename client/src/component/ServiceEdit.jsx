import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

function ServiceEdit() {
  const { serviceId } = useParams();
  const [formData, setFormData] = useState({
    backgroundImageUrl: "",
    cardTitle: "",
    cardServices: "",
    cardSubServices: "",
  });
  console.log("formData:", formData);

  useEffect(() => {
    if (serviceId) {
      fetch(`https://rozisoft-website-backend.vercel.app/service/service-details/${serviceId}`)
        .then((response) => response.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching service details:", error);
        });
    }
  }, [serviceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (serviceId) {
      axios
        .put(`https://rozisoft-website-backend.vercel.app/service/update-service/${serviceId}`, formData)
        .then((response) => {
          console.log(response.data);
          toast.success("Service updated successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to update service", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <Grid container>
        <Grid item lg={11.5}>
          <Grid
            container
            sx={{ justifyContent: { xs: "center", md: "space-between" } }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{
                display: { xs: "none", md: "block" },
                justifyContent: { xs: "center", md: "space-between" },
              }}
            >
              <Sidebar />
            </Grid>
            <Grid item xs={12} lg={9} py={5}>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs={12} lg={6.5}>
                  <div className="dash-service-card">
                    <div className="service-card">
                      <div
                        className="service-bg"
                        style={{
                          backgroundImage: `url(${formData.backgroundImageUrl})`,
                        }}
                      >
                        <div className="gradient-card">
                          <div className="card-content">
                            <hr className="card-line" />
                            <h1>{formData.cardTitle}</h1>
                            <span className="span">
                              {formData.cardSubServices}
                            </span>
                          </div>
                          <div className="hover-content">
                            <p>Inside our services</p>
                            <ul>
                              {formData.cardServices
                                .split(",")
                                .map((service, serviceIndex) => (
                                  <li key={serviceIndex}>{service.trim()}</li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={5}>
                  <form
                    action=""
                    className="service-das-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="url"
                      placeholder="add Background Image URL"
                      name="backgroundImageUrl"
                      value={formData.backgroundImageUrl} // Pre-fill with the background image URL
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="add Card Title"
                      name="cardTitle"
                      value={formData.cardTitle} // Pre-fill with the card title
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="text"
                      placeholder="add card services include"
                      name="cardSubServices"
                      value={formData.cardSubServices} // Pre-fill with the card sub-services
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      placeholder="add card services include (comma-separated)"
                      name="cardServices"
                      value={formData.cardServices} // Pre-fill with card services
                      onChange={handleChange}
                      required
                    />
                    <button type="submit" className="btn" onClick={handleSave}>
                      Save
                    </button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServiceEdit;
