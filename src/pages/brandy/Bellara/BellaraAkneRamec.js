import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/belara_zmirneni.jpg";

export default class BellaraAkneRamec extends Component {
  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Belara - Nad rámec antikoncepčního účinku"
        zpet="/belara-akne"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h5 className="bellNadpis">
            Nad rámec antikoncepčního účinku zmírňuje
            <br /> androgen-dependentní kožní problémy
          </h5>
          <ul>
            <li style={{ color: "red", maxWidth: "90%" }}>
              <span style={{ color: "black" }}>
                Výsledky multicentrické observační neintervenční studie
                (TeeNIS), ve které 7462 vybraných pacientek ve věku {"<="} 20
                let užívalo antikoncepci Belara <sup>&reg;</sup> po dobu 6
                konvenčních cyklů nebo užívalo 6 blistrů v prodloužených
                cyklech.
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-12 col-lg-12 bellara-spcial2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <p>
                  Během sledovaného období užívání antikoncepce Belara
                  <sup>&reg;</sup> došlo ke snížení výskytu kožních problémů.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-mg-12 col-lg-12">
          <img className="mx-auto max-width" src={img} alt="img" />
        </div>
      </Layout>
    );
  }
}
