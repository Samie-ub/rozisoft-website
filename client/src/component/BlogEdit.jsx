import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import Sidebar from "./Sidebar";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

function BlogEdit() {
  const { blogId } = useParams();
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogCoverImageUrl, setBlogCoverImageUrl] = useState("");
  const quillRef = useRef();

  useEffect(() => {
    if (blogId) {
      fetch(`https://rozisoft-website-backend.vercel.app/blog/${blogId}`)
        .then((response) => response.json())
        .then((data) => {
          setBlogTitle(data.title);
          setBlogCoverImageUrl(data.coverImageUrl);
          setBlogContent(data.content);
        })
        .catch((error) => {
          console.error("Error fetching blog post:", error);
        });
    }
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (blogId) {
        const response = await axios.put(
          `https://rozisoft-website-backend.vercel.app/blog/${blogId}`,
          {
            content: blogContent,
            title: blogTitle,
            coverImageUrl: blogCoverImageUrl,
          }
        );
        toast.success("Blog post updated successfully");
        console.log(response);
      } else {
        const response = await axios.post(
          "https://rozisoft-website-backend.vercel.app/blog",
          {
            content: blogContent,
            title: blogTitle,
            coverImageUrl: blogCoverImageUrl,
          }
        );
        toast.success("Blog post created successfully");
        console.log(response);
      }

      setBlogContent("");
      setBlogTitle("");
      setBlogCoverImageUrl("");
    } catch (error) {
      console.error("Error creating/updating a blog post:", error);
      toast.error("Failed to create/update blog post");
    }
  }

  const modules = {
    clipboard: {
      matchVisual: false,
    },
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ header: [1, 2, 3, false] }],
      ["link"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ direction: "rtl" }],
      [{ color: [] }, { background: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
    ],
  };

  const handleImage = () => {
    const url = window.prompt("Enter the URL of the image:");
    if (url) {
      const editor = quillRef.current.getEditor();
      const cursorPosition = editor.getSelection().index;
      editor.clipboard.dangerouslyPasteHTML(cursorPosition, `<img src="${url}" alt=""/>`);
    }
  }

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
                    <form onSubmit={handleSubmit} className="service-das-form">
                      <input
                        type="text"
                        className="i-width"
                        required
                        placeholder="Add Blog title"
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
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
                          modules={modules}
                          ref={quillRef}
                          value={blogContent}
                          theme="snow"
                          onChange={(value) => setBlogContent(value)}
                          placeholder="Write your blog post here..."
                        />
                      </div>

                      <button
                        type="button"
                        className="btn"
                        onClick={handleImage}
                      >
                        Insert Image
                      </button>
                      <button type="submit" className="btn">
                        {blogId ? "Update" : "Publish"}
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

export default BlogEdit;
