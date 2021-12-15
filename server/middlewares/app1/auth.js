const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../../database/app1/models/user.model');
const UserQueries = require('../../queries/app1/user.queries');
const PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');

module.exports = {
    isLogin: async (req, res, next) =>{
        const token = req.headers.authorization;
        if(token){
            jwt.verify(token,PUBLIC_KEY, (err, decoded) =>{
                if(err){
                    return res.json({
                        status: 401,
                        verif: false
                    })
                }
                const sub = decoded.sub;
                UserQueries.getUserById(sub).then((user)=>{
                    req.user = user;
                    next();
                }).catch((err) =>{
                        return res.json({
                            status: 500,
                            verif: false
                        })
                })
            })
        }else{
            res.json({
                status: 401,
                verif: false
            })
        }
    }
}