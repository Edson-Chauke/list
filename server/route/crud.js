

const express = require("express");
const router = express.Router(); 
const { create, read, update, } = require("../controller/clothing"); 

// create clothing
router.post("/add", create).post(create); 

//update item
router.route("/update/:id").put(update);
router.delete("/items/:id");
router.get("/items/:id");





module.exports = router

