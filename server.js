require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');

const client = require('./config/connection');
const view_routes = require('./routes/view_routes');
const user_routes = require('./routes/user_routes');

//Create Server
const app = express();
const PORT = 3001;

//Load in Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//Load in Routes
app.use('/', [view_routes, user_routes]);

//Start server

client.sync({force: false})
	.then(() => {
		app.listen(PORT, () => {
			console.log('Server started on port', PORT);
		});
	});
