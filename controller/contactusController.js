import Contactus from "../models/Contactus.js";
import { validationResult } from "express-validator";

export const createContact = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, company, message } = req.body;
    try {
        const contact = new Contactus({ name, email, phone, company, message });
        await contact.save();
        res.status(201).json({ message: "Contact created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};