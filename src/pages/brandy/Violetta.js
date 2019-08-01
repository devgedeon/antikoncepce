import Layout from "../../components/Layout";
import MistraLogo from "../../images/violetta_final.png";
import { Link } from "react-router-dom";
import Odr from "../../images/odrazka_violetta.jpg";
import React, { Component } from "react";

export default class Violetta extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#d65ec8";
  }
  render() {
    return (
      <Layout
        cls="purpleNadpis"
        nadpis="Violetta"
        progress="c0"
        pokracovat="/violetta-zakladni-info"
        pokracovatText="Pokračovat"
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
              &nbsp;&nbsp;Nejnižší dávka hormonů
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Pravidelná slabá menstruace
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Režim 24+4
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Pro ženy 40+
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
          <Link to="/violetta-zakladni-info">Základní informace</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="//violetta-peroralni-antikoncepce">
            Perorální antikoncepce
          </Link>
        </div>
      </Layout>
    );
  }
}
