import Header from "../../layouts/Header";
import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Link from "next/link";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div className="login-main-div">
          <Form className="col-4 ">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
              className="checkbox-createnewacc"
            >
              <Form.Check type="checkbox" label="Remember me" />
              <Link href="/Register">
                <a>Create New Account</a>
              </Link>
            </Form.Group>
            <div className="login-submit-btn">
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
