const { ObjectID } = require('mongodb')

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

// const id = '5b7098f18826ce7c9439257011'

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id,
// }).then(todos => {
//   console.log('Todos', todos)
// })

// Todo.findOne({
//   _id: id,
// }).then(todo => {
//   console.log('Todo', todo)
// })

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('ID not found')
//     }
//     console.log('Todo by ID', todo)
//   })
//   .catch(e => console.log(e))

const userId = '5b7074c920ec4c71febd9a10'

User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log('User not found')
    }
    console.log('User by ID', JSON.stringify(user, undefined, 2))
  })
  .catch(e => console.log(e))
