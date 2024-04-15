

const express = require("express");
const cars = express.Router();
// controllers/carController.js
// const reviewsController = require('./reviewsController.js')
// cars.use('/:car_id/reviews', reviewsController)

const {
  getAllCars,
  getOneCar,
  createCar,
  deleteCar,
  updateCar,
  getUserCars,
} = require("../queries/cars");

// const { checkName, checkBoolean } = require("../validations/checkCars");

cars.get("/", async (_req, res) => {
  const allCars = await getAllCars();

  if (allCars[0]) res.status(200).json(allCars);
  else res.status(500).json({ error: "server error" });
});

cars.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    const cars = await getUserCars(id);
    if (cars.length> 0) {
      res.status(200).json(cars);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

cars.get("/:id", async (req, res) => {
  const { id } = req.params;
  const car = await getOneCar(id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "not found" });
  }
});



cars.post("/", async (req, res) => {
  try {
    const car = await createCar(req.body);
    res.json(car);
  } catch (error) {
    res.status(400).json({ error });
  }
});

cars.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  if (id) {
    const updatedCar = await updateCar(id, req.body);
    res.status(200).json(updatedCar);
  } else {
    res.status(400).json({ error });
  }
});


cars.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCar = await deleteCar(id);
  if (deletedCar.id) {
    res.status(200).json(deletedCar);
  } else {
    res.status(404).json("Car not found");
  }
});
module.exports = cars;