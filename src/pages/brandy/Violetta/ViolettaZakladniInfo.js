import React, { Component } from "react";
import Layout from "../../../components/Layout";
import Odr from "../../../images/odrazka_violetta.jpg";
import vio from "../../../images/violetta_grafika.jpg";
class ViolettaZakladniInfo extends Component {
  render() {
    return (
      <Layout
        cls="purpleNadpis"
        nadpis="Violetta - základní informace"
        zpet="/violetta"
        zpetText="Zpět"
        pokracovat="/violetta-peroralni-antikoncepce"
        pokracovatText="Pokračovat"
        progress="c50"
      >
        <div className="col-md-6 col-lg-6 calign">
          <p className="lindypurple">
            Příznaky spojené s klesající funkcí vaječníků:
          </p>
        </div>
        <div className="col-md-6 col-lg-6 calign">
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Dysfunkční krvácení
            </li>
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Vegetativní klimakterické potíže (návaly horka, noční
              pocení)
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Pánevní bolesti
            </li>
          </ul>
        </div>
        <div className="col-md-12 col-lg-12">
          <hr className="redDivider" />
        </div>
        <div className="col-md-6 col-lg-6 calign">
          <img className="max-width" src={vio} alt="Violetta grafika" />
        </div>
        <div className="col-md-6 col-lg-6 calign">
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Zajišťuje pravidelný cyklus (moderní režim 24+4)
            </li>
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Zmírňuje první příznaky klimakteria
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Preventivně zabraňuje rozvoji osteoporózy
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}
export default ViolettaZakladniInfo;
