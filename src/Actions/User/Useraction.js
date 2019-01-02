import axios from 'axios';
import {USERS_LIST} from '../Types';
import {SEARCH_API_URL} from '../../Config/Config';


export const search = (search_string) =>{
    return (dispatch) => {        
            return axios.get(`${SEARCH_API_URL}${search_string}`).then( response =>{                
                dispatch({ type: USERS_LIST, payload:response.data});                           
            });
    }
}