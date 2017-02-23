var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
  name: String,
  power: String,
  likes: Number,
  status: Boolean
})

mongoose.model('Hero', HeroSchema)
