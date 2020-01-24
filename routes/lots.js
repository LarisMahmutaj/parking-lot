var Lots = require("../models/Lot")
var express = require("express")
var router = express.Router()

//Get all lots
router.get("/", function(req, res, next) {
  Lots.find(function(err, lots) {
    if (err) return next(err)
    res.json(lots)
  })
})

//Get by ID
router.get("/:id", function(req, res, next) {
  Lots.findById(req.params.id, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Create Lot
router.post("/", function(req, res, next) {
  Lots.create(req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Update Lot
router.put("/:id", function(req, res, next) {
  Lots.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Delete Lot
router.delete("/:id", function(req, res, next) {
  Lots.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
