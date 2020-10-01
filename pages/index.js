import ProductsList from 'components/ProductsList';
import baseUrl from 'helpers/baseUrl';

const Home = ({ products }) => {
  console.log(products)
  return (
    <div className="rootcard">
      <ProductsList products={products}/>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

export default Home;
