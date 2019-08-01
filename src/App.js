import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HlavniMenu from "./pages/HlavniMenu";
import Header from "./pages/Header";
import Footer from "./pages/footer";

import UvodniStranka from "./pages/UvodniStranka";
import Hra from "./pages/Hra";
import Sukl from "./pages/Sukl";

/**STUDIE COMPONENTS */
import NabizeneOdpovedi from "./pages/studie/NabizeneOdpovedi";
import SpontanniOdpovedi from "./pages/studie/SpontanniOdpovedi";
import MeniPilulky from "./pages/studie/MeniPilulky";
import ZakladniPotreby from "./pages/studie/ZakladniPotreby";
import ZaveryPruzkumu from "./pages/studie/ZaveryPruzkumu";

/**
 * Zachovat si krásů components
 */
import ZachovatSiKrasu from "./pages/zachovatsikrasu/ZachovatSiKrasu";
import ZachovatSiKrasuRozcestnik from "./pages/zachovatsikrasu/ZachovatSiKrasuRozcestnik";

/**
 * Problémy s cyklem componenty
 */
import ProblemySCyklem from "./pages/problemyscyklem/ProblemySCyklem";
import ProblemySCyklemRozcestnik from "./pages/problemyscyklem/ProblemySCyklemRozcestnik";

/**
 * Blízko k přírodě
 */
import BlizkoKPrirode from "./pages/blizkoprirode/BlizkoKPrirode";
import BlizkoKPrirodeRozcestnik from "./pages/blizkoprirode/BlizkoKPrirodeRozcestnik";

/**
 * Udržet si rovnováhu
 */
import UdrzetSiRovnovahu from "./pages/udrzetsirovnovahu/UdrzetSiRovnovahu";
import UdrzetSiRovnovahuRozcestnik from "./pages/udrzetsirovnovahu/UdrzetSiRovnovahuRozcestnik";

/**
 * Brandy ============
 */
/*
BELLARA
*/
import Bellara from "./pages/brandy/Bellara";
import BellaraOBellare from "./pages/brandy/Bellara/BellaraOBellare";
import BellaraCma from "./pages/brandy/Bellara/BellaraCma";
import BellaraAkne from "./pages/brandy/Bellara/BellaraAkne";
import BellaraAkneRamec from "./pages/brandy/Bellara/BellaraAkneRamec";
/*
MISTRA
*/
import Mistra from "./pages/brandy/Mistra";
import MistraDienogestAVlastnosti from "./pages/brandy/Mistra/MistraDienogestAVlastnosti";
import MistraAtroVliv from "./pages/brandy/Mistra/MistraAtroVliv";
import MistraDlouheCykly from "./pages/brandy/Mistra/MistraDlouheCykly";
import MistraUcinekNaKuzi from "./pages/brandy/Mistra/MistraUcinekNaKuzi";
/*
Daylette
*/
import Daylette from "./pages/brandy/Daylette";
import DayDrospirenon from "./pages/brandy/Daylette/DayDrospirenon";
import DayAngiotenzin from "./pages/brandy/Daylette/DayAngiotenzin";
import DaySymptomy from "./pages/brandy/Daylette/DaySymptomy";

/**
 * Lindynette
 */
import Lindynette from "./pages/brandy/Lindynette";
import LindynetteKvalitni from "./pages/brandy/Lindynette/LindynetteKvalitni";

/**
 * Maitalon
 */
import Maitalon from "./pages/brandy/Maitalon";
import Drospirenon from "./pages/brandy/Maitalon/Drospirenon";
import VyraznyPokles from "./pages/brandy/Maitalon/VyraznyPokles";
import AntimineralokoindniAktivita from "./pages/brandy/Maitalon/AntimineralokoindniAktivita";
import ZmenyVKostniHmote from "./pages/brandy/Maitalon/ZmenyVKostniHmote";

