import carService from "../services/carServices.js"

const getAllCars = async (req, res, next) => {
    try {
        const cars = await carService.getAllCars()

        res.status(200).json({
            message: "Carros encontrados com sucesso",
            total: cars.length,
            data: cars
        })

    } catch (error) {
        next(error)

    }

}

const createCar = async (req, res, next) => {

    try {
        const car = await carService.createCar(req.body)


        res.status(201).json({
            message: "Carro cadastrado com sucesso",
            data: car,

        })

    } catch (error) {
        next(error)
    }
}

const getCarById = async (req, res, next) => {
    try {
        const car = await carService.getCarById(req.params.id)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            data: car
        })
    } catch (error) {
        next(error)

    }
}

const getCarByPlate = async (req, res, next) => {
    try {
        const car = await carService.getCarByPlate(req.params.plate)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            data: car
        })
    } catch (error) {
        next(error)

    }
}

const getCarsByBrand = async (req, res, next) => {
    try{
        const car = await carService.getCarsByBrand(req.params.brand)

        res.status(200).json({
            message: "Carro encontrado com sucesso",
            data: car
        })

    } catch (error) {
        next (error)
    }
}

const getCountCars =  async (req, res, next) => {
    try{
        const total = await carService.getCountCars()


        res.status(200).json({
            message: "Quantidade de carros encontrada com sucesso",
            total 
        })


    } catch (error) {
        next (error)
    }
}

const getAvailableCars = async (req, res, next) => {
    try{
        const total = await carService.getAvailableCars()


        res.status(200).json({
            message: "Esses são os Carros Disponíveis",
            data: total 
        })


    } catch (error) {
        next (error)
    }
}



export default{
    getAllCars,
    createCar,
    getCarById,
    getCarByPlate,
    getCarsByBrand,
    getCountCars,
    getAvailableCars
    

}