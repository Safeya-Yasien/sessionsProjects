import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data/data.json";
import PersonForm from "./PersonForm";

export default class Persons extends Component {
  state = {};
  render() {
    const { persons } = data;
    return (
      <Row>
        {persons.map((person) => (
          <Col key={person.id} >
            <PersonForm person={person} />
          </Col>
        ))}
      </Row>
    );
  }
}
