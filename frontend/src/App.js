import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Layout from './HighOrderComponents/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import SignUp from './containers/SignUp';
import Signin from './containers/Signin';
import NotFound from './components/NotFound';
import Contact from './containers/Contact';

import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/listings' component={Listings} />
            <Route exact path='/listings/:id' component={ListingDetail} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={Signin} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>

  )
};

export default App

