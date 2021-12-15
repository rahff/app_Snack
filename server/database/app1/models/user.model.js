const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name:String,
    firstname:String,
    adress: String,
    role:Number,
    local:{
        email:{type: String, required: true, unique: true},
        password:{type:String }
    },
    commandes:[Object]
});


userSchema.statics.hashPassword = async (password)=>{
    try{
        const salt = await bcrypt.genSalt(6);
        return bcrypt.hash(password, salt);
    }catch(e){
        throw e
    }
}
userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.local.password);
} 


const User = mongoose.model('user',userSchema);
module.exports = User;