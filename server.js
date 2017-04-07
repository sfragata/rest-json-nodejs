var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression');

var getJsonFile = require('./modules/getJsonFile');

module.exports = app;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(compression());


app.get('/*', getJsonFile.get);

var port = process.env.PORT || 3000;
app.listen(port);
console.info('Listening on port ' + port);
