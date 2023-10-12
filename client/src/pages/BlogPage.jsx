import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import "../styles/blog-page-styles.css";
function BlogPage() {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState({});
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

  return (
    <div className="blog-page" name="blog-post">
      <Header />
      <Navbar />
      <div className="blog-styles">
        <Grid container justifyContent={"center"}>
          <Grid item xs={11} md={12} lg={11}>
            <Grid container justifyContent={"center"} py={5}>
              <Grid item md={11} lg={10}>
                <h1 className="heading-blog">{blogData.title}</h1>
              </Grid>
              <Grid item xs={11.5} lg={10} py={5}>
                <div
                  className="blog-bg"
                  style={{ backgroundImage: `url(${blogData.coverImageUrl})` }}
                ></div>
              </Grid>
              <Grid item xs={11.5} md={11} lg={10}>
                <h2 className="sub-heading">{blogData.subTitle}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: blogData.content }}
                ></div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
x