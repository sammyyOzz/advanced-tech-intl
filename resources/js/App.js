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


function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/products/defense-aerospace">
                        <DefenceAerospace />
                    </Route>
                    <Route exact path="/products/education-research">
                        <EducationResearch />
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
