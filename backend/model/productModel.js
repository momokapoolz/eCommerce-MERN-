const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        require: true
    },
    brand:{
        type: String,
    },
    price:{
        type: Number,
    },
    productImage: String
})

const productModel = mongoose.model("Product", productSchema)

//module.exports = mongoose.model("User", userSchema)

module.exports = productModel