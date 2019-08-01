import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img1 from "../../../images/mistra1.jpg";
import img2 from "../../../images/mistra2.jpg";
import img3 from "../../../images/mistra3.jpg";
import img4 from "../../../images/mistraFull2.jpg";
export default class MistraUcinekNaKuzi extends Component {
  state = {
    class: true,
    class2: true,
    class3: true
  };
  zmenTriduNaKlik = () => {
    this.setState(state => ({
      class: !state.class
    }));
    console.log(this.state.class);
  };
  zmenTriduNaKlik2 = () => {
    this.setState(state => ({
      class2: !state.class2
    }));
  };
  zmenTriduNaKlik3 = () => {
    this.setState(state => ({
      class3: !state.class3
    }));
  };
  render() {
    return (
      <Layout
        cls="yellowNadpis"
        nadpis="Mistra - Účinek na kůži"
        zpet="/mistra-jak-na-dlouhe-cykly"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="col">
          <h4 className="dayNadpis">Vyberte prosím graf ze spodní části</h4>
          <img src={img4} alt="Aha" className="max-width mx-auto" />
        </div>
        <img
          className={this.state.class ? "zmensiOBrazek" : "zvetsiObrazek"}
          onClick={this.zmenTriduNaKlik}
          src={img1}
          alt="someImg"
        />
        <img
          style={{ marginRight: "140px" }}
          className={this.state.class2 ? "zmensiOBrazek2" : "zvetsiObrazek2"}
          onClick={this.zmenTriduNaKlik2}
          src={img2}
          alt="someImg"
        />
        <img
          style={{ marginRight: "290px" }}
          className={this.state.class3 ? "zmensiOBrazek3" : "zvetsiObrazek3"}
          onClick={this.zmenTriduNaKlik3}
          src={img3}
          alt="someImg"
        />
      </Layout>
    );
  }
}
