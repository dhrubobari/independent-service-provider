import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container w-50 mx-auto mt-2">
      <h2 className="text-center">Please Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <button className="btn btn-primary">Register</button>
      </Form>
      <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
    </div>
  );
};

export default Register;
