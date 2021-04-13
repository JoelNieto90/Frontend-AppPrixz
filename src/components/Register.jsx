import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/Register.scss";
import Logo from "../assets/logo.png";
import ButtonWhite from "./ButtonWhite";

export default function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [direction, setDirection] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:3001/api/users";
    const credentials = {
      username,
      name,
      password,
      direction,
      city,
      country,
      phone,
      email,
      photo
    };

    const { data } = await axios.post(baseUrl, credentials);
    history.push("/home");
  };

  return (
    <main className="Register">
      <img src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit} className="Register__form">
        <label>Username: </label>
        <input
          className="input"
          type="username"
          placeholder="Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Name</label>
        <input
          className="input"
          type="name"
          placeholder="Full name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
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
        <label>Direction</label>
        <input
          className="input"
          type="direction"
          placeholder="Direction"
          name="direction"
          onChange={(e) => setDirection(e.target.value)}
          value={direction}
        />
        <label>City</label>
        <input
          className="input"
          type="city"
          placeholder="City"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <label>Country</label>
        <input
          className="input"
          type="country"
          placeholder="Country"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <label>Phone</label>
        <input
          className="input"
          type="phone"
          placeholder="Number Phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <label>Email</label>
        <input
          className="input"
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Photo</label>
        <input
          className="input"
          type="photo"
          placeholder="Photo"
          name="photo"
          onChange={(e) => setPhoto(e.target.value)}
          value={photo}
        />
        <ButtonWhite text="Registrarse" />
      </form>
    </main>
  );
}
