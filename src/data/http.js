import { json } from 'react-router-dom';
import CryptoJS from 'crypto-js';
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

export const getUser = async (id) => {
  try {
    const users = await axios.get( `${BASE_URL}users/${id}` );
    return users.data;
  } catch ( err ) {
    console.log( err );
  }
};

export const addUser = ( user ) => {
  const { name, surname, lastname, login, password, role, birthday, salt } = user;
    return axios.post( `${BASE_URL}users/add`, {
      name,
      surname,
      lastname,
      login,
      password,
      role,
      birthday: birthday.toString(),
    } ).
    then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw new Error(JSON.stringify(err.response.data));
    })
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
    return goals.data;
  } catch ( err ) {
    console.log( err );
  }
};

export const login = (data) => {
  try {
    const { password, login } = data;
    const secret = CryptoJS.AES.encrypt(password, login).toString();
    const response = axios.post( `${BASE_URL}login`, {
      password: secret,
      login
    });
    return response;
  } catch ( err ) {
    throw new Error(err.message);
  }
};
