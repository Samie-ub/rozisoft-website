import React from "react";
import { Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../component/Sidebar";
import DashCardOne from "../component/DashCardOne";
import DashCardTwo from "../component/DashCardTwo";
import DashCardThree from "../component/DashCardThree";
import "../styles/dashboard-styles.css";

function Dashboard() {
  // Determine if the device is a computer/laptop (screen width > 1024px)
  const isLaptop = window.innerWidth > 1024;

  if (!isLaptop) {
    return <div>You need a laptop to view this page.</div>;
  }

  return (
    <div className="dashboard-container">
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
              <Grid container alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={12} lg={12} pt={5}>
                  <DashCardOne />
                </Grid>
                <Grid item xs={12} lg={12} pt={5}>
                  <DashCardTwo />
                </Grid>
                <Grid item lg={12} pt={5}>
                  <DashCardThree />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
