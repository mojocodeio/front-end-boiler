import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** components */
import AuthForm from './Auth/AuthForm/AuthForm';
import ProtectedRoute from './Auth/ProtectedRoute/ProtectedRoute';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';

export const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={AuthForm} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <Route component={AuthForm} />
            </Switch>
        </div>
    )
}

export default App;