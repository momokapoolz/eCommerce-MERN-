const userModel = require('../model/userModel')
//import userModel from '../model/userModel';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


//register
async function signUp(req, res) {
    try {
        const { name, email, password } = req.body
        const findUser = await userModel.findOne({ email: email })

        if (!name || !email || !password) return res.status(400).send({ error: 'Missing fields' })

        if (!findUser) {
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = await bcrypt.hashSync(password, salt);

            if (!hashpassword) {
                throw new Error("Wrong password")
            }
            const payload = {
                ...req.body,
                role: "General",
                password: hashpassword
            }

            //const userData = new userModel(req.body)
            //const saveUser = userData.save()

            const newUser = userModel.create(payload) //create new User here

            res.status(201).json({
                //data : saveUser,
                data: newUser,
                success: true,
                error: false,
                message: "User created successfully!"
            })
        }

        else{
            throw new Error("User already existed")
        }

    } catch (error) {
        console.log(error)
    }
}



//login
async function LogIn(req,res) {
    try {
        const { email, password } = req.body

        if (!email || !password) return res.status(400).send({ error: 'Missing fields' })

        const findUser = await userModel.findOne({ email: email })

        if (!findUser){
            throw new Error("User doesn't exist")
        }
        else {
            const isMatch = await bcrypt.compare(password, findUser.password)  
        
            if(!isMatch){
                console.log("Wrong password")
            }
            else {
                console.log(isMatch)

                const tokenData = {
                    _id : findUser._id,
                    email: findUser.email
                }

                const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {expiresIn: 60 * 60 * 8})

                const tokenOption = {
                    httpOnly: true,
                    secure: true
                }

                //tao ra cookie tren browser, "token" la ten cua token
                res.cookie("token", token, tokenOption).json({
                    //data : saveUser,
                    data: token,
                    success: true,
                    error: false,
                    message: "User login successfully!"
                })

                
            }
        }
    } catch (error) {
        console.log(error)
    }
}


async function UserDetail (req, res) {
    try {
        console.log("userId",req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data: user,
            error: false,
            success: true,
            message: "User detail"
        })


    } catch (error) {
        console.log(error)
    }
}


async function LogOut (req, res) {
    try {
        res.clearCookie("token")

        res.json({
            data: [], 
            error: false,  
            success: true,  
            message: 'Logout Successfully'
        })
    } catch (error) {
        console.log(error)
    }
}


async function getAllUser (req, res) {
    try {
        console.log("get all user")

        const allUser = await userModel.find()

        res.json({
            data: allUser, 
            error: false,  
            success: true,  
            message: 'Logout Successfully'
        })
    } catch (error) {
        console.log(error)
    }
}


async function updateUser (req, res) {
    try {
        const sessionUser = req.userId

        const {userId, name, email, role} = req.body

        const payload = {
            ...( email && { email : email}),
            ...( name && { name : name}),
            ...( role && { role : role}),
        }

        const user = await userModel.findById(sessionUser)

        console.log("user role", user.role)

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            data: updateUser, 
            error: false,  
            success: true,  
            message: 'Logout Successfully'
        })

    } catch (error) {
        console.log(error)
    }
}




module.exports = { signUp, LogIn, UserDetail, LogOut, getAllUser, updateUser};