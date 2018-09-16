import React from 'react';
import Profile from './child/Profile';
import Email from './child/Email';
import Phone from './child/Phone';

import { Tabs, Tab, Panel } from 'react-bootstrap';
// To use routing functionalities
import { Link, Switch, Route } from 'react-router-dom';

const divStyle = {
  width: '50%',
  margin: '7px 27%'
};

const Contact = (match) => (
  <div>
    <h1>This is From Contact US Page</h1><hr />
    
    <Link to="/contact">Profile</Link> |
    <Link to="/contact/email">Email</Link> |
    <Link to="/contact/phone">Phone Number</Link>

    <Switch>
      <Route exact path='/contact' component={Profile} />
      <Route exact path='/contact/email' component={Email} />
      <Route exact path='/contact/phone' component={Phone} />
    </Switch>
  </div>
)

export default Contact;
