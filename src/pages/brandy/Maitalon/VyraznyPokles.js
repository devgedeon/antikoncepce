import Layout from "../../../components/Layout";
import MistraLogo from "../../../images/vyrazny_pokles.png";
import React, { Component } from "react";

export default class VyraznyPokles extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "orange";
  }
  render() {
    return (
      <Layout
        cls="orangeNadpis"
        nadpis="Maitalon - Výrazný pokles všech sledovaných symptomů"
        zpet="/maitalon-drospirenon"
        zpetText="Zpět"
        pokracovat="/antimineralokoidni-aktivita"
        pokracovatText="Pokračovat"
        progress="c50"
      >
        <div className="col-md-12 col-lg-12">
          <p
            className="orangeIdentity nadpisIdentity"
            style={{ textAlign: "center", fontWeight: "normal" }}
          >
            <strong>
              {" "}
              Závažnost symptomů PMS/PMDD <br /> před užíváním a během užívání
              DRSP 3mg/EE 0,03 mg
            </strong>
          </p>
          <img
            className="uvodniObrazek mx-auto testshadow"
            src={MistraLogo}
            alt="oblicej"
          />
          <p>
            (
            <em>
              Před zahájením užívání COC s drospirenonem byly hodnoceny smptomy
              průměrnou hodnotou 4.3-5.1, během užívání COC s drospirenonem
              2.5-3.5 (od 1 - symptom není přítomen, po 10 - extrémně závažný
              symptom).
            </em>
            )
          </p>
        </div>
      </Layout>
    );
  }
}
