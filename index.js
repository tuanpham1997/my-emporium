// ====== Setup dependencies ========
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const PORT = 3500

// ======= View Engine =============
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ======= Middleware ==========
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// ======= Routes =========



// ======= Port ========
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))