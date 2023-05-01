const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './view');

app.use(express.static('asset'));
app.use(bodyParser.urlencoded({extended : false}));
app.use('/', require('./route/index'));

app.listen(8000, (error)=>{
    if(error) {
        console.log("Error in Starting Express Server");
        return;
    }
    console.log("Express Server Successfully started at port 8000");
})