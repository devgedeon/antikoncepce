import React from "react";
import Layout from "../../components/Layout";
import Studie1 from "../../images/zadklani_potreby.jpg";

export default function ZakladniPotreby() {
  return (
    <Layout
      cls="orangeNadpis"
      nadpis="Základní a specifické potřeby"
      zpetText="Zpět"
      zpet="/studie-proc-zeny-meni-antikoncepcni-pilulky"
      pokracovatText="Pokračovat"
      pokracovat="/zavery-pruzkumu"
      progress="c75"
    >
      <br />

      <p className="ulli">
        Výzkum ukázal, že všechny ženy očekávají od OC přesně
        <br /> definovaný soubor vlastností, které považujeme za{" "}
        <strong>"základní potreby"</strong>:
      </p>
      <img
        style={{ padding: "30px 0px" }}
        className="uvodniObrazek"
        src={Studie1}
        alt="prvni studie"
      />

      <p className="ulli">
        Kromě základních potřeb ukázaly výsledky závěrečného průzkumu čtyři
        skupiy žen s odlišnými preferencemi. Tyto preference jsme nazvali{" "}
        <strong>"specifické potřeby"</strong>
      </p>
    </Layout>
  );
}
