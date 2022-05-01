import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, FormControl, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import logo from '../logo.PNG';
import './login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/enregistrement");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/enregistrement");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <img src={logo} className="logo" />
      <div className="p-4 box">
        <h2 className="mb-3"> Connexion </h2>
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
            <Button variant="info" className="btn-info" type="submit">
              se connecter
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className="compte-pasword">
        <div className="newCompte">
            <Link to="">mot de passe oublié</Link>
          </div>
          <div className="newCompte">
            <Link to="/signup">Creér un compte</Link>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Login;