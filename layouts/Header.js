import Head from "next/head";
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Head>
          <Link href="/">
            <title>Investment App</title>
          </Link>
        </Head>
        <Navbar bg="light" expand="lg" className="position-sticky col-12">
          <Navbar.Brand href="/">Investment App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/Dashboard">
                <a className="header-nav">Dashboard</a>
              </Link>
              <Link href="/">
                <a className="header-nav">Investment</a>
              </Link>
              <Link href="/">
                <a className="header-nav">History</a>
              </Link>
            </Nav>
            <Link href="/Login">
              <a className="header-nav">Login</a>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
