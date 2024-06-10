const express = require('express')
const router = express.Router()

const {signUp, LogIn, UserDetail, LogOut, getAllUser, updateUser} = require('../controller/userCtrl')

const {uploadProduct, updateProduct, allproduct, getAllProductsWithCategory} = require('../controller/productCtrl')

const authToken = require('../middleware/authToken')


//user
router.post("/register", signUp)
router.post("/login", LogIn)
router.get("/user-detail", authToken, UserDetail)
router.get("/user-logout", LogOut)
router.get("/all-users", getAllUser)
router.put("/update-user", authToken, updateUser)

//product
router.post("/upload-product", authToken, uploadProduct)
router.put("/update-product", authToken, updateProduct)
router.get("/all-products", allproduct)
router.get("/get-product-by-category", getAllProductsWithCategory)


module.exports = router