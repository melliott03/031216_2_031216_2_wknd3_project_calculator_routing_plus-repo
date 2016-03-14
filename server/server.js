var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var index = require("./routes/index");
var math = require("./routes/math");
var path = require("path");

app.set("port", (process.env.PORT || 2002));


app.use(bodyParser.urlencoded({ extended: true }));




app.use("/math", math);
console.log('yo me too');

app.use("/", index);
// app.use("/math", math);



app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});
