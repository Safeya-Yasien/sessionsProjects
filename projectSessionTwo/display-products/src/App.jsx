import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Locations from "./components/Locations";
import Products from "./components/Products";
import Persons from "./components/Persons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="products" element={<Products />} />
          <Route path="persons" element={<Persons />} />
          <Route path="locations" element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
