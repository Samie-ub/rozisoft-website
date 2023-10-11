import { Grid } from "@mui/material";
import React from "react";
import BlogCards from "../component/BlogCards";

function BlogSection() {
  return (
    <div className="blog-container" name="blog">
      <h1 className="heading text-center">latest blogs</h1>
      <Grid container justifyContent={"center"} py={10}>
        <Grid item xs={11} md={11.5} lg={11}>
          <BlogCards />
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogSection;
