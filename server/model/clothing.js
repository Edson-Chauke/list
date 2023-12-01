const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({

    name:{
        type: String,
        // required: true,
    },

    number:{
        type: String,
        // required: true,
    },
});


const Clothing = mongoose.model("clothing", clothingSchema)
module.exports = Clothing