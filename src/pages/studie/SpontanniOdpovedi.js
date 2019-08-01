import React from "react";
import Layout from "../../components/Layout";
import Studie1 from "../../images/studie_spontanni_odpovedi.jpg";

export default function SpontanniOdpovedi() {
  return (
    <Layout
      cls="orangeNadpis"
      nadpis="Kritéria výběru [sponátnní odpovědi*]"
      zpetText="Zpět"
      zpet="/studie-nabizene-odpovedi"
      pokracovatText="Pokračovat"
      pokracovat="/studie-proc-zeny-meni-antikoncepcni-pilulky"
      progress="c25"
    >
      <br />
      <br />
      <img className="uvodniObrazek" src={Studie1} alt="prvni studie" />
      <br />
      <p>n = 615</p>
    </Layout>
  );
}
