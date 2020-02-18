const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const mongose = require("mongoose");
require('dotenv/config');

const port = 3000;

const postRoute=require('./routes/posts')
app.use(bodyParser.json())
app.use('/posts',postRoute)
//DB CON

mongose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,useUnifiedTopology:true }, () =>
  console.log("Connected to DB")
);

app.listen(port, console.log("Server is Running on Port" + port));
