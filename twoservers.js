var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(request, response) {
  response.end("You shouldn't exist.");
}

function handleRequestTwo(request, response) {
  response.end("Stupid idiot.");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {

  console.log("Server is listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  console.log("Server is listening on: http://localhost:" + PORTTWO);
});
