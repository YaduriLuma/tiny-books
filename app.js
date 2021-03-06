var express = require('express');
var bodyParser = require('body-parser');
const req = require('express/lib/request');
var ejs = require('ejs');

var app = express();
var publicDir = require('path').join(__dirname,'/public');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(publicDir));
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/style', express.static(__dirname + '/style/')); // redirect CSS bootstrap
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index');
})

app.listen(3000)