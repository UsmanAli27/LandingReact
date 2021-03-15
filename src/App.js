import "./App.css";
import Homepage from "./components/homepage";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
