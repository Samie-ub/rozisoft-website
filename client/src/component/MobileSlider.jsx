import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function MobileSlider() {
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
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <>
          {serviceData.map((content, index) => {
             const validPath = generateValidPath(content.cardTitle);
            return (
              <SwiperSlide key={index}>
                <Link to={`/${validPath}`}>
                <div className="service-card">
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
                </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </div>
  );
}

export default MobileSlider;
