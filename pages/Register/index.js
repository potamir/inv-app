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

const bankdummy = ["BCA", "BNI", "BRI", "MANDIRI", "OCBC"];

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: [1, 1, new Date().getFullYear()],
      bank: bankdummy,
    };
    this.dateChecker = this.dateChecker.bind(this);
    this.dateChangeHandler = this.dateChangeHandler.bind(this);
  }

  dateChecker(type) {
    const { birthdate } = this.state;
    const m = birthdate[1];
    const y = birthdate[2];
    let data = [];
    if (type === "day") {
      if (m === 4 || m === 6 || m === 9 || m === 11) {
        for (let i = 0; i < 30; i++) {
          data.push(i + 1);
        }
        return data;
      } else if (
        m === 1 ||
        m === 3 ||
        m === 5 ||
        m == 7 ||
        m === 8 ||
        m === 10 ||
        m === 12
      ) {
        for (let i = 0; i < 31; i++) {
          data.push(i + 1);
        }
        return data;
      } else {
        if (y % 4 === 0) {
          for (let i = 0; i < 29; i++) {
            data.push(i + 1);
          }
          return data;
        } else {
          for (let i = 0; i < 28; i++) {
            data.push(i + 1);
          }
          return data;
        }
      }
    } else {
      const currYear = new Date().getFullYear();
      for (let i = 0; i < 100; i++) {
        data.push(currYear - i);
      }
      return data;
    }
  }

  dateChangeHandler(value, index) {
    const { birthdate } = this.state;
    birthdate.splice(index, 1, parseInt(value));
    this.forceUpdate();
  }

  render() {
    const { bank } = this.state;
    return (
      <div>
        <Header />
        <div className="login-main-div">
          <Form className="col-4 ">
            <Form.Group controlId="formBasicName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama" />
            </Form.Group>
            <Form.Group controlId="formBasicBirth">
              <Form.Label>Tanggal Lahir</Form.Label>
              <div className="birthdate-wrapper">
                <Form.Control
                  as="select"
                  onChange={(e) => this.dateChangeHandler(e.target.value, 0)}
                  className="date-month"
                >
                  {this.dateChecker("day").map((value, index) => {
                    return <option>{value}</option>;
                  })}
                </Form.Control>
                <Form.Control
                  as="select"
                  onChange={(e) => this.dateChangeHandler(e.target.value, 1)}
                  className="date-month"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (value, index) => {
                      return <option>{value}</option>;
                    }
                  )}
                </Form.Control>
                <Form.Control
                  as="select"
                  onChange={(e) => this.dateChangeHandler(e.target.value, 2)}
                  className="year"
                >
                  {this.dateChecker("year").map((value, index) => {
                    return <option>{value}</option>;
                  })}
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicId">
              <Form.Label>KTP</Form.Label>
              <Form.Control type="number" placeholder="Data Lain KTP" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Telfon</Form.Label>
              <Form.Control type="number" placeholder="Masukkan Nomor Telfon" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Bank</Form.Label>
              <Form.Control as="select">
                {bank.map((value, index) => {
                  return <option>{value}</option>;
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicBank">
              <Form.Label>Rekening</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan Nomor Rekening"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Re-Password</Form.Label>
              <Form.Control type="password" placeholder="Konfirmasi Password" />
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

export default Register;
