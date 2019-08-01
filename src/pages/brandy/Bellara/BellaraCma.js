import React, { Component } from "react";
import Layout from "../../../components/Layout";
import img from "../../../images/belara_antiand.jpg";
export default class BellaraCma extends Component {
  componentDidMount() {
    this.textP = document.getElementById("floatingText");
  }
  handleClick = e => {
    let el = e.target.innerHTML;
    this.textP.style.display = "block";
    this.textP.className = "";
    this.textP.className = "floatingText";
    if (el === "1") {
      console.log("Zmáčkl si jedničku");
      this.textP.innerHTML =
        "CMA inhibuje sekreci androgenů z ovarií a kůry nadledivin.";
    } else if (el === "2") {
      this.textP.innerHTML =
        "CMA se váže zejména na plazmaticý albumin, nikoliv na globulin vázající pohlavní hormony (SHBG). Zvýšení SHBG závislé na estrogenu není antagonizováno CMA. To znamená, že je na SHBG vázáno více volného aktivního testosteronu.";
    } else if (el === "3") {
      this.textP.innerHTML =
        "CMA inhibuje enzym 5a-reduktázu, a proto brání přeměně testosteronu na vysoce aktivní dihydrotestosteron (DHT) v cílových tkáních (mazové žlázy, vlasové folikuly).";
    } else if (el === "4") {
      this.textP.innerHTML =
        "CMA kompetitivně soutěží s androgeny o receptory v mazových žlázách a vlasových folikulech. Působení přirozených androgenů je potlačováno z důvodu obsazenosti androgenních receptorů CMA";
    } else {
      console.log("Nic jsi nezmáčkl");
    }
    this.textP.addEventListener("click", function() {
      this.className = "";
      this.style.display = "none";
    });
  };

  render() {
    return (
      <Layout
        cls="redNadpis"
        nadpis="Bellara - Antiandrogenní působení CMA"
        zpet="/bellara-o-bellare"
        zpetText="Zpět"
        pokracovat="/belara-akne"
        pokracovatText="Pokračovat"
        progress="c50"
      >
        <div className="col-md-12 col-lg-12">
          <h4 className="bellNadpis">
            Antiandrogenní působení CMA prostřednictvím několika mechanismů
          </h4>
          <img className="max-width mx-auto" src={img} alt="mapa" />
        </div>
        <div className="col alignCenter belNum" onClick={this.handleClick}>
          1
        </div>
        <div className="col alignCenter belNum" onClick={this.handleClick}>
          2
        </div>
        <div className="col alignCenter belNum" onClick={this.handleClick}>
          3
        </div>
        <div className="col alignCenter belNum" onClick={this.handleClick}>
          4
        </div>
        <p id="floatingText" className="">
          Tady bude nějaký float text
        </p>
      </Layout>
    );
  }
}
