const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');
const app = express();

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));

const layout = require('./views/layout');
app.get('/', (req, res) => {
   res.send(layout(''));
});


const PORT = 4449;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
