import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LoginForm from "../../components/LoginForm";
import SignupForm from '../../components/SignUpForm';

function LoginPage() {
  return (
    <Container>
      <h1>Login/Sign-up Page</h1>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <LoginForm />
        </Col>
        <Col>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage;