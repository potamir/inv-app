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
import UserCard from "../../components/UserCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div className="main-wrapper">
          <UserCard />
        </div>
      </div>
    );
  }
}

export default Dashboard;
