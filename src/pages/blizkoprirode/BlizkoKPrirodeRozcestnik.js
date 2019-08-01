import Layout from "../../components/Layout";
import img from "../../images/violetta.jpg";
import mistra from "../../images/mistra.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlizkoKPrirodeRozcestnik extends Component {
  render() {
    return (
      <Layout
        cls="yellowNadpis"
        nadpis="Blízko k přírodě - Violetta a Mistra"
        zpet="/blizko-k-prirode"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Link to="/violetta">
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
                <li>Nejnižší dávka hormonů</li>
                <li>Režim 24+4</li>
                <li>Pro ženy 40+</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <hr className="redDivider" />
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Link to="/mistra">
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
                <li>
                  Silný progestační efekt
                  <br /> na endometrium
                  <br /> = nejvyšší uterotropní index
                </li>
                <li>Dlouhé cykly</li>
                <li>Návrat k plodnosti</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
