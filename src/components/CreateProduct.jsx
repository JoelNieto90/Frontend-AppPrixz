import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Logo from "../assets/logo.png";
import ButtonWhite from "./ButtonWhite";
import "../styles/CreateProducts.scss";

export default function CreateProduct({ dataResults }) {
  const history = useHistory();
  const [register, setRegister] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(token);
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };
    const baseUrl = "http://localhost:3001/api/products";
    const credentials = {
      productName,
      price,
      instructions,
      description,
      photo,
    };

    const { data } = await axios.post(baseUrl, credentials, config);
    setRegister(data);
    history.push("/home");
  };

  return (
    <main className="mainProducto">
      <img className="img" src={Logo} alt="Logo" />
      <h1 className="Titulo">Registrar Producto</h1>
      {register ? <p className="mainProducto__Mensaje">Registrado exitosamente</p> : ""}
      <form onSubmit={handleSubmit} className="mainProducto__form">
        <div className="mainProducto__form--box">
          <label>Product Name: </label>
          <input
            className="input"
            type="productName"
            placeholder="Product Name"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
        </div>
        <div className="mainProducto__form--box">
          <label>Price</label>
          <input
            className="input"
            type="price"
            placeholder="Price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="mainProducto__form--box">
          <label>Instructions</label>
          <input
            className="input"
            type="instructions"
            placeholder="Instructions"
            name="instructions"
            onChange={(e) => setInstructions(e.target.value)}
            value={instructions}
          />
        </div>
        <div className="mainProducto__form--box">
          <label>Description</label>
          <input
            className="input"
            type="description"
            placeholder="Description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="mainProducto__form--box">
          <label>Photo</label>
          <input
            className="input"
            type="photo"
            placeholder="Photo"
            name="photo"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
          />
        </div>
        <ButtonWhite text="Añadir" />
      </form>
    </main>
  );
}
