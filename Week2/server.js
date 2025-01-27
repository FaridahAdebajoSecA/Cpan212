const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Helper function to serve files
function serveFile(res, filePath, contentType, statusCode = 200) {
    const resolvedPath = path.resolve(filePath);
    fs.readFile(resolvedPath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/' && method === 'GET') {
        serveFile(res, './pages/index.html', 'text/html');
    } else if (url === '/about' && method === 'GET') {
        serveFile(res, './pages/about.html', 'text/html');
    } else if (url === '/contact' && method === 'GET') {
        serveFile(res, './pages/contact.html', 'text/html');
    } else {
        serveFile(res, './pages/404.html', 'text/html', 404);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
