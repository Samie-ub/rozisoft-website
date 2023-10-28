import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Service-card-styles.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="r-arrow" onClick={onClick}>
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="l-arrow" onClick={onClick}>
      <i class="fa-solid fa-arrow-left"></i>
    </div>
  );
}

function ServiceCards() {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("https://rozisoft-website-backend.vercel.app/service/all-service")
      .then((response) => response.json())
      .then((data) => {
        setServiceData(data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, []);

  const generateValidPath = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "gap-slider",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="service-slider">
      <Slider {...settings}>
        {serviceData.map((content, index) => {
          const validPath = generateValidPath(content.cardTitle);
          return (
            <div key={index} className="service-card">
              <Link to={`/${validPath}`}>
                <div
                  className="service-bg"
                  style={{
                    backgroundImage: `url(${content.backgroundImageUrl})`,
                  }}
                >
                  <div className="gradient-card">
                    <div className="card-content">
                      <hr className="card-line" />
                      <h1>{content.cardTitle}</h1>
                      <span>{content.cardSubServices || ""}</span>
                    </div>
                    <div className="hover-content">
                      <p>Inside our services</p>
                      <ul>
                        {(content.cardServices || "").map(
                          (service, serviceIndex) => (
                            <li key={serviceIndex}>{service.trim()}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ServiceCards;
