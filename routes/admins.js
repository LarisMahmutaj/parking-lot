var Admins = require("../models/Admin")
var express = require("express")
var router = express.Router()

router.get("/", function(req, res, next) {
  Admins.find(function(err, admins) {
    if (err) return next(err)
    res.json(admins)
  })
})

router.get("/:id", function(req, res, next) {
  Admins.findById(req.params.id, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

router.post("/", function(req, res, next) {
  Admins.create(req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

router.put("/:id", function(req, res, next) {
  Admins.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

router.delete("/:id", function(req, res, next) {
  Admins.findByIdAndRemove(req.params.id, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
