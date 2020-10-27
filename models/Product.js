import db from 'mongoose'

const productSchema = new db.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
})

export default db.models.product || db.model('product', productSchema)
