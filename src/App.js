import React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import InternList from "./Components/internList";
import store from "./store";
import { Provider } from "react-redux";


function App() {

  return (
    <Provider store={store}>
    <Routes>
    <div className="App">
      <Switch>
      
        <Route path="/" exact component={Login} />
        <Route path="/list" exact component={InternList} />
        
      
      </Switch>
    </div>
    </Routes>
    </Provider>
  );
}

export default App;
