const express = require('express');                                         // to fetch express module
const db = require('./config/mongoose');                                    // to intialize our mongodb connection
const MongoStore = require('connect-mongo');                                // to fetch monogoStore module
const bodyParser = require('body-parser');                                  // to fetch bodyParser module
const customMiddleware = require('./config/middleware');                    // to have customMiddleware for flash messages
const expressSession = require('express-session');                          // to have expressSession
const flash = require('connect-flash');                                     // to fetch connect-flash module                            
const app = express();                                                      // initializing out express instance

app.set('view engine', 'ejs');                                              // Setting view engine
app.set('views', './view');                                                 // Setting view engine path

app.use(express.static('asset'));                                           // Setting static files for web access
app.use(bodyParser.urlencoded({extended : false}));                         // Used to parse body
app.use(expressSession({                                                    // Setting express session                                         
    name: 'sample',                                                         // Session name                                     
    secret: 'secret',                                                       // Sesssion Secret           
    saveUninitialized: false,                                               
    resave: false,
    cookie: { maxAge: (1000 * 1000) },                                      // Session Cookie age                                                
    store: MongoStore.create(                                                           
        {
            mongoUrl: 'mongodb://127.0.0.1:27017/IssueTracker',             // Database URL                   
            autoRemove: 'native',                                       
            autoRemoveInterval: 30                                                      
        }, function (error) {
            console.log(error || 'connect-mongodb setup ok');
        }
    )
}));
app.use(flash());                                                           // Adding flash in middleware
app.use(customMiddleware.setFlash);                                         // Setting setFlash function in middleware
app.use('/', require('./route/index'));                                     // Routing the request to correct router/action-controller

app.listen(8000, (error)=>{                                                 // Listening for incoming request on port 8000
    if(error) {
        console.log("Error in Starting Express Server");
        return;
    }
    console.log("Express Server Successfully started at port 8000");
})