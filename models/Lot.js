const mongoose = require("mongoose")

const LotsSchema = mongoose.Schema({
  lot_id: String,
  receipt: Number,
  start_time: Date,
  status: String,
  customer_id: String
})

module.exports = mongoose.model("Lots", LotsSchema)
