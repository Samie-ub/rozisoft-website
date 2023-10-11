require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const adminRoutes = require("./routes/admin");
const serviceRoutes = require("./routes/service")
const projectRoutes = require("./routes/project")
const blogRoutes = require("./routes/blog")


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/admin", adminRoutes);
app.use("/service", serviceRoutes);
app.use("/project", projectRoutes);
app.use("/blog", blogRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
