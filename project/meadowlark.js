

var express = require('express');
var app     = express()



var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.set('port', process.env.PORT || 3000);


app.get('/', function (req, res){
        res.type('text/plain');
        res.send('This is the home page');
        
});


app.get('/about', function(req, res){
        res.type('text/plain');
        res.send('This is the about page');
});




app.use(function(req,res){
        res.type('text/plain');
        res.status(404);
        res.send('404-Not found');
});




app.use(function(err, req, res, next){
        console.log(err.stack);
        res.type('text/plain');
        res.statys(500);
        res.send('500-Server Error');
});






app.listen(app.get('port'), function(){
        console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});



