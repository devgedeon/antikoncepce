import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/day2.png";
import leg1 from "../../../images/leg1.jpg";
import leg2 from "../../../images/leg2.jpg";
import leg3 from "../../../images/leg3.jpg";
import leg4 from "../../../images/leg4.jpg";
import leg5 from "../../../images/leg5.jpg";
import leg6 from "../../../images/leg6.jpg";

export default class DayAngiotenzin extends Component {
  render() {
    return (
      <Layout
        cls="blueNadpis"
        nadpis="Daylette - Systém renin-angiotenzin-aldosteron"
        zpet="/daylette-drospirenon"
        zpetText="Zpět"
        pokracovat="/daylette-symptomy"
        pokracovatText="Pokračovat"
        progress="c75"
      >
        <div className="col-md-3">
          <img src={leg1} alt="leg1" />
          <p className="margin-minus">
            <strong>Sekrece orgánem</strong>
          </p>
          <img src={leg2} alt="leg1" />
          <p style={{ marginTop: "-10px" }}>
            <strong>Inhibiční signál</strong>
          </p>
          <img src={leg3} alt="leg1" />
          <p className="margin-minus">
            <strong>Aktivní transport</strong>
          </p>
          <img src={leg4} alt="leg1" />
          <p className="margin-minus">
            <strong>Stimulační signál</strong>
          </p>
          <img src={leg5} alt="leg1" />
          <p className="margin-minus">
            <strong>Reakce</strong>
          </p>
          <img src={leg6} alt="leg1" />
          <p className="margin-minus">
            <strong>Pasivní transport</strong>
          </p>
        </div>
        <div className="col-md-9">
          <img
            style={{ transform: "rotate(-1deg)" }}
            width="570"
            className="max-width"
            src={img}
            alt="nejaky obrazek"
          />
        </div>
      </Layout>
    );
  }
}
