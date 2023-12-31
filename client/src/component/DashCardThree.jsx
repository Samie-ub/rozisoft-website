import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function DashCardThree() {
  const [blogData, setBlogData] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleDeleteBlog = (blogId) => {
    fetch(`https://rozisoft-com-backend.vercel.app/blog/${blogId}`, { method: "DELETE" })
      .then((response) => {
        if (response.status === 204) {
          toast.success("Blog deleted successfully");
          setBlogData((prevBlogData) =>
            prevBlogData.filter((blog) => blog._id !== blogId)
          );
        } else {
          toast.error("Failed to delete Blog");
          console.error("Failed to delete Blog.");
        }
      })
      .catch((error) => {
        console.error("Error deleting Blog:", error);
      });
  };
  const handleSeeAllClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setDisplayedBlogs(blogData.length);
    } else {
      setDisplayedBlogs(2);
    }
  };
  useEffect(() => {
    fetch("https://rozisoft-com-backend.vercel.app/blog/")
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.error("Error fetching Blog data:", error);
      });
  }, []);
  return (
    <div>
      <div className="blog-stats">
        <h1>Blogs</h1>
        {blogData.slice(0, displayedBlogs).map((content, index) => {
          return (
            <div className="stat-card" key={content._id}>
              <div className="stat-img">
                <img
                  src={content.coverImageUrl}
                  alt="content for the dashboard"
                />
              </div>
              <p>{content.title}</p>
              <p>{content.category}</p>
              <div className="btn-containers">
                <button
                  className="dash-btn"
                  onClick={() => handleDeleteBlog(content._id)}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button className="dash-btn">
                <Link to={`/rozisoft-admin/dashboard/blog/edit/${content._id}`}>

                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
        {blogData.length > 2 && (
          <span className="btn" onClick={handleSeeAllClick}>
            {isExpanded ? "See Less" : "See All"}
          </span>
        )}
      </div>
    </div>
  );
}

export default DashCardThree;
