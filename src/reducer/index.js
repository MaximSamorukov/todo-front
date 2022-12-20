
const TYPES = {
   NAME: 'name',
   SURNAME: 'surname',
   LASTNAME: 'lastname',
   PHONE: 'phone',
   EMAIL: 'email',
   ROLE: 'role',
   BIRTHDAY: 'birthday',
   LOGIN: 'login',
   PASSWORD: 'password',
   PASSWORD_1: 'password_1',
   DELETE: 'deleteState',
}

export const initUser = {
   birthday: '',
   email: '',
   lastname: '',
   login: '',
   name: '',
   password: '',
   password_1: '',
   phone: '',
   surname: '',
   role: 'user',
}

export const userReducer = (state, { type, payload }) => {
   switch (type) {
      case TYPES.NAME:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.SURNAME:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.LASTNAME:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.PHONE:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.EMAIL:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.ROLE:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.BIRTHDAY:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.LOGIN:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.PASSWORD:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.PASSWORD_1:
         return {
            ...state,
            ...payload,
         };
         break;
      case TYPES.DELETE:
         return {};
         break;
      default:
         return state;
   }
}