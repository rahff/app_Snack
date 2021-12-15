const User = require('../../database/app1/models/user.model');



module.exports = {
    saveNewUser: async (body)=>{
        try{
            const hashedPassword = await User.hashPassword(body.password);
            const newUser = new User({
            name: body.name,
            firstname: body.firstname,
            adress: body.adress,
            role:0,
            local:{
                email: body.email,
                password: hashedPassword
            }
        });
        return newUser.save();
        }catch(e){
            console.log((e));
        }
    },
    getUserByEmail: (email)=>{
        return User.findOne({'local.email': email}).exec();
    },
    getUserById: (id)=>{
        return User.findOne({_id: id}).exec();
    },
    updateNameUserField: (id,body)=>{
        return User.findByIdAndUpdate(id,{$set:{name: body}}).exec();
    },
    updateFirstnameUserField: (id,body)=>{
        return User.findByIdAndUpdate(id,{$set:{firstname: body}}).exec();
    },
    updateEmailUserField: (id,body)=>{
        return User.findByIdAndUpdate(id,{$set:{'local.email': body}}).exec();
    },
    updateAdressUserField: (id,body)=>{
        return User.findByIdAndUpdate(id,{$set:{adress: body}}).exec();
    },
    updatePassword: async (id, password) =>{
        const hash = await User.hashPassword(password);
        return User.findByIdAndUpdate(id,{$set:{'local.password': hash}}).exec();
    },
    addCommandeOnUser: (id, order) =>{
        return User.findByIdAndUpdate(id,{$push:{commandes: order}}).exec();
    }
}