import { CONSTANTS } from './lib/data/constants';
console.log( 'hi' );
console.log( CONSTANTS );
const root = document.querySelector( '#root' );
root.innerText = CONSTANTS().BASE_URL;

