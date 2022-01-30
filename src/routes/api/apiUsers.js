const express = require("express");
const apiUsersController = require("../../controllers/api/apiUsersController");

const router = express.Router();

router.get("/:id", apiUsersController.detail);
router.get("/", apiUsersController.index);

module.exports = router;
