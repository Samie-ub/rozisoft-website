import React, { useEffect } from "react";
import HomeSection from "../section/HomeSection";
import AboutSection from "../section/AboutSection";
import ClientSection from "../section/ClientSection";
import initLocomotiveScroll from "../hooks/LocomotiveScroll";
import ServiceSection from "../section/ServiceSection";
import ProjectSection from "../section/ProjectSection";
import CallSection from "../section/CallSection";
import ContactSection from "../section/ContactSection";
import BlogSection from "../section/BlogSection";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";

function HomePage() {
  useEffect(() => {
    initLocomotiveScroll();
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ClientSection />
      <ServiceSection />
      <ProjectSection />
      <CallSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default HomePage;
