import express from "express"
import carController from "../controllers/carController.js"
import Car from "../models/Car.js"

const router = express.Router()


router.get(
    "/",
    carController.getAllCars
)

router.post(
    "/",
    carController.createCar
)

router.get(
    "/:id",
    carController.getCarById
)

router.get(
    "/plate/:plate",
    carController.getCarByPlate
)

router.get(
    "/brand/:brand",
    carController.getCarsByBrand
)

router.get(
    "/available/count",
    carController.getCountCars
)

router.get(
    "/available/true",
    carController.getAvailableCars
)




export default router; 