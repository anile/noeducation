let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {

    switch (req.url) {
        case req.url.match(/\/css\/app.[0-9a-f]{8}.css/g) && req.url.match(/\/css\/app.[0-9a-f]{8}.css/g)[0]:
            res.setHeader('Content-Type', "text/css");
            sendFile('dist' + req.url, res);
            break;

        case req.url.match(/\/js\/app.[0-9a-f]{8}.js/g) && req.url.match(/\/js\/app.[0-9a-f]{8}.js/g)[0]:
            res.setHeader('Content-Type', "text/javascript");
            sendFile('dist' + req.url, res);
            break;

        case '/js/chunk-vendors.cafad179.js':
            res.setHeader('Content-Type', "text/javascript");
            sendFile('dist/js/chunk-vendors.cafad179.js', res);
            break;

        case req.url.match(/\/js\/app.[0-9a-f]{8}.js.map/g) && req.url.match(/\/js\/app.[0-9a-f]{8}.js.map/g)[0]:
            res.setHeader('Content-Type', "application/json");
            sendFile('dist' + req.url, res);
            break;

        case '/js/chunk-vendors.cafad179.js.map':
            res.setHeader('Content-Type', "application/json");
            sendFile('dist/js/chunk-vendors.cafad179.js.map', res);
            break;

        case req.url.match(/\/fonts\/dirt.[0-9a-f]{8}.ttf/g) && req.url.match(/\/fonts\/dirt.[0-9a-f]{8}.ttf/g)[0]:
            res.setHeader('Content-Type', "font/ttf");
            sendFile('dist/fonts/dirt.14fd38ae.ttf', res);
            break;

        case '/favicon.ico':
            res.setHeader('Content-Type', "image/x-icon");
            sendFile('dist/favicon.ico', res);
            break;

        // case '/api':
        //     // ...
        //     break;

        default:
            sendFile('dist/index.html', res);
            break;
    }

}).listen(4000);


function sendFile(fileName, res) {
    let fileStream = fs.createReadStream(fileName);

    fileStream
        .on('error', function () {
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res);

    res.on('close', function () {
        fileStream.destroy();
    })
}