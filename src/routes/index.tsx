import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Footer from '../components/Footer';
import Working from '../components/Working';

const Routes: React.FunctionComponent = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />

      <Route path="/experience" component={Working} />
      <Route path="/podcasts" component={Working} />
      <Route path="/articles" component={Working} />
    </Switch>
    <Footer />
  </>
);

export default Routes;
