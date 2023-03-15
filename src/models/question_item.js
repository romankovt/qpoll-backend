const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionItemSchema = new Schema({
  text: String,
  questionId: Number,
});

const QuestionItem = mongoose.model('QuestionItem', questionItemSchema);
module.exports = QuestionItem;
