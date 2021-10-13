import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Auth from "./components/Main/Auth";
import Blogs from "./components/Main/Blogs";
import Detail from "./components/Main/Detail";
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
          <Route exact path="/blogs/:id" component={Detail} />
          <Route exact path="/auth" component={Auth} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
