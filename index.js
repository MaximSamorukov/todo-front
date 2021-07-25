import { CONSTANTS } from './src/data/constants';
import './src/styles/style.css';

console.log( 'hi' );
console.log( CONSTANTS );
const root = document.querySelector( '#root' );
root.innerText = CONSTANTS().BASE_URL;

