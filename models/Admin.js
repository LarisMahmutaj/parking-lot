const mongoose = require("mongoose")

const AdminsSchema = mongoose.Schema({
  admin_id: String,
  username: String,
  email: String
})

module.exports = mongoose.model("Admins", AdminsSchema)
