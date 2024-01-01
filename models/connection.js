require("dotenv").config() // get .env vars
const mongoose = require('mongoose') // imports mongoose

// Establish our connection
mongoose.connect(process.env.DATABASE_URL)

// Connection Events
mongoose.connection
.on("open", () => {console.log("connected to mongo")})
.on("close", () => {console.log("disconnected from mongo")})
.on("eroor", (error) => {console.log("ERROR")})

// Export the mongoose object
module.exports = mongoose
