import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/day1.png";
import Odr from "../../../images/odrazka_blue.jpg";

export default class DayDrospirenon extends Component {
  render() {
    return (
      <Layout
        cls="blueNadpis"
        nadpis="Daylette - drospirenon"
        zpet="/daylette"
        zpetText="Zpět"
        pokracovat="/daylette-renin-angiotenzin-aldosteron"
        pokracovatText="Pokračovat"
        progress="c50"
      >
        <div className="col-md-12 align-center">
          <h3 className="dayNadpis">
            Princip antimineralokortikoidního účinku drospirenonu:
          </h3>
        </div>
        <div className="col-md-4 align-middle">
          <br />
          <br />
          <br />
          <br />
          <br />
          <img
            className="max-width align-middle"
            src={img}
            alt="nejaky obrazek"
          />
        </div>

        <div className="col-md-8">
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Antagonista aldosteronu
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Má 5x vyšší vazebnou afinitu k receptorům pro
              aldosteron než samotný aldosteron
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp; Zasahuje do systému RAAS
              (renin-angoitenzin-aldosteron)
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Snižuje retenci Na+ a H<sub>2</sub>O, redukuje edémy a
              příznaky s tím spojené
            </li>
            <li>
              <img src={Odr} alt="odrazka" /> &nbsp;&nbsp; Snižuje zvýšený TK
              (ne však normální TK) při optimální dávce 20 ug ethinylestradiolu
            </li>
            <li>
              <img src={Odr} alt="odrazka" /> &nbsp;&nbsp; Neutralizuje vliv
              estrogenu na retenci vody a tím dále snižuje hmotnost
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}
