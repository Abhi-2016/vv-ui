import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home'
import NewBike from './components/bikes/New'
import ShowBike from './components/bikes/Show'
import NewUser from './components/users/New'
import ShowUser from './components/users/Show'


const Entry = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bikes/new" component={NewBike} />
      <Route path="/users/new" component={NewUser} />
      <Route path="/bikes/:id" component={ShowBike} />
      <Route path="/users/:id" component={ShowUser} />
    </Switch>
  </Router>
);


export default Entry;