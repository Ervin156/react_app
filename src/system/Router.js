import React from "react";
import { Switch, Route } from "react-router-dom";

import Favorites from "../components/pages/Favorites";
import Photos from "../components/pages/Photos";

function Router(props) {

  return (
    <Switch>
      <Route path="/" exact component={Photos}/>
      <Route path="/favorites" component={Favorites}/>
    </Switch>
  );

}

export default Router;
