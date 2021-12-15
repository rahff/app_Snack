const Order = require('../../database/app1/models/order.model');



module.exports = {
    saveOrder: (body) => {
        const newOrder = new Order({
            ...body
        })
        return newOrder.save();
    },
    getOrderList: ()=>{
        return Order.find().exec();
    },
    deleteOrderById: (id) =>{
        return Order.findByIdAndDelete(id).exec();
    }
}