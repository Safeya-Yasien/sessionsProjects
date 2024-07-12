import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class LocationCard extends Component {
  render() {
    const { location } = this.props;
    return (
      <Card style={{ width: "18rem" }} className="mb-4">
        <Card.Body>
          <Card.Title>{location.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {location.country}
          </Card.Subtitle>
          <Card.Text>{location.description}</Card.Text>
          <Card.Text>{location.city}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
