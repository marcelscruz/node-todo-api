// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // Select a specific todo
    // db.collection('Todos')
    //   .find({
    //     _id: new ObjectID('5b6e0152081389396b46fed0'),
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos')
    //       console.log(JSON.stringify(docs, undefined, 2))
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err)
    //     },
    //   )

    // Select count of todos
    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`)
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err)
    //     },
    //   )

    db.collection('Users')
      .find({ name: 'Marcel' })
      .toArray()
      .then(
        docs => {
          console.log('Users')
          console.log(JSON.stringify(docs, undefined, 2))
        },
        err => {
          console.log('Unable to fetch users', err)
        },
      )

    // client.close()
  },
)
