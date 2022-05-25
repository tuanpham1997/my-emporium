// ====== Setup dependencies ========
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const PORT = 3500
const Product = require('./models/Product')

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
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// ======= Routes =========

// Index
app.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('Index', { product: allProducts})
    })
})

// New
app.get('/products/new', (req, res) => {
    res.render('New')
})

// Delete
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, err =>{
        if(!err){
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/products/:id', (req,res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if(!err){
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
    })
})

// Edit
app.get('/products/:id/edit', (req,res) => {
    Product.findById(req.params.id, (err,foundProduct) =>{
        if(!err){
            res.render('Edit', {product: foundProduct})
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) =>{
        res.render('Show', {product: foundProduct})
    })
})

// ======= Port ========
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))

