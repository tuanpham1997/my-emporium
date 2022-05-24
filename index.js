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

// Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
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