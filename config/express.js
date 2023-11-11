const express = require("express");
const router = express.Router();

router.use("/member", require("../src/router/memberRouter"));
router.use("/temp", require("../src/router/tempRouter"));
module.exports = router;
