import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import ServiceSetup from "../component/ServiceSetup";
import ProjectSetup from "../component/ProjectSetup";
import BlogSetup from "../component/BlogSetup";
import "../styles/responsive-mobile.css";

function PrivateRoute({ element }) {
  const token = localStorage.getItem("jwtToken");
  const isAuthenticated = !!token;

  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/rozisoft-admin/login" replace={true} />;
  }
}

function Layout() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/rozisoft-admin/login" element={<AdminLogin />} />
          <Route
            path="/rozisoft-admin/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/account"
            element={<PrivateRoute element={<Account />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/service"
            element={<PrivateRoute element={<ServiceSetup />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/projects"
            element={<PrivateRoute element={<ProjectSetup />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/blogs"
            element={<PrivateRoute element={<BlogSetup />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;
