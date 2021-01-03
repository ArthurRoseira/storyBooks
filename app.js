const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session)

//Load Config File
dotenv.config({ path: './config/config.env' })
process.env.NODE_ENV = 'development'
//Passport Config 
require('./config/passport')(passport)

//Moongose method to connect with MongoDB Atlas
connectDB()
const app = express()

//Body Parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  })
)

// Using morgan to log the requests when in dev mode
//using morgan MIddleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))

}

//HandleBars Helpers
//These are functions that will be used in handlebars, offenly to format data to show to the user
const {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  select,
} = require('./helpers/hbs')


//Handlebars engine (template engine)
// Handlebars
app.engine(
  '.hbs',
  exphbs({
    helpers: {
      formatDate,
      stripTags,
      truncate,
      editIcon,
      select,
    },
    defaultLayout: 'main',
    extname: '.hbs',
  })
)
app.set('view engine', '.hbs')

//Sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))


//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//set Global Var
app.use(function (req, res, next) {
  //Creating a express global variable (res.locals.user, user is the name)
  //req.user is the logged user 
  res.locals.user = req.user || null
  next();
})

//Static FOlder
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))