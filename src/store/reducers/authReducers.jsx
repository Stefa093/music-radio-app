//Se maneja autenticacion
import { REGISTER, LOGIN, LOGOUT } from '../action/authAction'


const initialState = { access: false };

function auth(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return state;
    case LOGIN:
      return { access: true };
    case LOGOUT:
      return { access: false };

    default:
      return state;
  }
}

export default auth;
