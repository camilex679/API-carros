import saleServices from "../services/saleServices.js"

const createSale = async (req, res, next) => {
    try {
        const venda = await saleServices.createSale(req.body)


        res.status(201).json({
            message: "Venda criada com sucesso",
            data: venda
        })

    } catch (error) {
        next(error)
    }
}

const getAllSales = async (req, res, next) => {

    try {
        const vendas = await saleServices.getAllSales()

        res.status(201).json({
            message: "Vendas encontradas com sucesso",
            data: vendas
        })

    } catch (error) {
        next(error)
    }
}


export default {
    createSale,
    getAllSales


}