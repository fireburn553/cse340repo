const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")
const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

invCont.buildByInventoryId = async function (req, res, next) {
  const inventory_id = req.params.inventoryId
  const data = await invModel.getDetailsByInventoryId(inventory_id)
  const grid = await utilities.buildInventoryDetailsGrid(data)
  let nav = await utilities.getNav()
  const className =  data[0].inv_year + ' ' + data[0].inv_make + ' ' + data[0].inv_model
  res.render("./inventory/details", {
    title: className,
    nav,
    grid,
  })
}

invCont.buildErrorPage = async function (req, res, next){
  const inventory_id = req.params.inventoryId
  const data = await invModel.getDetailsByInventoryId(inventory_id)
  const grid = await utilities.buildInventoryDetailsGrid(data)
  //let nav = await utilities.getNav()
  res.render("./inventory/details", {
    title:" ",
    nav,
    grid,
  })
}

invCont.buildManagementView = async function(req, res, next){
  let nav = await utilities.getNav()
  res.render("./inventory/management", {
    title: "Management",
    nav,
    errors: null,
  })
}

invCont.buildAddClassificationView = async function(req, res, next){
  let nav = await utilities.getNav()
  res.render("./inventory/add-classification", {
    title: "Add Classification",
    nav,
    errors: null,
  })
}

invCont.addClassification = async function(req, res){
  let nav = await utilities.getNav()
  const { classification_name } = req.body
  const addClassificationResult = await invModel.addClassification(classification_name)

  if (addClassificationResult){
    req.flash(
      "notice",
      `Congratulations, you\'re entered ${classification_name}`
    )
    res.status(201).render("./inventory/add-classification", {
      title: "Add Classification",
      nav,
    })
  }else{
    req.flash("notice", "Sorry, adding classification failed.")
    req.status(501).render("./inventory/add-classification",
    {
      title: "Add Classification",
      nav,
    })
  }
}

module.exports = invCont

