import faker from 'faker'
import User from './user'
import mongoose from 'mongoose'

const url = 'mongodb://localhost/test'

mongoose.Promise = global.Promise
mongoose.connect(url)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("connected to " + url)
})

const name = faker.name.firstName() + ' ' + faker.name.lastName()
const email = faker.internet.email()
const lastUpdated = new Date()
const user = new User({name, email, lastUpdated})

user
  .save()
  .then(user => {
    console.log('User saved:\n', JSON.stringify(user, null, 2))
    db.close()
  })
  .catch(err => {
    console.log('error:', err)
    db.close()
  })
