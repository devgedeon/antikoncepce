import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/mistracykly.jpg";

export default class MistraDlouheCykly extends Component {
  render() {
    return (
      <Layout
        cls="yellowNadpis"
        nadpis="Mistra - Dlouhé cykly"
        zpet="/mistra-atrofizujici-vliv"
        zpetText="Zpět"
        pokracovat="/mistra-ucinek-na-kuzi"
        pokracovatText="Pokračovat"
        progress="c75"
      >
        <div className="col">
          <h4 className="dayNadpis">Jak na dlouhé cykly?</h4>
          <p>
            Dienogest ovlivňuje množství progesteronových receptorů v buňkách
            endometria. Zároveň působí antiproliferačně, proapoptoticky a
            antiangiogenně. To je výhodou v některých patologických situacích
            (např. endometrióza).
          </p>
          <img src={img} alt="Some img" className="max-width mx-auto" />
        </div>
      </Layout>
    );
  }
}
