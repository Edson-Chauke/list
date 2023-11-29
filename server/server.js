const express = require("express")
const app = express()
const PORT = 1000
const connectDB = require("./db");
//Connecting the Database
connectDB();
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
