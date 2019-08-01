import React, { Component } from "react";
import Layout from "../../../components/Layout";
class ViolettaPeroral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isToggleOn2: true,
      isToggleOn3: true,
      isToggleOn4: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  handleClick2() {
    this.setState(state => ({
      isToggleOn2: !state.isToggleOn2
    }));
  }
  handleClick3() {
    this.setState(state => ({
      isToggleOn3: !state.isToggleOn3
    }));
  }
  handleClick4() {
    this.setState(state => ({
      isToggleOn4: !state.isToggleOn4
    }));
  }

  render() {
    return (
      <Layout
        cls="purpleNadpis"
        nadpis="Violetta - perorální kombinovaná antikoncepce"
        zpet="/violetta-zakladni-info"
        zpetText="Zpět"
        progress="c100"
      >
        <div
          className="col-md-6 col-lg-6 violettainfo"
          onClick={this.handleClick}
        >
          <div>
            <p className="lindypurple">
              {this.state.isToggleOn ? "Bezpečnost" : "Příznaky"}
            </p>
            <p>
              {" "}
              <strong>
                {this.state.isToggleOn
                  ? 'Pacientky, které si přeji užívat "co nejnižší" dávků hormonů'
                  : ""}
              </strong>{" "}
            </p>{" "}
            <p>
              {this.state.isToggleOn
                ? "Jejich obavy můžou být racionální i zcela iracionální."
                : "U dospívajících dívek, u nicht se teprve vytváří kostní hmota, je extrémně nízkodávkové antikoncepční přípravky třeba podávat uvážlivě (riziko osteoporózy)"}
            </p>{" "}
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 violettainfo"
          onClick={this.handleClick2}
        >
          <div>
            <p className="lindypurple">
              {this.state.isToggleOn2
                ? "Potíže v pauze bez hormonů"
                : "Příznaky"}
            </p>
            <p>
              <strong>
                {this.state.isToggleOn2
                  ? "Pacientky, které si stěžují na potíže v týdnu bez hormonů"
                  : ""}
              </strong>
            </p>
            <p>
              {this.state.isToggleOn2
                ? "Pacientky s nízkou compliance."
                : "Režim 24+4 vede k menšímu kolísání hladin hormonů během cyklu a snižuje výskyt příznaků ze spádu. Režim 24+4 zabraňuje chybám v užívání."}
            </p>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 violettainfo"
          onClick={this.handleClick3}
        >
          <div>
            <p className="lindypurple">
              {this.state.isToggleOn3
                ? "Příznaky spojené s dávkou EE"
                : "Příznaky"}
            </p>
            <p>
              <strong>
                <p>
                  {this.state.isToggleOn3
                    ? "Pacientky, které si stěžují na vedlejší účinky kombinované hormonální antikoncepce přičítané estrogenům."
                    : "Bolest hlavy, nauzea, bolest prsů, otoky"}
                </p>
              </strong>
            </p>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 violettainfo"
          onClick={this.handleClick4}
        >
          <div>
            <p className="lindypurple">
              {this.state.isToggleOn4
                ? "Klesající funkce vaječníků"
                : "Příznaky"}
            </p>
            <p>
              <strong>
                {this.state.isToggleOn4
                  ? "Pacientky v premenopauze a v perimenopauze."
                  : ""}
              </strong>
            </p>
            <p>
              {this.state.isToggleOn4
                ? "Violetta může zajistit pravidelný cyklus a subjektivní                   spokojenost."
                : "Dysfunkční krvácení, pánevní bolest, vegetativní klimakterické potíže (návaly horka, noční pocení). Horní věková hranice není stanovena."}
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}
export default ViolettaPeroral;
