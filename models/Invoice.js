const mongoose = require("mongoose")

const InvoicesSchema = mongoose.Schema({
  invoice_id: String,
  spot_id: String,
  start_time: Date,
  end_time: Date,
  receipt: Number
})

module.exports = mongoose.model("Invoices", InvoicesSchema)
