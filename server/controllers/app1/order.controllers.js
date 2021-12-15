const Queries = require('../../queries/app1/order.queries');
const QueryUser = require('../../queries/app1/user.queries');
module.exports = {
    createOrder: (req, res, next)=>{
            const body = {
                detail: req.body.detail,
                adressLivraison: req.body.user.adress,
                clientName: `${req.body.user.name + ' ' + req.body.user.firstname}`,
                contactClient: req.body.user.local.email,
                montant: req.body.montant,
                numeroCommande: req.body.numero,
                date: req.body.date
            }
                Queries.saveOrder(body).then((order)=>{
                const id = req.body.user._id
                QueryUser.getUserById(id).then((user)=>{
                    if(!user){
                        res.json({
                            status: 201,
                            result: body.numeroCommande
                        })
                    }
                const order = { detail: body.detail, montant: body.montant , numeroCommande: body.numeroCommande, date: body.date}
                QueryUser.addCommandeOnUser(id, order).then((user)=>{
                    res.json({
                        status: 200,
                        result: body.numeroCommande
                    })
                }).catch((err)=>{
                    res.json({
                        status: 500,
                        message:`${err.message} + "echec de l'ajout de la commande dans user"`
                    })
                });
                }).catch((err)=>{
                    res.json({
                        status: 500,
                        message:`${err.message} + "user not found"`
                    })
                });
            }).catch((err) =>{
                res.json({
                    status: 500,
                    message: `${err.message} + "echec lors de la sauvegarde de la commande en db"`
                })
            });
            
       
    },
    getOrderList: async (req, res, next) =>{
        try{
            const orderList = await Queries.getOrderList();
            res.json({
                status: 200,
                result: orderList
            })
        }catch(e){
            res.json({
                status: 500,
                message: "Un problème est survenu"
            })
        }
    },
    deleteOrder: async (req, res, next)=>{
        try{
            const id = req.params.id;
            const deleted = await Queries.deleteOrderById(id);
            res.json({
                status: 200,
                message: "Supprimé"
            })
        }catch(e){
           res.json({
               status: 404,
               message: "Produit introuvable"
           })
        }
        
    }
}