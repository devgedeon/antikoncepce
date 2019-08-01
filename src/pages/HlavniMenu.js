import React from "react";
import { Link } from "react-router-dom";

export default function HlavniMenu() {
  return (
    <div className="menuItself">
      <div className="menuItem red">
        <Link to="/zachovat-si-krasu" className="itemecek">
          Zachovat
          <br /> si krásu
        </Link>
      </div>
      <div className="menuItem green">
        <Link to="/problemy-s-cyklem" className="itemecek">
          Problémy
          <br /> s cyklem
        </Link>
      </div>
      <div className="menuItem yellow">
        <Link to="/blizko-k-prirode" className="itemecek">
          Blízko <br />k přírodě
        </Link>
      </div>
      <div className="menuItem orange">
        <Link to="udrzet-si-rovnovahu" className="itemecek">
          Udržet si <br />
          rovnováhu
        </Link>
      </div>
    </div>
  );
}
