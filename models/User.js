const mongoose = require('mongoose')


//Each Schema maps to a MOndo DB collection and defines the shape of the documents within that collection
const UserSchema = new mongoose.Schema({
 googleId:{
  type:string,
  require: true
 },
 displayName:{
  type:string,
  require: true
 },
 firstName:{
  type:string,
  require: true
 },
 lastName:{
  type:string,
  require: true
 },
 image:{
  type:string
 },
 createdAt:{
  type:Date,
  default: Date.now
 }
})

module.exports = mongoose.model('User', UserSchema)