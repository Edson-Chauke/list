const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 2000;
const userRoutes = require('./route/route')

app.use(express.json())
app.use(cors())

const connectDB = require("./database/db");
//Connecting the Database
connectDB();


app.use("/api", require("./route/route"));

app.use("/api", require("./route/crud"));

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));

