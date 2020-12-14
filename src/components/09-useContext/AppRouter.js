import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import NavBar from './NavBar';
import OtherHooks from './OtherHooks';
import TodoApp from '../08-useReducer/TodoApp';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className="container">
                    <Switch>
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/other" component={ OtherHooks } />
                        <Route exact path="/todo" component={ TodoApp } />

                        {/* Usualmente poner la ruta / hasta el final */}
                        <Route exact path="/" component={ HomeScreen } />
                        <Redirect to="/" />
                    </Switch>
                </div>

            </div>
        </Router>
    )
}

export default AppRouter
