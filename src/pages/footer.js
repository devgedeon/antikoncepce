import Logo from "../images/white_logo.png";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: ""
    };
  }
  render() {
    return (
      <div className='col'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2 col-md-2'>&nbsp;</div>
            <div className='col-md-7 col-md-7'>
              <Link to='/studie-nabizene-odpovedi'>Studie</Link>{" "}
              <strong style={{ color: "white" }}>|</strong>{" "}
              <Link to='/hra-rozcestnik'>Tabulka</Link>
              <strong style={{ color: "white" }}> |</strong>{" "}
              <Link to='/sukl'>SÚKL</Link>
            </div>
            <div className='col-md-3 col-md-3'>
              <Link to='/'>
                <img width='200' src={Logo} alt='Hlavní logo' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default footer;
