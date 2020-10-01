import Product from 'models/Product';

const getProduct = async (req, res) => {
  const { _id } = req.query;
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { _id } = req.query;
  await Product.findByIdAndDelete({ _id });
  res.status(200).json({ message: 'The product has been successfully removed' });
};

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getProduct(req, res);
      break;
    case 'DELETE':
      await deleteProduct(req, res);
      break;
  }
};
