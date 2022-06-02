const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        message: "all parents"
    });
});

router.post("/add", (req, res) => {
    res.json({
        message: "add new parent"
    });
});

router.delete("/delete/:id", (req, res) => {
    res.json({
        message: `delete parent ${req.params.id}`
    });
});

module.exports = router;
