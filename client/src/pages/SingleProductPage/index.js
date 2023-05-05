import Container from "react-bootstrap/esm/Container";
import Product from "../../components/Product";

function SingleProductPage(props) {
  const { productsArr } = props
  const productId = window.location.pathname.split('/').pop();

  return (
    <Container>
      <Product product={ productsArr[productId-1] } />
    </Container>
  )
}

export default SingleProductPage;