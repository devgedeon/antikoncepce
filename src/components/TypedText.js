import React, { Component } from "react";

class TypedText extends Component {
  componentDidMount() {
    this.type = document.getElementById("typniTo");
    this.nejakafunkce(this.type, this.type.innerHTML);
  }
  nejakafunkce = (el, txt) => {
    el.innerHTML = "";
    let i = 0;
    function typer() {
      if (i < txt.length) {
        el.innerHTML += txt.charAt(i);
        i++;
      }
      setTimeout(typer, 50);
    }
    typer();
  };

  render() {
    return (
      <p className="p-text">
        <strong id="typniTo">{this.props.hlavnitext}</strong>
        <br />
        <span className="rg">{this.props.firma}</span>
        <br />
        <span className="oc">{this.props.volnytext}</span>
      </p>
    );
  }
}

export default TypedText;
