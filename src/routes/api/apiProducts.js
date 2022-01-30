const express = require("express");
const apiProductsController = require("../../controllers/api/apiProductsController");

const router = express.Router();

router.get("/", apiProductsController.index);
router.get("/:id", apiProductsController.detail);

module.exports = router;
