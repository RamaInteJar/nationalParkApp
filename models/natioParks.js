const mongoose = require("../dabase/connection")

const natioParksSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    entranceFee: Number,
    isBooked: Boolean,
})

const NationalPark = new mongoose.model("NationalPark", natioParksSchema);
module.exports = NationalPark