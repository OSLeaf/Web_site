const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Homepage route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/events", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "events.html"));
});

app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "projects.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});