const mongoose = require("mongoose");
const databaseUrl =
  process.env.MONGO_URI || "mongodb://localhost:27017/argentBankDB";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
