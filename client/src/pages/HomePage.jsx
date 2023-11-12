import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
import Loader from "../component/Loader";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    initLocomotiveScroll();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Leading Digital Marketing Agency in Pakistan</title>
        <meta
          name="description"
          content="seo company in Pakistan ,seo islamabad, Top seo companies in islamabad,Seo Services in Lahore,Seo expert in islamabad, Digital Marketing company in islamabad, seo companies, best seo services, Link-building services, digital marketing Company, seo services, best seo agency in Pakistan , Professional seo expert , seo agency in islamabad , top seo services in Pakistan, best seo company in islamabad, best digital marketing agency in Pakistan, Search Engine Optimization, Digital marketing expert in Pakistan, professional seo company in islamabad, Content Writing, Pay Per click services in islamabad ,web designing company, web development , best web designing company, graphic designing company, graphic design, SMM"
        />
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default HomePage;
