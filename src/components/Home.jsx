import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import CreateProduct from "./CreateProduct";
import NavBar from "./NavBar";
import "../styles/Home.scss";

export default function SingIn() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="Home">
      <NavBar />
      <div className="Home__container">
        <CreateProduct dataResults={products} />
        <section className="Content__section">
          <Cards dataResults={products} />
        </section>
      </div>
    </div>
  );
}
