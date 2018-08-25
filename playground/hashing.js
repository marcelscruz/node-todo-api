const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

const message = 'I am user number 3'
const hash = SHA256(message).toString()

const bcrypt = require('bcryptjs')

// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)

// const data = {
//   id: 4,
// }

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString(),
// }

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if (resultHash === token.hash) {
//   console.log('Data was not changed')
// } else {
//   console.log('Data was changed. Do not trust')
// }

// JSON web token gives you the functonality above

// const data = {
//   id: 10,
// }

// const token = jwt.sign(data, '123abc')
// console.log('token', token)

// const decoded = jwt.verify(token, '123abc')
// console.log('decoded', decoded)

const password = '123abc'

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   })
// }) // (numberOfRounds, cb)

const hashedPassword =
  '$2a$10$O8EF6pF54KZN3IFeckXDI.TRs5lMiWBQdSfRnfKLWWj0oF8YYn6ue'

bcrypt.compare('123', hashedPassword, (err, res) => {
  console.log(res)
})
