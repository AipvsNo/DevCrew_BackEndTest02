const express = require('express');
const router = express.Router();
const infoFiles = require("../controller/infoFiles");

router.get("/", infoFiles.upload.single('file'),infoFiles.infoFiles);
module.exports = router;
