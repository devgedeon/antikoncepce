import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/dayanti.jpg";

export default class DaySymptomy extends Component {
  render() {
    return (
      <Layout
        cls="blueNadpis"
        nadpis="Daylette - potlačuje symptomy PMS a PMDD"
        zpet="/daylette-renin-angiotenzin-aldosteron"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="col">
          <h5 className="dayNadpis">
            Daylette potlačuje symptomy premenstruačního syndromu (PMS) a
            premenstruační dysforické poruchy (PMDD)
          </h5>
          <img className="max-width mx-auto" src={img} alt="img" />
          <h5 className="dayNadpis">Četnost výskytu v populaci:</h5>

          <table class="table table-dark" style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <th scope="col">Premenstruační symptomy</th>
                <th scope="col">50 - 80 %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">PMS</th>
                <td>22 - 26 %</td>
              </tr>
              <tr>
                <th scope="row">PMDD</th>
                <td>3 - 8 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}
