const express = require('express')
require('dotenv').config()
const app = express()
const path = require('path')
const helmet = require("helmet")
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')

//ROUTES
const UserRoute = require('./routes/RouteUser')
const Adm = require('./routes/admRoute')
const productRoutes = require('./routes/product');

app.use(express.json());

// CORS - Cross Origin Resource Sharing
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
})

app.set('trust proxy', true);
app.use(helmet());

//refresh Limite 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: "Too many requests have been sent please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(xss())

app.use(limiter)

app.use('/api/products', productRoutes)
app.use('/api/auth', UserRoute)
app.use('/api/auth', Adm)

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(express.static('images'));
app.use(helmet.crossOriginResourcePolicy({ policy: "same-site" }))

module.exports = app;
