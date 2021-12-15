const multer = require('multer');



const MIMES_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'dist/assets/');
    },
    filename: (req, file, cb)=>{
       
        let name = Math.floor(Math.random()*125478);
        name += Math.floor(Math.random()*32578);
        const extension = MIMES_TYPES[file.mimetype];
        name += '.' +  extension;
        cb(null, name);
    }
})

module.exports = multer({storage}).single('image');