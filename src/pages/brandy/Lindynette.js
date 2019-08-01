import Layout from "../../components/Layout";
import MistraLogo from "../../images/lindynette_final.png";
import Odr from "../../images/odrazka_lindynette.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Lindynette extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "orange";
  }
  render() {
    return (
      <Layout
        cls="lindyNadpis"
        nadpis="Lindynette 20"
        pokracovat="/lindynette-kvalitni"
        pokracovatText="Pokračovat"
        progress="c0"
      >
        <div className="col-md-6 col-lg-6">
          <img
            width="270"
            className="uvodniObrazek mx-auto"
            src={MistraLogo}
            alt="oblicej"
          />
        </div>
        <div className="col-md-6 col-lg-6">
          <br />

          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Moderní, kvalitní a ověřená
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Dlouhé cykly
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Hmotnostní stabilita
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Mírný antimineralokortikoidní
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; efekt
            </li>
          </ul>
        </div>
        <div className="col-md-12 col-lg-12">
          <hr className="redDivider" />
        </div>
        <div className="col-md-12 col-lg-12">
          <h4 className="alignCenter customHeading">Rozcestník </h4>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/lindynette-kvalitni">Kvalitní, moderní a ověřená</Link>
        </div>
      </Layout>
    );
  }
}
