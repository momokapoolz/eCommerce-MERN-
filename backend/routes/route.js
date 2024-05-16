const express = require('express')
const router = express.Router()

const {signUp, LogIn, UserDetail, LogOut, getAllUser, updateUser} = require('../controller/userCtrl')
const authToken = require('../middleware/authToken')



router.post("/register", signUp)
router.post("/login", LogIn)
router.get("/user-detail", authToken, UserDetail)
router.get("/user-logout", LogOut)
router.get("/all-users", getAllUser)
router.put("/update-user", authToken, updateUser)

module.exports = router