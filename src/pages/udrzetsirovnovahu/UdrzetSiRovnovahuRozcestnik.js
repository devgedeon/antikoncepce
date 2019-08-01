import React from "react";
import Layout from "../../components/Layout";
import img from "../../images/lindynette.jpg";
import mistra from "../../images/maitalon.jpg";
import { Link } from "react-router-dom";

export default function UdrzetSiRovnovahuRozcestnik() {
  return (
    <Layout
      cls="orangeNadpis"
      nadpis="Udržet si rovnováhu - Lindynette 20 a Maitalon"
      zpet="/udrzet-si-rovnovahu"
      zpetText="Zpět"
      progress="c100"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <Link to="/lindynette">
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
              <li>Moderní,kvalitní a ověřená</li>
              <li>Dlouhé cykly</li>
              <li>Stabilní hmotnost</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <hr className="redDivider" />
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <Link to="/maitalon">
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
              <li>
                Premenstruační <br /> symptomy, PMS, PMDD
              </li>
              <li>Podpora růstu kostní hmoty</li>
              <li>Stabilní hmotnost</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
