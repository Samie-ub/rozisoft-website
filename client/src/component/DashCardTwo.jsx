import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
function DashCardTwo() {
  const [projectData, setProjectData] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleDeleteProject = (projectId) => {
    fetch(`/project/delete-project/${projectId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Project deleted successfully");
          setProjectData((prevProjectData) =>
            prevProjectData.filter((project) => project._id !== projectId)
          );
        } else {
          toast.error("Failed to delete project");
          console.error("Failed to delete project.");
        }
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };
  const handleSeeAllClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setDisplayedProjects(projectData.length);
    } else {
      setDisplayedProjects(2);
    }
  };
  useEffect(() => {
    fetch("/project/all-project")
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  }, []);
  return (
    <div>
      <div className="blog-stats">
        <h1>Projects</h1>
        {projectData.slice(0, displayedProjects).map((content, index) => {
          return (
            <div className="stat-card" key={content._id}>
              <div className="stat-img">
                <img
                  src={content.backgroundImageUrl}
                  alt="content for the dashboard"
                />
              </div>
              <p>{content.projectCategory}</p>
              <p>{content.projectName}</p>
              <button
                className="btn"
                onClick={() => handleDeleteProject(content._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        {projectData.length > 2 && (
          <span className="btn" onClick={handleSeeAllClick}>
            {isExpanded ? "See Less" : "See All"}
          </span>
        )}
      </div>
    </div>
  );
}

export default DashCardTwo;
