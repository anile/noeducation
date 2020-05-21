let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {

    switch (req.url) {
        case '/css/app.8e2f0ded.css':
            res.setHeader('Content-Type', "text/css");
            sendFile('dist/css/app.8e2f0ded.css', res);
            break;


        case '/js/app.c8a82b98.js':
            res.setHeader('Content-Type', "text/javascript");
            sendFile('dist/js/app.c8a82b98.js', res);
            break;

        case '/js/chunk-vendors.cafad179.js':
            res.setHeader('Content-Type', "text/javascript");
            sendFile('dist/js/chunk-vendors.cafad179.js', res);
            break;

        case '/js/app.c8a82b98.js.map':
            res.setHeader('Content-Type', "application/json");
            sendFile('dist/js/app.c8a82b98.js.map', res);
            break;

        case '/js/chunk-vendors.cafad179.js.map':
            res.setHeader('Content-Type', "application/json");
            sendFile('dist/js/chunk-vendors.cafad179.js.map', res);
            break;

        case '/fonts/dirt.14fd38ae.ttf':
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