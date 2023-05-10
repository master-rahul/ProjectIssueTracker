const express = require('express');
const db = require('./config/mongoose');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const customMiddleware = require('./config/middleware');
const expressSession = require('express-session');
const flash = require('connect-flash');                                                
const app = express();

app.set('view engine', 'ejs');
app.set('views', './view');

app.use(express.static('asset'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(expressSession({                                                                
    name: 'sample',                                                                     
    secret: 'secret',                                                                   
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: (1000 * 1000) },                                                  
    store: MongoStore.create(                                                           
        {
            mongoUrl: 'mongodb://127.0.0.1:27017/IssueTracker',                       
            autoRemove: 'native',
            autoRemoveInterval: 30                                                      
        }, function (error) {
            console.log(error || 'connect-mongodb setup ok');
        }
    )
}));
app.use(flash());
app.use(customMiddleware.setFlash);
app.use('/', require('./route/index'));

app.listen(8000, (error)=>{
    if(error) {
        console.log("Error in Starting Express Server");
        return;
    }
    console.log("Express Server Successfully started at port 8000");
})