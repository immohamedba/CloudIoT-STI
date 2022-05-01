import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup,FormControl,Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import NavAuth from "./NavAuth";
import './signup.css';
import  Fonctionalite from './Fonctionalite';
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
    <NavAuth></NavAuth>
    <div className="signup-body">
      <div className="p-4 box">
        <h2 className="mb-3"> Inscription </h2>
        {error && <Alert variant="danger">{error}</Alert>}
         <Form onSubmit={handleSubmit}>
         <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormControl
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
           /> 
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicPassword">
             <FormControl
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <div className="d-grid gap-2">
            <Button variant="info" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="box text-center">
        Vous avez dèja un compte? <Link to="/" className="conect">connectez vous</Link>
      </div>
      </div>
      <Fonctionalite/>
    </div>
  );
};

export default Signup;