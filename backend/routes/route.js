const express = require('express')
const router = express.Router()

const {signUp, LogIn, UserDetail, LogOut, getAllUser, updateUser} = require('../controller/userCtrl')

const {uploadProduct, updateProduct, allproduct, getAllProductsWithCategory, getProductsByCategory, getProductDetails, deleteProduct} = require('../controller/productCtrl')

const authToken = require('../middleware/authToken')


//user
router.post("/register", signUp)
router.post("/login", LogIn)
router.get("/user-detail", authToken, UserDetail)
router.get("/user-logout", LogOut)
router.get("/all-users", getAllUser)
router.put("/update-user", authToken, updateUser)
//router.post("/add-to-cart", authToken, addToCart)

//product
router.post("/upload-product", authToken, uploadProduct)
router.put("/update-product", authToken, updateProduct)
router.get("/all-products", allproduct)
router.get("/get-all-product-by-category", getAllProductsWithCategory)
router.post("/get-products-by-category", getProductsByCategory)
router.post("/product-details", getProductDetails)
router.delete("/delete-product", authToken, deleteProduct)


module.exports = router