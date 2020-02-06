var Spots = require("../models/spot")
var express = require("express")
var router = express.Router()

//Get all spots
router.get("/", function(req, res, next) {
  Spots.find(function(err, spots) {
    if (err) return next(err)
    res.json(spots)
  })
})

//Get by ID
router.get("/:id", function(req, res, next) {
  Spots.findById(req.params.id, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Create spot
router.post("/", function(req, res, next) {
  Spots.create(req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Update spot
router.put("/:id", function(req, res, next) {
  Spots.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

//Delete spot
router.delete("/:id", function(req, res, next) {
  Spots.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
