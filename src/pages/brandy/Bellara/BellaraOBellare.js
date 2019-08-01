import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/belara_trans.png";

export default class BellaraOBellare extends Component {
  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Belara je dobře tolerovaná hormonální anikoncepce"
        zpet="/belara"
        zpetText="Zpět"
        pokracovat="/belara-antiandrogenni-pusobeni-cma"
        pokracovatText="Pokračovat"
        progress="c25"
      >
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          <h4 className="bellNadpis">
            Dobře tolerovaná hormonální antikoncepce
            <br /> - velmi nízká incidence VTE
          </h4>
          <ul>
            <li style={{ color: "red", maxWidth: "90%" }}>
              <span style={{ color: "black" }}>
                Výsledek 6 postmarketingových sledování, ve kterých užívalo
                antikoncepci Bellara<sup>&reg;</sup> <br />
                (0,03 mg ethinylestradiol/2 mg chlormadinonacetát) 62 218
                pacientek po dobu 4-12 cyklů (325 937,5)
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          &nbsp;
          <br />
        </div>
        <div className="col bellara-spcial">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <p className="padd">
                  {" "}
                  Po dobu 325 937 cyklů užívání antikoncepce Belara
                  <sup>&reg;</sup> byla pozorována velmi nízká incidence VTE,{" "}
                  <strong>pouze</strong> 2,4/10 000 pacientoroků.
                </p>
              </div>
              <div className="col-md-6 col-lg-6">
                <img width="200" src={img} alt="imig" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
