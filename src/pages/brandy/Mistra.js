import MistraLogo from "../../images/mistra_final.png";
import Layout from "../../components/Layout";
import Odr from "../../images/odrazka_yellow.jpg";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Mistra extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#bbcf16";
  }
  render() {
    return (
      <Layout
        cls="yellowNadpis"
        nadpis="Mistra"
        pokracovat="/mistra-diegonest-a-vlastnosti"
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
              &nbsp;&nbsp;Slabší, kratší a méně bolestivá
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; menstruace
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Dlouhé cykly
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Antiandrogenní efekt
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Návrat k plodnosti
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Dysmenorea
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
          <Link to="/mistra-diegonest-a-vlastnosti">Dienogest</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/mistra-atrofizujici-vliv">Atrofizující vliv</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/mistra-jak-na-dlouhe-cykly">Dlouhé cykly</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/mistra-ucinek-na-kuzi">Účinky na kůži</Link>
        </div>
      </Layout>
    );
  }
}
