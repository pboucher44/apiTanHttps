var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

  res.send(truc);
});

function httpGet()
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "http://open.tan.fr/ewp/tempsattente.json/PPDO", false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

module.exports = router;


var truc = {
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "this is a simple response"
            }
          }
        ]
      }
    }
  }
}

