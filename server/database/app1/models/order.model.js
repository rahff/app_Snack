const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    montant: Number,
    numéroCommande: Number,
    detail: [Object],
    adressLivraison: String,
    contactClient: String,
    clientName: String,
    date: Date

});


const Order = mongoose.model('order', orderSchema);

module.exports = Order;