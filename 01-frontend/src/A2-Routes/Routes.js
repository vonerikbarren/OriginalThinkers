// [ I.A. Imports: React ] -> -=-=-=-=-=-=-=-=-=-=-=-=|
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import Theme from '../D0-Assets/D00-UI/D000-Theme/Theme';



// [ II.A. - functional component ] -> -=-=-=-=-=-=-=-=-=-=-=-=
import Home from "../B1-Views/B1-0-Home/Home";
import About from "../B1-Views/B1-1-About/About";
import Contact from "../B1-Views/B1-2-Contact/Contact";
import BlogHome from "../B1-Views/B1-3-Blog/B13-0-BlogHome/BlogHome";
import BlogSample from "../B1-Views/B1-3-Blog/B13-1-BlogSample/BlogSample";

// [ II.B. - functional component ] -> -=-=-=-=-=-=-=-=-=-=-=-=
export default function Routes() {

  return (

    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/BlogHome" component={BlogHome} />
          <Route exact path="/BlogSample" component={BlogSample} />

        </Switch>
      </Router>
    </ThemeProvider>

  )
}