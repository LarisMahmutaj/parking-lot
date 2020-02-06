const mongoose = require("mongoose")

const SpotsSchema = mongoose.Schema({
  spot_id: String,
  receipt: Number,
  start_time: Date,
  status: String,
  customer_id: String
})

module.exports = mongoose.model("Spots", SpotsSchema)
