import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import RatingPage from './RatingPage';
import MainBackground from "./MainBackground";

export default function Main() {
  return (
    <div>
    <MainBackground />
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/rating-page'>
          < RatingPage />
        </Route>
      </Switch>
    </Router>
    </div>
  )
}
