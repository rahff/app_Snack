const mongoose = require('mongoose');
const env = require(`../../env/${process.env.NODE_ENV}`);


mongoose.connect(env.dbUrl).then(()=>{
    console.log('connection db ok');
}).catch((err)=>{
    console.log("echec connection");
})