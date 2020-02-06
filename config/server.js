const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const config = require("./DB")
const spots = require("../routes/spots")
const customers = require("../routes/customers")

mongoose.Promise = global.Promise
mongoose.connect(config.DB)

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/spots", spots)
app.use("/customers", customers)

var port = process.env.PORT || 4000

app.listen(port, function() {
  console.log("NodeJS Server Port: ", port)
})
