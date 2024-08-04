// //define a new model which store productID , quantity, userID
// //Create new controller name addToCart - with productID request from body and req.userID
// const mongoose = require('mongoose')

// const cartProductSchema = new mongoose.Schema({
//     productID: {
//         type: String,
//         required: true
//     },
//     quantity:{
//         type: Number,
//         required: true
//     },
//     userID: {
//         type: String,
//         required: true
//     }

// })

// const cartProductModel = mongoose.model("addToCartProduct", cartProductSchema)


// module.exports = cartProductModel