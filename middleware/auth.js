var jwt = require('jsonwebtoken');

const checktoken = async(req,res,next)=>{
    jwt.verify(req.headers.authorization,"hello",next)
}

module.exports={
    checktoken
}