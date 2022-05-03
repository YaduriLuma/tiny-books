var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) =>{
    res.send('Testee')
})

app.listen(3000)