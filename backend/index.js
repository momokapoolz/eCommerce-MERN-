const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const router = require('./routes/route')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')


require('dotenv').config()

//mongoose.connect(process.env.MONGODB_URI)

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true, // mirroring the true value from CORS npm
}))
app.use(cookieParser())


//cho cai nay len truoc de dung dc req.body
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", router)

const PORT = 8123

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`database connected`)
        console.log('server is running')
    })
})







// connectDB().then(()=>{
//     app.listen(8123, ()=>{
//         console.log(`database connected`)
//         console.log('server is running')
//     })
// })


