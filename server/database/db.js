const mongoose = require('mongoose');

const localDB = `mongodb://localhost:27017/list`;

const connectDB = async () => {
  await mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}

module.exports = connectDB



