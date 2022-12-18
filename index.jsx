import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProfileContext } from './src/context';
import { render } from 'react-dom';
import { Navigation } from './src/HOC_Pages/Navigation.jsx';
import { CONSTANTS } from './src/data/constants';
import { ProfileProvider } from './src/context';
import './src/styles/style.css';
import './src/styles/scss.scss';
import 'antd/dist/antd.css';

const App = () => {

  return (
  <Switch>
    <Route path='/' component={Navigation} />
  </Switch>
)}

render(
  <ProfileProvider>
    <Router>
      <App />
    </Router>
  </ProfileProvider>
  , document.querySelector( '#root' )
);






