import React, { useEffect, useState } from "react";
import BlogCards from "../component/BlogCards";
import { Grid } from "@mui/material";
import BlogMobile from "../component/BlogMobile";
function BlogSection() {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="blog-container" name="blog">
      <h1 className="heading text-center">latest blogs</h1>
      <Grid container justifyContent={"center"} pt={10}>
        <Grid item xs={11} md={11.5} lg={11}>
          {isSmallerScreen ? <BlogMobile /> : <BlogCards />}
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogSection;
