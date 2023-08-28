const express = require("express");
const router = express.Router();
const NatioPark = require("../models/natioParks");
const Booking = require("../models/bookings");

router.get("/", async (req, res) => {
  let parks = await NatioPark.find();
  res.render("parks/index.ejs", { parks });
});

//seed data

router.get("/seed", async (req, res) => {
  let seededParks = await NatioPark.create([
    {
      name: "Serengeti National Park",
      description: "Snow caped mountain in the equator",
      image: "",
      entranceFee: 120,
      isBooked: true,
    },
    {
      name: "Kruger National Park",
      description: "Come and view animals in your hotel balcony",
      image: "",
      entranceFee: 120,
      isBooked: true,
    },
    {
      name: "Mount Kilimanjaro National Park",
      description: "Snow caped mountain in the equator",
      image:
        "https://images.unsplash.com/photo-1677519917377-118338dd2ed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      entranceFee: 120,
      isBooked: true,
    },
    {
      name: "Arusha National Park",
      description: "",
      image: "",
      entranceFee: 120,
      isBooked: true,
    },
    {
      name: "Serengeti National Park",
      description: "Come and view see the biggest animal migration on earth",
      entranceFee: 120,
      isBooked: true,
    },
  ]);
  res.send(seededParks);
});

router.post("/bookings", async (req, res) => {
  let parks = await NatioPark.find({ _id: { $in: req.body.parks } });
  console.log(parks);
  let total = 0;
  req.body.parks.forEach(
    (park) =>
      (total += parks.find((p) => {
        console.log(p._id.toString(), park);
        console.log(p._id.toString() == park);
        return p._id.toString() == park;
      }).entranceFee)
  );
  req.body.total = total;
  // console.log(req.body);
  let newBooking = await Booking.create(req.body);
  res.json(newBooking);
});

router.get("/bookings/:id", async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate("parks");
  res.json(booking);
});

module.exports = router;
