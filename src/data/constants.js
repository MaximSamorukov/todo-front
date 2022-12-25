export function CONSTANTS ( mode ) {
  if ( mode === 'development' ) {
    return ( {
      BASE_URL: 'http://localhost:3000/' //'https://todo-app-back-pise.onrender.com/', //'http://localhost:3000/',
    } );
  }
  return ( {
    BASE_URL: 'https://todo-app-back-pise.onrender.com/',
  } );
};
