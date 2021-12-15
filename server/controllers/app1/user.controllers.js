const Queries = require('../../queries/app1/user.queries');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const PRIVATE_KEY = fs.readFileSync('./rsa/key');
const PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const { sendWelcomeEmail } = require('./contact.controllers')
const { PORTHTTPS } = require(`../../env/${process.env.NODE_ENV}`)

module.exports = {
    createUser: async (req, res, next)=>{
        try{
            const body = req.body;
            const newUser = await Queries.saveNewUser(body, res);
            sendWelcomeEmail(
                {
                    email: newUser.local.email, 
                    name: newUser.name, 
                    firstname: newUser.firstname, 
                    link: `https://${req.hostname}:${PORTHTTPS}`+ `confirm?userId=${newUser.id}`
                }
                )
            res.json({
                status:200,
                message: "Votre Compte a été crée avec succes"
            })
        }catch(e){
            res.status(500).json({
                message: "Un problème est survenu .. "
            })
            next(e);
        }
    },
    login: async (req, res, next)=>{
        try{
            const email = req.body.email
            const logedUser = await Queries.getUserByEmail(email);
            const matchPassword = await logedUser.comparePassword(req.body.password);
            if(!matchPassword){
                res.json({
                    status: 401
                })
            }else{
                const token = jwt.sign(
                    {},
                    PRIVATE_KEY,
                    {
                        algorithm: 'RS256',
                        expiresIn: 60 * 60,
                        subject: logedUser._id.toString()
                    }
                )
                delete logedUser.local.password;
                res.json({
                    status: 200,
                    token: token,
                    user: logedUser
                })
            }
        }catch(e){
            res.json({
                status: 404
            })
        }
            
        
    },
    verifEmail: async (req, res, next)=>{
       Queries.getUserByEmail(req.email)
       .then((user)=>{
           if(user){
               res.json({
                   status:403,
                   message: "Cet email est déjà relier a un compte existant"
               })
           }else{
            res.status(200).json({
                status:200
            })
           }
       })
       .catch(()=>{
           res.status(500).json({
               status:500,
               message: "error server"
           })
       })
    },
    getInfosUser: async (req, res, next)=>{
        try{
            if(req.user){
                const id = req.user._id;
                const infosUser = await Queries.getUserById(id);
                delete infosUser.local.password;
                console.log("rr",infosUser);
               return res.json({
                    status: 200,
                    result:infosUser
                })
            }else{
                return res.json({
                    status: 401,
                    verif: false
                })
            }
    
       
        }catch(e){
            res.json({
                status: 404,
                result: null,
                message: e
            })
        }
    },
    updateNameField: async (req, res, next)=>{
        try{
            console.log(req.params);
            const id = req.params.id;
            const body = req.body.update;
            const updatedUser = await Queries.updateNameUserField(id, body);
            const user = await Queries.getUserById(id);
            delete user.local.password;
            res.json({
                status:200,
                result: user,
                message: "Votre nom à bien été modifier"
            })
        }catch(e){
            res.json({
                status:500,
                message:"un probleme est survenu :/"
            })
        }
    },
    updateFirstnameField:async (req, res, next)=>{
        try{
            console.log(req.params);
            const id = req.params.id;
            const body = req.body.update;
            const updatedUser = await Queries.updateFirstnameUserField(id, body);
            const user = await Queries.getUserById(id);
            delete user.local.password;
            res.json({
                status:200,
                result: user,
                message: "Votre nom à bien été modifier"
            })
        }catch(e){
            res.json({
                status:500,
                message:"un probleme est survenu :/"
            })
        }
    },
    updateEmailField:async (req, res, next)=>{
        try{
            const id = req.params.id;
            const body = req.body.update;
            const updatedUser = await Queries.updateEmailUserField(id, body);
            const user = await Queries.getUserById(id);
            delete user.local.password;
            res.json({
                status:200,
                result: user,
                message: "Votre nom à bien été modifier"
            })
        }catch(e){
            res.json({
                status:500,
                message:"un probleme est survenu :/"
            })
        }
    },
    updateAdressField:async (req, res, next)=>{
        try{
            const id = req.params.id;
            const body = req.body.update;
            const updatedUser = await Queries.updateAdressUserField(id, body);
            const user = await Queries.getUserById(id);
             delete user.local.password;
            res.json({
                status:200,
                result: user,
                message: "Votre nom à bien été modifier"
            })
        }catch(e){
            res.json({
                status:500,
                message:"un probleme est survenu :/"
            })
        }
    },
    updatePasswordField:async (req, res, next)=>{
        try{
            const email = req.body.email;
            const id = req.params.id;
            const password = req.body.old;
            const newPassword = req.body.new;
            const user = await Queries.getUserByEmail(email);
            const auth = await user.comparePassword(password);
            delete user.local.password ;
            if(!auth){
                res.json({
                    status:403,
                    message: "Le mot de passe est incorrect"
                })
            }else{
                const updatePassword = await Queries.updatePassword(id, newPassword);
                res.json({
                    status:200,
                    message: "Votre mot de passe a bien été modifié",
                    result: user
                })
            }
        }catch(e){
            next(e);
        }
           
    },
    verifToken: (req, res, next) => {
       const token = req.headers.authorization;
       if(token){
           jwt.verify(token,PUBLIC_KEY, (err, decoded) =>{
               if(err){
                  return res.json({
                       status: 401,
                       verif: false
                   })
               }
               const newToken = jwt.sign({},PRIVATE_KEY,{
                   algorithm: 'RS256',
                   expiresIn: 60*60,
                   subject: decoded.sub
               })
               res.json({
                   status: 200,
                   token: newToken,
                   user: req.user
               })
           })
       }else{
           res.json({
               status:401,
               verif: false
           })
       }
    },
    confirmAccount: async (req, res) =>{
        try {
            const id = req.params.id;
            const user = await Queries.getUserById(id);
            if(user){
                user.confirm = true
                await user.save()
            }
            res.json({
                result: user,
                status: 200
            })
        } catch (error) {
            res.json({
                result: error,
                status: 400
            })
        }
    }
}