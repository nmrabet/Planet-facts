import "./App.css";
import Header from "./components/Header";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Planet from "./components/Planet";
import data from "./data/data.json";

const loadedData = JSON.stringify(data);
const json = JSON.parse(loadedData);

function App() {
  console.log(json);
  return <div>
    <Header />
     {json.map((detail) => <Planet name={detail.name} content={detail.overview.content} source={detail.overview.source} />)}
  </div>;
}

export default App;

// {
//   /* <Router>
//       <Header />
//       <Switch>
//         <Route exact path={"/mercury"} component={Planet}/>
//       </Switch>
//     </Router> */
// }
