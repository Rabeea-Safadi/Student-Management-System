const router = require("express").Router();
const student = require("../models/student");

router.get("/", async (req, res) => {
    try {
        const students = await student.find();

        res.status(200).render("student/all", { listOfStudents: students });
    }
    catch (e) {
        res.status(500).json({ message: "Error getting students" });
    }
});

router.get("/add", (req, res) => {
    res.render("student/new");
});

router.post("/add", async (req, res) => {
    try {
        const newStudent = new student(req.body);
        await newStudent.save();
        res.status(200).render("student/new");
    }
    catch (e) {
        res.status(500).json({ message: "Error adding new student", error_msg: e.message });
    }
});

router.post("/delete/:id", async (req, res) => {
    try {
        await student.findByIdAndDelete(req.params.id);
        res.status(200).redirect("/api/students");
    }
    catch (e) {
        res.json(500).json({ message: "Error deleting student", error_msg: e.message });
    }
});

module.exports = router;