// Get a list of all polls
const Poll = require('../models/poll');

const getPolls = (req, res) => {
  Poll.find().then((polls) => res.json(polls));
};

// Get a single poll by id
const getPoll = (req, res) => {
  Poll.findById(req.params.id).then((poll) => res.json(poll));
};

// Create a new poll
const createPoll = (req, res) => {
  const newPoll = new Poll({
    name: req.body.name || req.query.name,
    description: req.body.description || req.query.description
  });
  console.log(req.query.name);
  newPoll.save().then(() => res.json(newPoll));
};

// Update an poll by id
const updatePoll = (req, res) => {
  Poll.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, description: req.body.description },
    { new: true }
  )
    .then((poll) => res.json(poll));
};

// Delete an poll by id
const deletePoll = (req, res) => {
  Poll.findByIdAndRemove(req.params.id)
    .then((poll) => res.status(200).json(poll))
    .catch((error) => res.status(404).json("not found"));
};

module.exports = {
  getPolls,
  getPoll,
  createPoll,
  updatePoll,
  deletePoll
}
