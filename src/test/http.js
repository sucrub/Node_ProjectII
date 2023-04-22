var http = require('http');

// create a server object
http.createServer(function (req, res) {
    res.writeHead(200,
        {
            'Content-type': 'text/html'
        });
    if (req.url == "/user") {
        res.write(`<h1>This is an user page</h1>`);
        res.end();
    }
    else if (req.url == "/admin") {
        res.write(`<h1>This is an admin page</h1>`);
        res.end();
    }
    else {
        res.write(`<h1>Invalid page</h1>`);
        res.end();
    }
}).listen(8080);

