const jwt = require('jsonwebtoken')

async function authToken (req, res, next) {
    try {
        const token = req.cookies?.token

        if(!token){
            return res.status(401).send({ error: 'User not logged in' })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            console.log(err)
            console.log("decoded", decoded)

            if(err){
                console.log(err)
            }

            //req.userId = decoded?._id
            
            next()
        })

        console.log("token", token)
    } catch (error) {
        console.log(error)
    }
}

module.exports = authToken