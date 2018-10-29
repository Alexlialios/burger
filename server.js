var express= require('express');
var bodyparser = require('bodyparser');
var routes = require('./controllers/burgers_controller.js');
var app = express();
var PORT = process.env.PORT || 3002;

app.use('/static', express.static(__dirname + '/public'));


// used help for this section

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'));


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use('/', routes);

app.listen(PORT);