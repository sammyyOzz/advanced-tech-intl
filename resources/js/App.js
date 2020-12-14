import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import IndustrialAutomation from './components/IndustrialAutomation'
import ScadaAnalytics from './components/ScadaAnalytics';
import EducationResearch from './components/EducationResearch';
import DefenceAerospace from './components/DefenceAerospace';
import UniversalTesting from './components/datasheetPages/UniversalTesting';
import DataAcquisition from './components/datasheetPages/DataAcquisition';
import IndicatorController from './components/datasheetPages/IndicatorController';
import NetworkingEnterprise from './components/datasheetPages/NetworkingEnterprise';
import PrimaryFlow from './components/datasheetPages/PrimaryFlow';
import SensingMeasuring from './components/datasheetPages/SensingMeasuring';
import EnvMonitoring from './components/datasheetPages/EnvMonitoring';
import AeronauticalEngr from './components/datasheetPages/AeronauticalEngr';
import CivilEngr from './components/datasheetPages/CivilEngr';
import MechanicalEngr from './components/datasheetPages/MechanicalEngr';
import SteamRenewEnergy from './components/datasheetPages/SteamRenewEnergy';
import MaterialTesting from './components/datasheetPages/MaterialTesting';
import CorrosionOnline from './components/datasheetPages/CorrosionOnline';
import TestMeasurement from './components/datasheetPages/TestMeasurement';
import DataCenter from './components/datasheetPages/DataCenter';
import CosaEmbedded from './components/datasheetPages/CosaEmbedded';
import RuggedDisplays from './components/datasheetPages/RuggedDisplays';
import MotionSimulation from './components/datasheetPages/MotionSimulation';
import SingleBoard from './components/datasheetPages/SingleBoard';
import ChassisComp from './components/datasheetPages/ChassisComp';


function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/products/defense-aerospace">
                        <DefenceAerospace />
                    </Route>
                    <Route exact path="/products/defense-aerospace/test-measurement">
                        <TestMeasurement />
                    </Route>
                    <Route exact path="/products/defense-aerospace/data-center-management">
                        <DataCenter />
                    </Route>
                    <Route exact path="/products/defense-aerospace/cosa-embedded-systems">
                        <CosaEmbedded />
                    </Route>
                    <Route exact path="/products/defense-aerospace/rugged-displays-panel-pc">
                        <RuggedDisplays />
                    </Route>
                    <Route exact path="/products/defense-aerospace/motion-simulation-systems">
                        <MotionSimulation />
                    </Route>
                    <Route exact path="/products/defense-aerospace/single-board-computers">
                        <SingleBoard />
                    </Route>
                    <Route exact path="/products/defense-aerospace/chassis-components-power-supplies">
                        <ChassisComp />
                    </Route>
                    <Route exact path="/products/education-research">
                        <EducationResearch />
                    </Route>
                    <Route exact path="/products/education-research/aeronautical-engineering">
                        <AeronauticalEngr />
                    </Route>
                    <Route exact path="/products/education-research/mechanical-engineering">
                        <MechanicalEngr />
                    </Route>
                    <Route exact path="/products/education-research/civil-engineering">
                        <CivilEngr />
                    </Route>
                    <Route exact path="/products/education-research/steam-renewable-energy">
                        <SteamRenewEnergy />
                    </Route>
                    <Route exact path="/products/education-research/material-testing-research">
                        <MaterialTesting />
                    </Route>
                    <Route exact path="/products/education-research/corrosion-online">
                        <CorrosionOnline />
                    </Route>
                    <Route exact path="/products/industrial-automation">
                        <IndustrialAutomation />
                    </Route>
                    <Route exact path="/products/industrial-automation/universal-testing-solutions">
                        <UniversalTesting />
                    </Route>
                    <Route exact path="/products/industrial-automation/data-acquisition-and-control-system">
                        <DataAcquisition />
                    </Route>
                    <Route exact path="/products/industrial-automation/indicator-controller">
                        <IndicatorController />
                    </Route>
                    <Route exact path="/products/industrial-automation/primary-flow-calibrator">
                        <PrimaryFlow />
                    </Route>
                    <Route exact path="/products/industrial-automation/sensing-and-measuring-instruments">
                        <SensingMeasuring />
                    </Route>
                    <Route exact path="/products/industrial-automation/environmental-monitoring">
                        <EnvMonitoring />
                    </Route>
                    <Route exact path="/products/industrial-automation/networking-enterprise-solution">
                        <NetworkingEnterprise />
                    </Route>
                    <Route exact path="/products/scada-analytics">
                        <ScadaAnalytics />
                    </Route>
                    <Route exact path="/products">
                        <Products />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>

            </Router>
        </div>


    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
