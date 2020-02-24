const mongoose = require("mongoose")

const CustomersSchema = mongoose.Schema({
  firebase_id: String,
  first_name: String,
  last_name: String,
  email: String,
  car_reg_plate: String,
  phone_number: String,
  is_parked: Boolean,
  times_parked: Number
})

module.exports = mongoose.model("Customers", CustomersSchema)
