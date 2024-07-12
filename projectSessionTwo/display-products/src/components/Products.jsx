import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data/data.json";
import ProductCard from "./ProductCard";

export default class Products extends Component {
  state = {};
  render() {
    const { products } = data;
    return (
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
