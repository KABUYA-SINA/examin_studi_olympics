const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const pool = require('../db');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash mot de passe
        const hash = await bcrypt.hash(password, 10);

        // Creation user
        const user = {
            name: name,
            email: email,
            password: hash,
            role: 'user' //role par default
        };

        // Save user dans database
        const newUser = await User.create(user);
        res.status(201).json({ message: 'User created!', user: newUser });
    } catch (error) {
        console.error('Signup error:', error);

        if (error.code === '23505') {
            return res.status(409).json({ message: 'Email already exists.' });
        }
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // trouver user par email
        const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: 'Login/password incorrect' });
        }

        const user = userResult.rows[0];

        // Compare mot de passe
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Login/password incorrect' });
        }

        // Generation JWT
        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            userId: user.id,
            name: user.name,
            token: token
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Error during login process' });
    }
};

