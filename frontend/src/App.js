import React from 'react';
import Layout from './HighOrderComponents/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import SignUp from './containers/SignUp';
import Signin from './containers/Signin';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/listings/:id' component={ListingDetail} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>

  )
};

export default App

