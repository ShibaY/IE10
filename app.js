var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){    
    res.render('hello.ejs');   
});
app.get('/login', function(req, res){    
    res.render('login.ejs');   
});
app.get('/do_login', function(req, res){ 
    var id = req.param("id");
    var pass = req.param("password");
    if (pass === "password") {
        res.render('hello.ejs', {name : id});
    } else {
        res.render('login.ejs');   
    }
});

var server = app.listen(process.env.PORT || 3000, 
                        process.env.IP || "0.0.0.0", function () {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)
});
