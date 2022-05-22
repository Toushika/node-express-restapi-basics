const express = require("express");
let router = express.Router();

router.get("/", (req, res) =>{
res.send("Welcome to about us page");
})

module.exports = router;