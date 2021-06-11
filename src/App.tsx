import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Planets from "./components/Planets";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path={"/planet"}>
            <Planets />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

