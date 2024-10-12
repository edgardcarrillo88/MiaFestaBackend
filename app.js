const express = require('express')
require('dotenv').config()
const dbconnect = require("./database")
const cors = require('cors')
const app = express()
const formcontroller = require('./routes/forms')
const path = require('path')

dbconnect(app)


app.use(cors({
    origin: [process.env.URL_PAGE, "http://localhost:3001"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }));
  
app.use(express.json({ limit: '50mb' }))


app.use('/api/v1/form',formcontroller)

app.use(express.static(path.join(__dirname,'public')))