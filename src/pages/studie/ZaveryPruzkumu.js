import React from "react";
import Layout from "../../components/Layout";

export default function ZaveryPruzkumu() {
  return (
    <Layout
      cls="orangeNadpis"
      nadpis="Závěry průzkumu"
      zpetText="Zpět"
      zpet="/zakladni-a-specificke-potreby"
      progress="c100"
    >
      <br />
      <br />
      <ul className="ulli">
        <li>
          Více než polovina (51%) změn proběhne bez pádného důvodu a
          promyšleného rozhodnutí
        </li>
        <li>
          Vymezení čtyři skupin <strong>základních potřeba</strong> uživatelek
          OC (
          <em>
            účinnost, bezpečnost, reverzibilita, bez zvýšení tělesné hmotnosti
          </em>
          )
        </li>
        <li>
          Zisk čtyř nejdůležitějších <strong>specifických potřeb</strong>{" "}
          (preferencí) pacientek pro výběr OC
        </li>
        <li>
          <strong>Propojením základních a specifických potřeb</strong> lze
          zvýšit compliance uživatelky OC
        </li>
      </ul>
    </Layout>
  );
}
