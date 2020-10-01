import initDB from 'helpers/initDb';
import Product from 'models/Product';

initDB();

export default (req, res) => {
  Product.find().then(products => {
    res.status(200).json(products);
  })
}