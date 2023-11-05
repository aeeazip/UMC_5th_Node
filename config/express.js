const express = require("express");
const router = express.Router();

router.use("/member", require("../src/router/memberRouter"));

module.exports = router;
