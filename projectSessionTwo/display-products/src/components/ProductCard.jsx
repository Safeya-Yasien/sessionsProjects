import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <Card style={{ width: "18rem" }} className="mb-4">
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {product.category}
          </Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.stock}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
