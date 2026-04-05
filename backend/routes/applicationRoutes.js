const express = require("express");
const router = express.Router();
const {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
    updateApplicationStatus
} = require("../controllers/applicationController");

router.post("/apply", createApplication);
router.get("/applications", getApplications);

// Get single application
router.get("/applications/:id", getApplicationById);

// Update application
router.put("/applications/:id", updateApplication);

// Delete application
router.delete("/applications/:id", deleteApplication);

//Update application statys
router.patch("/applications/:id/status", updateApplicationStatus);

module.exports = router;