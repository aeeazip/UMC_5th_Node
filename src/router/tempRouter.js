const express = require("express");
const router = express.Router();
const userController = require("../controller/tempController");

// router mapping 추가
router.get("/test", tempController.getTemp);
module.exports = router;