/*
Violleta
*/
import Violetta from "./pages/brandy/Violetta";
import ViolettaZakladniInfo from "./pages/brandy/Violetta/ViolettaZakladniInfo";
import ViolettaPeroral from "./pages/brandy/Violetta/ViolettaPeroral";

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <div className='row zahlavi'>
          <Header />
        </div>
        <div className='row stred'>
          <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
            <HlavniMenu />
          </div>
          <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9'>
            <Switch>
              <Route exact path='/' component={UvodniStranka} />
              <Route
                exact
                path='/studie-nabizene-odpovedi'
                component={NabizeneOdpovedi}
              />
              <Route
                exact
                path='/studie-spontanni-odpovedi'
                component={SpontanniOdpovedi}
              />
              <Route
                exact
                path='/studie-proc-zeny-meni-antikoncepcni-pilulky'
                component={MeniPilulky}
              />

              <Route exact path='/sukl' component={Sukl} />
              <Route exact path='/hra-rozcestnik' component={Hra} />
              <Route
                exact
                path='/zakladni-a-specificke-potreby'
                component={ZakladniPotreby}
              />
              <Route exact path='/zavery-pruzkumu' component={ZaveryPruzkumu} />

              <Route
                exact
                path='/zachovat-si-krasu'
                component={ZachovatSiKrasu}
              />
              <Route
                exact
                path='/zachovat-si-krasu-rozcestnik-bellara-mistra'
                component={ZachovatSiKrasuRozcestnik}
              />
              <Route
                exact
                path='/problemy-s-cyklem'
                component={ProblemySCyklem}
              />
              <Route
                exact
                path='/problemy-s-cyklem-rozcestnik-daylette-mistra'
                component={ProblemySCyklemRozcestnik}
              />
              <Route
                exact
                path='/blizko-k-prirode'
                component={BlizkoKPrirode}
              />
              <Route
                exact
                path='/blizko-k-prirode-rozcestnik-violetta-mistra'
                component={BlizkoKPrirodeRozcestnik}
              />
              <Route
                exact
                path='/udrzet-si-rovnovahu'
                component={UdrzetSiRovnovahu}
              />
              <Route
                exact
                path='/udrzet-si-rovnovahu-rozcestnik-lindynette-maitalon'
                component={UdrzetSiRovnovahuRozcestnik}
              />
              <Route exact path='/mistra' component={Mistra} />
              <Route
                exact
                path='/mistra-diegonest-a-vlastnosti'
                component={MistraDienogestAVlastnosti}
              />
              <Route
                exact
                path='/mistra-atrofizujici-vliv'
                component={MistraAtroVliv}
              />
              <Route
                exact
                path='/mistra-jak-na-dlouhe-cykly'
                component={MistraDlouheCykly}
              />
              <Route
                exact
                path='/mistra-ucinek-na-kuzi'
                component={MistraUcinekNaKuzi}
              />
              <Route exact path='/belara' component={Bellara} />
              <Route
                exact
                path='/bellara-o-bellare'
                component={BellaraOBellare}
              />
              <Route
                exact
                path='/belara-antiandrogenni-pusobeni-cma'
                component={BellaraCma}
              />
              <Route exact path='/belara-akne' component={BellaraAkne} />
              <Route
                exact
                path='/belara-akne-nad-ramec-antikoncepcnich-ucinku'
                component={BellaraAkneRamec}
              />
              <Route exact path='/daylette' component={Daylette} />
              <Route
                exact
                path='/daylette-drospirenon'
                component={DayDrospirenon}
              />
              <Route
                exact
                path='/daylette-renin-angiotenzin-aldosteron'
                component={DayAngiotenzin}
              />
              <Route
                exact
                path='/daylette-renin-angiotenzin-aldosteron'
                component={DayAngiotenzin}
              />
              <Route exact path='/daylette-symptomy' component={DaySymptomy} />
              <Route exact path='/lindynette' component={Lindynette} />
              <Route
                exact
                path='/lindynette-kvalitni'
                component={LindynetteKvalitni}
              />
              <Route exact path='/maitalon' component={Maitalon} />
              <Route
                exact
                path='/maitalon-drospirenon'
                component={Drospirenon}
              />
              <Route
                exact
                path='/maitalon-vyrazny-pokles'
                component={VyraznyPokles}
              />
              <Route
                exact
                path='/antimineralokoidni-aktivita'
                component={AntimineralokoindniAktivita}
              />
              <Route
                exact
                path='/zmeny-v-kostni-hmote'
                component={ZmenyVKostniHmote}
              />
              <Route exact path='/violetta' component={Violetta} />
              <Route
                exact
                path='/violetta-zakladni-info'
                component={ViolettaZakladniInfo}
              />
              <Route
                exact
                path='/violetta-peroralni-antikoncepce'
                component={ViolettaPeroral}
              />
            </Switch>
          </div>
        </div>
        <div className='row align-items-center zapati'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
