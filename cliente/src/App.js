import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>     
      </div>
    </Router>
  );
}

export default App;
