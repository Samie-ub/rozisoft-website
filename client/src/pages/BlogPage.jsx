import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import "../styles/blog-page-styles.css";
import Loader from "../component/Loader";
import { socialData } from "../content";
function BlogPage() {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    axios
      .get(`https://rozisoft-website-backend.vercel.app/blog/${blogId}`)
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [blogId]);
  const calculateReadingTime = (text) => {
    if (text) {
      const averageWPM = 200;
      const wordCount = text.split(" ").length;
      const readingTimeMinutes = Math.ceil(wordCount / averageWPM);
      return readingTimeMinutes;
    }
    return 0;
  };

  const readingTime = blogData.content
    ? calculateReadingTime(blogData.content)
    : 0;
  return (
    <div className="blog-page" name="blog-post">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Navbar />
          <div className="blog-styles">
            <Grid container justifyContent={"center"}>
              <Grid item xs={11} md={12} lg={11}>
                <Grid container justifyContent={"center"} py={5}>
                 
                  <Grid item xs={11.5} lg={12} >
                    <div
                      className="blog-bg"
                      style={{
                        backgroundImage: `url(${blogData.coverImageUrl})`,
                      }}
                    ></div>
                    <div className="date-container">
                      <span>{formatDate(blogData.date)}</span>
                      <span>{`${readingTime} min read`}</span>
                    </div>
                  </Grid>
                  <Grid item md={11} lg={10} py={5}>
                    <h1 className="heading-blog">{blogData.title}</h1>
                  </Grid>
                  <Grid item xs={11.5} md={11} lg={10}>
                    
                    <div
                    className="quill-container"
                      dangerouslySetInnerHTML={{ __html: blogData.content }}
                    ></div>

                    <div className="blog-links">
                      <div className="social">
                        {socialData.map((content)=>{
                          return(
                            <a href={content.href} target="_blank" rel="no-ref">
                              <img src={content.icon} alt="social media links" />
                              
                            </a>
                          )
                        })}
                      </div>
                        <p className="bookmark">rozisoft</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default BlogPage;
