const cors = require('cors');
const express = require('express');
const app = express();
const fs = require('fs');

app.use(cors(), express.static(__dirname +'/public'));

const port = 4567;

app.listen(port);

app.get('/resp', function (req, res){
    return res.json([

        { name: 'jeff' },
        { name: 'diego' }
    ])
})

