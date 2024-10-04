const express = require('express')
const router = express.Router()
const userController = require('../controllers/adm')
const validator = require('../middleware/validator')

router.post('/signup-adm', validator, userController.signup)
router.post('/login-adm', userController.login)


module.exports = router