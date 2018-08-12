const mongoose = require('mongoose')

// not needed for mongoose v5+
// mongoose.Promise = global.Promise
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/TodosApp',
  { useNewUrlParser: true },
)

module.exports = { mongoose }
