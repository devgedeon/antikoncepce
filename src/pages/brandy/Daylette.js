import Layout from "../../components/Layout";
import MistraLogo from "../../images/daylette_final.png";
import Odr from "../../images/odrazka_blue.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Daylette extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#129bbe";
  }
  render() {
    return (
      <Layout
        cls="blueNadpis"
        nadpis="Daylette"
        pokracovat="/daylette-drospirenon"
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
              &nbsp;&nbsp;Premenstruační symptomy
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Antimineralokortikoidní efekt
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Hmotnostní stabilita
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Režim 24+4
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
          <Link to="/daylette-drospirenon">Princip drospirenonu</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/daylette-renin-angiotenzin-aldosteron">Systém renin</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/daylette-renin-angiotenzin-aldosteron">
            Potlačení symptomů
          </Link>
        </div>
      </Layout>
    );
  }
}
