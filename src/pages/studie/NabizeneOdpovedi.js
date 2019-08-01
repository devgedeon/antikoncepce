import Layout from "../../components/Layout";
import Studie1 from "../../images/studie_nabizene_odpovedi.jpg";

import React, { Component } from "react";

export default class NabizeneOdpovedi extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "orange";
  }
  render() {
    return (
      <Layout
        cls="orangeNadpis"
        nadpis="Kritéria výběru [nabízené odpovědi*]"
        pokracovat="/studie-spontanni-odpovedi"
        pokracovatText="Pokračovat"
        progress="c0"
      >
        <br />
        <img className="uvodniObrazek" src={Studie1} alt="prvni studie" />
        <br />
        <p>
          <i>
            *Procento prvních 3 vybraných (velmi důelžité: 1.,2. a 3. pořadí). n
            = 615
          </i>
        </p>
      </Layout>
    );
  }
}
