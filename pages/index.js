import Link from 'next/link';

const Home = ({ message }) => {
  return (
    <>
      { message }
       
      <Link href="/product"><a>go to product</a></Link>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/test');
  const data = await res.json();
  console.log(data);
  return {
    props: {
      message: data.message
    }
  }
}

export default Home;
