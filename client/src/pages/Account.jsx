import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../component/Sidebar";
import axios from "axios";

import "../styles/dashboard-styles.css";
function Account() {
  const [adminID, setAdminID] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://rozisoft-website-backend.vercel.app/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "https://rozisoft-website-backend.vercel.app/admin/register";
      const response = await axios.post(url, {
        adminID,
        adminPassword,
      });

      console.log(response.data);

      setUsers((prevUsers) => [...prevUsers, { adminID, adminPassword }]);

      setAdminID("");
      setAdminPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (userId) => {
    try {
      const url = `https://rozisoft-website-backend.vercel.app/admin/users/${userId}`;
      const response = await axios.delete(url);

      console.log(response.data);

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
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
              <Grid container justifyContent={"center"}>
                <Grid item xs={12} lg={12} pt={5}>
                  <div className="blog-stats">
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="adminID">Admin ID</label>
                      <input
                        type="text"
                        required
                        value={adminID}
                        onChange={(e) => setAdminID(e.target.value)}
                      />
                      <label htmlFor="adminPassword">Admin Password</label>
                      <input
                        required
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                      />
                      <button className="btn" type="submit">
                        Add
                      </button>
                    </form>
                  </div>
                </Grid>
                <Grid item xs={12} lg={12} pt={5}>
                  <div className="blog-stats">
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user._id}>
                            <td>{user.adminID}</td>
                            <td>
                              <button
                                className="btn"
                                onClick={() => handleDelete(user._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Account;
