// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController") 
const util = require("../utilities/")

// Route to build login view
router.get("/login", util.handleErrors(accountController.buildLogin))

module.exports = router;