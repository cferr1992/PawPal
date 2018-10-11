const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

mongoose.connect('mongodb://localhost/animals')

const app = express();
app.user(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}))

const mainRoutes = require('./routes/main')

app.use(mainRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Node.js listening on port ' + PORT)
});
