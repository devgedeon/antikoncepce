import Layout from "../../../components/Layout";
import React, { Component } from "react";
import img from "../../../images/anti.jpg";

export default class AntimineralokoindniAktivita extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "red";
  }
  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Maitalon - Antimineralokoindni aktivita"
        zpet="/maitalon-vyrazny-pokles"
        zpetText="Zpět"
        pokracovat="/zmeny-v-kostni-hmote"
        pokracovatText="Pokračovat"
        progress="c75"
      >
        <div className="col-md-12 col-lg-12">
          <p
            className="orangeIdentity"
            style={{ textAlign: "center", fontWeight: "normal" }}
          >
            <strong>
              Antimineralokortikoidní aktivita - prevence premenstruačního
              syndromu (PMS) a premenstruační dysforické poruchy (PMDD)
            </strong>
          </p>
          <p>
            Kombinovaná hormonální antikoncepce s obsahem DRSP 3mg/EE 0,03 mg, u
            níž jsou klinicky prokázány výrazné účinky v léčbě emocionálních i
            fyzických příznaků spojených s PMS a PMDD.
          </p>
          <img
            className="uvodniObrazek mx-auto testshadow"
            src={img}
            alt="imag"
          />
          <p>
            <br />(
            <em>
              Účinek DRSP 3 mg/EE 0,03 mg na složení těla u mladých žen trpících
              PMS s příznaky retence vody.
            </em>
            )
          </p>
        </div>
      </Layout>
    );
  }
}
