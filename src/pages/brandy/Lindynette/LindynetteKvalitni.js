import Layout from "../../../components/Layout";
import React, { Component } from "react";

export default class LindynetteKvalitni extends Component {
  componentDidMount() {
    const zapatiBarva = document.getElementsByClassName("zapati")[0];
    zapatiBarva.style.backgroundColor = "#d65ec8";
  }
  render() {
    return (
      <Layout
        cls="purpleNadpis"
        nadpis="Lindynette - kvalitní, moderní a ověřená"
        zpet="/lindynette"
        zpetText="Zpět"
        progress="c100"
      >
        <div className="lindykolo col-md-4 col-lg-4">
          <p>kvalitní</p>
        </div>
        <div className="lindykolo col-md-4 col-lg-4">
          <p>moderní</p>
        </div>
        <div className="lindykolo col-md-4 col-lg-4">
          <p>ověřená</p>
        </div>
        <div className="col-md-4 col-lg-4 calign">
          vysoká spolehlivost, <br /> velmi dobrá snášenlivost
        </div>
        <div className="col-md-4 col-lg-4 calign">
          Velmi nízká dávka hormonů, <br /> dobrá stabilita cyklu
        </div>
        <div className="col-md-4 col-lg-4 calign">
          Nejpoužívanější OC <br />v České republice
        </div>
        <div className="col-md-12 col-lg-12 calign">
          <p className="lindypurple">
            Má po opakovaném podání biologický poločas rozpadu gestodenu 20-28
            hodin.
          </p>
        </div>
      </Layout>
    );
  }
}
