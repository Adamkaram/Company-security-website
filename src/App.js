import React, { useState , useEffect} from 'react';

import ReactGA from 'react-ga';
import routes from './Routes/routes'
import FancyRoute from './Components/tools/FancyRoute'
import Navbar from "./Components/Navbar/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
  
function App() {
    useEffect(() => {
        ReactGA.initialize(process.env.GA_TRACKING_ID);
        // To Report Page View 
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, [])
      

  return (
      <div className="App">
          <Router>
           <Navbar />
               <Switch>
                {routes.map((route, i) =>
                    <FancyRoute key={i} {...route} />
                )}
                </Switch>
         </Router>
    </div>
  );
}

export default App;
