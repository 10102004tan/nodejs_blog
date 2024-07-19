const express = require('express');
const path = require('path');
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const route = require("./routes");
const app = express();
const port = 3000;

// static file
app.use(express.static(path.join(__dirname, 'public')))

//express middleware 
//qs npm , body-parser npm
app.use(express.urlencoded({
  extended: true
})); 
app.use(express.json()); // fetch data, form data, axios, ajax

//HTTP logger
app.use(morgan('combined'))

//View engine setup
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources\\views'));
// console.log(path.join(__dirname,'resourse/views'));


//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})