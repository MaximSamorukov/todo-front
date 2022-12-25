import React from 'react';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProfileContext } from './src/context';
import { render } from 'react-dom';
import { Navigation } from './src/HOC_Pages/Navigation.jsx';
import { CONSTANTS } from './src/data/constants';
import { ProfileProvider } from './src/context';
import './src/styles/style.css';
import './src/styles/scss.scss';
import 'antd/dist/antd.css';

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
    <ProfileProvider>
      <Navigation />
    </ProfileProvider>
    ),
  },
]);

render(
  <RouterProvider router={router} />
  , document.querySelector( '#root' )
);






