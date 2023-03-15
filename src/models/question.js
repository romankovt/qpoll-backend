const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TYPES = [
  ""
]

const questionSchema = new Schema({
  title: String,
  description: String,
  type: String, // how to validate this?
  poll: {
    type: Schema.Types.ObjectId,
    ref: 'Poll'
  }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
