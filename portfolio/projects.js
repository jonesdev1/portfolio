const express = require('express');
const path = require('path');
const app = express();
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Route for home page
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
// Route for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
    });
    // Route for history page
    app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
    });
    // Route for achievements page
    app.get('/achievements', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
    });
    // Catch-all route for 404 - Page Not Found
    app.get('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
    });
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });