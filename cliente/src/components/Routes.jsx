import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Clientes from '../pages/clientes/clientePrenda';
import Prendas from '../pages/prendas/prendas';
import Talleres from '../pages/talleres/tallerPrenda';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/clientes" exact component={Clientes}/>
            <Route path="/prendas" exact component={Prendas}/>
            <Route path="/talleres" exact component={Talleres}/>
        </Switch>
    );
};

export default Routes;
