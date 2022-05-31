// ====== Setup dependencies ========
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500
const Product = require('./models/Product')
const Cart = require('./models/Cart')
const User = require('./models/User')

// ======= MongoDB Connection ============
mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => console.log('Connected to Mongo'))

// ======= View Engine =============
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ======= Middleware ==========
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// ======= Routes =========

// Index
app.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('Index', { product: allProducts })
    })
})

app.get('/products/:cartId/cart', (req, res) => {
    Cart.findById(req.params.cartId, (err, foundCart) => {
        res.render('Cart', { cart: foundCart })
    })
})

// New
app.get('/products/new', (req, res) => {
    res.render('New')
})

// Delete
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, err => {
        if (!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
        if (!err) {
            res.status(200).redirect(`/products/${req.params.id}`)
        } else {
            res.status(400).json(err)
        }
    })
})
// Hard coded the cart route since no way of making new Carts was implemented
app.put('/products/:cartid/cart', async (req,res) =>{
    const shopCart = await Cart.findById('6295a013cd690abd0097a1a9')
    const product = await Product.findById(req.body.id)
    shopCart.items.push(product)
    
    Product.findByIdAndUpdate(req.body.id,{quantity: (product.quantity - 1)}, {new:true}, (err, updatedProduct) =>{
        console.log('success')
    })

    Cart.findByIdAndUpdate('6295a013cd690abd0097a1a9',{
        items : shopCart.items
    }, {new:true}, (err,updatedCart) =>{
        res.redirect('/products/6295a013cd690abd0097a1a9/cart')
    })
})
app.put('/products/:cartId/:cartItem/delete', async (req,res) =>{
    const shopCart = await Cart.findById(req.params.cartId)

    const id = shopCart.items.splice(req.params.cartItem, 1)[0]._id
    const product = await Product.findById(id)
    Product.findByIdAndUpdate(id,{quantity: (product.quantity + 1)}, {new:true}, (err, updatedProduct) =>{
        console.log('success')
    })

    Cart.findByIdAndUpdate(req.params.cartId,{
        items : shopCart.items
    }, {new:true}, (err,updatedCart) =>{
        res.redirect(`/products/${req.params.cartId}/cart`)
    })
})
// Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
    })
})
// Created Cart via Postman. No way implemented in browser yet
app.post('/products/:cartId', (req, res) => {
    Cart.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
    })
})


// Edit
app.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (!err) {
            res.render('Edit', { product: foundProduct })
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('Show', { product: foundProduct })
    })
})

// ======= Port ========
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))

