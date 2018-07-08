const express = require ('express');
const path = require('path');

const app = express(); // get the express object

app.get('/', (req,res) =>{
   console.log( res.sendDate);// tells us, that it is outgoing!
//    res.sendStatus(500);
res.send("Hello World");
});



console.log('Started on ', process.env.PORT || 3000 , process.env.IP || '127.0.0.1');

app.listen(process.env.PORT || 3000, process.env.IP || '127.0.0.1');