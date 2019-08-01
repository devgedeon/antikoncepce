import Layout from "../../components/Layout";
import img from "../../images/oblicej.jpg";
import Odr from "../../images/odrazka.jpg";

import React, { Component } from "react";

export default class ZachovatSiKrasu extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#e62737";
  }

  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Zachovat si krásu"
        pokracovat="/zachovat-si-krasu-rozcestnik-bellara-mistra"
        pokracovatText="Pokračovat"
        progress="c0"
      >
        <div className="col-md-6 col-lg-6">
          <br />
          <br />
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Vylepšit vzhled pleti
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Posílit vlasy a nehty
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Zachovat si libido
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Antiandrogenní účinky
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-6">
          <img className="uvodniObrazek" src={img} alt="oblicej" />
        </div>
      </Layout>
    );
  }
}
