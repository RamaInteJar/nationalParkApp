const mongoose =require("../dabase/connection");

const bookigSchema = new mongoose.Schema({
    userId: {ref: "User", type: mongoose.Schema.Types.ObjectId},
    parks: [{ref: 'NatioParks', type: mongoose.Schema.Types.ObjectId}],
    isBooked: Boolean,
    totalFee: Number,
})

const Booking = new mongoose.model("Booking", bookigSchema)

module.exports = Booking
