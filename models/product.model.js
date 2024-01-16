import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  description:{
    type: String,
    trim: true
  },
  image:{
    public_id: String,
    secure_url: String
  }
})

export default mongoose.model('Product',productSchema)