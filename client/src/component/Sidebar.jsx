import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard-styles.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/rozisoft-admin");
  };

  const sideLinks = [
    {
      label: "Dashboard",
      path: "/rozisoft-admin/dashboard",
    },
    {
      label: "Services",
      path: "/rozisoft-admin/dashboard/service",
    },
    {
      label: "Projects",
      path: "/rozisoft-admin/dashboard/projects",
    },
    {
      label: "Blogs",
      path: "/rozisoft-admin/dashboard/blogs",
    },
    {
      label: "Account",
      path: "/rozisoft-admin/dashboard/account",
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h1>rozisoft</h1>
      </div>
      <div className="dash-links">
        {sideLinks.map((content, index) => {
          return <Link to={content.path}>{content.label}</Link>;
        })}
      </div>
      <div className="last-out">
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
