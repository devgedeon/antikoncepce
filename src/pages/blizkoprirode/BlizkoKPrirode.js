import Layout from "../../components/Layout";
import img from "../../images/oblicej_yellow.jpg";
import Odr from "../../images/odrazka_yellow.jpg";

import React, { Component } from "react";

export default class BlizkoKPrirode extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#bbcf16";
  }
  render() {
    return (
      <Layout
        cls="yellowNadpis"
        nadpis="Blízko k přírodě"
        pokracovat="/blizko-k-prirode-rozcestnik-violetta-mistra"
        pokracovatText="Pokračovat"
        progress="c0"
      >
        <div className="col-md-7 col-lg-7">
          <br />
          <br />
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Nízká dávka hormonů
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Blízko přirozených procesů těla
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Zajistit přirozený cyklus
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Přirozené množství hormonů
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
