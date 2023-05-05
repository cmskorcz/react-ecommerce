import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm() {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='signupFName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' placeholder='First Name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='signupLName'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type='text' placeholder='Last Name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='signupEmail'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type='email' placeholder='Enter Email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='confirmEmail'>
        <Form.Label>Confirm Email Address</Form.Label>
        <Form.Control type='email' placeholder='Confirm Email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='signupPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Enter Password' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='confirmPassword'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type='password' placeholder='Confirm Password' />
      </Form.Group>

      <Button variant='primary' type='submit'>Sign Up</Button>
    </Form>
  )
}

export default SignupForm;