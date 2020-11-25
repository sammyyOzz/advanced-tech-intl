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


function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/products/education-research">
                        <EducationResearch />
                    </Route>
                    <Route exact path="/products/industrial-automation">
                        <IndustrialAutomation />
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
