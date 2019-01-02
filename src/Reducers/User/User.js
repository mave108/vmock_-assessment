import {  USERS_LIST } from '../../Actions/Types';
const Userreducer = (state = {}, action) => {
    switch(action.type) {
        case USERS_LIST:
        return { ...state, Users: action.payload };                       
        default:
          return state;
      }
}
export default Userreducer;