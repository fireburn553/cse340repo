const utilities = require(".")
const { body, validationResult } = require("express-validator")
const validate = {}
const inventoryModel = require("../models/inventory-model")

validate.addClassificationRules = () => {
    return [
        body("classification_name")
        .trim()
        .isAlpha()
        .withMessage("Valid classification name is required.")
        .isLength({min:1})
        .withMessage("Valid classification name is required.")
        .custom(async (classification_name) => {
            const classificationExists = await inventoryModel.checkExistingClassification(classification_name)
            if (classificationExists){
                throw new Error("Classification Exists. Please input another classification")
            }
        }),
    ]
}

validate.checkAddClassification = async (req, res, next) => {
    const { classification_name } = req.body
    let errors = []
    errors = validationResult(req)
    if (!errors.isEmpty()){
        let nav = await utilities.getNav()
        res.render("./inventory/add-classification",{
            errors,
            title: "Add Classification",
            nav,
            classification_name,
        })
        return
    }
    next()
}

module.exports = validate;