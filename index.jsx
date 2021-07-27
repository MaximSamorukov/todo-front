import React from 'react';
import {
  BrowserRouter as Router,
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
  <Router>
    <Navigation />
  </Router>
)

render(
  <App />
  , document.querySelector('#root')
);






