import Layout from "../../components/Layout";
import img from "../../images/oblicej_green.jpg";
import Odr from "../../images/odrazka_green.jpg";
import React, { Component } from "react";

export default class ProblemySCyklem extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#0aaea5";
  }

  render() {
    return (
      <Layout
        cls="greenNadpis"
        nadpis="Problémy s cyklem"
        pokracovat="/problemy-s-cyklem-rozcestnik-daylette-mistra"
        pokracovatText="Pokračovat"
        progress="c0"
      >
        <div className="col-md-6 col-lg-6">
          <br />
          <br />
          <ul className="ulli bold no-list">
            <li>
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Vyřešit problémy s cyklem
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Regulovat délku
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Zmírnit výkyvy nálady
            </li>
            <li>
              {" "}
              <img src={Odr} alt="odrazka" />
              &nbsp;&nbsp;Zmírnit příznaky PMS
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-6">
          <img className="uvodniObrazek" src={img} alt="oblicej" />
        </div>
      </Layout>
    );
  }
}
