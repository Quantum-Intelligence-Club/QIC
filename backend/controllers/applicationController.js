const Application = require("../models/Application");
const mongoose = require("mongoose");

// Valid statuses
const validStatuses = ["pending", "reviewed", "accepted", "rejected"];

// Create Application
exports.createApplication = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: "All fields required"
            });
        }

        const newApp = new Application({ name, email, message });
        await newApp.save();

        res.status(201).json({
            success: true,
            message: "Application submitted",
            data: newApp
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Get Applications (pagination + search + filter + sort)
exports.getApplications = async (req, res) => {
    try {
        let { page = 1, limit = 10, search = "", sort = "desc", status } = req.query;

        // Safe parsing
        page = Math.max(1, parseInt(page) || 1);
        limit = Math.min(50, Math.max(1, parseInt(limit) || 10));

        const sortOrder = sort === "asc" ? 1 : -1;

        let filter = {};

        // Search filter
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { message: { $regex: search, $options: "i" } }
            ];
        }

        // Status filter with validation
        if (status) {
            if (!validStatuses.includes(status)) {
                return res.status(400).json({
                    success: false,
                    error: "Invalid status filter"
                });
            }
            filter.status = status;
        }

        const total = await Application.countDocuments(filter);

        const apps = await Application.find(filter)
            .sort({ createdAt: sortOrder })
            .skip((page - 1) * limit)
            .limit(limit);

        res.json({
            success: true,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: apps
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Get Single Application
exports.getApplicationById = async (req, res) => {
    try {
        const { id } = req.params;

        // ID validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid ID format"
            });
        }

        const app = await Application.findById(id);

        if (!app) {
            return res.status(404).json({
                success: false,
                error: "Application not found"
            });
        }

        res.json({
            success: true,
            data: app
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Update Application
exports.updateApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, message } = req.body;

        // ID validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid ID format"
            });
        }

        // Prevent empty update
        if (!name && !email && !message) {
            return res.status(400).json({
                success: false,
                error: "At least one field required to update"
            });
        }

        // Clean update object
        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (message) updateFields.message = message;

        const updatedApp = await Application.findByIdAndUpdate(
            id,
            updateFields,
            { new: true, runValidators: true }
        );

        if (!updatedApp) {
            return res.status(404).json({
                success: false,
                error: "Application not found"
            });
        }

        res.json({
            success: true,
            data: updatedApp
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Delete Application
exports.deleteApplication = async (req, res) => {
    try {
        const { id } = req.params;

        // ID validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid ID format"
            });
        }

        const deletedApp = await Application.findByIdAndDelete(id);

        if (!deletedApp) {
            return res.status(404).json({
                success: false,
                error: "Application not found"
            });
        }

        res.json({
            success: true,
            message: "Application deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Update Application Status
exports.updateApplicationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        // ID validation
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid ID format"
            });
        }

        // Status validation
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                error: "Invalid status value"
            });
        }

        const updatedApp = await Application.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedApp) {
            return res.status(404).json({
                success: false,
                error: "Application not found"
            });
        }

        res.json({
            success: true,
            data: updatedApp
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};