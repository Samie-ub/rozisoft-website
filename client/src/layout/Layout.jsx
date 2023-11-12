import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import initLocomotiveScroll from "../hooks/LocomotiveScroll";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import ServiceSetup from "../component/ServiceSetup";
import ProjectSetup from "../component/ProjectSetup";
import BlogSetup from "../component/BlogSetup";
import ServicePage from "../pages/ServicePage";
import SeoPage from "../pages/SeoPage";
import AboutUsPage from "../pages/AboutUsPage";
import AllBlogPage from "../pages/AllBlogPage";
import SmmPage from "../pages/SmmPage";
import WebDevPage from "../pages/WebDevPage";
import GraphicDesignPage from "../pages/GraphicDesignPage";
import PpcPage from "../pages/PpcPage";
import ContentWritingPage from "../pages/ContentWritingPage";
import DigitalMarketingPage from "../pages/DigitalMarketingPage";
import ContactPage from "../pages/ContactPage";
import ServiceEdit from "../component/ServiceEdit";
import ProjectEdit from "../component/ProjectEdit";
import BlogEdit from "../component/BlogEdit";
import "../styles/responsive-mobile.css";
import LinkBuilding from "../pages/LinkBuilding";
import HospitalityPage from "../pages/HospitalityPage";
import TravelTourism from "../pages/TravelTourism";
import RealEstatePage from "../pages/RealEstatePage";
import FinancialServicePage from "../pages/FinancialServicePage";
import EducationPage from "../pages/EducationPage";
import NewsPage from "../pages/NewsPage";

function PrivateRoute({ element }) {
  const token = localStorage.getItem("jwtToken");
  const isAuthenticated = !!token;

  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/rozisoft-admin" replace={true} />;
  }
}

function Layout() {
  useEffect(() => {
    initLocomotiveScroll();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blogs" element={<AllBlogPage />} />
          <Route path="/search-engine-optimization" element={<SeoPage />} />
          <Route
            path="/web-designing--&-development"
            element={<WebDevPage />}
          />
          <Route path="/social-media-marketing" element={<SmmPage />} />
          <Route path="/graphic-designing" element={<GraphicDesignPage />} />
          <Route path="/pay-per-click" element={<PpcPage />} />
          <Route path="/content-writing" element={<ContentWritingPage />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/link-building" element={<LinkBuilding />} />
          <Route path="/hospitality" element={<HospitalityPage />} />
          <Route path="/travel-tourism" element={<TravelTourism />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/financial-service" element={<FinancialServicePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/news" element={<NewsPage />} />
          {/* Dashboard Routes Starts Here */}
          <Route path="/rozisoft-admin" element={<AdminLogin />} />
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
            path="/rozisoft-admin/dashboard/service/edit/:serviceId"
            element={<PrivateRoute element={<ServiceEdit />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/projects"
            element={<PrivateRoute element={<ProjectSetup />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/project/edit/:projectId"
            element={<PrivateRoute element={<ProjectEdit />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/blogs"
            element={<PrivateRoute element={<BlogSetup />} />}
          />
          <Route
            path="/rozisoft-admin/dashboard/blog/edit/:blogId"
            element={<PrivateRoute element={<BlogEdit />} />}
          />
          {/* Dashboard Routes Ends Here */}
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;
