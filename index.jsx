import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { render } from 'react-dom';
import { Navigation } from './src/HOC_Pages/Navigation.jsx';
import { CONSTANTS } from './src/data/constants';
import './src/styles/style.css';
import './src/styles/scss.scss';
import 'antd/dist/antd.css';

const App = () => (
  <Switch>
    <Route path='/' component={Navigation} />
  </Switch>
)

render(
  <Router>
    <App />
  </Router>
  , document.querySelector( '#root' )
);






