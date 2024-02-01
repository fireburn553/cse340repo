// Needed Resources 
const regValidate = require('../utilities/account-validation')
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController") 
const util = require("../utilities/")

// Route to build login view
router.get("/login", util.handleErrors(accountController.buildLogin))
// Route to build registration view
router.get("/register", util.handleErrors(accountController.buildRegister))
// Route to post registration activity 
router.post("/register", regValidate.registationRules(), regValidate.checkRegData, util.handleErrors(accountController.registerAccount))

module.exports = router;