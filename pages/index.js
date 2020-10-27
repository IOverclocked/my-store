import ProductsList from 'components/ProductsList'
import baseUrl from 'helpers/baseUrl'

const Home = ({ products }) => {
  console.log(products)
  return (
    <div className="rootcard">
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${baseUrl}/api/products`)
    console.log(res)
    const products = await res.json()
    return {
      props: {
        products,
      },
    }
  } catch (err) {
    console.log(err)

    return {
      props: {
        products: [],
      },
    }
  }
}

export default Home
