import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';


function App() {
    return (
        <Header />
    )
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
