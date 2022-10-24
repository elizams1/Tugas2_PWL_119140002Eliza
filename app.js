const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/route-tempat-wisata');
app.use('/api', appRoute);
app.get('/hello', function(req, res) {
  res.send({
    msg : "HELOO WORLD"
  })
});

app.listen(3006, ()=>{
    console.log('Server Berjalan di Port : 3006');
});