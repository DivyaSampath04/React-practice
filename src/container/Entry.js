import React from "react";
import StaffManagement from "../pages/StaffManagement/StaffManagement";


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

            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default Entry;
