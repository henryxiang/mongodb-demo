import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  lastUpdated: Date
})

export default mongoose.model('User', UserSchema)