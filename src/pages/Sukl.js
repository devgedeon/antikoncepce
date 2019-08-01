import React, { Component } from "react";
import Lindy from "../images/lind.jpg";
import Bell from "../images/bell.jpg";
import Mist from "../images/mist.jpg";
import Day from "../images/dayl.jpg";
import Mait from "../images/mait.jpg";
import Viot from "../images/viot.jpg";
export default class Sukl extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <img src={Lindy} alt="fds" className="mx-auto max-width" />
          <br />
          <table className="table-sm">
            <tbody>
              <tr>
                <th>SÚKL Kód</th>
                <th>Velikost balení</th>
              </tr>
              <tr>
                <td>0097557</td>
                <td>TBL OBD 3X21</td>
              </tr>
              <tr>
                <td>0203566</td>
                <td>TBL OBD 6X21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-lg-4">
          <img src={Bell} alt="fds" className="mx-auto max-width" />
          <br />
          <table className="table-sm">
            <tbody>
              <tr>
                <th>SÚKL Kód</th>
                <th>Velikost balení</th>
              </tr>
              <tr>
                <td>0180258</td>
                <td>TBL FLM 1X21</td>
              </tr>
              <tr>
                <td>0180259</td>
                <td>TBL FLM 3X21</td>
              </tr>
              <tr>
                <td>0203565</td>
                <td>TBL FLM 6X21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-lg-4">
          <img src={Mist} alt="fds" className="mx-auto max-width" />
          <br />
          <table className="table-sm">
            <tbody>
              <tr>
                <th>SÚKL Kód</th>
                <th>Velikost balení</th>
              </tr>
              <tr>
                <td>0181188</td>
                <td>TBL FLM 1X21</td>
              </tr>
              <tr>
                <td>0181189</td>
                <td>TBL FLM 3X21</td>
              </tr>

              <tr>
                <td>0181190</td>
                <td>TBL FLM 6x21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-lg-4" style={{ marginTop: "15px" }}>
          <img src={Day} alt="fds" className="mx-auto max-width" />
          <br />
          <table className="table-sm">
            <tbody>
              <tr>
                <th>SÚKL Kód</th>
                <th>Velikost balení</th>
              </tr>
              <tr>
                <td>0161049</td>
                <td>TBL FLM 3x28</td>
              </tr>
              <tr>
                <td>0172228</td>
                <td>TBL FLM 6X28</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-lg-4" style={{ marginTop: "15px" }}>
          <img src={Mait} alt="fds" className="mx-auto max-width" />
          <br />
          <table className="table-sm">
            <tbody>
              <tr>
                <th>SÚKL Kód</th>
                <th>Velikost balení</th>
              </tr>
              <tr>
                <td>0152106</td>
                <td>TBL FLM 3X21</td>
              </tr>
              <tr>
                <td>0163982</td>
                <td>TBL FLM 6X21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4 col-lg-4" style={{ marginTop: "15px" }}>
          <img src={Viot} alt="fds" className="mx-auto max-width" />
          <br />
          <table className="table-sm">
            <tbody>
              <tr>
                <th>SÚKL Kód</th>
                <th>Velikost balení</th>
              </tr>
              <tr>
                <td>0160689</td>
                <td>TBL FLM 3X28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
