import Car from "../models/Car.js"

const getAllCars = async () => {
    return Car.find()
}


const createCar = async (data) => {
    const { modelo, marca, ano, preco, placa } = data

    if (!modelo || !placa) {
        const error = new Error("Modelo e placa são obrigatorios")
        error.statusCode = 400
        throw error
    }

    const car = await Car.create({
        modelo,
        marca,
        ano,
        preco,
        placa
    })

    return {
        _id: car._id,
        modelo: car.modelo,
        marca: car.marca,
        ano: car.ano,
        preco: car.preco,
        createdAt: car.createdAt,
        updatedAt: car.updatedAt
    }
}

const getCarById = async (id) => {
    const car = await Car.findById(id);

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }
    return car
}

const getCarByPlate = async (placa) => {
    const car = await Car.findOne({ placa });

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }
    return car
}

const getCarsByBrand = async (marca) => {
    const car = await Car.findOne ({ marca });

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }
    return car
}

const getCountCars = async () => {
    return Car.countDocuments ()
}

const getAvailableCars = async () => {
    const car = await Car.find ({
         disponivel: true
    })
    
    if (!car) {Error("Nenhum carro disponível")
        error.statusCode = 404
        throw error
    }
    return car
    
}




    export default {

        getAllCars,
        createCar,
        getCarById,
        getCarByPlate,
        getCarsByBrand,
        getCountCars,
        getAvailableCars

    }