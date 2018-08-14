const mongoose = require('mongoose')

// not needed for mongoose v5+
// mongoose.Promise = global.Promise
console.log(process.env.MONGODB_URI)
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true },
  )
  .catch(e => {
    console.log(e)
  })

module.exports = { mongoose }
