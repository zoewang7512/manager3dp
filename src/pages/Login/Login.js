import React, { useRef, useState } from "react";
import { Form, Button, FormGroup, Label, Input, Alert } from "reactstrap";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TiPrinter } from "react-icons/ti";
import Header from "../../layouts/Header";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("帳號/密碼輸入錯誤!");
    }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <div className="login">
        <div className="login-card">
          <TiPrinter
            className="mx-auto"
            style={{ color: "#FF6D28", fontSize: "80px" }}
          />
          <h2>Log In</h2>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="Email"></Label>
              <Input
                innerRef={emailRef}
                placeholder="enter your email"
                type="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password"></Label>
              <Input
                innerRef={passwordRef}
                placeholder="enter your password"
                type="password"
                required
              />
            </FormGroup>

            <Button
              className="w-100 mt-3"
              type="submit"
              disabled={loading}
              color="primary"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
