import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Switch>
          {/* SearchPage - ( the results page ) */}
          <Route path="/search">
            <SearchPage />
          </Route>
          {/*Home - ( the one with the search) */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
