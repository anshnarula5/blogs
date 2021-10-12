import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Blogs from "./components/Main/Blogs";
import Form from "./components/Main/Form";
import Update from "./components/Main/Update";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/create" component={Form} />
          <Route exact path="/blogs/:id/update" component={Update} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
