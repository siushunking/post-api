const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    enum: ["Finance", "Sport", "Health", "Entertainment"]
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // follower: {
  //   type: [String],
  //   default: [],
  // },
})


module.exports = mongoose.model('Article', articleSchema)