const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    children: {
        type: [mongoose.Schema.Types.ObjectId],
    }
});

module.exports = mongoose.model("Parent", parentSchema);