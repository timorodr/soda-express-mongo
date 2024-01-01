/***********************DEPENDENCIES */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const SodaRouter = require("./controllers/soda")




/******************** APPLICATICATION OBJECT */
const app = express()





/******************* MIDDLEWARE */
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))


/****************** ROUTES & ROUTERS */
app.get("/", (req, res) => {
    res.send("server is Working")
})

app.use("/soda", SodaRouter)


/******************* SERVER LISTENER */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})