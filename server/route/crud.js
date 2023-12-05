

const express = require("express");
const router = express.Router(); 
const { update,remove,read,create} = require("../controller/clothing"); 

 

//update item
router.post("/create", create);
router.get("/items", read);
router.put("/items/:id",update);
router.delete("/items/:id", remove)






module.exports = router

