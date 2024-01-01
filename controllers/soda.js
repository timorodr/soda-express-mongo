const express = require("express")
const Soda = require("../models/soda")

// CREATE THE ROUTER
const router = express.Router()

// ERROR HANDLER
function errorHandler(error, res){
    res.json(error)
}
// ROUTES


// SEED ROUTE - Put arbitrary data in database
router.get("/seed", async (req, res) => {
    await Soda.deleteMany({}).catch((error) => errorHandler(error, res)) // .remove does not work
    const sodas = await Soda.create([
        {name: "Orange", color: "Orange", readyToSell: true},
        {name: "Cola", color: "Black", readyToSell: true},
        {name: "Root beer", color: "Brown", readyToSell: true},
    ]).catch((error) => errorHandler(error, res))
    res.json(sodas)
})

// INDUCES
// INDEX ROUTE - GET LIST ALL SODAS

router.get("/", async (req, res) => {
    const sodas = await Soda.find({}).catch((error) => errorHandler(error, res))
    res.render("soda/index.ejs", {sodas})
})

// NEW ROUTE - GET THE NEW FORM
router.get("/new", (req, res) => {
    res.render("soda/new.ejs")
})
// DESTROY ROUTE - DELETE ONE SODA

// UPDATE ROUTER - PUT - UPDATES ONE SODA

// CREATE ROUTE - POST - CREATES A SODA
router.post("/", async (req, res) => {
    //make sure readyToSell if true or false
    req.body.readyToSell = Boolean(req.body.readyToSell)

    // create the soda
    await Soda.create(req.body).catch((error) => errorHandler(error, res))

    res.redirect("/soda")
})
// EDIT ROUTE - GET - GET THE EDIT FORM

//SHOW ROUTE - GET - GET ONE SODA
router.get("/:id", async(req, res) => {
    const soda = await Soda.findById(req.params.id) // this is the id number generated in the json - displays in the url
    res.render("soda/show.ejs", {soda})
})



// Export the Router
module.exports = router