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
// Process the login attempt
router.post("/login", regValidate.loginRules(), regValidate.checkLoginData, util.handleErrors(accountController.accountLogin))
// Route to account management view 
router.get("/",util.checkLogin, util.handleErrors(accountController.account))


module.exports = router;