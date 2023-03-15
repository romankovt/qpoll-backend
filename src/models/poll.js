const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUSES = ["active", "draft", "archived"]
const pollSchema = new Schema({
  name: String,
  description: String,
  status: String
});


pollSchema.methods.toJSON = function() {
  let obj = this.toObject();
  obj.id = obj._id;

  delete obj.__v;
  delete obj._id;

  return obj;
}

const Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;
