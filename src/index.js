import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import ItemScreen from './ItemScreen';
import TenderScreen from './TenderScreen';
import NotFound from './NotFound';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
  <div>
  <Switch>
  <Route exact path='/' component={Welcome} />
  <Route path='/Welcome' component={Welcome} />
  <Route path='/Item' component={ItemScreen}/>
  <Route path='/Tender' component={TenderScreen}/>
  <Route component={NotFound}/>
  </Switch>
  </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
