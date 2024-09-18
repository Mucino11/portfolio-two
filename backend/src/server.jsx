const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000; // Backend will run on port 3000

app.use(cors()); // Enable CORS

// Route to serve the projects data
app.get("projects", (req, res) => {
  const projects = require("./data/projects.json"); // Adjust the path to your `projects.json`
  res.json(projects);
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
