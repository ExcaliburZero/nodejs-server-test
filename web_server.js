/* Display single page
var http = require('http');

// Create the web server
http.createServer(function (req, res) {
	// Set the content type of the page
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Write the contents of the page
	res.end('Hello World\n');
}).listen(8080);
*/

// Run Java file
child_process.exec("javac java/src/nodejsservertest/Main.java");

/* Setup static file server */
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.listen(8080);

// Print to the console that the server is running
console.log('Server running on port 8080.');
