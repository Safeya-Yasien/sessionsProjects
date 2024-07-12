import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link, Outlet } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <div className="mb-5 mx-auto text-center">
          <Button variant="primary" className="me-3">
            <Link to="products" style={{ color: "#fff" }}>
              Products
            </Link>
          </Button>
          <Button variant="primary" className="me-3">
            <Link to="locations" style={{ color: "#fff" }}>
              Locations
            </Link>
          </Button>
          <Button variant="primary">
            <Link to="persons" style={{ color: "#fff" }}>
              Persons
            </Link>
          </Button>
        </div>
        <Outlet />
      </Container>
    );
  }
}
