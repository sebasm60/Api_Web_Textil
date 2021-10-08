import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Dashboard from "./components/dashboard";
import Prendas from "./components/prendas/prendas";
import Talleres from "./components/tallerPrenda/tallerPrenda";
import Clientes from "./components/clientePrenda/clientePrenda";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/prendas" component={Prendas} />
          <Route exact path="/talleres" component={Talleres} />
          <Route exact path="/Clientes" component={Clientes} />
        </Switch>     
      </div>
    </Router>
  );
};

export default App;
