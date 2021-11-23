
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', function (req, res){
    return res.json([

        { name: 'jeff' },
        { name: 'diego' }
    ])
})

app.listen('4568');


