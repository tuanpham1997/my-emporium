const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [Object]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;