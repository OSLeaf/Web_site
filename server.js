const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.mp4')) {
            res.setHeader('Content-Type', 'video/mp4');
        }
        if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
            res.setHeader('Content-Type', 'image/jpeg');
        }
        if (path.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
        }
    }
}));

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