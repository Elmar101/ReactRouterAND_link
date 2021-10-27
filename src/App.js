import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Colors } from "./components/Color";
import { Abou } from "./components/Abou";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/abou" component={Abou} />
          <Route path="/colors" component={Colors} />
        </Switch>
      </Router>
    </div>
  );
}
