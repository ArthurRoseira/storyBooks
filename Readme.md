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
"moment": "^2.29.1",
"mongoose": "^5.11.8",
"morgan": "^1.10.0", --> module used to log the requests
"passport": "^0.4.1",
"passport-google-oauth20": "^2.0.0"

OBS: Static folder servers can be used with template renderer modules
