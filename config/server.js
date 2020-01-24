const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const config = require("./DB")

mongoose.Promise = global.Promise
mongoose.connect(config.DB)

const app = express()
app.use(bodyParser.json())

var port = process.env.PORT || 4000

app.listen(port, function() {
  console.log("NodeJS Server Port: ", port)
})
