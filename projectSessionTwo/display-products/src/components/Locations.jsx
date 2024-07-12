import React, { Component } from "react";

import data from "../data/data.json";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import LocationCard from "./LocationCard";

export default class Locations extends Component {
  render() {
    const { locations } = data;

    return (
      <Row>
        {locations.map((location) => (
          <Col key={location.location_id}>
            <LocationCard location={location} />
          </Col>
        ))}
      </Row>
    );
  }
}
