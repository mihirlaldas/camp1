import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import OnlineCourses from "./components/onlineCourses";
import NoMatch from "./components/NoMatch";
export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/courses">
          <OnlineCourses />
        </Route>
        <Route path="">
          <NoMatch.jsx />
        </Route>
      </Switch>
    </div>
  );
}
