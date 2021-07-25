import { CONSTANTS } from './src/data/constants';
import React from 'react';
import { render } from 'react-dom';
const { BASE_URL } = CONSTANTS();
const axios = require( 'axios' );
import './src/styles/style.css';
import './src/styles/scss.scss';

const root = document.querySelector( '#root' );
const newTag = document.querySelector( '.new' );
const Element = ( props ) => <div>{props.text}</div>;
render( <Element text="new text" />, newTag );
root.innerText = CONSTANTS().BASE_URL;
axios.get( BASE_URL )
  .then( function ( response ) {
    console.log( response.data );
    root.innerHTML = JSON.stringify( response.data );
  } )
  .catch( function ( error ) {
    console.log( error );
  } )

const asyncFunction = async ( url ) => {
  const result = await axios.get( url );
  console.log( ">>", result );
}

asyncFunction( BASE_URL );

