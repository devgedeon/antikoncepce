import React, { Component } from "react";
import Layout from "../../../components/Layout";
import Odr from "../../../images/odrazka_yellow.jpg";
import img from "../../../images/day1.png";

export default class MistraDienogestAVlastnosti extends Component {
  state = {
    class: true
  };
  zmenTriduNaKlik = () => {
    this.setState(state => ({
      class: !state.class
    }));
    console.log(this.state.class);
  };

  render() {
    return (
      <Layout
        cls="yellowNadpis"
        nadpis="Mistra - Dienogest a klinické přednosti"
        zpet="/mistra"
        zpetText="Zpět"
        pokracovat="/mistra-atrofizujici-vliv"
        pokracovatText="Pokračovat"
        progress="c25"
      >
        <div className="col-md-12 col-lg-12">
          <h4 className="dayNadpis">Dienogest</h4>
        </div>
        <div className="col-md-7 col-lg-7">
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Nezvyklá chemická struktura
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Nezvyklé spektrum účinků
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Vysoce selektivní účinek pouze
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; k progesteronovým receptorům
            </li>
          </ul>
        </div>
        <div className="col-md-5 col-lg-5">
          <img className="max-width" src={img} alt="sdf" />
        </div>
        <div className="col-md-12 col-lg-12">
          <h4 className="dayNadpis">Klinické přednosti</h4>
        </div>
        <div className="col-md-6 col-lg-6">
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Účinek na endometrium (eutopické a ektopické)
            </li>
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Antiproliferativní účinek na endometriální buňky
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-6">
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Minimální výskyt průnikového krvácení
            </li>
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Kratší, slabší a méně bolestivá
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; menstruace
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}
