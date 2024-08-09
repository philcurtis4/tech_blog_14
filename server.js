require('dotenv').config();
const express = require('express');
const session = require('express-session');
SequelizeStore = require("connect-session-sequelize")(session.Store);
const { engine } = require('express-handlebars');

const client = require('./config/connection');
const view_routes = require('./routes/view_routes');
const user_routes = require('./routes/user_routes');

//Create Server
const app = express();
const PORT = 3001;

//Create a get route for files in public
app.use(express.static('./public'));

//Allow url encoded
app.use(express.urlencoded({extended: false}));

//Load in Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//Setup Sessions
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		store: new SequelizeStore({
		  db: client,
		}),
		saveUninitialized: false,
		resave: false, // we support the touch method so per the express-session docs this should be set to false
		proxy: true, // if you do SSL outside of node.
		cookie: {
			httpOnly: true,
		},
	  })
)

//Load in Routes
app.use('/', [view_routes, user_routes]);

//Start server

client.sync({force: false})
	.then(() => {
		app.listen(PORT, () => {
			console.log('Server started on port', PORT);
		});
	});
