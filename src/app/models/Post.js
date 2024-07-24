const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  title: String,
  thumb: String,
  avatar: String,
  author: String,
});

module.exports = mongoose.model('Post', Post);
