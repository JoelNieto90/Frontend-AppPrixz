import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/SignIn.scss";
import Logo from "../assets/logo.png";
import ButtonWhite from "./ButtonWhite";

export default function SingIn() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:3001/api/login";
    const credentials = {
      username,
      password,
    };

    const { data } = await axios.post(baseUrl, credentials);
    console.log(data);
    window.localStorage.setItem("token", JSON.stringify(data.token));
    window.localStorage.setItem("id", JSON.stringify(data.id));
    history.push("/home")
  };

  return (
    <main className="mainSignIn">
      <img src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit} className="mainSignIn__form">
        <label>Username</label>
        <input
          className="input"
          type="username"
          placeholder="Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <ButtonWhite text="Iniciar Sesion" />

        <section className="mainSignIn__form--link">
          <Link to="/register">Crear una cuenta</Link>
        </section>
      </form>
    </main>
  );
}
