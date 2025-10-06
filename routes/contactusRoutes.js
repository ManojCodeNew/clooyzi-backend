import express from 'express';
import { body } from 'express-validator';
import { createContact } from '../controller/contactusController.js';
const router = express.Router();

router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('message').notEmpty().withMessage('Message is required')
    ],
    createContact
);
export default router;
