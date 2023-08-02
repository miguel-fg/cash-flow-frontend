import Form from 'react-bootstrap/Form';

export default function AuthForm(){
    return (
        <Form>
            <Form.Group className='mb-3' controlId='authForm.usermane'>
                <Form.Label><span className="form-label form-text">Username</span></Form.Label>
                <Form.Control type='text' placeholder='john_doe' className="form-text"/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='authForm.pwd'>
                <Form.Label><span className="form-label form-text">Password</span></Form.Label>
                <Form.Control type='password' className="form-text"/>
            </Form.Group>
        </Form>
    );
}