var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(httpGet());
});

function httpGet()
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "http://open.tan.fr/ewp/tempsattente.json/PPDO", false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

module.exports = router;
