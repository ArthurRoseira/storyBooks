const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require ('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-sessions')

//Load Config File
dotenv.config({path: './config/config.env'})
process.env.NODE_ENV = 'development'
//Passport Config 
require('./config/passport')(passport)

//Moongose method to connect with MongoDB Atlas
connectDB()
const app = express()
// Using morgan to log the requests when in dev mode
//using morgan MIddleware
if(process.env.NODE_ENV === 'development'){
 app.use(morgan('dev'))

}

//Handlebars engine (template engine)
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))


//Passport Middleware
app.use(passport.initialize)
app.use(passport.sessions)

//Static FOlder
app.use(express.static(path.join(__dirname,'public')))


app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))