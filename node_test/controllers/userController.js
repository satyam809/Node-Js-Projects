const { check, validationResult } = require('express-validator');
const userModel = require('../models/userModel');

exports.create = async (req, res) => {
    try {
        // Validation rules
        const validationRules = [
            check('name').notEmpty().withMessage('Name is required'),
            check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
            check('password').notEmpty().withMessage('Password is required'),
            check('image').notEmpty().withMessage('Image is required'),
        ];

        // Apply validation middleware
        await Promise.all(validationRules.map(validation => validation.run(req)));

        // Check validation results
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const simplifiedErrors = {};
            errors.array().forEach(error => {
                simplifiedErrors[error.path] = error.msg;
            });
            return res.send({ errors: simplifiedErrors });
        }

        // Insert the user into the database
        const result = await userModel.insert(req.body);

        if (result.affectedRows === 1) {
            return res.status(201).json({ status: true, message: 'Registration completed successfully' });
        } else {
            return res.status(500).json({ status: false, message: 'Failed to register user' });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ status: false, message: 'Internal server error' });
    }
};
