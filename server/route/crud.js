

const express = require("express");
const router = express.Router(); 
const { create, read, update, remove} = require("../controller/clothing"); 

router.post("/add", create); 





module.exports = router;

