import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Timeline from '../pages/Timeline';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/timeline" component={Timeline} />
        </Switch>
    </BrowserRouter>
);

export default Routes;