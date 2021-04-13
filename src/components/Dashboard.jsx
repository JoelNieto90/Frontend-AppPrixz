import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "../styles/Dashboard.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container } from "reactstrap";

export default function Dashboard() {
  const [profile, setProfile] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const identificador = localStorage.getItem("id");
    const id = JSON.parse(identificador);
    axios.get(`http://localhost:3001/api/users/${id}`).then((res) => {
      setProfile(res.data);
      let array = res.data.products;
      array.map((item) =>
        fetch(`http://localhost:3001/api/products/${item}`)
          .then((response) => response.json())
          .then((data) => setProducts(data))
      );
    });
  }, []);

  return (
    <div className="Dashboard">
      <NavBar />
      <div className="Dashboard__container">
        <section className="Dashboard__Perfil">
          <img className="Dashboard__Perfil--Photo" src={profile.photo} />
          <p className="Dashboard__Perfil--Username">{profile.username}</p>
          <p className="Dashboard__Perfil--Name">
            Welcome <br />
            {profile.name} <br /> a tu profile.
            <br />
          </p>
          <p className="Dashboard__Perfil--Email">{profile.email}</p>
        </section>
        <section className="Dashboard__Data">
          <div className="Dashboard__ProfileData">
            <h1 className="Dashboard__ProfileData--head">Information User:</h1>
            <hr />
            <section className="Table">
              <Container>
                <div class="table-responsive">
                  <Table striped hover>
                    <thead class="table-dark">
                      <tr>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>DIRECTION</th>
                        <th>CITY</th>
                        <th>COUNTRY</th>
                        <th>PHONE</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr scope="row" key={profile.id}>
                        <td>{profile.name}</td>
                        <td>{profile.username}</td>
                        <td>{profile.email}</td>
                        <td>{profile.direction}</td>
                        <td>{profile.city}</td>
                        <td>{profile.country}</td>
                        <td>{profile.phone}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Container>
            </section>
          </div>

          <div className="Dashboard__ProfileProducts">
            <h1 className="Dashboard__ProfileData--head">Added Products:</h1>
            <hr />
            <div>
              {Object.keys(products).map((key) => (
                <p>{products[key]}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
