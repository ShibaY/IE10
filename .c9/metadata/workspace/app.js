{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":5,"position":5,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["var express = require('express');","","var app = express();","app.set('view engine', 'ejs');","","app.get('/', function(req, res){    ","    res.render('hello.ejs');   ","});","","var server = app.listen(process.env.PORT || 3000, ","                        process.env.IP || \"0.0.0.0\", function () {","        var host = server.address().address","        var port = server.address().port","        console.log('Example app listening at http://%s:%s', host, port)","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":3},"end":{"row":15,"column":0},"action":"insert","lines":["",""]},{"start":{"row":15,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["app.get('/login', function(req, res){    ","    res.render('login.ejs');   ","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["app.get('/do_login', function(req, res){ ","    var id = req.param(\"id\");","    var pass = req.param(\"password\");","    if (pass === \"password\") {","        res.render('hello.ejs', {name : id});","    } else {","        res.render('login.ejs');   ","    }","});"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":3},"end":{"row":10,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416639496536,"hash":"8d5c10217770859659aca694a3691f5825945cf7"}