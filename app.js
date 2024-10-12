const express = require('express')
require('dotenv').config()
const dbconnect = require("./database")
const cors = require('cors')
const app = express()
const formcontroller = require('./routes/forms')
const path = require('path')

dbconnect(app)


app.use(cors({
    origin: [process.env.URL_PAGE,"https://miafesta-production.up.railway.app", "http://localhost:3001","*"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }));

//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", process.env.URL_PAGE);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
//     next();
// });



  
app.use(express.json({ limit: '50mb' }))


app.use('/api/v1/form',formcontroller)

app.use(express.static(path.join(__dirname,'public')))