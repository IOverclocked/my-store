import Product from 'models/Product'

export default (req, res) => {
  const { name, price, description, mediaUrl } = req.body
  
  try {
    if (!name || !price || !description || !mediaUrl) {

      return res.status(422).json({ errorMsg: 'Please add all the fields ' })
  
    } else {
  
      const product = new Product({ name, price, description, mediaUrl }).save()
      res.status(201).json(product)
  
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
