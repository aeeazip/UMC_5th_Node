const express = require("express");
const router = express.Router();
const userController = require("../controller/memberController");

// router mapping 추가
router.get("/test", userController.getUser);
module.exports = router;
