const mongoose = require('mongoose')
const quizAttemptedSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quizResult: [],
});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Points: {type: Number, default: -1},
    quizAttempted: [quizAttemptedSchema],
  })
  const User = new mongoose.model('User', userSchema)

  module.exports=User
