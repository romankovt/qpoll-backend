const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUSES = ["active", "draft", "archived"]

const optionSchema = new Schema({
  title: String
});

const questionSchema = new Schema({
  title: String,
  options: [optionSchema]
});

const pollSchema = new Schema({
  name: String,
  description: String,
  status: String,
  questions: [questionSchema]
});

[pollSchema, questionSchema, optionSchema].forEach((schema) => {
  schema.virtual('id').get(function(){
    return this._id.toHexString();
  });

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id  }
  });
})

const Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;

