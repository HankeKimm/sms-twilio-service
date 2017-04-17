var http = require('http');
var express = require('express');
var twilio = require('twilio');
var request = require('request');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.post('/sms', function(req, res) {
  /*var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());*/
  postToFacebook();
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port 1337");
});

function postToFacebook() {
  request({
    url: "https://graph.facebook.com" +
    "/v2.8/" + "{client_id}" +
    "/feed?message=" + "I am " +
    "&access_token=" + "{access_token}",
    method: "POST"},
    function(error, response, body) {
      console.log(error);
      console.log(response);
    });
}
