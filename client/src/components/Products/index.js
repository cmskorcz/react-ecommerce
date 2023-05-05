import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Product from "../Product";

function Products() {
  // Product array will originate from DB when set up
  const productsArr = [
    {
      id: 1,
      name: 'Apple',
      type: 'fruit',
      qty: 10,
      price: '0.89'
    },
    {
      id: 2,
      name: 'Cherry',
      type: 'fruit',
      qty: 20,
      price: '1.00'
    },
    {
      id: 3,
      name: 'Carrot',
      type: 'vegetable',
      qty: 30,
      price: '0.50'
    },
    {
      id: 4,
      name: 'Squash',
      type: 'vegetable',
      qty: 5,
      price: '1.20'
    }
  ];

  return (
    <Container>
      <h1>Here is a list of our products:</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {productsArr.map((product) => <Product key={product.id} product={product} />)}
      </Row>
    </Container>
  )
}

export default Products;