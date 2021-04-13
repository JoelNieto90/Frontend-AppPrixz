import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.scss";
import ModalEditarProducto from "./ModalEditarProducto";
import ModalEliminarProducto from "./ModalEliminarProducto";

const Cards = ({ dataResults }) => {
  const handleClick = (data) => {
    window.localStorage.setItem("id", data);
  };
  return (
    <div className="Characters">
      {dataResults.map((product) => (
        <form className="Cards">
          <img className="Cards__img" src={product.photo} alt="imagen" />
          <div className="Cards__info">
            <div className="Cards__info--text">
              <Link
                to="/main"
                onClick={() => {
                  handleClick(product.id);
                }}
                className="Cards__info--titulo"
              >
                {product.productName}
              </Link>
              <p className="Cards__info--precio">${product.price}</p>
            </div>
            <div className="Cards__info--butttons">
              <ModalEditarProducto buttonLabel="EDITAR" data={product.id} />
              <ModalEliminarProducto buttonLabel="ELIMINAR" data={product.id} />
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default Cards;
