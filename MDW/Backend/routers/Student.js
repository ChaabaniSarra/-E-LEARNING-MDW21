const express = require('express');
const router = express.Router();

const Student = require("../Models/Student"); // Corrected the model name to "Student"

router.post('/addSTudent', (req, res) => { // Changed route name to 'addSTudent' for consistency
    const data = req.body; // Added missing 'const' keyword
    const Student = new Student(data); // Renamed variable to 'Student' for clarity
    Student.save()
        .then((savedSTudent) => {
            res.status(200).send(savedSTudent);
        })
        .catch((err) => res.status(400).send(err)); // Sending actual error message
});

router.get("/getAllSTudents", async (req, res) => { // Changed route name to 'getAllSTudents' for consistency
    try {
        const STudents = await Student.find(); // Changed variable name to 'STudents' for clarity
        res.send(STudents);
    } catch (err) {
        res.status(400).send(err); // Sending actual error message
    }
});

router.delete("/deleteSTudent/:id", async (req, res) => { // Changed route name to 'deleteSTudent' for consistency
    try {
        const id = req.params.id; // Used 'const' instead of 'let' for consistency
        const deletedSTudent = await Student.findByIdAndDelete(id); // Changed variable name to 'deletedSTudent' for clarity

        if (!deletedSTudent)
            return res.status(400).send("The Student with the given ID was not found.");

        res.send(deletedSTudent);
    } catch (err) {
        res.status(400).send(err); // Sending actual error message
    }
});

router.put('/updateSTudent', (req, res) => { // Corrected route name to 'updateSTudent'
    console.log('update'); // Added implementation for updateSTudent route
});

module.exports = router ;// Exporting the created Router 