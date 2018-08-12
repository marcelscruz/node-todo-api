const mongoose = require('mongoose')

// not needed for mongoose v5+
// mongoose.Promise = global.Promise
mongoose.connect(
  'mongodb://localhost:27017/TodosApp',
  { useNewUrlParser: true },
)

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  completedAt: {
    type: Number,
  },
})

const newTodo = new Todo({
  text: 'Cook dinner',
})

// newTodo.save().then(
//   doc => {
//     console.log('Saved todo', doc)
//   },
//   e => {
//     console.log('Unable to save todo')
//   },
// )

const secondTodo = new Todo({
  text: 'Go running',
  completed: true,
  completedAt: 2018,
})

secondTodo
  .save()
  .then(doc => {
    console.log(JSON.stringify(doc, undefined, 2))
  })
  .catch(e => {
    console.log('Unable to save todo', e)
  })
