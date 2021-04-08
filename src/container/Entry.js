import React from "react";
import StaffManagement from "../pages/StaffManagement/StaffManagement";
import Dashboard from "../pages/Dashboard/Dashboard";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as c from "../utils/constants/constants";

class Entry extends React.Component {

  render() {
   

    return (
      <BrowserRouter>
        <div >
          <Switch>
          <Route
               exact
               path={c.PAGE_URLS[c.PAGE_STAFF]}
               render={(props) => (
            
                 <StaffManagement
                 {...props}  
               />
               )}
               />

          <Route
               exact
               path={c.PAGE_URLS[c.PAGE_DASHBOARD]}
               render={(props) => (
            
                 <Dashboard
                 {...props}  
               />
               )}
               />

            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default Entry;
