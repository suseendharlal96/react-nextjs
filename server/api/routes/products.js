const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");

// Get all products
router.get("/", productController.getAllProducts);

// Get a single product
// router.get("/:ownerName", productController.getSingleProduct);
router.get("/:ownerName/:vehicle", productController.getSingleProduct);

module.exports = router;
