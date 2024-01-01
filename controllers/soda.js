const express = require("express")
const Soda = require("../models/soda")

// CREATE THE ROUTER
const router = express.Router()

// ROUTES


// SEED ROUTE - Put arbitrary data in database
router.get("/seed", async (req, res) => {
    await Soda.deleteMany({}) // .remove does not work
    const sodas = await Soda.create([
        {name: "Orange", color: "Orange", readyToSell: true},
        {name: "Cola", color: "Black", readyToSell: true},
        {name: "Root beer", color: "Brown", readyToSell: true},
    ])
    res.json(sodas)
})


// Export the Router
module.exports = router