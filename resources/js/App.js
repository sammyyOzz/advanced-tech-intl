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


function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
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
