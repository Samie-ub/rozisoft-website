import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import Sidebar from "./Sidebar";
import "react-quill/dist/quill.snow.css";

function BlogSetup() {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSubTitle, setBlogSubTitle] = useState("");
  const [blogcategory, setBlogCategory] = useState("");
  const [blogCoverImageUrl, setBlogCoverImageUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/blog", {
        content: blogContent,
        title: blogTitle,
        subTitle: blogSubTitle,
        coverImageUrl: blogCoverImageUrl,
        category: blogcategory,
      });
      toast.success("Blog post created successfully");
      setBlogContent("");
      setBlogTitle("");
      setBlogSubTitle("");
      setBlogCoverImageUrl("");
      setBlogCategory("");
      console.log(response);
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast.error("Failed to create blog post");
    }
  };

  return (
    <div>
      <ToastContainer />
      <Grid container>
        <Grid item lg={11.5}>
          <Grid
            container
            sx={{ justifyContent: { xs: "center", md: "space-between" } }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={3}
              sx={{
                display: { xs: "none", md: "block" },
                justifyContent: { xs: "center", md: "space-between" },
              }}
            >
              <Sidebar />
            </Grid>
            <Grid item xs={12} lg={9} py={5}>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs={12} lg={12}>
                  <div className="dash-service-card">
                    <form onSubmit={handleSubmit} className="service-das-form ">
                      <input
                        type="text"
                        className="i-width"
                        required
                        placeholder="Add Blog title"
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                      />
                      <input
                        type="text"
                        className="i-width"
                        placeholder="Add blog sub-title"
                        value={blogSubTitle}
                        required
                        onChange={(e) => setBlogSubTitle(e.target.value)}
                      />
                      <input
                        type="text"
                        className="i-width"
                        required
                        placeholder="Add blog category"
                        value={blogcategory}
                        onChange={(e) => setBlogCategory(e.target.value)}
                      />
                      <input
                        type="url"
                        required
                        className="i-width"
                        placeholder="Add blog cover image URL"
                        value={blogCoverImageUrl}
                        onChange={(e) => setBlogCoverImageUrl(e.target.value)}
                      />
                      <div className="quill-editor">
                        <ReactQuill
                          value={blogContent}
                          theme="snow"
                          onChange={(value) => setBlogContent(value)}
                          placeholder="Write your blog post here..."
                        />
                      </div>
                      <button type="submit" className="btn">
                        Publish
                      </button>
                    </form>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogSetup;
