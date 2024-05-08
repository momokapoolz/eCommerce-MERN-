const express = require('express')
const router = express.Router()

const {signUp, LogIn, UserDetail} = require('../controller/userCtrl')
const authToken = require('../middleware/authToken')



router.post("/register", signUp)
router.post("/login", LogIn)
router.get("/user-detail", authToken, UserDetail)

module.exports = router