import { combineReducers } from 'redux';
import Userreducer from './User/User';



const rootReducer = combineReducers({    
    Users: Userreducer,
});

export default rootReducer;
