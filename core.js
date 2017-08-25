var express = require("express"),
     bodyparser = require("body-parser"),
     socketio = require("socket.io"),
     //SOCKET.IO TO BE IMPLEMENTED
     request = require("request"),
     querystring = require("querystring");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.listen(8083, function() {
    console.log("listening on 8083");
});

UBER_VERIFICATION = {
    //
};

app.get("/rideRequest", function(req, res) {
    var request = req.body;
    var rideQueryString = querystring(request);
    console.log(rideQueryString);
    request(UBER_API + rideQueryString, function(err, res, body) {
        if(err) {
            throw err;
        }
    });
});

app.get("/matchRequest", function(req, res) {
    var request = req.body;
});