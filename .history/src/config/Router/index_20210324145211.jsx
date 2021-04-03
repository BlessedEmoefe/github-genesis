import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={} component={} />
          <Route path={} component={} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
