const mongoose = require('mongoose')


//Each Schema maps to a MOndo DB collection and defines the shape of the documents within that collection
const UserSchema = new mongoose.Schema({
 googleId:{
  type: String,
  require: true
 },
 displayName:{
  type:String,
  require: true
 },
 firstName:{
  type:String,
  require: true
 },
 lastName:{
  type:String,
  require: true
 },
 image:{
  type:String
 },
 createdAt:{
  type:Date,
  default: Date.now
 }
})

module.exports = mongoose.model('User', UserSchema)