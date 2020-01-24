var Customers = require("../models/Customer")
var express = require("express")
var router = express.Router()

//Get all Customers
router.get("/", function(req, res, next) {
  Customers.find(function(err, customers) {
    if (err) return next(err)
    res.json(customers)
  })
})

//Get single Customers by Id
router.get(":/id", function(req, res, next) {
  Customers.findById(req.params.id, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Create Customers
router.post("/", function(req, res, next) {
  Customers.create(req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Update Customers
router.put("/:id", function(req, res, next) {
  Customers.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Delete contacts
router.delete("/:id", function(req, res, next) {
  Customers.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
