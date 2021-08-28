import { CONSTANTS } from './constants';
const { BASE_URL } = CONSTANTS();
const axios = require( 'axios' );

export const getUsers = async () => {
  try {
    const users = await axios.get( `${BASE_URL}users` );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
};

export const addUser = async () => {
  try {
    const users = await axios.post( `${BASE_URL}users/add`, {
      name: 'Name',
      surname: 'Surname',
      lastname: 'LastName',
      login: `login${Math.random() * 100}`,
      password: 'password',
    } );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
}

export const deleteUser = async ( login ) => {
  try {
    const users = await axios.post( `${BASE_URL}users/delete`, {
      login,
    } );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
}

export const getGoals = async () => {
  try {
    const goals = await axios.get( `${BASE_URL}goals` );
    console.log( goals.data );
    return goals.data;
  } catch ( err ) {
    console.log( err );
  }
};
