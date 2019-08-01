import { Link, withRouter } from "react-router-dom";
import React, { Component } from "react";

class Layout extends Component {
  state = {
    uvodniKlik: 0,
    prejizdim: 0
  };
  componentDidMount() {
    this.jdiZpet = document.getElementById("zpet").getAttribute("href");
    this.jdiVpred = document.getElementById("vpred").getAttribute("href");
    console.log(`ZPET: ${this.jdiZpet}, VPRED: ${this.jdiVpred}`);
  }
  klik = e => {
    this.setState({
      uvodniKlik: e.touches[0].clientX
    });
  };
  prejezd = e => {
    //ahoj
    const state = this.state.uvodniKlik;
    let mover = e.touches[0].clientX;
    console.log("Klik je na: ", state);
    console.log("Tenhle pohyb ", mover);
    if (state + 25 < mover) {
      if (this.jdiZpet !== "") {
        this.props.history.push(this.jdiZpet.toString());
      } else {
      }
    } else if (state - 25 > mover) {
      if (this.jdiVpred !== "") {
        this.props.history.push(this.jdiVpred.toString());
      } else {
        console.log("dál už nemohu pokračovat");
      }
    } else {
      console.log("tohle nedokáži identifikovat");
    }
  };

  render() {
    return (
      <div
        className="container hlavniLayout"
        onTouchStart={this.klik}
        onTouchMove={this.prejezd}
      >
        <div className="row">
          <div className="col">
            <h3 className={this.props.cls}>
              {this.props.nadpis}
              <span className="go-right">
                <Link id="zpet" to={this.props.zpet}>
                  {this.props.zpetText}
                </Link>
                &nbsp;
                <Link id="vpred" to={this.props.pokracovat}>
                  {this.props.pokracovatText}
                </Link>
              </span>
            </h3>
            <span className={"progressBar " + this.props.progress}>&nbsp;</span>
          </div>
        </div>
        <div className="row">{this.props.children}</div>
      </div>
    );
  }
}
export default withRouter(Layout);
