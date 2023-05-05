import Hero from "../../components/Hero";
import Products from "../../components/Products";

function HomePage(props) {
  const { productsArr } = props
  return (
    <>
      <Hero />
      <Products productsArr={productsArr} />
    </>
  )
}

export default HomePage;