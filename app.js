var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get('/', (req, res) =>{
    res.send('Teste')
})

app.listen(3000)