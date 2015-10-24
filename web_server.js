var http = require('http');

// Create the web server
http.createServer(function (req, res) {
	// Set the content type of the page
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Write the contents of the page
	res.end('Hello World\n');
}).listen(8080);

// Print to the console that the server is running
console.log('Server running on port 8080.');
