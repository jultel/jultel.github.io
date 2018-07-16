const express = require ('express');
const path = require('path');

const app = express(); // get the express object

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use( express.static(__dirname) ) ;
app.post('/form', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


console.log('Started on ', process.env.PORT || 3000 , process.env.IP || '0.0.0.0');

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0');