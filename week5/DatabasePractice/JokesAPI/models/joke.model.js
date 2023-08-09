const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'setup is required'],
        minlength: [1, "setup must be at least 1 character"]
    },
    punchline: {
        type: String,
        required: [true, 'punchline is required'],
        minlength: [1, "punchline must be at least 1 character"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke;