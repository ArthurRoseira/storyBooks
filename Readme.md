StoryBook App

Application created with the goal to work as a Social media app for telling Stories about Yourself.
This app is developed to be a server -sided rendered app using mongoDB as database.
This application will use several Node modules, such as:
"cross-env": "^7.0.3", --> Set enviroment variables (Set Production status variable)
"nodemon": "^2.0.6", --> Dev module that automatically reloads the server when a change is made
"connect-mongo": "^3.2.0",
"dotenv": "^8.2.0", --> Module used to manage sensible data (enviroment variables)
"express": "^4.17.1", --> Node Server module
"express-handlebars": "^5.2.0", --> template renderer
"express-session": "^1.17.1",
"method-override": "^3.0.0", --> Allow post and put requests with Handlebars
"moment": "^2.29.1", --> module to format dates
"mongoose": "^5.11.8",
"morgan": "^1.10.0", --> module used to log the requests
"passport": "^0.4.1",
"passport-google-oauth20": "^2.0.0"

OBS: Static folder servers can be used with template renderer modules

Google OAuth Steps:
To use the google OAuth is needed:
--> Passport Module;
--> express-session middleware to create a session in app.js
--> Import passport module in app.js
--> Implement two passport middlewares:
->app.use(passport.initialize())
app.use(passport.session())
--> Create a models folder and add an js file called User
--> Import Mongoose and create a User Schema
--> Create a passport.js file in config folder
--> Import GoogleStrategy from passsport (See documentation in their page)
--> Import Mongoos and store user in DB
--> Use Google API authentication variables
--> create a newUser
--> Create de Route for authentication for '/google' and '/google/callback'
--> Add app.use('/auth', require('./routes/auth')) into app.js
--> Create middleware functions to protect routes
-> Add middleware folder and create ensureAuth and ensureGuest methods
--> Store Session in DB using connect-mongo module

OBS 2: When using Handlebars and You need to acess a variable out of the {{#each}} loop you will need to use ../, in
app.js you will need to use a middleware function and create a global variable passing the data that is needed
