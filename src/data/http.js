import { CONSTANTS } from './constants';
const { BASE_URL } = CONSTANTS();
const axios = require( 'axios' );

export const getUsers = async () => {
  try {
    const users = await axios.get( `${BASE_URL}users` );
    console.log( users.data );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
};
