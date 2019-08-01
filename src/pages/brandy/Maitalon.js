import Layout from "../../components/Layout";
import MistraLogo from "../../images/maitalon_final.png";
import Odr from "../../images/odrazka_orange.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Maitalon extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "red";
  }

  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Maitalon"
        pokracovat="/maitalon-drospirenon"
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
              &nbsp;&nbsp;Premenstruační symptomy,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PMS a PMDD
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
              &nbsp;&nbsp;protektivní vliv na vývoj
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kostní hmoty
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;dlouhé cykly
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
          <Link to="/maitalon-drospirenon">Drospirenon</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/maitalon-vyrazny-pokles">Pokles</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/antimineralokoidni-aktivita">Aktivita</Link>
        </div>
        <div className="col alignCenter rozItem">
          <Link to="/zmeny-v-kostni-hmote">Hmota</Link>
        </div>
      </Layout>
    );
  }
}
