const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Serve static files from the "dist" directory
app.use(express.static("dist"));

// Enable Cross-Origin Resource Sharing (CORS)
const cors = require("cors");
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// Log the current directory
console.log(`Current directory: ${__dirname}`);

// API configuration
const sentimentApiUrl = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Handle POST requests to the /api endpoint
app.post("/api", async (req, res) => {
  const ProvidedUrl = req.body.url;
  console.log(`Received URL: ${ProvidedUrl}`);
  const apiRequestUrl = `${sentimentApiUrl}key=${apiKey}&url=${ProvidedUrl}&lang=en`;
  
  try {
    const apiResponse = await fetch(apiRequestUrl);
    const jsonResponse = await apiResponse.json();
    console.log(jsonResponse);
    res.send(jsonResponse);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send({ error: "Failed to fetch data from the API." });
  }
});

// Start the server and listen on port 8081
app.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});