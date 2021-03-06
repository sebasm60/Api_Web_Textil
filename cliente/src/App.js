import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>     
      </div>
    </Router>
  );
};

export default App;
