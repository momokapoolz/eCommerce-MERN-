const productModel = require('../model/productModel')
const userModel = require('../model/userModel')

async function uploadProduct(req, res) {
    try {

        const sessionUser = req.userId

        const user = await userModel.findById(sessionUser)

        if (user.role === 'Admin') {
            const { name, brand, category, price, productImage } = req.body

            const payload = {
                name: name,
                brand: brand,
                category: category,
                price: price,
                productImage: productImage
            }

            const uploadProduct = await productModel.create(payload)

            res.status(201).json({
                data: uploadProduct,
                success: true,
                error: false,
                message: "Product created successfully!"
            })
        } else {
            res.status(401).json({
                data: null,
                success: false,
                error: true,
                message: "You are not authorized to perform this action!"
            })
        }


    } catch (error) {
        console.log(error)
    }
}

async function updateProduct(req, res) {
    try {

        const sessionUser = req.userId

        const user = await userModel.findById(sessionUser)

        if (user.role === 'ADMIN') {
            const _id = req.body

            const { name, brand, category, price, productImage } = req.body

            const payload = {
                name: name,
                brand: brand,
                category: category,
                price: price,
                productImage: productImage
            }

            const updateproduct = await productModel.findByIdAndUpdate(_id, payload)

            res.status(201).json({
                data: updateproduct,
                success: true,
                error: false,
                message: "Product created successfully!"
            })
        } else {
            res.status(401).json({
                data: null,
                success: false,
                error: true,
                message: "You are not authorized to perform this action!"
            })
        }


    } catch (error) {
        console.log(error)
    }
}

async function allproduct(req, res){
    try {
        const product = await productModel.find()

        res.json({
            data: product,
            success: true,
            error: false,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { uploadProduct, updateProduct , allproduct}