import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/grafdienogest.jpg";
export default class MistraAtroVliv extends Component {
  render() {
    return (
      <Layout
        cls="yellowNadpis"
        nadpis="Mistra - Atrofizující vliv"
        zpet="/mistra-diegonest-a-vlastnosti"
        zpetText="Zpět"
        pokracovat="/mistra-jak-na-dlouhe-cykly"
        pokracovatText="Pokračovat"
        progress="c50"
      >
        <div className="col">
          <h4 className="dayNadpis">
            Nejvýraznější atrofizující vliv na ednometrium
          </h4>
          <p>
            Dienogest ovlivňuje množství progesteronových receptorů v buňkách
            endometria. Zároveň působí antiproliferačně, proapoptoticky a
            antiangiogenně. To je výhodou v některých patologických situacích
            (např. endometrióza).
          </p>
          <img
            width="470"
            className="max-width mx-auto"
            src={img}
            alt="Mistra Full"
          />
        </div>
      </Layout>
    );
  }
}
