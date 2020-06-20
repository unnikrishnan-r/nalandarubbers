// Importing all the components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AddProducts from "./pages/AddProducts"
import Department from "./pages/Department"

function App() {
  return (
    // React router Component
    <Router>
      <div>
        {/* Used to select which routes to take */}
        <Switch>
          {/* To render a component depending on the URL exact path hit in the browser*/}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={AddProducts} />

          <Route exact path="/department" component={Department} />

        </Switch>
      </div>
    </Router>
  );
}

// Exporting App function
export default App;
