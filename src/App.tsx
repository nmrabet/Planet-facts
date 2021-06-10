import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mercury from "./pages/Mercury";
import Planet from "./components/Planet";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/mercury"} component={Planet}/>
      </Switch>
    </Router>
  );
}

export default App;
