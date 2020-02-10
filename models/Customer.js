const mongoose = require("mongoose")

const CustomersSchema = mongoose.Schema({
  customer_id: String,
  firstName: String,
  lastName: String,
  email: String,
  expiry_date: Date,
  expired: Boolean
})

module.exports = mongoose.model("Customers", CustomersSchema)
