import React from 'react';
import { render } from 'react-dom';
import { Users } from './src/HOC_Pages/Users.jsx';
import './src/styles/style.css';
import './src/styles/scss.scss';
import 'antd/dist/antd.css';


const App = () => (
  <Users />
)

render( <App />, document.querySelector( '#root' ) );






