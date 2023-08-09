var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

 res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

if (req.headers.accept && req.headers.accept == 'text/event-stream') {
if (req.url == '/events') {
    sendSSE(req, res);
} else {
    res.writeHead(404);
    res.end();
}
} else {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(fs.readFileSync(__dirname + '/sse-node.html'));
res.end();
}
}).listen(8000);

function sendSSE(req, res) {
res.writeHead(200, {
'Content-Type': 'text/event-stream',
'Cache-Control': 'no-cache',
'Connection': 'keep-alive'
});

var id = (new Date()).toLocaleTimeString();

// Sends a SSE every 5 seconds on a single connection.
setInterval(function() {
constructSSE(res, id, (new Date()).toLocaleTimeString());
}, 5000);

constructSSE(res, id, (new Date()).toLocaleTimeString());
}

function constructSSE(res, id, data) {
res.write('id: ' + id + '\n');
res.write("data: " + data + '\n\n');
}
