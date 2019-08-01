import Layout from "../../components/Layout";
import img from "../../images/bellara.jpg";
import mistra from "../../images/mistra.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ZachovatSiKrasuRozcestnik extends Component {
  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Zachovat si krásu - Bellara a Mistra"
        zpet="/zachovat-si-krasu"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Link to="/belara">
                {" "}
                <img
                  width="270"
                  className="uvodniObrazek"
                  src={img}
                  alt="oblicej"
                />
              </Link>
            </div>
            <div className="col-md-6 col-lg-6">
              <br />
              <ul className="ulli bold">
                <li>Antiandrogenní efekt</li>
                <li>Léčba středně těžké formy akné</li>
                <li>
                  Pozitivní vliv na libido
                  <br />a depresivní nálady
                </li>
                <li>Hmotnostní stabilita</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <hr className="redDivider" />
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Link to="/mistra">
                {" "}
                <img
                  width="270"
                  className="uvodniObrazek"
                  src={mistra}
                  alt="oblicej"
                />
              </Link>
            </div>

            <div className="col-md-6 col-lg-6">
              <br />
              <ul className="ulli bold">
                <li>Antiandrogenní efekt</li>
                <li>Léčba středně těžké formy akné</li>
                <li>Hmotnostní stabilita</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
