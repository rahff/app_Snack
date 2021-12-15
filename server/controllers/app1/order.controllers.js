const Queries = require('../../queries/app1/order.queries');
const QueryUser = require('../../queries/app1/user.queries');
module.exports = {
    createOrder: async (req, res, next)=>{
        try{
            const body = {
                detail: req.body.detail,
                adressLivraison: req.body.user.adress,
                clientName: `${req.body.user.name + ' ' + req.body.user.firstname}`,
                contactClient: req.body.user.email,
                montant: req.body.montant,
                numeroCommande: req.body.numero,
                date: req.body.date
            }
                const newOrder = await Queries.saveOrder(body)
                const id = req.body.user._id;
                const order = { detail: body.detail, montant: body.montant , numeroCommande: body.numeroCommande, date: body.date}
                const updateOnUser = await QueryUser.addCommandeOnUser(id, order);
                const user = await QueryUser.getUserById(id);
                res.json({
                    result: user,
                    status: 200
                })   
        }catch(e){
            res.json({
                result: e,
                status: 500
            })  
        }
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