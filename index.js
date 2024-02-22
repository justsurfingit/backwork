const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./Schema/Student");
const Company = require("./Schema/Company");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

// Connection URI
const uri =
  "mongodb+srv://panwararun116:just@cluster0.1h4iqzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Define routes and middleware
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    app.post("/stusignup", async (req, res) => {
      // Code for student signup
    });
    app.post("/stulogin", async (req, res) => {
      // Code for student login
    });
    app.post("/complogin", async (req, res) => {
      // Code for company login
    });
    app.post("/compsignup", async (req, res) => {
      // Code for company signup
    });
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
