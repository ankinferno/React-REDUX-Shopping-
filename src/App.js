import React from 'react';
import Homepage from './Components/Container/Homepage.jsx';
import ErrorPage from './Components/Container/Presentational_component/error404';
//import from './Components/Container/Cart_Page.jsx';

import {
  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";

function App() {
  return (
   <Router>
    <Switch>

    <Route exact path="/" component={Homepage}/>
    <Route  component={ErrorPage}/>
    
    </Switch>
   </Router>
  );
}

export default App;