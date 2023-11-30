const express = require("express")
const app = express()
const PORT = process.env.PORT || 9000;
const userRoutes = require('./route/route')

app.use(express.json())

const connectDB = require("./db");
//Connecting the Database
connectDB();


app.use("/api",userRoutes);

 app.get('/', (req, res) =>{
   res.send('Welcome to my server!');
 });

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));

