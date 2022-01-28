const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');

//set upp public directory to serve static files
app.use(express.static('public'));

//Initiate bodyParser to parse request body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.render("index")
})

app.listen(PORT, () => {
  console.log('this app is running')
}) 