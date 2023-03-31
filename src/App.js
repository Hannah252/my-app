import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Page from "./Components/Page";
function App() {



  return (
    <Router>
    <div className="App">
      <Switch>
      
        <Route path="/" exact component={Login} />
        <Route path="/page" exact component={Page} />
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
