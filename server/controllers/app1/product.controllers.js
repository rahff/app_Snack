const Queries = require('../../queries/app1/product.queries');
const fs = require('fs');



module.exports = {
    getProductList: async (req, res, next)=>{
        try{
            const productList = await Queries.getAllProduct();
            res.json({
                result: productList,
                status:200
            })
        }catch(e){
            next(e);
        }
    },
    addProduct: async (req, res, next)=>{
        try{
                if(!req.file){
                    res.json({
                        status: 401,
                        message: "Aucune image n'a été enregistrer"
                    })
                }
            const data = JSON.parse(req.body.product);    
            const body ={
                ...data,
                image:`${req.protocol}://${req.get('host')}/app1/images/${req.file.filename}`,
               
            }
            const addProduct = await Queries.createProduct(body);
            res.json({
                status: 200,
                message: "produit ajouté avec succès"
            })
        }catch(e){
            next(e);
        }
    },
    getOneProduct: async (req, res, next) =>{
        try{
            const id = req.params.id;
            const product = await Queries.getProductById(id);
            console.log(product);
            res.json({
                status: 200,
                result: product
            })
        }catch(e){
            res.json({
                status:404,
                message: "Produit introuvable"
            })
        }
    },
    updateProduct: async (req, res, next) =>{
        try{
            const id = req.params.id;
            const body = JSON.parse(req.body.product);
            console.log(req.file);
            if(!req.file){
                try{
                    const product = await Queries.getProductById(id);
                    body.image = product.image;
                }catch{
                    res.json({
                        status: 404,
                        message: "Produit introuvable"
                    })
                }
                const updated = await Queries.getProductAndUpdate2(id, body);
                console.log("updatedByImage");
                res.json({
                    status: 200,
                    message: "Ce produit a bien été modifié"
                })
            }else{
                body.image = `${req.protocol}://${req.get('host')}/app1/images/${req.file.filename}`
                const updated = await Queries.getProductAndUpdate(id, body);
                res.json({
                    status: 200,
                    message: "Ce produit a bien été modifié"
                })
            }
        }catch(e){
            res.json({
                status: 500,
                message: "Un problème est survenu"
            })
        }
        
    },
    deleteOne: async (req, res, next) =>{
        try{
            const id = req.params.id
            const deleted = await Queries.deleteOneById(id);
            const file = deleted.image.split(`http://${req.get('host')}/app1/images/`)[1];
            console.log(deleted);
            console.log(file);
            fs.unlink(`public/app1/images/${file}`,(err)=>{
                console.log(err);
            });
            res.json({
                status: 200,
                message: "Le produit a bien été supprimé"
            })
        }catch(e){
            res.json({
                status:404,
                message: "Produit introuvable"
            })
        }
    }
}