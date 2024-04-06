const mongoose = require("mongoose");
const databaseUrl =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/argentBankDB";
const axios = require("axios");
const signupApi = "http://localhost:3001/api/v1/user/signup";

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
];

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected");
    users.forEach((user) => {
      axios
        .post(signupApi, user)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    });
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
