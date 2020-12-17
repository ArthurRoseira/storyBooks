const express = require('express');
const dotenv = require('dotenv');
const morgan = require ('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//Load Config File
dotenv.config({path: './config/config.env'})
process.env.NODE_ENV = 'development'
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

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))