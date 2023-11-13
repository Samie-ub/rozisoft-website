import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function DashCardOne() {
  const [serviceData, setServiceData] = useState([]);
  const [displayedServices, setDisplayedServices] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleDeleteService = (serviceId) => {
    fetch(`https://rozisoft-com-backend.vercel.app/service/delete-service/${serviceId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Service deleted successfully");
          setServiceData((prevServiceData) =>
            prevServiceData.filter((service) => service._id !== serviceId)
          );
        } else {
          toast.error("Failed to delete service");
          console.error("Failed to delete service.");
        }
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
      });
  };
  const handleSeeAllClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setDisplayedServices(serviceData.length);
    } else {
      setDisplayedServices(2);
    }
  };
  useEffect(() => {
    fetch("https://rozisoft-com-backend.vercel.app/service/all-service")
      .then((response) => response.json())
      .then((data) => {
        setServiceData(data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, []);
  return (
    <div>
      <div className="blog-stats">
        <h1>Services</h1>
        {serviceData.slice(0, displayedServices).map((content, index) => (
          <div className="stat-card" key={content._id}>
            <div className="stat-img">
              <img
                src={content.backgroundImageUrl}
                alt="content for the dashboard"
              />
            </div>
            <p>{content.cardTitle}</p>
            <div className="btn-containers">
            <button
              className="dash-btn"
              onClick={() => handleDeleteService(content._id)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
            <button
              className="dash-btn"
              
            >
              <Link to={`/rozisoft-admin/dashboard/service/edit/${content._id}`}>
             <i class="fa-solid fa-pen-to-square"></i>
              </Link>
            </button>
            </div>
            
          </div>
        ))}
        {serviceData.length > 2 && (
          <span className="btn" onClick={handleSeeAllClick}>
            {isExpanded ? "See Less" : "See All"}
          </span>
        )}
      </div>
    </div>
  );
}

export default DashCardOne;
