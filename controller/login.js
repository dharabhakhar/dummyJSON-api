var usermodel = require('../moduler/login');
var jwt = require('jsonwebtoken');

const register = async (req, res) => {
    var data = await usermodel.find({ "username": req.body.username });

    if (data.length == 0) {
        var data = await usermodel.create(req.body)

        res.status(200).json({
            status: "success",
            data
        })
    } else {
        res.status(200).json({
            status: "username is used"
        })
    }
}

const user_login = async (req, res) => {
    var data = await usermodel.find({ "username": req.body.username });

    var token = jwt.sign({ id: data[0].id }, 'hello');

    if (data.length == 1) {
        if (data[0].password == req.body.password) {
            res.status(200).json({
                status: "success",
                token
            })
        } else {
            res.status(200).json({
                status: "incorrect password"
            })
        }
    } else if (data.length == 0) {
        res.status(200).json({
            status: "incorrect email"
        })
    } else if (data.length != 0) {
        res.status(200).json({
            status: "find multiple account"
        })
    }
}

module.exports = {
    register,
    user_login
}