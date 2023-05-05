import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Product(props) {
  const { name, type, qty, price } = props.product;
  
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>${price}</Card.Subtitle>
          <Card.Text>{type}</Card.Text>
          <Button variant='primary'>Add to Cart</Button>
        </Card.Body>
        <Card.Footer className='text-muted'>{qty} in stock</Card.Footer>
      </Card>
    </Col>
  )
}

export default Product;