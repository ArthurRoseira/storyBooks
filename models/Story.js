const mongoose = require('mongoose')


//Each Schema maps to a MOndo DB collection and defines the shape of the documents within that collection
const StorySchema = new mongoose.Schema({
 title:{
  type: String,
  require: true,
  trim: true
 },
 body:{
  type:String,
  require: true
 },
 status:{
  type:String,
  default: 'public',
  enum:['public','private']
 },
 user:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
 },
 createdAt:{
  type:Date,
  default: Date.now
 }
})

module.exports = mongoose.model('Story', StorySchema)