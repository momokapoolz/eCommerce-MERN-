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

        if (user.role === 'Admin') {

            const { _id, ...resBody } = req.body

            const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)

            res.json({
                message: "Product update successfully",
                data: updateProduct,
                success: true,
                error: false
            })


        } else {
            throw new Error("Permission denied")
        }


    } catch (error) {
        console.log(error)
    }
}

async function deleteProduct(req, res) {
    try {
        const sessionUser = req.userId

        const user = await userModel.findById(sessionUser)

        if (user.role === 'Admin') {

            const { _id, ...resBody } = req.body

            const updateProduct = await productModel.findByIdAndDelete(_id, resBody)
            
            res.json({
                message: "Product update successfully",
                data: updateProduct,
                success: true,
                error: false
            })


        } else {
            throw new Error("Permission denied")
        }
    } catch (error) {
        console.log(error)
    }
}

async function allproduct(req, res) {
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


async function getAllProductsWithCategory(req, res) {
    try {
        const productCategory = await productModel.distinct("category")

        const productByCategory = []

        for (const category of productCategory) {
            const product = await productModel.findOne({ category: category })
            if (product) {
                productByCategory.push()
            }
        }

        res.json({
            data: productByCategory,
            success: true,
            error: false,
        })



    } catch (error) {
        console.log(error)
    }
}


async function getProductsByCategory(req, res) {
    //get product by category
    //hint: find(category), category = req?.body
    try {
        const { category } = req?.body

        const findPro = await productModel.find({ category })

        //Luu y: dunf method post cho module nay

        //define a new route in backend and frontend


        //create a new file in frontend : horizontal card product, su dung file nay tronng file Home de no hien thi ra trang chu

        res.json({
            data: findPro,
            success: true,
            error: false,
        })

    } catch (error) {
        console.log(error)
    }

    //create a new func to call this module api in helper frontend, then use it in horinzontal card
}

async function getProductDetails(req, res) {
    try {
        const { productId } = req.body ///hoa ra la may :)))

        const productDetail = await productModel.findById(productId)

        res.json({
            data: productDetail,
            success: true,
            error: false,
        })
    } catch (error) {
        console.log(error)
    }
}

async function searchProduct(req, res) {
    try {
        const { keyword } = req.body
        const searchProduct = await productModel.find({ name : new RegExp(keyword , "i") });

        res.json({
            data: searchProduct,
            success: true,
            error: false,
        })

    }catch(error){
        console.log(error)
    }
    
}

async function sortPrice (req, res){
    try {
        const sortPrice =  await productModel.find().sort({ price : 1 })
        res.json({
            data: sortPrice,
            success: true,
            error: false,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { uploadProduct, updateProduct, allproduct, getAllProductsWithCategory, getProductsByCategory, getProductDetails ,deleteProduct, searchProduct, sortPrice}