const mongoose = require('mongoose')

// not needed for mongoose v5+
// mongoose.Promise = global.Promise
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
)

module.exports = { mongoose }
