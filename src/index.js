const express = require('express');
const path = require('path');
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'))

//View engine setup
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources\\views'));
// console.log(path.join(__dirname,'resourse/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})