import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import ContactSection from "../section/ContactSection";

function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Get in Touch – Rozisoft</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />

          <ContactSection />

          <Footer />
        </>
      )}
    </div>
  );
}

export default ContactPage;
