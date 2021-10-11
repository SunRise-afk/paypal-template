import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Home from './pages/home';
import ScriptImplementation from './pages/implementation-script';
import LibraryImplementation from './pages/implementation-library';

import './App.css';

function App () {
    return <Router>
        <div className="App">
            <div className="navigation-container">
                <Link className="navigation-link" to="/script_implementation">
                    Script variant
                </Link>
                <Link className="navigation-link" to="/library_implementation">
                    Library variant
                </Link>
            </div>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/script_implementation" component={ScriptImplementation} />
                <Route path="/library_implementation" component={LibraryImplementation} />
                <Redirect to="home" />
            </Switch>
            <div className="footer-container">
                <Link className="navigation-link" to="/home">
                    Go Home
                </Link>
            </div>
        </div>
    </Router>;
}

export default App;
