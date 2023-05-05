import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='loginEmail'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type='email' placeholder='Enter Email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='loginPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Enter Password' />
      </Form.Group>

      <Button variant='primary' type='submit'>Login</Button>
    </Form>
  )
}

export default LoginForm;