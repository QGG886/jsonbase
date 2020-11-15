var http = require("http");
var jointJson = require("./jointJson");
var ResolverPathame = require("./resolverPathname");
var transFunc = require("./jsonDB");

var server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("hello");
    var data = "";
    request.on("err", (err) => {
        console.log(err);
    }).on("data", (chunk) => {
        data += chunk;
    }).on("end", () => {
        if (request.method == "POST") {
            // ResolverPathame(request.url);
            if (data != "")
                var obj = JSON.parse(data);
            if (obj != undefined) {
                console.log(jointJson(ResolverPathame(request.url), obj));
                let options = jointJson(ResolverPathame(request.url), obj);
                transFunc(options);
            }
            else {
                let options = ResolverPathame(request.url);
                transFunc(options);
            }
        }
    })
    // console.log(request.method);
    // console.log(request.url);
});
server.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
