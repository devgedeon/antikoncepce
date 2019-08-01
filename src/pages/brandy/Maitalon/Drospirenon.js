import React from "react";
import Layout from "../../../components/Layout";
import MistraLogo from "../../../images/maitalon_cap.png";
import MistraLogo2 from "../../../images/maitalon_cap2.png";
export default function Drospirenon() {
  return (
    <Layout
      cls="orangeNadpis"
      nadpis="Maitalon - Drospirenon"
      zpet="/maitalon"
      zpetText="Zpět"
      pokracovat="/maitalon-vyrazny-pokles"
      pokracovatText="Pokračovat"
      progress="c25"
    >
      <div className="col-md-6 col-lg-6">
        <img className="uvodniObrazek mx-auto" src={MistraLogo} alt="oblicej" />
      </div>

      <div className="col-md-6 col-lg-6">
        <img
          className="uvodniObrazek mx-auto"
          src={MistraLogo2}
          alt="oblicej"
        />
      </div>
    </Layout>
  );
}
