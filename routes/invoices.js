var Invoices = require("../models/Invoice")
var express = require("express")
var router = express.Router()

// Get all invoices
router.get("/", function(req, res, next) {
  Invoices.find(function(err, invoices) {
    if (err) return next(err)
    res.json(invoices)
  })
})

// Get by ID
router.get("/:id", function(req, res, next) {
  Invoices.findById(req.params.id, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

// Create Invoice
router.post("/", function(req, res, next) {
  Invoices.create(req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

// Update Invoice
router.put("/:id", function(req, res, next) {
  Invoices.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

// Delete Invoice
router.delete("/:id", function(req, res, next) {
  Invoices.findByIdAndRemove(req.params.id, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
