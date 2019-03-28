// set up
var express = require('express');
var bodyParser = require('body-parser');

// initialise application with express
var app = express();

// set port
var PORT = process.env.PORT || 8100 ;

// convert incoming data to json 
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

// read static files 
app.use(express.static("./public"))

// routes 
require("./routes/htmlRoutes")(app)
require("./routes/apiRoutes")(app)

app.listen(PORT,function(){
    console.log("listening on port:", PORT)
})
