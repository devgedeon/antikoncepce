import React from "react";
import Layout from "../../components/Layout";
import Studie1 from "../../images/zeny_meni.jpg";

export default function MeniPilulky() {
  return (
    <Layout
      cls="orangeNadpis"
      nadpis="Proč ženy mění antikoncepční pilulky?"
      zpetText="Zpět"
      zpet="/studie-spontanni-odpovedi"
      pokracovatText="Pokračovat"
      pokracovat="/zakladni-a-specificke-potreby"
      progress="c50"
    >
      <br />
      <br />
      <img className="uvodniObrazek" src={Studie1} alt="prvni studie" />
      <br />
    </Layout>
  );
}
