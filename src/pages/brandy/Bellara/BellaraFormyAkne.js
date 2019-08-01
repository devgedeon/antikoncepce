import React, { Component } from "react";
import Layout from "../../../components/Layout";

export default class BellaraFormyAkne extends Component {
  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Belara - Nad rámec antikoncepčního účinku"
        zpet="/belara-akne-nad-ramec-antikoncepcnich-ucinku"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="col">
          <h1>Ahoj</h1>
        </div>
      </Layout>
    );
  }
}
