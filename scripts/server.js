// Import the http and fs modules
// const http = require('http');
// const fs = require('fs');

// Create the HTTP server
const server = http.createServer(handler);

// The HTTP server will use a "request handler" callback function
function handler(request, response) {
    // The callback function checks which path a client has requested
    if (request.url === "/api/reports") {
        // If the path is /api/reports, attach appropriate headers for success and JSON data
        response.writeHead(200, { 'Content-Type': 'application/json' });

        // Use fs to get the JSON
        const json = fs.readFileSync('../data/processed/education.json', 'utf8');

        // Send Response with JSON as HTTP body
        response.end(json);
    } else {
        // If path is anything else, send 404 headers and error message body.
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end("Error: Requested resource not found.");
    }
}

server.listen(3000, 'localhost');