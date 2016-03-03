(function () {
    'use strict';
  
function start(response, postData) {
 console.log("Request handler 'start' was called.");
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("Hello World from start");
 response.end();
 }

 function upload(response, postData) {
 console.log("Request handler 'upload' was called.");
console.log("postData: " + postData);
response.writeHead(200, {
	"Content-Type": "text/plain",
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
});
 response.write("You've sent: " + postData);
 response.end();
 }

 exports.start = start;
 exports.upload = upload;
})();