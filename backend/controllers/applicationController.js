const Application = require("../models/Application");

exports.createApplication = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields required" });
        }

        const newApp = new Application({ name, email, message });
        await newApp.save();

        res.status(201).json({ message: "Application submitted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getApplications = async (req, res) => {
    try {
        
        const apps = await Application.find().sort({ createdAt: -1 });
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};