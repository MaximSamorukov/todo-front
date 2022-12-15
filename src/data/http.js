import { CONSTANTS } from './constants';
const { BASE_URL } = CONSTANTS(process.env.NODE_ENV);
const axios = require( 'axios' );
export const getUsers = async () => {
  try {
    const users = await axios.get( `${BASE_URL}users` );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
};

export const addUser = async ( user ) => {
  const { name, surname, lastname, login, password, role, birthday } = user;
  try {
    const users = await axios.post( `${BASE_URL}users/add`, {
      name,
      surname,
      lastname,
      login,
      password,
      role,
      birthday: birthday.toString(),
    } );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
};

export const deleteUser = async ( login ) => {
  try {
    const users = await axios.post( `${BASE_URL}users/delete`, {
      login,
    } );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
};

export const editUserFunction = async ( user ) => {
  const { name, surname, lastname, login, password, role, birthday } = user;
  try {
    const users = await axios.post( `${BASE_URL}users/edit`, {
      name,
      surname,
      lastname,
      login,
      password,
      role,
      birthday: birthday.toString(),
    } );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
};

export const getGoals = async () => {
  try {
    const goals = await axios.get( `${BASE_URL}goals` );
    console.log( goals.data );
    return goals.data;
  } catch ( err ) {
    console.log( err );
  }
};
