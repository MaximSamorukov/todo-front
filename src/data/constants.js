export function CONSTANTS ( mode ) {
  if ( mode === 'development' ) {
    return ( {
      BASE_URL: 'http://localhost:3000/',
    } );
  }
  return ( {
    BASE_URL: 'https://apptodoback.herokuapp.com/',
  } );
};
