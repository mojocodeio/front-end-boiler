import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** components */
import ProtectedRoute from './Auth/ProtectedRoute/ProtectedRoute';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';

export const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Header} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <Route component={Dashboard} />
            </Switch>
        </div>
    )
}

export default App;