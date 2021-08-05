import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { render } from 'react-dom';
import { Navigation } from './src/HOC_Pages/Navigation.jsx';
import './src/styles/style.css';
import './src/styles/scss.scss';
import 'antd/dist/antd.css';

const App = () => (
  <Switch>
    <Route exact path="/users" component={Navigation} />
    <Route exact path="/goals" component={Navigation} />
    <Route exact path="/user" component={Navigation} />
    <Route path="/" component={Navigation} />
  </Switch>
)

render(
  <Router>
    <App />
  </Router>
  , document.querySelector( '#root' )
);






