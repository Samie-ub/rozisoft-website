import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { homeIcon } from "../assets";
import "../styles/dashboard-styles.css";

function AdminLogin() {
  const [adminID, setAdminID] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "https://rozisoft-com-backend.vercel.app/admin/login";
      const response = await axios.post(url, {
        adminID,
        adminPassword,
      });

      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      navigate("/rozisoft-admin/dashboard");
    } catch (error) {
      setLoginError("Invalid credentials. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="admin-form">
      <div className="overlay-dash">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={11} sm={10} md={7} lg={5}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="text">Admin ID</label>
              <input
                type="text"
                value={adminID}
                onChange={(e) => setAdminID(e.target.value)}
              />
              <label htmlFor="password">Admin Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <button className="btn" type="submit">
                Login
              </button>
              {loginError && <p className="error-message">{loginError}</p>}
              <Link to="/">
                <img src={homeIcon} alt="" />
              </Link>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AdminLogin;
