import HlavniObrazek from "../images/bg_hlavni.jpg";
import TypedText from "../components/TypedText";
import React, { Component } from "react";

export default class UvodniStranka extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#e62737";
  }
  render() {
    return (
      <div className="col">
        <img
          className="uvodniObrazek"
          src={HlavniObrazek}
          alt="Hlavni Obrazek"
        />

        <TypedText
          hlavnitext="Perorální antikoncepce"
          firma="Gedeon Richter"
          volnytext="Jak zvýšit compliance s OC"
        />
      </div>
    );
  }
}
