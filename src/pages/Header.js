import React from "react";
import hlavniLogo from "../images/logo_hlavni.jpg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <div>
          <Link to="/">
            <img
              src={hlavniLogo}
              style={{
                width: "180px",
                display: "block",
                margin: "0 auto",
                borderBottom: "2px solid #ea5c68"
              }}
              alt="Hlavní Logo"
            />
          </Link>
        </div>
      </div>
      <div className="products col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div className="container fluid h-100">
          <div className="row align-items-center h-100 gradientbg">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-auto headlink">
              <Link to="/belara"> Belara</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-auto headlink">
              <Link to="/mistra">Mistra</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-auto headlink">
              <Link to="/daylette">Daylette</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-auto headlink">
              <Link to="/violetta">Violetta</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-auto headlink">
              <Link to="/lindynette">Lindynette</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-auto headlink">
              <Link to="/maitalon">Maitalon</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
