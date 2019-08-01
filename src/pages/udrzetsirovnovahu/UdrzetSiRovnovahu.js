import Layout from "../../components/Layout";
import img from "../../images/oblicej_orange.jpg";
import Odr from "../../images/odrazka_orange.jpg";
import React, { Component } from "react";

export default class UdrzetSiRovnovahu extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "orange";
  }
  render() {
    return (
      <Layout
        cls="orangeNadpis"
        nadpis="Udržet si rovnováhu"
        pokracovat="/udrzet-si-rovnovahu-rozcestnik-lindynette-maitalon"
        pokracovatText="Pokračovat"
        progress="c0"
      >
        <div className="col-md-7 col-lg-7">
          <br />
          <br />
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Udržet si svůj životní styl
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Neměnit jídelníček
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Udržet si tělesnou hmotnost
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Cenová dostupnost
            </li>
          </ul>
        </div>
        <div className="col-md-5 col-lg-5">
          <img className="uvodniObrazek" src={img} alt="oblicej" />
        </div>
      </Layout>
    );
  }
}
