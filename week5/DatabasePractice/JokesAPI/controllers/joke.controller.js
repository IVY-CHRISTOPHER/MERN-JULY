const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) => {
            res.json({message: "Something went wrong showing all jokes", error: err})
        });
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => {
            res.json({joke: oneJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong getting one joke", error: err})
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({joke: newJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong creating a new joke", error: err})
        }); 
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(udpatedJoke => {
            res.json({joker: udpatedJoke})
        })
        .catch((err) => {
            res.json({message: "Something went wrong updating a joke", error: err})
        })
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch ((err) => {
            res.json({message: "Something went wrong when deleting a joke", error: err})
        })
}