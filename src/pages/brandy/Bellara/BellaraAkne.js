import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/belara_patogeneze.jpg";
export default class BellaraAkne extends Component {
  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Belara - problematika aknózní pleti"
        zpet="/belara-antiandrogenni-pusobeni-cma"
        zpetText="Zpět"
        pokracovat="/belara-akne-nad-ramec-antikoncepcnich-ucinku"
        pokracovatText="Pokračovat"
        progress="c100"
      >
        <div className="col-md-1 col-lg-1" />
        <div className="col-md-3 col-lg-3" style={{ color: "red" }}>
          <br />
          Prevalence:
          <br />
          <br />
          Příčina:
          <br />
          <br />
          <br />
          Spouštěcí
          <br />
          mechanismus:
        </div>
        <div className="col-md-8 col-lg-8">
          <br />
          80-90 % všech dívek a mladých žen
          <br />
          <br />
          hyperseborea a hyperkeratóza mazových žláz,
          <br />
          kolonizace propionibakteriemi
          <br />
          <br />
          zvýšena hladina vysoce aktivního dihydrotestosteronu <br />
          (DHT) a zvýšená koncentrace androgenních receptorů
        </div>
        <div className="col">
          <h5 className="bellNadpis">Patogeneze problematické pleti</h5>
          <img className="max-width mx-auto" src={img} alt="img" />
        </div>
      </Layout>
    );
  }
}
