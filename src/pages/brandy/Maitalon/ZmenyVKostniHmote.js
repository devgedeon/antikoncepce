import React, { Component } from "react";
import Layout from "../../../components/Layout";
import obrazek from "../../../images/zmeny_v_hmote.jpg";
export default class ZmenyVKostniHmote extends Component {
  render() {
    return (
      <Layout
        cls="orangeNadpis"
        nadpis="Maitalon - Změny v kostní hmotě během životního cyklu"
        zpet="/antimineralokoidni-aktivita"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="col-md-12 col-lg-12">
          <img
            style={{ zIndex: "48484" }}
            className="uvodniObrazek mx-auto testshadow"
            src={obrazek}
            alt="Změny v kostní hmotě"
          />
        </div>
        <div className="col-md-3 col-lg-3">
          <p>&nbsp;</p>
        </div>
        <div className="col-md-8 col-lg-8">
          <ul className="ulli bold">
            <li>Optimální dávka EE pro mladé</li>
            <li>estrogeny podporují osteoblasty a tvorbu kostí</li>
            <li>
              estrogeny inhibují osteoklasty
              <br />a odbourávání kostí
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}
