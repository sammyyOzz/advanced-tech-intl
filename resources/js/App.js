import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';


function App() {
    return (
        <div>
            {/* <Header /> */}
            <Home />
        </div>


    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
