import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Users } from './src/HOC_Pages/Users.jsx';
import './src/styles/style.css';
import './src/styles/scss.scss';
import 'antd/dist/antd.css';


const App = () => (
  <BrowserRouter>
    <Users />
  </BrowserRouter>
)

render( <App />, document.querySelector( '#root' ) );






