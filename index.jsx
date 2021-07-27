import React from 'react';
import { render } from 'react-dom';
import { Navigation } from './src/HOC_Pages/Navigation.jsx';
import './src/styles/style.css';
import './src/styles/scss.scss';
import 'antd/dist/antd.css';


const App = () => (
  <Navigation />
)

render(<App />, document.querySelector('#root'));






