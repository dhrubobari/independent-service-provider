import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container w-50 mx-auto mt-2">
      <h2 className="text-primary text center">Login Please</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>

        <button className="btn btn-primary">Login</button>
      </Form>
      <p>New to Adonis and Associates? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
    </div>
  );
};

export default Login;
