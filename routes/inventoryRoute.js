// Needed Resources 
const addClassValidate = require("../utilities/management-validation")
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const util = require("../utilities/")

// Route to build inventory by classification view
router.get("/type/:classificationId", util.handleErrors(invController.buildByClassificationId));
router.get("/detail/:inventoryId", util.handleErrors(invController.buildByInventoryId));
router.get("/error", util.handleErrors(invController.buildErrorPage))
router.get("/", util.handleErrors(invController.buildManagementView));
router.get("/classification", util.handleErrors(invController.buildAddClassificationView))
router.post("/classification", addClassValidate.addClassificationRules(), addClassValidate.checkAddClassification,  util.handleErrors(invController.addClassification))
router.get("/inventory", util.handleErrors(invController.buildAddInventoryView))
router.post("/inventory", addClassValidate.addInventoryRules(), addClassValidate.checkAddInventory, util.handleErrors(invController.addInventory))

module.exports = router;