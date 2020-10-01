import Link from 'next/link';

const ProductsList = ({ products }) => {

  return (
    <>
      {products.map((product) => {
        const { _id, name, price, description, mediaUrl } = product;
        return (
          <div className="card" key={_id}>
            <div className="card-image">
              <img src={mediaUrl} />
              <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
              <h5>Price: {price}$</h5>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <Link href={`/product/[_id]`} as={`/product/${_id}`}>
                <a>View product</a>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductsList;
