import React from "react";
import Layout from "../../components/Layout";
import img from "../../images/daylette.jpg";
import mistra from "../../images/mistra.jpg";
import { Link } from "react-router-dom";

export default function ProblemySCyklemRozcestnik() {
  return (
    <Layout
      cls="greenNadpis"
      nadpis="Problémy s cyklem - Daylette a Mistra"
      zpet="/problemy-s-cyklem"
      zpetText="Zpět"
      progress="c100"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <Link to="/daylette">
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
              <li>
                Zmírnění
                <br /> premenstruačních
                <br />
                symptomů, PMS, PMDD
              </li>
              <li>
                Zkracuje dobu bez
                <br /> hormonů v režimu 24+4
              </li>
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
              <li>Dysmenorea</li>
              <li>Progestační účinek na endometrium</li>
              <li>Slabší, kratší a méně bolestivá menstruace</li>
              <li>Dlouhé cykly</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
